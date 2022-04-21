import React from 'react';
import styled from 'styled-components';
import BannerImg from '../images/banner.png';

const BannerStyled = styled.div`
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 210px;
    width: 100vw;
`;

export const Banner = () => {
    return (
        <BannerStyled />
    );
}