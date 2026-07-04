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
def home():  #It will be called by FastAPI whenever it receives a request to the URL "/" using a GET operation
    return{
        "message":"MOVINT NETRA API running"
    }



