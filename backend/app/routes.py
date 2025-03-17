
from fastapi import APIRouter, HTTPException
from app.database import collection
from app.models import RiskAssessment, RiskAssessmentUpdate
from bson import ObjectId

router = APIRouter(prefix="/risks", tags=["Risk Assessments"])


# Helper function to convert MongoDB document to a dictionary with `id` field
def risk_to_dict(risk):
    risk["id"] = str(risk["_id"])  # Convert ObjectId to string
    del risk["_id"]  # Remove `_id` to avoid duplication
    return risk


# Create a new risk assessment
@router.post("/")
async def create_risk(risk: RiskAssessment):
    new_risk = await collection.insert_one(risk.dict())
    return {"id": str(new_risk.inserted_id), **risk.dict()}


# Get all risk assessments
@router.get("/")
async def get_risks():
    risks = await collection.find().to_list(100)
    return [risk_to_dict(risk) for risk in risks]  # Ensuring `id` is included


# Get a single risk assessment by ID
@router.get("/{id}")
async def get_risk(id: str):
    risk = await collection.find_one({"_id": ObjectId(id)})
    if not risk:
        raise HTTPException(status_code=404, detail="Risk not found")
    return risk_to_dict(risk)


# Update a risk assessment
@router.put("/{id}")
async def update_risk(id: str, risk: RiskAssessmentUpdate):
    updated_risk = await collection.update_one(
        {"_id": ObjectId(id)}, {"$set": risk.dict(exclude_unset=True)}
    )
    if updated_risk.modified_count == 0:
        raise HTTPException(status_code=404, detail="Risk not found")
    return {"id": id, **risk.dict(exclude_unset=True)}


# Delete a risk assessment
@router.delete("/{id}")
async def delete_risk(id: str):
    deleted_risk = await collection.delete_one({"_id": ObjectId(id)})
    if deleted_risk.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Risk not found")
    return {"message": "Risk deleted"}
