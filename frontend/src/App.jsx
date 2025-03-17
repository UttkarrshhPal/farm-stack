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
      <h1 className="text-5xl flex justify-center font-bold p-3 ">
        Risk Due Diligence App
      </h1>
      <RiskForm refreshData={fetchData} />
      <RiskTable risks={risks} refreshData={fetchData} />
    </div>
  );
}

export default App;
