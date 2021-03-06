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
    max-width: 380px;
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
.openItem - из хука useOpenItem через App, чтобы м.б. открывать модальное окно
.setOpenItem - - из хука useOpenItem через App,функция открытия модального окна
*/
export const Order = (props) => {   
    //подсчет итоговой цены: result -итоговое значение,  item - каждый заказа из props.orders
    const totalPr = props.orders.reduce((result, item) => {
        return totalPriceCount(item) + result
    }, 0);
    // подсчет итогового кол-ва: result -итоговое значение,  item - каждый заказа из props.orders
    const totalKol = props.orders.reduce((result, item) => {
        return item.count + result
    }, 0);
    //удаление товара из заказа
    const deleteItem = (index) => {               
        const newOrder = props.orders.filter((item, i) =>  index !== i )
        props.setOrders(newOrder);        
    }

    return (        
        <OrderStyled>
            <OrderTitle>
                ваш заказ
            </OrderTitle>
            <OrderContent>
               { props.orders.length ?
                <OrderList>
                    {props.orders.map( (order, index) => { 
                        return <OrderListItem 
                            key ={index}
                            order={order} 
                            deleteItem={deleteItem} 
                            index={index}
                            setOpenItem = {props.setOpenItem}
                        /> 
                    } ) } 
                            {/* в строке <OrderListItem order={order}>: order= - это произвольно придуманный параметр компонента <OrderListItem>
                            ={order}: order - это обрабатываемый в данный момент элемент массива, (order)
                            более короткая запись: props.orders.map( order => <OrderListItem order={order} />  )*/}
                </OrderList> : 
                <EmptyList>Список заказов пуст.</EmptyList> }
            </OrderContent>    
                <Total>
                    <span>ИТОГО</span>
                    <span>{totalKol}</span>
                    <TotalPrice>{localCurrency(totalPr)}</TotalPrice>
                </Total>
                <ButtonAdd>Оформить</ButtonAdd>            
        </OrderStyled>
    );
}