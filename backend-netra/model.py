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
    destination_state: Mapped[str | None] = mapped_column(String(100), nullable=True)
    destination_city:  Mapped[str | None] = mapped_column(String(100), nullable=True)
    hotel_name:        Mapped[str | None] = mapped_column(String(200), nullable=True)
    employer_org:      Mapped[str | None] = mapped_column(String(200), nullable=True)

    # >>>>>>>>>>>>> NE Summary >>>> This will give the and provide the Anomloy detection later---------

    prior_ne_visits:  Mapped[int]   = mapped_column(Integer, nullable=False, default= 0 )

    created_at: Mapped[str] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now()
    )

    #------Relationships---------------------

    




    

     