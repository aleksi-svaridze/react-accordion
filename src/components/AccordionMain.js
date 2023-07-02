import styles from './Accordion.module.css';
import boxImg from '../images/box.svg';


export const Accordion = () => {

    return (
        <div className={styles.container}>
            <img src={boxImg} className={styles.box} alt='' />

        </div>
    )
}