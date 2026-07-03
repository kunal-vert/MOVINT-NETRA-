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


    past_visits = []    #this is for very high extreme case like he came to india and got register but never went to NE
    is_returning = False
    past_visits_count = 0
    

    if existing:
        past_visits = existing.visits
        is_returning = True
        past_visits_count = len(past_visits)



    else:
        #Fresh NATIONAL creation as we have already checked in database that he/she wasn't present  

        Visitor = ForeignNational(**data.model_dump())
        db.add(Visitor)
        db.flush() # assigns national.id without full commit
          

        


