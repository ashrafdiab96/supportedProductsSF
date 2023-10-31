import SideBar from "@/components/SideBar/SideBar";
import styles from "./AdminLayout.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import AdminTopBar from "@/components/AdminTopBar/AdminTopBar";

const AdminLayout = ({ children }) => {
    const { width, height } = useWindowSize();
    return (
        <div className={styles.DefaultLayout}>
            <SideBar />
            <div className={styles.topBarAndContent}>
                <AdminTopBar />
                <div className='separator-two'></div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
