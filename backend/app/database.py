# from motor.motor_asyncio import AsyncIOMotorClient
# from app.config import MONGO_URI

# client = AsyncIOMotorClient(MONGO_URI)
# db = client["risk_db"]
# collection = db["risks"]

from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb://localhost:27017"  # Update if needed
DB_NAME = "risk_db"  # Your database name

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
collection = database["risks"]  # Your collection name
