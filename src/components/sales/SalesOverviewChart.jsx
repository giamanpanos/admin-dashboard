import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

// const monthlySalesData = [
//   { month: "Jan", sales: 4000 },
//   { month: "Feb", sales: 3000 },
//   { month: "Mar", sales: 5000 },
//   { month: "Apr", sales: 4500 },
//   { month: "May", sales: 6000 },
//   { month: "Jun", sales: 5500 },
//   { month: "Jul", sales: 7000 },
// ];

const weeklySalesData = [
  { name: "Monday", sales: 250 },
  { name: "Tuesday", sales: 350 },
  { name: "Wednesday", sales: 300 },
  { name: "Thursday", sales: 360 },
  { name: "Friday", sales: 400 },
  { name: "Saturday", sales: 450 },
  { name: "Sunday", sales: 320 },
];

const quarterlySalesData = [
  { name: "October", sales: 5800 },
  { name: "November", sales: 6200 },
  { name: "December", sales: 7100 },
];

const yearlySalesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
  { name: "Jul", sales: 7000 },
  { name: "Aug", sales: 6500 },
  { name: "Sep", sales: 6200 },
  { name: "Oct", sales: 5800 },
  { name: "Nov", sales: 6200 },
  { name: "Dec", sales: 7100 },
];

const monthlySalesData = [
  { name: "01/10", sales: 800 },
  { name: "06/10", sales: 1200 },
  { name: "11/10", sales: 1100 },
  { name: "16/10", sales: 1400 },
  { name: "21/10", sales: 1300 },
  { name: "26/10", sales: 1600 },
  { name: "31/10", sales: 900 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [chartData, setChartData] = useState(monthlySalesData);

  const handleTimeRangeChange = (e) => {
    const timeRange = e.target.value;
    setSelectedTimeRange(timeRange);

    if (timeRange === "This Week") {
      setChartData(weeklySalesData);
    } else if (timeRange === "This Month") {
      setChartData(monthlySalesData);
    } else if (timeRange === "This Quarter") {
      setChartData(quarterlySalesData);
    } else if (timeRange === "This Year") {
      setChartData(yearlySalesData);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between gap-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={handleTimeRangeChange}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesOverviewChart;
