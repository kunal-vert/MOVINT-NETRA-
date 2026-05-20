from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

posts: list[dict] = [
    {
        "id": 1,
        "author": "Kunal Pandit",
        "title": "Urban warfare and Drone usuage",
        "content": "The use of drones in urban wars has been so imperative on 21st centurey as tech have been developing.",
        "date_posted": "April 20, 2026",
    },
    {
        "id": 2,
        "author": "Shreya Dubey",
        "title": "Studyin law and Prep for UPSC CSE ",
        "content": "All day i have to sit on desk and read so much sometime i just get exhuast .",
        "date_posted": "April 27, 2026",
    },
]


@app.get("/", include_in_schema=False, name="home")
@app.get("/posts", include_in_schema=False, name="posts")
def home(request: Request):
    return templates.TemplateResponse(
        request,
        "home.html",
        {"posts": posts, "title": "Home"},
    )


@app.get("/api/posts")
def get_posts():
    return posts