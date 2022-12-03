import Link from "next/link";
import styles from "./Module.module.scss";

export default function Test2() {
    return (
        <div className={styles.test2}>
            <Link href="/inlinestyles">Click me to see how its supposed to work -- inline styles are used on the linked page</Link>
        </div>
    );
}