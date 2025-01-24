import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

export default function CircularProgressChildren() {
    return (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <CircularProgress color="danger" size="lg" determinate value={66.67} sx={{ '--CircularProgress-size': '70px' }}>
                <MapsHomeWorkOutlinedIcon color="danger" />
            </CircularProgress>
        </Box>
    );
}
