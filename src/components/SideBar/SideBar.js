import { useRouter } from "next/router";
import ArrowRightIcon from "../UI/icons/ArrowRightIcon";
import styles from "./SideBar.module.scss";

const data = [
    { name: "Home", url: "/admin-panel" },
    { name: "Categories", url: "/admin-panel/categories" },
    { name: "Products", url: "/admin-panel/products" },
    { name: "Products Common Names", url: "/admin-panel/common-names/products" },
    { name: "Products Alternatives", url: "/admin-panel/alternatives/products" },
    { name: "Brands", url: "/admin-panel/brands" },
    { name: "Brands Alternatives", url: "/admin-panel/alternatives/brands" },
    { name: "Recommended For Boycott", url: "/admin-panel/recommended-products" },
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
