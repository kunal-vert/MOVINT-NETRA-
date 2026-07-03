from __future__ import annotations
from fastapi import APIRouter, Depends,HTTPException
from sqlalchemy.orm import session
from datetime import datetime, UTC


from database import get_db
from model import ForeignNational, VisitHistory
from schemas import ImmigrationEntryRequest, ImmigrationEntryResponse
from utils.risk import compute_risk



router = APIRouter(prefix="/api/immgration", tags=["immigration"])



@router.post("/entry", response_model=ImmigrationEntryResponse)
def register_entry(
    data: ImmigrationEntryRequest,
    db: session = Depends(get_db)):


    # we have to check whether threats already exists or not 

    existing = (
        db.query(ForeignNational)
        .filter(ForeignNational.passport_id == data.passport_id)
        .first()
    )


    past_visits = []   
    is_returning = False
    past_visits_count = 0
    

    if existing:
        past_visits = existing.visits
        is_returning = True
        past_visits_count = len(past_visits)


        existing.occupation       = data.occupation
        existing.reason_to_visit  = data.reason_to_visit
        existing.visa_type        = data.visa_type
        existing.visa_permit_days = data.visa_permit_days
        existing.visa_expiry      = data.visa_expiry
        existing.criminal_record  = data.criminal_record
        existing.prior_ne_visits  = past_visits_count

        national = existing



    else:
        #Fresh NATIONAL creation as we have already checked in database that he/she wasn't present  

        Visitor = ForeignNational(**data.model_dump())
        db.add(Visitor)
        db.flush() # assigns national.id without full commit

        # here existing are information bout the subject/threat/visitors which would be database whereas the data are incoming info as fresh .Although info would be update if that person already been in NE 

        # keeping in mind we don't have to change the name, passport_id dob .  Though in future we have to work on alias profile through ML/ AI :)..

       