import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Duplex', value: 290, color: 'red' },
    { label: '2 bedroom', value: 400, color: '#0088FE' },
    { label: 'Self Contained', value: 300, color: '#00C49F' },
    { label: 'Shop', value: 370, color: '#FFBB28' },
    { label: '2 bedroom', value: 200, color: '#FF8042' },
    { label: '3 bedroom', value: 200, color: '#358935' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
    return (
        <PieChart
            series={[
                {
                    outerRadius: 80,
                    data,
                    arcLabel: getArcLabel,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 14,
                },
                width: '100%',
                margin: 'auto'
            }}
            {...sizing}
        />
    );
}
