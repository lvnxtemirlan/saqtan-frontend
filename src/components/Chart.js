import React from 'react';
import { Line } from 'react-chartjs-2';

const getDataForChart = obj => {
    var labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var datasets = [
        {
            label: 'Кол-во преступлений',
            data: Object.values(obj),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ];

    return {
        labels: labels,
        datasets: datasets
    }
}

const options = {
    padding: "0px",
    responsive: true,
    maintainAspectRatio: false,
    defaultFontSize: "14px",
    width: "200",
    height: "50",

    legend: {
        display: false,
    },
    scales: {
        y: {
            beginAtZero: true,
            steps: 5,
            // stepValue: 10,

        }
    }
};

const LineChart = (props) => (
    <>
        <Line data={getDataForChart(props.data)} options={options} />
    </>
);

export default LineChart;