import os
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = "risk_db"

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
collection = database["risks"]
