import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Button/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { localCurrency, totalPriceCount } from '../Functions/secondaryFunctions';

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background: rgba(0,0,0, .5);
`;

const Modal = styled.div`    
    background: #fff;
    width: 500px;
    height: 500px;
    margin-top: 100px;    
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    /*margin-bottom: 20px;*/
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const H3 = styled.h3`
    font-weight: 400;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 37px;
    margin-right: 37px;
    display: flex;
    justify-content: space-between;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 37px;
    margin-right: 37px;
`;



/* props:
.openItem - из хука useOpenItem() через App, содержит объект с конкр. товаром
.setOpenItem - функция обновления useState() из хука useOpenItem() через App
.orders - из хука useOrders через App, инфо о конкр. товаре
.setOrders - из хука useOrders через App, функция обновления конкр. заказа
*/
export const ModalWindow = (props) => {

    const counter = useCount(); // получаем объект {count, setCount, onChange}

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            props.setOpenItem(null);
        }
    }

    // новый товар в заказе
    const order = {
        ...props.openItem, // полная инфо о товаре
        count: counter.count
    }; 
    
    //добавление товара в заказ
    function addToOrder() {
        props.setOrders([...props.orders, order]); // добавляем новый товар к уже имеющемуся в заказе
        props.setOpenItem(null); // чтобы модал. окно закрылось
    }

    return (
        <Overlay id="overlay" onClick = {closeModal} >            
            <Modal>
                <Banner img={props.openItem.img} />
                <ModalContent>
                    <H3>
                        <span>{props.openItem.name}</span>
                        <span>{localCurrency(props.openItem.price)}</span>
                    </H3>
                    <CountItem counter={counter} />
                    <TotalPriceItem>
                        <span>Сумма:</span>
                        <span>{localCurrency(totalPriceCount(order))}</span>
                    </TotalPriceItem>
                    <ButtonAdd onClick = {addToOrder}>Добавить</ButtonAdd>
                </ModalContent> 
            </Modal>
        </Overlay >
    );
}