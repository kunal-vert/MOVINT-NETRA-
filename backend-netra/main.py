from fastapi import FastAPI

from database import engine
from model import Base


# Create all tables
Base.metadata.create_all(bind=engine)



app = FastAPI(
    title="MOVINT-NETRA",
    description= "Counter Intelligence and Movement intellence",
    version="1.0.0"
)





@app.get("/", include_in_schema=False, name="home")
def home():
    return{
        "message":"MOVINT NETRA API running"
    }



