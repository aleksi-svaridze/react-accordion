import styles from './Accordion.module.css';
import boxImg from '../images/box.svg';
import { AccordionItem } from './accordion-item/AccordionItem';
import { useState } from 'react';

export const Accordion = () => {
    const [activeNumber, setActiveNumber] = useState(null);

    const accordionContent = [
        {id: 1, title: 'How many team members can I invite?', desc: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
        {id: 2, title: 'What is the maximum file upload size?', desc: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
        {id: 3, title: 'How do I reset my password?', desc: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
        {id: 4, title: 'Can I cancel my subscription?', desc: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
        {id: 5, title: 'Do you provide additional support?', desc: 'No more than 2GB. All files in your account must fit your allotted storage space.'},
    ];

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