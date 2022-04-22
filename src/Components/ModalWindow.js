import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';

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



/* props:
.openItem - из useState() из App, содержит объект с конкр. товаром
.setOpenItem - функция обновления useState() из App
*/
export const ModalWindow = (props) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            props.setOpenItem(null)
        }
    }
    if(!props.openItem) return null;

    return (
        <Overlay id="overlay" onClick = {closeModal} >            
            <Modal>
                <Banner img={props.openItem.img} />
                <ModalContent>
                    <H3>
                        <span>{props.openItem.name}</span>
                        <span>{props.openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB' })}</span>
                    </H3>
                    <ButtonAdd>Добавить</ButtonAdd>
                </ModalContent>                
            </Modal>
        </Overlay >
    );
}