import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    column-count: 2;
    column-gap: 15px;
    margin: 5px 37px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

/*
props:
.choice - выбор вида товар, из useChoices через ModalWindow
.changeChoices - функция по изменению выбора, из useChoices через ModalWindow
.openItem - выбранный товар, из ModalWindow
*/
export function Choices(props) { 

    return (
        <>
            <h3>Выберите: </h3>
            <ChoiceWrap>
                {props.openItem.choices.map((item, index) => (                    
                    <ChoiceLabel key={index}>
                        <ChoiceRadio type="radio"
                                    name="choices"
                                    checked={props.choice===item}
                                    value={item}
                                    onChange={props.changeChoices}  
                        />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoiceWrap>
        </>
)}