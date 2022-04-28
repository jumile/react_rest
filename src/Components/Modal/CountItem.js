import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    text-align: center;
`;

const CountBut = styled.button`
    background: transparent;
    border: 1px solid #299B01;
    color: #299B01;    
    font-size: 20px;
    width: 25px;
    height: 25px;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 3px;
`;

/*
props:
.counter - объект {count, setCount, onChange} из хука useCount
*/
export function CountItem(props) {
    const {count, setCount, onChange } = props.counter;
    return(
        <CountWrapper>
           <span>Количество</span>
            <div>
                <CountBut disabled={count <= 1}  onClick={ () => setCount(count-1) }>-</CountBut>
                <CountInput type='number' min='1' value={count < 1 ? 1 : count} onChange={onChange} /> 
                <CountBut onClick={ () => setCount(count+1) }>+</CountBut>  
            </div>     
        </CountWrapper>
    );
}