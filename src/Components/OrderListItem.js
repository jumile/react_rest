import React from 'react';
import styled from 'styled-components';
import trashImg from '../images/trash.svg';

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

export const OrderListItem = () => {
    return (
        <OrderItemStyled>
            <ItemName>name</ItemName>
            <span>2</span>
            <ItemPrice>750 r.</ItemPrice>
            <TrashBtn />
        </OrderItemStyled>
    );
}