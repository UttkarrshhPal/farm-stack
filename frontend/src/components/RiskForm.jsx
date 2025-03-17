import { useState } from "react";
import { addRisk } from "../api/api";

const RiskForm = ({ refreshData }) => {
  const [form, setForm] = useState({
    entity_name: "",
    risk_level: "Low",
    description: "",
    date_of_assessment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRisk(form);
    refreshData();
    setForm({
      entity_name: "",
      risk_level: "Low",
      description: "",
      date_of_assessment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Entity Name"
        required
        onChange={(e) => setForm({ ...form, entity_name: e.target.value })}
      />
      <select
        onChange={(e) => setForm({ ...form, risk_level: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        required
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="date"
        required
        onChange={(e) =>
          setForm({ ...form, date_of_assessment: e.target.value })
        }
      />
      <button type="submit">Add Risk</button>
    </form>
  );
};

export default RiskForm;
