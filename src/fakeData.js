export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: 'Steps',
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: 'red',
        },
        {
            label: 'Steps by myself',
            data: [5000, 3000, 4500, 8500, 6000, 1200, 9000],
            borderColor: 'blue',
        },
    ]
}

export const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: 'Expenses',
            data: [1200, 300, 150, 180, 100],
            backgroundColor: ['red', 'green', 'orange', 'blue', 'purple'],
            borderColor: ['green', 'red', 'blue', 'orange', 'red'],
            borderWidth: 4,
        }
    ]
}