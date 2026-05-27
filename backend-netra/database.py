from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

# This wil be for  PostgreSQL — PostGIS ready (for future spatial queries)..... already we have written im postGIS for leaflet js

SQLALCHEMY_DATABASE_URL = ""

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autoflush=False, autocommit = False, bind=engine)

class Base (DeclarativeBase):
    pass

def get_db():
    with SessionLocal() as db:
        yield db