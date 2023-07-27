import boxImg from '../images/box.svg';
import MobileBg from '../images/mobile_bg.svg';
import { AccordionItem } from './accordion-item/AccordionItem';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import accordionContent from '../data/Data';

export const Accordion = () => {
    const [activeNumber, setActiveNumber] = useState(null);
    const {width} = useWindowSize();

    const showDesc = (params) => {
        if(activeNumber === params) {
            setActiveNumber(null);
        } else {
            setActiveNumber(params);  
        }
    }

    return (
        <div className='card'>
            {
                width >= 1100 ? <img src={boxImg} className='card__box_img' alt='' /> : <img src={MobileBg} alt="" className='card__mobile_bg' />
            }
            <div className='card__text_content'>
                <h1 className='card__text_content__title'>faq</h1>

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