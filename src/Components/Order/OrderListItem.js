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

/*
props:
.order - отдел. товар из заказа из Order.js, объект
 */
export const OrderListItem = (props) => {
    return (
        <OrderItemStyled>
            <ItemName>{props.order.name}</ItemName>
            <span>{props.order.count}</span>
            <ItemPrice>{localCurrency(totalPriceCount(props.order))}</ItemPrice>
            <TrashBtn />
        </OrderItemStyled>
    );
}