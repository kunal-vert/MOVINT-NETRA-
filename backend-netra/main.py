from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from model import Base
from routers import immigration, location


# Create all tables
Base.metadata.create_all(bind=engine)



app = FastAPI(
    title="MOVINT-NETRA",  
    description= "Counter Intelligence and Movement intellence",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(immigration.router)
app.include_router(location.router)

@app.get("/", include_in_schema=False, name="home")
def home():  #It will be called by FastAPI whenever it receives a request to the URL "/" using a GET operation
    return{
        "message":"MOVINT NETRA API running"
    }



