import styles from './Accordion.module.css';
import { useState } from 'react';


export const Accordion = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    return (
        <div className={styles.container}>

            <div onClick={() => setIsVisible(!isVisible)} className={styles.card}>
                <h3 className={styles.title}>accordion title</h3>
                { isVisible ? <p className={styles.desc}>Lorem ipsum she schema...</p> : null }
            </div>

            <div onClick={() => setIsVisible1(!isVisible1)} className={styles.card}>
                <h3 className={styles.title}>accordion title</h3>
                { isVisible1 ? <p className={styles.desc}>Lorem ipsum she schema...</p> : null }
            </div>

            <div onClick={() => setIsVisible2(!isVisible2)} className={styles.card}>
                <h3 className={styles.title}>accordion title</h3>
                { isVisible2 ? <p className={styles.desc}>Lorem ipsum she schema...</p> : null }
            </div>

        </div>
    )
}