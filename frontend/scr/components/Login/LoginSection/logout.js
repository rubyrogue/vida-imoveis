import { useHistory } from "react-router-dom";
import auth from "../../../data/Adm/firebaseConfg";

const Logout = () => {
    let history = useHistory()
    auth.signOut()
    history.push('/administrador')
    return null
}

export default Logout