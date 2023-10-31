import styles from "./AdminTopBar.module.scss";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/store";
import MenuIcon from "../UI/icons/MenuIcon";
import ArrowRightIcon from "../UI/icons/ArrowRightIcon";

const AdminTopBar = () => {
    // const { userName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={styles.TopBar}>
            <IconButton className={styles.menuButton}>
                <MenuIcon className={styles.menuIcon} />
            </IconButton>
            
            <button className={styles.user} onClick={handleLogout}>
                <img src="/images/person.png" alt="person" />
                <div>
                    {/* <h3>{userName}</h3> */}
                    <p>Manager</p>
                </div>
                <ArrowRightIcon />
            </button>
        </div>
    );
};

export default AdminTopBar;
