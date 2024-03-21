import { LineChart as LChart, Line,Tooltip,XAxis,YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Bob", math: 72, physics: 80, chemistry: 75 },
        { id: 3, name: "Charlie", math: 91, physics: 87, chemistry: 93 },
        { id: 4, name: "David", math: 58, physics: 65, chemistry: 70 },
        { id: 5, name: "Eve", math: 98, physics: 90, chemistry: 95 },
        { id: 6, name: "Frank", math: 82, physics: 85, chemistry: 88 },
        { id: 7, name: "Grace", math: 75, physics: 72, chemistry: 78 },
        { id: 8, name: "Henry", math: 95, physics: 92, chemistry: 80 },
        { id: 9, name: "Isea", math: 80, physics: 79, chemistry: 84 },
        { id: 10, name: "Jack", math: 77, physics: 51, chemistry: 73 }
      ];
    return (
        <div className='ml-12 mt-12'>
            <LChart width={700} height={400} data={studentData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='blue'></Line>
                <Line dataKey={"chemistry"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;