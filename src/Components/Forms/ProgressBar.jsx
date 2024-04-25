import { Box, LinearProgress, Typography } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#EDEDED', 
        },
      },
    },
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  borderRadius: 4,
  '& .MuiLinearProgress-bar': {
    backgroundColor: 'green',
  },
}));

const ProgressBar = ({percentage}) => {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: 'relative', width: 100, height: 50, alignContent: 'center' }}> 
        <BorderLinearProgress variant="determinate" value={percentage} />
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Montserrat',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: '14.63px',
            letterSpacing: 0,
            textAlign: 'center',
            color: 'white',
          }}
        >
          {percentage}%     
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default ProgressBar;
