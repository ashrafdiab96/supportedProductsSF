import { useRouter } from "next/router";
import ArrowRightIcon from "../UI/icons/ArrowRightIcon";
import styles from "./SideBar.module.scss";

const data = [
    { name: "Home", url: "/admin-panel" },
    { name: "Categories", url: "/admin-panel/categories" },
    { name: "Products", url: "/admin-panel/products" },
    { name: "Products Common Names", url: "/admin-panel/products-common-names" },
    { name: "Alternatives", url: "/admin-panel/alternatives" },
    { name: "Recommended Products", url: "/admin-panel/recommended-products" },
];

const SideBar = () => {
    const router = useRouter();
    
    return (
        <div className={styles.SideBar}>
            <div className={styles.buttons}>
                {data?.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={[styles.button, router.asPath == item.url ? styles.buttonActive : ''].join(' ')}
                            onClick={() => router.push(item.url)}
                        >
                            {item?.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
