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

        national = ForeignNational(**data.model_dump())
        db.add(national)
        db.flush() # assigns national.id without full commit

        # here existing are information bout the subject/threat/visitors which would be database whereas the data are incoming info as fresh .Although info would be update if that person already been in NE 

        # keeping in mind we don't have to change the name, passport_id dob .  Though in future we have to work on alias profile through ML/ AI :)..



# step 2: Calc the risk lmfaooo .. just do it hahahahahah

    risk = compute_risk(data.model_dump())  

    national.risk_score = risk["risk_score"]
    national.risk_level = risk["risk_level"]
    national.risk_reason = risk["risk_reason"]

    # Step 3: Open new VisitHistory for this trip as we need them while when subject be or travel to checkpost/tollpalaza/ hotel-checkout/Bordercheckpost.. this will link to this visit_id

    visit = VisitHistory(
        foreign_national_id = national.id,
        visit_number = past_visits_count +1,
        entry_date   = datetime.now(UTC)
    )

    db.add(visit)
    db.commit()
    db.refresh(visit)
    db.refresh(national)


    overstay_flag = any(v.overstayed 
                        for v in past_visits)
    

    #Step 4 : Return the update version 

    return ImmigrationEntryResponse(
        passport_id      = national.passport_id,
        full_name        = national.full_name,
        nationality      = national.nationality,
        gender           = national.gender,
        dob              = national.dob,
        country_code     = national.country_code,
        occupation       = national.occupation,
        criminal_record  = national.criminal_record,
        visa_type        = national.visa_type,
        visa_permit_days = national.visa_permit_days,
        visa_expiry      = national.visa_expiry,
        reason_to_visit  = national.reason_to_visit,
        prior_ne_visits  = national.prior_ne_visits,
        risk_score       = national.risk_score,
        risk_level       = national.risk_level,
        risk_reason      = national.risk_reason,
        is_returning     = is_returning,
        past_visit_count = past_visits_count,
        current_visit_id = visit.id,
        overstay_flag    = overstay_flag
    )

