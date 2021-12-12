import React from 'react'
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface AlertSnackBarProps {
    success: boolean
    closeSnackBar: () => void
    message: string
}



const AlertSnackBar:React.FC<AlertSnackBarProps> = ({closeSnackBar, success, message}) => {

    
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackBar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );


    return (
        
            <Snackbar
                open={true}
                autoHideDuration={6000}
                onClose={closeSnackBar}
                message="Note archived"
                action={action}
            >
                <Alert 
                    onClose={closeSnackBar} 
                    severity={success ? "success" : "error"} 
                    color={success ? "success" : "error"} 
                    sx={{ width: '100%',   }}>
                    {message}
                </Alert>
                
            </Snackbar>
            
            
      );

}

export default AlertSnackBar