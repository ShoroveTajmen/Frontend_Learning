import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineeChart = () => {
  const studentData = [
    {
      id: 1,
      name: "John",
      math: 85,
      physics: 78,
      chemistry: 90,
    },
    {
      id: 2,
      name: "Alice",
      math: 76,
      physics: 82,
      chemistry: 88,
    },
    {
      id: 3,
      name: "Bob",
      math: 92,
      physics: 88,
      chemistry: 94,
    },
    {
      id: 4,
      name: "Eva",
      math: 68,
      physics: 75,
      chemistry: 80,
    },
    {
      id: 5,
      name: "David",
      math: 91,
      physics: 85,
      chemistry: 89,
    },
    {
      id: 6,
      name: "Grace",
      math: 79,
      physics: 72,
      chemistry: 86,
    },
    {
      id: 7,
      name: "Sophia",
      math: 88,
      physics: 81,
      chemistry: 92,
    },
    {
      id: 8,
      name: "James",
      math: 73,
      physics: 77,
      chemistry: 83,
    },
    {
      id: 9,
      name: "Olivia",
      math: 95,
      physics: 90,
      chemistry: 96,
    },
    {
      id: 10,
      name: "Daniel",
      math: 82,
      physics: 86,
      chemistry: 91,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineeChart;
