import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

/* принимает props:
.setOpenItem - функция изменения useState() - и передает дальше, дочернему
*/
export const Menu = (props) => {
    return (
        <MenuStyled>
            <Banner />
            <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem part={dbMenu.burger} setOpenItem = {props.setOpenItem} />
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem part={dbMenu.other} setOpenItem = {props.setOpenItem} />
            </SectionMenu>
        </MenuStyled>
    )
}