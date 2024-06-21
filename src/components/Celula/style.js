import styled from 'styled-components';

export const ContainerQuadrado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
    border: 0.4rem solid #005a6e;
    cursor: pointer;

    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        border-top: none;
    }

    &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        border-right: none;
    }

    &:nth-child(7), &:nth-child(8), &:nth-child(9) {
        border-bottom: none;
    }

    &:nth-child(1), &:nth-child(4), &:nth-child(7) {
        border-left: none;
    }

    &.x::before, &.x::after {
      content: "";
      height: calc(15rem * 0.15);
      width: calc(15rem * 0.9);
      background: #fff;
      position: absolute;
    }

    &.x::before {
      transform: rotate(45deg);
    }

    &.x::after {
      transform: rotate(-45deg);
    }

    &.circle::before {
      content: "";
      height: calc(15rem * 0.5);
      width: calc(15rem * 0.5);
      border: 2rem solid #fff;
      border-radius: 50%;
      position: absolute;
    }

    
    &.celulaVencedora.x::before, &.celulaVencedora.x::after  {
        animation: blink 1s linear infinite;
    }

    &.celulaVencedora.circle::before {
        animation: blinkBorder 1s linear infinite;
    }

    @keyframes blink {
        0% { background-color: #fff; }
        50% { background-color: black; }
        100% { background-color: #fff; }
    }

    @keyframes blinkBorder {
        0% { border-color: #fff; }
        50% { border-color: black; }
        100% { border-color: #fff; }
    }

    @media (max-width: 728px) {
        width: 10rem;
        height: 10rem;

        &.circle::before {
            height: calc(10rem * 0.5);
            width: calc(10rem * 0.5);
            border: 1.4rem solid #fff;
        }

        &.x::before, &.x::after {
            height: calc(10rem * 0.15);
            width: calc(10rem * 0.9);
        }
    }
`;
