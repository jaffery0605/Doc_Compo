import React, { Component } from "react";
import { View,Image,SafeAreaView,ScrollView,Platform,Dimensions,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title,List,ListItem,Button,Text,Fab,Content, Card, CardItem, Footer,FooterTab} from 'native-base';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
             <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Icon name='arrow-back'  />
            </Button>
          </Left>
          <Body>
            <Title>Precautions</Title>
          </Body>
        </Header>
        <Content padder>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/snack-icon.png')} style={{width: 50,height: 50,marginTop: 50}}/>
        </View>
          <Card style={{marginTop: 50}}>
            <CardItem header bordered>
              <Text>About</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Precautions</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
            </CardItem>
          </Card>
        </Content>
        <Footer>
            <Button active>
              <Icon active name="home" />
            </Button>
        </Footer>
      </Container>
    );
  }
}
