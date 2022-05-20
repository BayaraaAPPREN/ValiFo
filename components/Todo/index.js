import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase"
import TodoComp from "../TodoComp";

const Todolist = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const collectionRef = collection(db , "todos")
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id,
            timestamp: doc.data().
            timestamp?.toDate().getTime()})))
        });
        return unsubscribe;
    }, [])
    return(
        <div>
            {todos.map(todo => <TodoComp key={todo.id} 
                title={todo.title}
                detail={todo.detail}
                timestamp={todo.timestamp}
                id={todo.id}
            />
            )}
        </div>
    )
    
}
export default Todolist