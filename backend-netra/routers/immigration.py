from __future__ import annotations
from fastapi import APIRouter, Depends,HTTPException
from sqlalchemy.orm import session
from datetime import datetime, UTC


from database import get_db
from model import ForeignNational, VisitHistory
from schemas import ImmigrationEntryRequest, ImmigrationEntryResponse
from utils.risk import compute_risk

