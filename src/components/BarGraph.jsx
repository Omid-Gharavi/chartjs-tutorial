import { Bar } from "react-chartjs-2"
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js"
import { barChartData } from "../fakeData"

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarGraph = () => {
    const options = {}

    return (
        <Bar options={options} data={barChartData} />
    )
}

export default BarGraph