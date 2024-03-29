import React from 'react';
import {Box, Typography} from '@material-ui/core'
export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }