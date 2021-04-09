import React from 'react';
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';

import { Wrapper, Header,BalanceContainer, BalanceTitle, Balance, Container   } from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';

const Home = () => {
   return (
      <Wrapper>
         <Container>
            <Header>
               <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
               <BalanceContainer>
                  <BalanceTitle>Meu Saldo</BalanceTitle>
                  <Balance>R$ 20.000,00</Balance>
               </BalanceContainer>
               <MaterialCommunityIcons name="gift" size={30} color="#10c86e" />
            </Header>
            <Suggestions />
            <Activities />
            <Tips />
         </Container>
      </Wrapper>
   )
}

export default Home;