import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1490, 8000, 1000, 9000, 7200];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 6490, 6000, 10000, 3800, 3200];
const xLabels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
];
const option = {
    legend: { hidden: true },
};
export default function SimpleBarChart() {
    return (
        <BarChart
            {...option}
            sx={{ width: '100%' }}

            height={300}
            series={[
                { data: pData, label: 'Last 6 days', color: '#373737', id: 'pvId' },
                { data: uData, label: 'Last week', color: '#dbdede', id: 'uvId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    );
}
