import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, color, bg }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: bg,
        ...theme.applyStyles('dark', {
            backgroundColor: bg,
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: color,
        ...theme.applyStyles('dark', {
            backgroundColor: color,
        }),
    },
}));


export default function CustomizedProgressBars({ mm }) {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <BorderLinearProgress mm={mm} variant="determinate" value={10} />
        </Stack>
    );
}
