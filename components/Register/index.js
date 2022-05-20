import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase"


const Register = ({ type, color }) => {
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
    }
    return(
        <div>
            <button onClick={loginWithGoogle}>Google</button>
        </div>
    )
}
export default Register