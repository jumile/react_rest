import React from 'react';
import styled from 'styled-components';

const ButtonAddStyled = styled.button`
    border: none;
    background: #299B01;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    padding: 20px;
    width: 250px;
    margin: 40px auto;
    display: block;
`;

export const ButtonAdd = () => {
    return (
        <ButtonAddStyled>
            Добавить
        </ButtonAddStyled>
    );
}