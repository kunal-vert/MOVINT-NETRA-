from __future__ import annotations
from datetime import datetime,date,UTC
from sqlalchemy import(
    Boolean, Date, DateTime, ForeignKey, Integer,String, Text, Float,
)




from sqlalchemy.orm import mapped_column, Mapped, relationship

from database import Base



class ForeignNational(Base):
    __tablename__ = "foreign_nationals"
      # Internal database key
    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
       
    )

    # Information bout him/her:

    # Real-world unique identifier
    passport_id:       Mapped[str]        = mapped_column(String(30),  unique=True, nullable=False, index=True)

    # Personal details
    full_name:         Mapped[str]        = mapped_column(String(100), nullable=False)

    nationality:       Mapped[str]        = mapped_column(String(60),  nullable=False)

    gender:            Mapped[str]        = mapped_column(String(10),  nullable=False, default="Unknown")

    date_of_birth:     Mapped[date]        = mapped_column(Date,        nullable=False)


    occupation:        Mapped[str | None] = mapped_column(String(100), nullable=True)

   
    country_code:      Mapped[str]        = mapped_column(String (4),  nullable=False   )

    #Risk or flag before He/She arrives
    criminal_record:   Mapped[bool]       = mapped_column(Boolean, nullable=False, default=False)

    prior_ne_visits:  Mapped[int]   = mapped_column(Integer, nullable=False, default= 0 )


    # Risk engine / future ML prediction

    risk_score: Mapped[int]  = mapped_column(Integer, default=0)

    risk_level: Mapped[str]  = mapped_column(String(20), default= "LOW")

    risk_reason:Mapped[str | None] = mapped_column(String(255), nullable=True)


    #Visa Information
    visa_permit_days:  Mapped[int]        = mapped_column(Integer,   nullable=False, default=7)

    visa_expiry:   Mapped[date | None] = mapped_column(Date,    nullable=True)

    reason_to_visit:   Mapped[str | None] = mapped_column(String(100), nullable=True)

    #--------- Entry Details(from Entry form)------- In future I have to update the default airport cause it could be other Airports Inside the NE:
    
    # Entry details
    india_entry_point: Mapped[str]        = mapped_column(
        String(200), nullable=False,
        default="Netaji Subhas Chandra Bose International Airport, Kolkata"
    )
     # Audit trail
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default= lambda:datetime.now(UTC)
    )
   


   
    #------Relationships---------------------
class Visit_History:
    __tablename__ = "visit_history"

    visit_id: Mapped[int]   =   mapped_column(Integer, primary_key=True, index=True)
    passport_id:   Mapped[str]        = mapped_column(ForeignKey("foreign_nationals.passport_id"), nullable=False, index=True)
    # ── For chip display on Visit History page -----------------
    visit_year:    Mapped[int | None] = mapped_column(Integer,     nullable=True)   # "2021"
    state:         Mapped[str | None] = mapped_column(String(100), nullable=True)   # "Arunachal Pradesh"

    city:          Mapped[str]        = mapped_column(String(100), nullable=False)
   
    entry_point:   Mapped[str ] = mapped_column(String(200),  default="Netaji Subhas chandra Boss international Airport")
    entry_date:    Mapped[str]        = mapped_column(Date,        nullable=False)
    exit_date:     Mapped[str | None] = mapped_column(Date,        nullable=True)
    duration_days: Mapped[int]        = mapped_column(Integer,     nullable=False)
    visit_number:  Mapped[int]        = mapped_column(Integer,     nullable=False)
    overstayed:    Mapped[bool]       = mapped_column(Boolean,     nullable=False, default=False)
  
    notes:         Mapped[str | None] = mapped_column(Text,        nullable=True)


class MOVEMENT_LOG:
    __tablename__ = "movement_logs" 

    movement_id :Mapped[int] = mapped_column(Integer, primary_key= True)

    passport_id: Mapped[str] =  mapped_column(
        ForeignKey("foreign_nationals.passport_id"),
        nullable=False,
        index=True
    )  

    movement_type: Mapped[str] = mapped_column(String(50), nullable=False)

    location: Mapped[str] = mapped_column(String(200), nullable=False)


    delay_days: Mapped[int] = mapped_column(Integer, default=0)

    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    lat: Mapped[float] = mapped_column(Float)
    lng: Mapped[float] = mapped_column(Float)

    created_at: Mapped[DateTime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )


       

   

    # visit history of nationals means if they ever came to this region then we will have the data bout them







    




    

     