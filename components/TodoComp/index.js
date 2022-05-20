import moment from "moment"
import { ListItem,IconButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert' 
import { db } from "../../firebase"
import { deleteDoc, doc } from "@firebase/firestore"
import { useRouter } from 'next/router'
import Link from "next/link"
import { TodoContext } from "../../pages/TodoContext"
import { useContext } from "react"

const TodoComp = ({ id, timestamp, title, detail }) => {
    const router = useRouter();
    // const { showAlert, setTodo } = useContext(TodoContext)
    //    e.stopPropagation();
    //    const docRef = doc(db)
    
    const deleteTodo = async (id, e)=>{
        e.stopPropagation();
        const docRef = doc(db, "todos", id);
        await deleteDoc(docRef);
        alert('deleted')
        
    }
    const seeMore = (id, e) => {
        e.stopPropagation();
        router.push(`/todos/${id}`)
    }
    return(
        <div>
           <ListItem
           sx={{ mt:3, boxShadow: 3 }}
           style={{ backgroundColor: '#FAFAFA' }}
           secondaryAction={
               <>
                <IconButton onClick={e => deleteTodo(id, e)}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={e => seeMore(id, e)}>
                    <MoreVertIcon/>
                </IconButton>
               </>
           }
           >
               <ListItemText
                  primary={title}
                  secondary={moment(timestamp).format("MMMM dd, yyyy")}
                  success={id}
               />
           </ListItem>
        </div>
    )
}
export default TodoComp