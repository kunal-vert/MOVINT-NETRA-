from __future__ import annotations
from datetime import datetime,date,UTC
from sqlalchemy import(
    Boolean, Date, DateTime, ForeignKey, Integer,String, JSON,Text, Float
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


    visits: Mapped[list["VisitHistory"]] = relationship(
    back_populates="national",
    cascade="all, delete-orphan"
)
   


   
    #------Relationships---------------------
class VisitHistory(Base):

    __tablename__ = "visit_history"

    id: Mapped[int]   =   mapped_column(Integer, primary_key=True)

    # Link to ForeignNational.id
    foreign_national_id: Mapped[int] = mapped_column(
        ForeignKey("foreign_nationals.id"),
        nullable=False
    )
    

    # Sequential visit number
    visit_number: Mapped[int] = mapped_column(
        Integer,
        default=1
    )


     # Entry / Exit tracking
    entry_date: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC)
    )

    exit_date: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True
    )

     # Flags
    overstayed: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    issues_during_visit:   Mapped[str | None] = mapped_column(Text,  nullable=True)


    # States visited during this trip
    states_visited: Mapped[list[str]] = mapped_column(
        JSON,
        default=list
    )

    national: Mapped["ForeignNational"] = relationship(
    back_populates="visits"
)

movements: Mapped[list["LocationTracking"]] = relationship(
    back_populates="visit",
    cascade="all, delete-orphan"
)
    
  
    


class LocationTracking(Base):
    __tablename__ = "location_tracking" 

    id :Mapped[int] = mapped_column(Integer, primary_key= True)

    visit_id: Mapped[int] =  mapped_column(
        ForeignKey("visit_history.id"),
        nullable=False,
        index=True
    )  

    # CHECKPOST / BORDER / HOTEL / TOLL / RAIL
    operator_type: Mapped[str] = mapped_column(String(50), nullable=False)


    # Human-readable location string (e.g. "Dawki Checkpost, Meghalaya")
    location: Mapped[str] = mapped_column(String(200), nullable=False)


    delay_days: Mapped[int] = mapped_column(Integer, default=0)

    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    lat: Mapped[float] = mapped_column(Float, nullable=False)
    lng: Mapped[float] = mapped_column(Float, nullable=False)

    timestamp: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC)
    )


    visit: Mapped["VisitHistory"] = relationship(
    back_populates="movements"
)


       

   

    # visit history of nationals means if they ever came to this region then we will have the data bout them







    




    

     