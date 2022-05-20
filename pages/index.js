import Todolist from '../components/Todolist/index'
import Todo from '../components/Todo/index'
import { Container, Snackbar, Alert } from '@mui/material'
import { useState } from 'react'
import { TodoContext } from './TodoContext';
import Register from '../components/Register/index'
import Loading from '../components/Loading/index';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 
  return (
   <div>
     <h1>hh</h1>
     <TodoContext.Provider value={{showAlert}}>
        <Container maxWidth="sm">
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                {alertMessage}
              </Alert>
            </Snackbar>
            <Todolist/>
            <Register/>
            <Todo/>
          </Container>
      </TodoContext.Provider>
   </div>
  )
}
