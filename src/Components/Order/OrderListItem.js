import React from 'react';
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
            
    return (
        <OrderItemStyled>
            <ItemName>{props.order.name}</ItemName>
            <span>{props.order.count}</span>
            <ItemPrice>{localCurrency(totalPriceCount(props.order))}</ItemPrice>
            <TrashBtn />
            {toppingOrder && <ItemToppings>Добавки: {toppingOrder}</ItemToppings> }
        </OrderItemStyled>
    );
}