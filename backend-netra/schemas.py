from __future__ import annotations
from pydantic import BaseModel, Field
from datetime import date, datetime
from typing import Optional,Annotated,List
from utils.types import (
    PassportId,
    FullName,
    Nationality,
    Gender,
    CountryCode,
    Occupation,
    RiskLevel,
    RiskReason,
    VisaType,
    ReasonToVisit,
    OperatorType,
    Location,
    Latitude,
    Longitude,
    PermitDays,
    DelayDays,
    PriorVisits,
    RiskScore
)




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



# LOCATION PING
# POST /api/location/ping
class LocationPingRequest(BaseModel):
    # What Checkpost.jsx / Borderguard.jsx POSTs on operator submit.
    # lat/lng are resolved from NE_STATE_COORDS in React —
    # operator picks a state from dropdown, coordinates come automatically.
    
      passport_id:   PassportId
      operator_type: OperatorType
      state:         Annotated[str, Field(max_length=60, description="NE state name from dropdown")]
      lat:           Latitude
      lng:           Longitude
      delay_days:    DelayDays    = Field(default=0)
      notes:         Optional[str] = Field(default=None, description="Free text — no length limit (Text column)")
   


class LocationPingResponse(BaseModel):
     success: bool
     message: str
     full_name: str
     risk_level: RiskLevel
     ping_id: int =  Field(ge=1, description="LocationTracking.id of the ping just inserted")


# GET /api/location/trail/{passport_id}
# ye leaftlet map ke liya hain -- draws markers + polylines

class TrailPoint(BaseModel):
    operator_type: OperatorType
    location:      Location
    lat:           Latitude
    lng:           Longitude
    delay_days:    DelayDays
    timestamp:     datetime      = Field(description="UTC timestamp of the ping")
    notes:         Optional[str] = Field(default=None)

    class Config:
         from_attributes = True


           

         

 
