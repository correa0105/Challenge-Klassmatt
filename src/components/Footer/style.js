import styled from 'styled-components';

export const FooterContainer = styled.div`
    margin-top: auto;
    padding: 2rem 0;
    background-color: #003f4d;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;

    a {
        font-size: inherit;
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #06b5c6;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
