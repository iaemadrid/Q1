
import { useState } from "react";

const dataByArea = [
  { area: "Private Equity", income: 2561, incomePlan: 2704, expenses: -942, expensesPlan: -1004 },
  { area: "QMC Funds", income: 2834, incomePlan: 3091, expenses: -1127, expensesPlan: -1096 },
  { area: "Debt Funds", income: 2386, incomePlan: 2097, expenses: -1199, expensesPlan: -1100 },
  { area: "Transition Energy", income: 210, incomePlan: 307, expenses: -176, expensesPlan: -248 },
  { area: "Solar", income: 229, incomePlan: 249, expenses: -149, expensesPlan: -163 },
  { area: "CRU", income: 171, incomePlan: 153, expenses: -76, expensesPlan: -70 },
  { area: "AM Structure", income: 141, incomePlan: 172, expenses: -1197, expensesPlan: -1131 },
  { area: "ACP", income: 95, incomePlan: 123, expenses: -51, expensesPlan: -55 },
  { area: "Asabys", income: 80, incomePlan: 79, expenses: -80, expensesPlan: -79 },
  { area: "Cybersecurity", income: 21, incomePlan: 25, expenses: -22, expensesPlan: -27 },
];

export default function Dashboard() {
  const [selectedArea, setSelectedArea] = useState("Private Equity");
  const area = dataByArea.find((a) => a.area === selectedArea);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Q1 2025 Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-dark text-white p-4 rounded-xl shadow">
          <h2 className="text-sm uppercase">Net Profit Consolidated</h2>
          <p className="text-2xl font-semibold">€ 3.102</p>
        </div>
        <div className="bg-gray-dark text-white p-4 rounded-xl shadow">
          <h2 className="text-sm uppercase">Net Profit Minorities</h2>
          <p className="text-2xl font-semibold">€ 129</p>
        </div>
        <div className="bg-green-light text-black p-4 rounded-xl shadow">
          <h2 className="text-sm uppercase">Att. Net Profit Consolidated</h2>
          <p className="text-2xl font-semibold">€ 2.902</p>
        </div>
        <div className="bg-gray-light text-black p-4 rounded-xl shadow">
          <h2 className="text-sm uppercase">Att. Net Profit Minorities</h2>
          <p className="text-2xl font-semibold">€ 58</p>
        </div>
      </div>

      <div className="flex space-x-2 mt-8 flex-wrap">
        {dataByArea.map((a) => (
          <button
            key={a.area}
            className={\`px-4 py-2 rounded-full text-sm font-semibold shadow \${selectedArea === a.area ? "bg-green-dark text-white" : "bg-gray-200 text-gray-700"}\`}
            onClick={() => setSelectedArea(a.area)}
          >
            {a.area}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="bg-green-light p-6 rounded-xl">
          <h3 className="text-md mb-2 font-medium">Income</h3>
          <p className="text-xl">Q1 2025: € {area.income}</p>
          <p className="text-xl">Plan: € {area.incomePlan}</p>
        </div>
        <div className="bg-gray-light p-6 rounded-xl">
          <h3 className="text-md mb-2 font-medium">Expenses</h3>
          <p className="text-xl">Q1 2025: € {Math.abs(area.expenses)}</p>
          <p className="text-xl">Plan: € {Math.abs(area.expensesPlan)}</p>
        </div>
      </div>
    </div>
  );
}
