from __future__ import annotations
from fastapi import APIRoute,Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime ,UTC



from database import get_db
from model import ForeignNational as FN, LocationTracking as LT
from schemas import (
    LocationPingRequest, 
    LocationPingResponse,
    NationalTrailResponse,
    TrailPoint
)



Tracker = APIRoute()

@Tracker.post("/ping", response_model = LocationPingResponse)
def location_ping(data: LocationPingRequest, db: Session = Depends(get_db)):
    # first we need to check whether one being register in Immigration at first place .. 

    national = db.query(FN).filter_by(
        passport_id = data.passport_id
    ).first()
     

      
    if not national:
        raise HTTPException(
            status_code=404,
            detail=f"Passport {data.passport_id} not found." f"National must clear Airport Immigration first"
        ) 
    

    if not national.visits:
        raise HTTPException(
            status_code=404,
            detail="No active visit found"
        )
    

    # Latest visit row = current active trip

    current_visit = national.visits[-1]
    
    # Insert Location Ping

    location_label = f"{data.operator_type} | {data.state}"


    ping = LT(
        visit_id      = current_visit.id,
        operator_type = data.operator_type,
        location      = location_label,
        lat           = data.lat,
        lng           = data.lng,
        delay_days    = data.delay_days,
        notes         = data.notes
    )

    db.add(ping)


    if data.notes:
        current_visit.flagged = True


    if data.delay_days > 0:
        current_visit.overstayed =True

    if data.notes:
        now      = datetime.now(UTC).strftime("%Y-%m-%d %H:%M UTC")
        existing = current_visit.issues_during_visit or ""
        current_visit.issues_during_visit = (
            existing +
            f"\n[{data.operator_type} | {data.state} | {now}]: {data.notes}"
        ).strip()


    #Update states_visited on this visit
    # Here JSON list will grow as national move through the NE states

    states = list (current_visit.states_visited or [])
    if data.state not in states:
        states.append(data.state)
        current_visit.states_visited = states

    db.commit()
    db.refresh(ping)

    return LocationPingResponse(
        success    = True,
        message    = f"{data.operator_type} ping logged for "
                     f"{national.full_name} in {data.state}",
        full_name  = national.full_name,
        risk_level = national.risk_level,
        risk_score = national.risk_score,
        ping_id    = ping.id
    )       



@Tracker.get("/trail{passport_id}", response_model = NationalTrailResponse)
    