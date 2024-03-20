import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: "Alice", math: 85 },
        { id: 2, name: "Bob", math: 72 },
        { id: 3, name: "Charlie", math: 91 },
        { id: 4, name: "David", math: 68 },
        { id: 5, name: "Eve", math: 98 },
        { id: 6, name: "Frank", math: 82 },
        { id: 7, name: "Grace", math: 75 },
        { id: 8, name: "Henry", math: 95 },
        { id: 9, name: "Isa", math: 80 },
        { id: 10, name: "Jack", math: 77 }
      ];
    return (
        <div>
            <LChart width={400} height={400} data={studentData}>

            </LChart>
        </div>
    );
};

export default LineChart;