# from fastapi import FastAPI
# from app.routes import router
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# # Allow frontend to access backend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.include_router(router)


# @app.get("/")
# def root():
#     return {"message": "Risk Due Diligence API"}
from fastapi import FastAPI
from app.routes import router
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import MONGO_URI

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

# MongoDB Connection
client = AsyncIOMotorClient(MONGO_URI)
db = client["risk_db"]


@app.get("/")
def root():
    return {"message": "Risk Due Diligence API"}


# **Test MongoDB Connection**
@app.get("/test-db")
async def test_db_connection():
    try:
        # Check if MongoDB is reachable
        databases = await client.list_database_names()
        return {"status": "Connected", "databases": databases}
    except Exception as e:
        return {"status": "Error", "message": str(e)}
