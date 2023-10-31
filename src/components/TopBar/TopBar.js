import styles from "./TopBar.module.scss";

const TopBar = () => {

    return (
        <div className={styles.TopBar}>
            <div className={styles.links}>
                <div className={styles.link}>الرئيسية</div>
                <div className={styles.link}>رشح منتج نقاطعه</div>
            </div>
        </div>
    );
};

export default TopBar;
