import styled from 'styled-components';

export const ContainerTabuleiro = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, auto);
`;

export const StatusContainer = styled.div`
    padding: 1rem;
    background-color: transparent;
    color: white;
    border: .2rem solid #0089a6;
    border-radius: 5px;
    font-size: 1.8rem;
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: 500;
    color: #fff;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 3rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
