import { useEffect, useState } from "react";
import { getRisks } from "./api/api";
import RiskForm from "./components/RiskForm";
import RiskTable from "./components/RiskTable";

function App() {
  const [risks, setRisks] = useState([]);

  const fetchData = async () => {
    const { data } = await getRisks();
    setRisks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Risk Due Diligence</h1>
      <RiskForm refreshData={fetchData} />
      <RiskTable risks={risks} refreshData={fetchData} />
    </div>
  );
}

export default App;
