import { type FC } from 'react';
import { Fab, Box } from '@mui/material';

import PrintIcon from '../icons/PrintIcon';

interface Props {
  className?: string;
  style?: Record<string, string>;
}

const FloatingButton: FC<Props> = () => (
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab
      sx={{
        position: 'fixed',
        bottom: (theme) => theme.spacing(20),
        right: (theme) => theme.spacing(5),
      }}
      color="primary"
      aria-label="print"
    >
      <PrintIcon />
    </Fab>
  </Box>
);

export default FloatingButton;
