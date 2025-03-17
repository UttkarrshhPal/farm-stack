// import { useState } from "react";
// import { deleteRisk, updateRisk } from "../api/api";

// const RiskTable = ({ risks, refreshData }) => {
//   const [editingRiskId, setEditingRiskId] = useState(null);
//   const [updatedForm, setUpdatedForm] = useState({});

//   const handleEditClick = (risk) => {
//     setEditingRiskId(risk.id);
//     setUpdatedForm(risk); // Pre-fill form with existing values
//   };

//   const handleUpdate = async () => {
//     await updateRisk(editingRiskId, updatedForm);
//     setEditingRiskId(null);
//     refreshData(); // Refresh table after update
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Entity</th>
//           <th>Risk Level</th>
//           <th>Description</th>
//           <th>Date</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {risks.map((risk) => (
//           <tr key={risk.id}>
//             {editingRiskId === risk.id ? (
//               <>
//                 <td>
//                   <input
//                     value={updatedForm.entity_name}
//                     onChange={(e) =>
//                       setUpdatedForm({
//                         ...updatedForm,
//                         entity_name: e.target.value,
//                       })
//                     }
//                   />
//                 </td>
//                 <td>
//                   <select
//                     value={updatedForm.risk_level}
//                     onChange={(e) =>
//                       setUpdatedForm({
//                         ...updatedForm,
//                         risk_level: e.target.value,
//                       })
//                     }
//                   >
//                     <option>Low</option>
//                     <option>Medium</option>
//                     <option>High</option>
//                   </select>
//                 </td>
//                 <td>
//                   <input
//                     value={updatedForm.description}
//                     onChange={(e) =>
//                       setUpdatedForm({
//                         ...updatedForm,
//                         description: e.target.value,
//                       })
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="date"
//                     value={updatedForm.date_of_assessment}
//                     onChange={(e) =>
//                       setUpdatedForm({
//                         ...updatedForm,
//                         date_of_assessment: e.target.value,
//                       })
//                     }
//                   />
//                 </td>
//                 <td>
//                   <button onClick={handleUpdate}>Save</button>
//                   <button onClick={() => setEditingRiskId(null)}>Cancel</button>
//                 </td>
//               </>
//             ) : (
//               <>
//                 <td>{risk.entity_name}</td>
//                 <td>{risk.risk_level}</td>
//                 <td>{risk.description}</td>
//                 <td>{risk.date_of_assessment}</td>
//                 <td>
//                   <button onClick={() => handleEditClick(risk)}>Edit</button>
//                   <button onClick={() => deleteRisk(risk.id).then(refreshData)}>
//                     Delete
//                   </button>
//                 </td>
//               </>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default RiskTable;

import { useState } from "react";
import { deleteRisk, updateRisk } from "../api/api";

const RiskTable = ({ risks, refreshData }) => {
  const [editingRisk, setEditingRisk] = useState(null);
  const [updatedForm, setUpdatedForm] = useState({});

  const handleEditClick = (risk) => {
    setEditingRisk(risk.id);
    setUpdatedForm(risk); // Pre-fill with existing values
  };

  const handleUpdate = async () => {
    await updateRisk(editingRisk, updatedForm);
    setEditingRisk(null);
    refreshData();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Entity</th>
          <th>Risk Level</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {risks.map((risk) => (
          <tr key={risk.id}>
            {editingRisk === risk.id ? (
              <>
                <td>
                  <input
                    value={updatedForm.entity_name}
                    onChange={(e) =>
                      setUpdatedForm({
                        ...updatedForm,
                        entity_name: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <select
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
                <td>
                  <input
                    value={updatedForm.description}
                    onChange={(e) =>
                      setUpdatedForm({
                        ...updatedForm,
                        description: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={updatedForm.date_of_assessment}
                    onChange={(e) =>
                      setUpdatedForm({
                        ...updatedForm,
                        date_of_assessment: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingRisk(null)}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{risk.entity_name}</td>
                <td>{risk.risk_level}</td>
                <td>{risk.description}</td>
                <td>{risk.date_of_assessment}</td>
                <td>
                  <button onClick={() => handleEditClick(risk)}>Edit</button>
                  <button onClick={() => deleteRisk(risk.id).then(refreshData)}>
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RiskTable;
