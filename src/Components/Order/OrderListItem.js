import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg';
import { localCurrency, totalPriceCount } from '../Functions/secondaryFunctions';


const TrashBtn = styled.button`
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 24px;
    height: 24px;
    border: none;
`;

const OrderItemStyled = styled.li`
    display: flex;
    flex-wrap: wrap; /* !!! */
    margin: 15px 0;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;
/*!!! */
const ItemToppings =  styled.div`
    font-size: 14px;
    color: #9a9a9a;
    width: 100%;
`;

/*
props:
.order - отдел. товар из заказа из Order.js, объект
.deleteItem - удаление товара из заказа, из Order.js, функция
.index - индекс элемента, по к-ому щелкнули на корзине, в массиве всех заказов, из Order.js
.setOpenItem - из хука useOpenItem, чтобы м.б. открывать модальное окно
 */
export const OrderListItem = (props) => {    
    /* мой вариант */     
    const toppingList = [];
     props.order.topping.forEach((item) => {      
        if(item.checked) toppingList.push(item.name);  
    });
    const toppingOrder = toppingList.join(', ');  
    /*Другой вариант 
    const toppingOrder = props.order.topping.filter((item) => item.checked)
        .map((item) => item.name)
        .join(', ');
    */

    const refDeleteButton = useRef(null);

    /* к информации о товаре в заказе добавляем еще 1 св-во - index, это индекс товара 
    в списке заказов. И все вместе передаем в setOpenItem() для открытия модал. окна 
    для ред-ния заказа
    */
    props.order['index'] = props.index;

    return (
        <OrderItemStyled >
            <ItemName onClick={(e) => e.target !== refDeleteButton.current && props.setOpenItem(props.order) }>{props.order.name} {props.order.choice} </ItemName>
            <span>{props.order.count}</span>
            <ItemPrice>{localCurrency(totalPriceCount(props.order))}</ItemPrice>
            <TrashBtn ref={refDeleteButton} onClick={() => props.deleteItem(props.index) } />
            {toppingOrder && <ItemToppings>Добавки: {toppingOrder}</ItemToppings> }
        </OrderItemStyled>
    );
}