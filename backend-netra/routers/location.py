from __future__ import annotations
from fastapi import APIRoute,Depends, HTTPException
from sqlalchemy.orm import Session



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
