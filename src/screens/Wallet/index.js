import React from 'react';
import { Wrapper, Header,HeaderContainer, Title,BalancedContainer, Value, Bold, EyeButton, Info } from './styles';
import { Feather } from '@expo/vector-icons';

const Wallet = () => {
   return (
      <Wrapper>
         <Header colors={['#52E78C','#1AB563']}>
            <HeaderContainer>
               <Title>Saldo PicPay</Title>

               <BalancedContainer>
                  <Value>R$ <Bold>0,00</Bold></Value>

                 <EyeButton>
                     <Feather name="eye" size={28} color="#fff"/>
                 </EyeButton>

               </BalancedContainer>
               <Info>Seu saldo está rendendo 100% do CDI</Info>
            </HeaderContainer>
         </Header>
      </Wrapper>
   )
}

export default Wallet;