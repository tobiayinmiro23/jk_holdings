import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { yellow } from '@mui/material/colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme, progresscolor, bg }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: progresscolor,
        ...theme.applyStyles('dark', {
            backgroundColor: progresscolor,
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: bg,
        ...theme.applyStyles('dark', {
            backgroundColor: bg,
        }),
    },
}));


export default function CustomizedProgressBars({ progresscolor, bg, progressValue }) {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <BorderLinearProgress bg={bg} progresscolor={progresscolor} variant="determinate" value={progressValue} />
        </Stack>
    );
}
