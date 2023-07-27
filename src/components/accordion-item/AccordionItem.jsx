import ArrowDown from '../../images/arrow-down.svg';
import ArrowUp from '../../images/arrow-top.svg';

export const AccordionItem = ({id, title, desc, activeNumber, showDesc }) => {

    return (
        <div className='faq' key={id}>
            <h3 className={activeNumber !== id ? 'faq__title' : 'faq__title_active active'} onClick={() => showDesc(id)}>
                {title} 
                { activeNumber !== id
                ? <img src={ArrowDown} alt='' className='arrow_down' /> 
                : <img src={ArrowUp} alt='' className='arrow_down' />}
            </h3>

            { activeNumber === id ?  <p className='faq__desc'>{desc}</p> : null}
        </div>
    )
}