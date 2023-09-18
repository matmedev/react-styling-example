import styles from "./CssModulesPage.module.css";

function CssModulesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <h1 className={styles.card__title}>Example card</h1>
                </div>
                <div className={styles.card__body}>
                    <p className={styles.card__paragraph}>
                        Accusantium at commodi et fuga id illo inventore itaque laboriosam minima molestiae molestias nostrum, numquam pariatur placeat porro possimus quam quo quos repellat sunt suscipit totam voluptate voluptatibus! Animi architecto magni nam qui quo.
                    </p>
                    <p className={styles.card__paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum laboriosam placeat rem ullam. Consequuntur earum molestiae optio perspiciatis rem.
                    </p>
                </div>
                <div className={styles.card__footer}>
                    <button className={`${styles.button} ${styles.buttonSecondary}`} type="button">Cancel</button>
                    <button className={`${styles.button} ${styles.buttonPrimary}`} type="button">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default CssModulesPage;
