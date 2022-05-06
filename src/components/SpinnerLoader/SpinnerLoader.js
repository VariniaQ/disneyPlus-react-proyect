import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Spinner.css'

export default function SpinnerLoader() {
    return (
        <Box sx={{ display: 'flex' }} className="spinner-container">
            <CircularProgress />
        </Box>
    );
}