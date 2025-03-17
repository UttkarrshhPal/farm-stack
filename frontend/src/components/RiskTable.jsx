import { useState } from "react";
import { deleteRisk, updateRisk } from "../api/api";
import { Check, CircleX, SquarePen, Trash2 } from "lucide-react";

const RiskTable = ({ risks, refreshData }) => {
  const [editingRisk, setEditingRisk] = useState(null);
  const [updatedForm, setUpdatedForm] = useState({});

  const handleEditClick = (risk) => {
    setEditingRisk(risk.id);
    setUpdatedForm(risk);
  };

  const handleUpdate = async () => {
    await updateRisk(editingRisk, updatedForm);
    setEditingRisk(null);
    refreshData();
  };

  return (
    <div className="max-w-5xl mx-auto my-10">
      
      <table className="w-full text-sm text-left text-gray-700 shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <thead className="text-md bg-black text-white">
          <tr>
            <th className="py-4 px-6">Id</th>
            <th className="py-4 px-6">Entity</th>
            <th className="py-4 px-6">Risk Level</th>
            <th className="py-4 px-6">Description</th>
            <th className="py-4 px-6">Date</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {risks.map((risk) => (
            <tr key={risk.id} className="hover:bg-gray-100 transition-all">
              {editingRisk === risk.id ? (
                <>
                  <td className="py-4 px-6">{risk.id}</td>
                  <td className="py-4 px-6">
                    <input
                      className="border p-2 w-full rounded-md bg-white text-black border-gray-400"
                      value={updatedForm.entity_name}
                      onChange={(e) =>
                        setUpdatedForm({
                          ...updatedForm,
                          entity_name: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="py-4 px-6">
                    <select
                      className="border p-2 w-full rounded-md bg-white text-black border-gray-400"
                      value={updatedForm.risk_level}
                      onChange={(e) =>
                        setUpdatedForm({
                          ...updatedForm,
                          risk_level: e.target.value,
                        })
                      }
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <input
                      className="border p-2 w-full rounded-md bg-white text-black border-gray-400"
                      value={updatedForm.description}
                      onChange={(e) =>
                        setUpdatedForm({
                          ...updatedForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="py-4 px-6">
                    <input
                      type="date"
                      className="border p-2 w-full rounded-md bg-white text-black border-gray-400"
                      value={updatedForm.date_of_assessment}
                      onChange={(e) =>
                        setUpdatedForm({
                          ...updatedForm,
                          date_of_assessment: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="py-4 px-6 flex space-x-3">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-lg transition-all"
                      onClick={handleUpdate}
                    >
                      <Check size={16} />
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg transition-all"
                      onClick={() => setEditingRisk(null)}
                    >
                      <CircleX size={16} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-4 px-6" title={risk.id}>
                    {risk.id.slice(0, 6)}...
                  </td>
                  <td className="py-4 px-6">{risk.entity_name}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                        risk.risk_level === "Low"
                          ? "bg-green-500"
                          : risk.risk_level === "Medium"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {risk.risk_level}
                    </span>
                  </td>
                  <td className="py-4 px-6" title={risk.description}>
                    {risk.description.length > 20
                      ? `${risk.description.slice(0, 20)}...`
                      : risk.description}
                  </td>
                  <td className="py-4 px-6">{risk.date_of_assessment}</td>
                  <td className="py-4 px-6 flex space-x-3">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md cursor-pointer transition-all"
                      onClick={() => handleEditClick(risk)}
                    >
                      <SquarePen size={16} />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md cursor-pointer transition-all"
                      onClick={() => deleteRisk(risk.id).then(refreshData)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;
