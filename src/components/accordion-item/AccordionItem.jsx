import styles from './accordionItem.module.css';
import ArrowDown from '../../images/arrow-down.svg';
import ArrowUp from '../../images/arrow-top.svg';

export const AccordionItem = ({id, title, desc, activeNumber, showDesc }) => {

    return (
        <div className={styles.accordion__item} key={id}>
            <h3 className={activeNumber !== id ? styles.accordion__title : styles.accordion__title_active +' '+ styles.active} onClick={() => showDesc(id)}>
                {title} 
                { activeNumber !== id
                ? <img src={ArrowDown} className={styles.arrow_down} /> 
                : <img src={ArrowUp} className={styles.arrow_down} />}
            </h3>

            { activeNumber === id ?  <p className={styles.accordion__desc}>{desc}</p> : null}
        </div>
    )
}