import "./App.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import Counter from "./Counter";
const pdata = [
  {
    name: "java",
    student: 13,
    fees: 10,
  },
  {
    name: "PHP",
    student: 18,
    fees: 20,
  },
  {
    name: "html",
    student: 22,
    fees: 15,
  },
  {
    name: "reactjs",
    student: 16,
    fees: 25,
  },
  {
    name: "javascript",
    student: 28,
    fees: 20,
  },
  {
    name: "c+",
    student: 35,
    fees: 35,
  },
];
function App() {
  return (
    <>
   
      <h1 className="chart-hadding">line chart</h1>
     <div className="outer-div">
     <div className="graph-div">
      <div>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={pdata}
            width={300}
            height={300}
            margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value + "programing"}
            />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="student"
              stroke="red"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="fees"
              stroke="blue"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
      <h1>Hws 6</h1>
      </div>
      </div>
     
      <div className="six">
        <h1>SIX</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aut corporis iure corrupti nesciunt deserunt nobis delectus dolore
          quod alias.
        </p>
      </div>
      </div>
    
      <Counter />
      <div className="cards">
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
