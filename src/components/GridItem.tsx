import React from 'react';
import { Grid } from '@mui/material';
import type { GridProps } from '@mui/material';

interface CustomGridProps extends GridProps {
    item?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export const GridItem: React.FC<CustomGridProps> = (props) => {
    return <Grid component="div" {...props} />;
}; 