import React from 'react';
import {
   Wrapper, Header, HeaderContainer, Title, BalancedContainer,
   Value, Bold, EyeButton, Info, Actions, Action, ActionLabel, UseBalance, UseBalanceTitle,
   PaymentMethods, PaymentMethodsTitle, Card, CardDetails, CardInfo, CardTitle, Img
} from './styles';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Switch } from 'react-native';

import creditCard from '../../images/credit-card.png';

const Wallet = () => {
   return (
      <Wrapper>
         <Header colors={['#52E78C', '#1AB563']}>
            <HeaderContainer>
               <Title>Saldo PicPay</Title>

               <BalancedContainer>
                  <Value>R$ <Bold>0,00</Bold></Value>

                  <EyeButton>
                     <Feather name="eye" size={28} color="#fff" />
                  </EyeButton>

               </BalancedContainer>
               <Info>
                  Seu saldo está rendendo 100% do CDI
               </Info>

               <Actions>
                  <Action>
                     <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
                     <ActionLabel>Adicionar</ActionLabel>
                  </Action>
                  <Action>
                     <FontAwesome name="bank" size={20} color="#FFF" />
                     <ActionLabel>Retirar</ActionLabel>
                  </Action>
               </Actions>
            </HeaderContainer>

            <UseBalance>
               <UseBalanceTitle>
                  Use seu saldo ao pagar
                  </UseBalanceTitle>
               <Switch />
            </UseBalance>
         </Header>
         <PaymentMethods>
            <PaymentMethodsTitle>
               formas de pagamentos
               </PaymentMethodsTitle>

            <Card>
               <CardDetails>
                  <CardTitle>
                     Cadastre seu cartão de crédito
                  </CardTitle>
                  
                  <CardInfo>
                     Cadastre seu cartão de crédito para poder fazer pagamentos mesmo 
                     quando nao tiver saldo no seu PicPay.
                     </CardInfo>
               </CardDetails>
               <Img source={creditCard} resizeMode="contain" />
            </Card>
         </PaymentMethods>
      </Wrapper>
   )
}

export default Wallet;