import random
from typing import Optional
from fastapi import FastAPI
from markupsafe import string
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import crawler

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/Covid/")
def getCovidInfo():
    covidBot = crawler.covid19()
    res = covidBot.getDailyInfo()
    print(res)
    return res 