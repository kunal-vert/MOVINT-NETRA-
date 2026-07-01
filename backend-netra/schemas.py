from __future__ import annotations
from pydantic import BaseModel, Field
from datetime import date, datetime
from typing import Optional,Annotated






PassportId    = Annotated[str,  Field(max_length=30,  description="Passport number — unique real-world identifier")]
FullName      = Annotated[str,  Field(max_length=100, description="Full name as printed on passport")]
Nationality   = Annotated[str,  Field(max_length=60,  description="Country of citizenship")]
Gender        = Annotated[str,  Field(max_length=10,  description="Male / Female / Other")]
CountryCode   = Annotated[str,  Field(max_length=4,   description="ISO 3166-1 alpha-2 or alpha-3 code e.g. CHN")]
Occupation    = Annotated[str,  Field(max_length=100, description="Declared profession")]
RiskLevel     = Annotated[str,  Field(max_length=20,  description="LOW / MEDIUM / HIGH")]
RiskReason    = Annotated[str,  Field(max_length=255, description="Pipe-separated reasons from risk engine")]
VisaType      = Annotated[str,  Field(max_length=50,  description="Tourist / Business / Student / Research / Diplomatic / Transit")]
ReasonToVisit = Annotated[str,  Field(max_length=100, description="Declared purpose of visit")]
OperatorType  = Annotated[str,  Field(max_length=50,  description="CHECKPOST / BORDER / HOTEL / TOLL / RAIL")]
Location      = Annotated[str,  Field(max_length=200, description="Human-readable location string e.g. CHECKPOST | Assam")]
Latitude      = Annotated[float, Field(ge=-90,  le=90,  description="Latitude — must be valid geographic coordinate")]
Longitude     = Annotated[float, Field(ge=-180, le=180, description="Longitude — must be valid geographic coordinate")]
PermitDays    = Annotated[int,  Field(ge=1,           description="Visa permit days — minimum 1")]
DelayDays     = Annotated[int,  Field(ge=0,           description="Days delayed at this location — cannot be negative")]
PriorVisits   = Annotated[int,  Field(ge=0,           description="Number of prior NE visits — cannot be negative")]
RiskScore     = Annotated[int,  Field(ge=0,  le=200,  description="Computed risk score — 0 to 200")]




#IMMIGRATION
# POST /api/immigration/entry

class ImmigrationEntryRequest(BaseModel):
    passport_id:      PassportId
    full_name:        FullName
    nationality:      Nationality
    gender:           Gender
    dob:              date                            = Field(description="Date of birth — YYYY-MM-DD from date input")
    country_code:     CountryCode                     = Field(default="N/A")
    occupation:       Optional[Occupation]            = Field(default=None)
    criminal_record:  bool                            = Field(default=False,    description="Pre-arrival criminal flag")
    prior_ne_visits:  PriorVisits                     = Field(default=0)
    visa_type:        VisaType                        = Field(default="e-visa")
    visa_permit_days: PermitDays                      = Field(default=30)
    visa_expiry:      Optional[date]                  = Field(default=None,     description="Visa expiry date — nullable")
    reason_to_visit:  Optional[ReasonToVisit]         = Field(default=None)
    

    




class ImmigrationEntryResponse(BaseModel):
    # Identity
    passport_id:      PassportId
    full_name:        FullName
    nationality:      Nationality
    gender:           Gender
    dob:              date
    country_code:     CountryCode
    occupation:       Optional[Occupation]
    criminal_record:  bool

    # Visa
    visa_type:        VisaType
    visa_permit_days: PermitDays
    visa_expiry:      Optional[date]
    reason_to_visit:  Optional[ReasonToVisit]
    prior_ne_visits:  PriorVisits

    # Risk — written by risk.py, returned to card
    risk_score:  RiskScore
    risk_level:  RiskLevel
    risk_reason: Optional[RiskReason]



     # Trip meta
    is_returning:     bool  = Field(description="True = passport existed in DB before this entry")
    past_visit_count: int   = Field(ge=0, description="Count of VisitHistory rows before this trip")
    current_visit_id: int   = Field(ge=1, description="VisitHistory.id for this trip — Checkpost uses this")
    overstay_flag:    bool  = Field(description="True = any past visit had overstayed=True")

    class Config:
        from_attributes = True