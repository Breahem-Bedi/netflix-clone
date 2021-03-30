import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    border-bottom: 8px solid #222; 
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    color: white;
    margin: auto;

    @media (max-width: 600px) {
        padding: 35px;
    }

`;

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    color: white;
    margin: 16px auto;

    @media (max-width: 600px) {
        padding: 18px;
    }
`;
