import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectІsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";


const AppBar = () => {

    const isLoggedIn = useSelector(selectІsLoggedIn);
    return (
    <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
)}

export default AppBar;