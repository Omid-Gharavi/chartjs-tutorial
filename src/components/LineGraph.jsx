import { Line } from "react-chartjs-2"
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { lineChartData } from "../fakeData"

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const LineGraph = () => {
    const options = {}

    return (
        <Line options={options} data={lineChartData} />
    )
}

export default LineGraph