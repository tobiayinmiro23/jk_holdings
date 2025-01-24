import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';


export default function BasicBreadcrumbs() {
    return (
        <div role="presentation" >
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/DashBoard/Property">All Properties</Link>
                <Typography sx={{ color: 'text.primary' }}>Property detail</Typography>
            </Breadcrumbs>
        </div>
    );
}
