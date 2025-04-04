import React from 'react';
import { Grid, GridProps } from '@mui/material';
import { motion } from 'framer-motion';

export const GridItem: React.FC<GridProps> = ({ children, ...props }) => {
    return (
        <Grid {...props} component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </Grid>
    );
}; 