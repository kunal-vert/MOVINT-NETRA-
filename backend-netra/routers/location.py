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