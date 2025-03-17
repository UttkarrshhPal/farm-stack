from pydantic import BaseModel
from typing import Optional


class RiskAssessment(BaseModel):
    entity_name: str
    risk_level: str
    description: str
    date_of_assessment: str


class RiskAssessmentUpdate(BaseModel):
    entity_name: Optional[str] = None
    risk_level: Optional[str] = None
    description: Optional[str] = None
    date_of_assessment: Optional[str] = None
