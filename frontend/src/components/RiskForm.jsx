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
    <div className="flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-full max-w-lg border border-gray-200"
      >
        {/* <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
          Add Risk
        </h2> */}

        <input
          type="text"
          placeholder="Entity Name"
          required
          value={form.entity_name}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black outline-none"
          onChange={(e) => setForm({ ...form, entity_name: e.target.value })}
        />

        <select
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black outline-none"
          value={form.risk_level}
          onChange={(e) => setForm({ ...form, risk_level: e.target.value })}
        >
          <option value="Low">🟢 Low</option>
          <option value="Medium">🟡 Medium</option>
          <option value="High">🔴 High</option>
        </select>

        <textarea
          placeholder="Description"
          required
          value={form.description}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black outline-none resize-none"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <input
          type="date"
          required
          value={form.date_of_assessment}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black outline-none"
          onChange={(e) =>
            setForm({ ...form, date_of_assessment: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-3 rounded-lg shadow-lg hover:bg-gray-900 transition-all"
        >
          Add Risk
        </button>
      </form>
    </div>
  );
};

export default RiskForm;
