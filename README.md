# Risk Due Diligence App

This is a simple app that that allows users to manage risk assessments for various entities. 
The app uses:
- FastAPI for the backend (API).
- MongoDB for storing data.
- React for the frontend.
- Docker to create container

## Features:
1. Add Risk Assessment: A form to enter details such as:
    - Entity Name
    - Risk Level (Low, Medium, High)
    - Description
    - Date of Assessment
2. View Risk Assessments:
- A table displaying all risk assessments with fields:
    - ID
    - Entity Name
    - Risk Level
    - Description
    - Date of Assessment
    - Actions (Edit/Delete)
3. Update Risk Assessment:
   - Clicking "Edit" allows users to update details of the selected risk assessment.
4. Delete Risk Assessment:
    - Clicking "Delete" removes the selected risk assessment.
  
## Steps to run the app:

### Local Development:
1. Clone the repository:
```bash
git clone https://github.com/UttkarrshhPal/farm-stack
cd farm-stack
```

2. Initialize the backend:
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

3. Check the database connection:
```bash
cd C:\Program Files\MongoDB\Server\8.0\bin
mongod # Start the MongoDB server
mongosh # Open the MongoDB shell
show dbs # List all databases
use risk_db # Use the risk_db database
show collections # List all collections
db.risks.find().pretty() # List all documents in the risks collection
```

4. Initialize the frontend:
```bash
cd .\frontend
npm install
npm run dev
```

1. Open the browser and go to `http://localhost:5137/` to view the frontend app.

2. Go to `http://localhost:8000/risks/` to view the backend API documentation.

### Docker Development: 
1. Clone the repository:
```bash
git clone https://github.com/UttkarrshhPal/farm-stack
cd farm-stack
```

2. Build the Docker image:
```bash
docker compose up --build
```

3. Open the browser and go to `http://localhost:5137/` to view the frontend app. 

4. Go to `http://localhost:8000/risks/` to view the backend API documentation.
