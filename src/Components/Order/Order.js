import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Button/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { localCurrency, totalPriceCount } from '../Functions/secondaryFunctions';

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

const EmptyList = styled.p`
    text-align: left;
    margin-top: 40px;
`;
/*
props: 
.orders - из хука useOrders через App, инфо о конкр. товаре
.setOrders - из хука useOrders через App, функция обновления конкр. заказа
*/
export const Order = (props) => {
    
    const total = props.orders.reduce((result, item) => {
        return totalPriceCount(item) + result
    }, 0);

    return (        
        <OrderStyled>
            <OrderTitle>
                ваш заказ
            </OrderTitle>
            <OrderContent>
               { props.orders.length ?
                <OrderList>
                    {props.orders.map( (order) => { return <OrderListItem order={order} /> } ) } 
                            {/* в строке <OrderListItem order={order}>: order= - это произвольно придуманный параметр компонента <OrderListItem>
                            ={order}: order - это обрабатываемый в данный момент элемент массива, (order)
                            более короткая запись: props.orders.map( order => <OrderListItem order={order} />  )*/}
                </OrderList> : 
                <EmptyList>Список заказов пуст.</EmptyList> }
            </OrderContent>    
                <Total>
                    <span>ИТОГО</span>
                    <span>5</span>
                    <TotalPrice>{localCurrency(total)}</TotalPrice>
                </Total>
                <ButtonAdd>Оформить</ButtonAdd>            
        </OrderStyled>
    );
}