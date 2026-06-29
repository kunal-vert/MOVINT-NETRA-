from __future__ import annotations
from sqlalchemy import(
    Boolean, Date, DateTime, ForeignKey, Integer, Numeric, String, Text, func
)

from sqlalchemy.orm import mapped_column, Mapped, relationship

from database import Base

class Foreign_National(Base):
    __tablename__ = "foreign_nationals"

    # Information bout him/her:
    passport_id:       Mapped[str]        = mapped_column(String(30),  primary_key=True)
    full_name:         Mapped[str]        = mapped_column(String(100), nullable=False)
    nationality:       Mapped[str]        = mapped_column(String(60),  nullable=False)
    gender:            Mapped[str]        = mapped_column(String(10),  nullable=False, default="Unknown")
    date_of_birth:     Mapped[str]        = mapped_column(Date,        nullable=False)
    passport_expiry:   Mapped[str]        = mapped_column(Date,        nullable=False)
    occupation:        Mapped[str | None] = mapped_column(String(100), nullable=True)
    country_code:      Mapped[str]        = mapped_column(String (50),  nullable=False   )

    #Risk or flag before He/She arrives
    criminal_record:   Mapped[bool]       = mapped_column(Boolean, nullable=False, default=False)

    #Visa Means
    visa_permit_days:  Mapped[int]        = mapped_column(Integer,     nullable=False, default=7)
    visa_expiry:       Mapped[str | None] = mapped_column(Date,        nullable=True)
    reason_to_visit:   Mapped[str | None] = mapped_column(String(100), nullable=True)

    #--------- Entry Details(from Entry form)------- In future I have to update the default airport cause it could be other Airports Inside the NE:
    india_entry_point: Mapped[str]        = mapped_column(
        String(200), nullable=False,
        default="Netaji Subhas Chandra Bose International Airport, Kolkata"
    )
    # destination_state: Mapped[str | None] = mapped_column(String(100), nullable=True)
    # destination_city:  Mapped[str | None] = mapped_column(String(100), nullable=True)
    # hotel_name:        Mapped[str | None] = mapped_column(String(200), nullable=True)
    # employer_org:      Mapped[str | None] = mapped_column(String(200), nullable=True)

    # >>>>>>>>>>>>> NE Summary >>>> This will give the and provide the Anomloy detection later---------

    prior_ne_visits:  Mapped[int]   = mapped_column(Integer, nullable=False, default= 0 )

    created_at: Mapped[str] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now()
    )
    #------Relationships---------------------
class Visit_History:
    __tablename__ = "visit_history"

    visit_id: Mapped[int]   =   mapped_column(Integer, primary_key=True, index=True)
    passport_id:   Mapped[str]        = mapped_column(ForeignKey("foreign_nationals.passport_id"), nullable=False, index=True)
    ilp_permit_id: Mapped[str | None] = mapped_column(ForeignKey("ilp_permits.ilp_permit_id"),    nullable=True,  index=True)

    # ── For chip display on Visit History page -----------------
    visit_year:    Mapped[int | None] = mapped_column(Integer,     nullable=True)   # "2021"
    state:         Mapped[str | None] = mapped_column(String(100), nullable=True)   # "Arunachal Pradesh"

    city:          Mapped[str]        = mapped_column(String(100), nullable=False)
    area:          Mapped[str | None] = mapped_column(String(100), nullable=True)
    entry_point:   Mapped[str ] = mapped_column(String(200),  default="Netaji Subhas chandra Boss international Airport")
    entry_date:    Mapped[str]        = mapped_column(Date,        nullable=False)
    exit_date:     Mapped[str | None] = mapped_column(Date,        nullable=True)
    duration_days: Mapped[int]        = mapped_column(Integer,     nullable=False)
    visit_number:  Mapped[int]        = mapped_column(Integer,     nullable=False)
    overstayed:    Mapped[bool]       = mapped_column(Boolean,     nullable=False, default=False)
    is_current:    Mapped[bool]       = mapped_column(Boolean,     nullable=False, default=True)
    notes:         Mapped[str | None] = mapped_column(Text,        nullable=True)


       

   

    # visit history of nationals means if they ever came to this region then we will have the data bout them


class LocationTracking(Base):
    __tablename__ = "location_tracking"

    tracking_id:   Mapped[int]          = mapped_column(Integer, primary_key=True, index=True)
    passport_id:   Mapped[str]          = mapped_column(ForeignKey("foreign_nationals.passport_id"), nullable=False, index=True)
    visit_id:      Mapped[int | None]   = mapped_column(ForeignKey("visit_history.visit_id"),        nullable=True,  index=True)




    




    

     