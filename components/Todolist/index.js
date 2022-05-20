import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from "@firebase/firestore"
import { db } from "../../firebase"
import { TextField, Button, useStepContext } from '@mui/material';
import { useRouter } from 'next/router'

const Todolist = () => {
    const router = useRouter();
    const [todo, setTodo] = useState({ title: "", detail: ""});
    // const {showAlert} = TodoContext;
    const onSubmit = async () => {
          const collectionRef = collection(db, "todos")
          const docRef = await addDoc(collectionRef, {...todo, timestamp: 
          serverTimestamp() })
          setTodo({ title: '', detail: ''})
          alert('success')
      }
      
      
    return(
        <div>
            <pre>{JSON.stringify(todo)}</pre>
            <TextField fullWidth label="title" margin="normal"
               value={todo.title}
               onChange={ e => setTodo({...todo, title:e.target.value})}
            />
            <TextField fullWidth label="title" margin="normal"
                value={todo.detail}
                onChange={e => setTodo({...todo, detail:e.target.value})}
            />
            <Button onClick={onSubmit} sx={{ mt: 3 }}>Add new todo</Button>

        </div>
    )
}
export default Todolist