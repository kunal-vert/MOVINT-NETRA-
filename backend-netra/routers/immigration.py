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
    national = None
    
