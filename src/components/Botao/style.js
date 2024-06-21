import styled from 'styled-components';

export const Button = styled.button`
    padding: 1rem;
    background-color: transparent;
    color: white;
    border: .2rem solid #0089a6;
    border-radius: .5rem;
    font-size: 1.8rem;
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: 500;
    color: #fff;
    margin-top: 4rem;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 3px 3px 0px #0089a6;
    }
`;
