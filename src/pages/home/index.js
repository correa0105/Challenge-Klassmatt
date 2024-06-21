import React from 'react';
import Jogo from '../../components/Jogo';
import Footer from '../../components/Footer';
import { HomeContainer } from './style';

export default function Home() {
  return (
    <HomeContainer>
      <Jogo />
      <Footer />
    </HomeContainer>
  );
}
