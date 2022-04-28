import React from 'react';
import styled from 'styled-components';;

const ToppingWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    margin: 5px 37px;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

/*
props:
.toppings - добавки к товару, из useTopping через ModalWindow
.checkedToppings - функция по изменению выбранности добавки, из useTopping через ModalWindow
*/
export function Toppings(props) {

    return(
        <>
            <h3>Добавки</h3>  
            <ToppingWrap> 
                {props.toppings.map((item, index) => {
                    return (
                        <ToppingLabel key={index}>
                            <ToppingCheckbox 
                                type="checkbox"
                                checked={item.checked}
                                onChange={()=> props.checkedToppings(index)} />
                            {item.name}
                        </ToppingLabel>         
                    )
                })}      
            </ToppingWrap>
        </>
    );
}