import styles from './Accordion.module.css';
import boxImg from '../images/box.svg';
import { AccordionItem } from './accordion-item/AccordionItem';
import { useState } from 'react';
import accordionContent from '../data/Data';

export const Accordion = () => {
    const [activeNumber, setActiveNumber] = useState(null);

    const showDesc = (params) => {
        if(activeNumber === params) {
            setActiveNumber(null);
        } else {
            setActiveNumber(params);  
        }
    }

    return (
        <div className={styles.container}>
            <img src={boxImg} className={styles.box} alt='' />
            <div className={styles.text_content}>
                <h1 className={styles.text_content__title}>faq</h1>

                {accordionContent.map(item => (
                     <AccordionItem 
                     showDesc={showDesc} 
                     id={item.id} 
                     title={item.title}
                     desc={item.desc}
                     activeNumber={activeNumber} />
                ))}
            </div>
        </div>
    )
}