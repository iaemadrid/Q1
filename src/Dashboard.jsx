import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const dataByArea = [
  { area: "Private Equity", income: 2560.74, budget: 2704.49, opex: -941.91, attNP: 934.74, attNP_budget: 869.50 },
  { area: "QMC Funds", income: 2834.15, budget: 3090.98, opex: -1127.21, attNP: 515.84, attNP_budget: 524.10 },
  { area: "QMC", income: 125.35, budget: 92.25, opex: -151.58, attNP: -6.80, attNP_budget: -42.75 },
  { area: "EQMC", income: 2708.81, budget: 2998.74, opex: -975.63, attNP: 522.64, attNP_budget: 566.85 },
  { area: "Debt Funds", income: 2385.60, budget: 2096.99, opex: -1199.13, attNP: 270.89, attNP_budget: 196.93 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function Dashboard() {
  const [view, setView] = useState("absolute");

  const contributionData = dataByArea.map((d) => ({
    name: d.area,
    value: d.attNP > 0 ? d.attNP : 0,
  }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Q1 2025 Asset Management Dashboard</h1>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Narrative</h2>
          <p>
            Q1 2025 was marked by significant qualitative activity — fundraising conversations and early disinvestment discussions. However, the lack of materialized closings and capital movements is visible in the subdued financial results, which fall short of an ambitious budget based on assumed closes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Income vs Budget</h2>
            <button
              onClick={() => setView(view === "absolute" ? "percent" : "absolute")}
              className="text-sm underline"
            >
              Toggle to {view === "absolute" ? "% View" : "€ View"}
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataByArea}>
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#0088FE" name="Income (€)" />
              <Bar dataKey="budget" fill="#00C49F" name="Budget (€)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Attributable Net Profit Contribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {contributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}