import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0, .25);
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 23px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    font-size: 39px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 20px;
`
const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>
                ваш заказ
            </OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem />
                    <OrderListItem />
                    <OrderListItem />
                </OrderList>
            </OrderContent>    
                <Total>
                    <span>ИТОГО</span>
                    <span>5</span>
                    <TotalPrice>850</TotalPrice>
                </Total>
                <ButtonAdd>Оформить</ButtonAdd>            
        </OrderStyled>
    );
}