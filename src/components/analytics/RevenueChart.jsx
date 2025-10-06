import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const revenueData = [
//   { month: "Jan", revenue: 4000, target: 3800 },
//   { month: "Feb", revenue: 3000, target: 3200 },
//   { month: "Mar", revenue: 5000, target: 4500 },
//   { month: "Apr", revenue: 4500, target: 4200 },
//   { month: "May", revenue: 6000, target: 5500 },
//   { month: "Jun", revenue: 5500, target: 5800 },
//   { month: "Jul", revenue: 7000, target: 6500 },
// ];

const weeklyRevenueData = [
  { name: "Monday", revenue: 250, target: 230 },
  { name: "Tuesday", revenue: 350, target: 340 },
  { name: "Wednesday", revenue: 300, target: 310 },
  { name: "Thursday", revenue: 360, target: 350 },
  { name: "Friday", revenue: 400, target: 390 },
  { name: "Saturday", revenue: 450, target: 430 },
  { name: "Sunday", revenue: 320, target: 300 },
];

const quarterlyRevenueData = [
  { name: "October", revenue: 5800, target: 6000 },
  { name: "November", revenue: 6200, target: 6400 },
  { name: "December", revenue: 7100, target: 7000 },
];

const yearlyRevenueData = [
  { name: "Jan", revenue: 4000, target: 3800 },
  { name: "Feb", revenue: 3000, target: 3200 },
  { name: "Mar", revenue: 5000, target: 4700 },
  { name: "Apr", revenue: 4500, target: 4200 },
  { name: "May", revenue: 6000, target: 5800 },
  { name: "Jun", revenue: 5500, target: 5600 },
  { name: "Jul", revenue: 7000, target: 6800 },
  { name: "Aug", revenue: 6500, target: 6600 },
  { name: "Sep", revenue: 6200, target: 6000 },
  { name: "Oct", revenue: 5800, target: 5900 },
  { name: "Nov", revenue: 6200, target: 6100 },
  { name: "Dec", revenue: 7100, target: 7000 },
];

const monthlyRevenueData = [
  { name: "01/10", revenue: 800, target: 750 },
  { name: "06/10", revenue: 1200, target: 1100 },
  { name: "11/10", revenue: 1100, target: 1050 },
  { name: "16/10", revenue: 1400, target: 1350 },
  { name: "21/10", revenue: 1300, target: 1250 },
  { name: "26/10", revenue: 1600, target: 1550 },
  { name: "31/10", revenue: 900, target: 950 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [chartData, setChartData] = useState(monthlyRevenueData);

  const handleTimeRangeChange = (e) => {
    const timeRange = e.target.value;
    setSelectedTimeRange(timeRange);

    if (timeRange === "This Week") {
      setChartData(weeklyRevenueData);
    } else if (timeRange === "This Month") {
      setChartData(monthlyRevenueData);
    } else if (timeRange === "This Quarter") {
      setChartData(quarterlyRevenueData);
    } else if (timeRange === "This Year") {
      setChartData(yearlyRevenueData);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center gap-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Revenue vs Target
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={handleTimeRangeChange}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
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
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default RevenueChart;
