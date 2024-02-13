import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 1000 },
  { name: "Page B", uv: 2000 },
  { name: "Page C", uv: 900 },
  { name: "Page D", uv: 4000 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 3000 },
  { name: "Page G", uv: 2000 },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/line-chart-connect-nulls-sqp96";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h4 className="mt-2 mb-2">Jumlah Penduduk</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              connectNulls
              type="monotone"
              dataKey="uv"
              stroke="#2161D5"
              fill="#2161D5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
