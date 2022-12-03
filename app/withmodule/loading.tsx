import styles from './Loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.loading} >
            loading...
        </div>
        //     <div  style={{ padding: "20rem" }}>
        //     loading...
        // </div>
    );
}