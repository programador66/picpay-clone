import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
   Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar, 
    Description,
    Bold, 
    CardBody,
    CardFooter,
    Username,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Options,
    OptionsLabel,
} from './styles';

import avatar from '../../images/avatar.png';

const Activities = () => {
  return (
     <Container>
        <Header>
           <Title>Atividades</Title>
        </Header>

        <Card>
           <CardHeader>
              <Avatar source={avatar} />
              <Description>
                  <Bold>Você</Bold> pagou a <Bold>@suzana-jhonson</Bold>
               </Description>
           </CardHeader>
           <CardBody>
              <Username>Caio</Username>
           </CardBody>
           <CardFooter>
              <Details>
                 <Value>R$ 15,00</Value>
                 <Divider />
                 
                  <Feather name="lock" color="#fff" size={14} />
                  <Date>há 2 anos</Date>
              </Details>
               <Actions>
                  <Options>
                     <MaterialCommunityIcons name="comment-account-outline" size={14} color="#fff" />
                     <OptionsLabel>0</OptionsLabel>
                  </Options>
                  <Options>
                     <AntDesign name="hearto" size={14} color="#fff" />
                     <OptionsLabel>0</OptionsLabel>
                  </Options>
               </Actions>
           </CardFooter>
        </Card>
     </Container>
  );
}

export default Activities;