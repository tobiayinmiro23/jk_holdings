import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 7390, 3490, 1490, 8000, 1000, 9000, 7200];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 6490, 6000, 10000, 3800, 3200];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    ' Apr',
    ' May',
    ' Jun',
    ' Jul',
    ' Aug',
    ' Sep',
    ' Oct',
    ' Nov',
    ' Dec',
];
const option = {
    legend: { hidden: true },
};

export default function SimpleLineChart() {
    return (
        <LineChart
            sx={{ width: '100%', zIndex: 1 }}
            {...option}
            height={300}
            series={[
                { data: pData, color: '#fb923c', label: 'Total rent' },
                { data: uData, color: 'darkblue', label: 'Total sales' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
}
