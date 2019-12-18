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
            <Title>Report</Title>
          </Body>
        </Header>
        <View style={{backgroundColor:'#1976d2',justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>Level 1</Text>
          <Text style={{fontSize: 20}}>Percentage: 51.57%</Text>
        </View>
        <Content padder>
          <Card style={{marginTop: 50}}>
            <CardItem header>
              <Text>Finish the tasks to stay healthy</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Go to Tasks
                </Text>
              </Body>
              <Right>
              <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Icon name='arrow-forward'  />
            </Button>
              </Right>
            </CardItem>
            <CardItem footer>
            </CardItem>
          </Card>
          <Card style={{marginTop: 50}}>
            <CardItem header>
              <Text>Follow Precautions</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Go to Precautions 
              
                </Text>
                
              </Body>
              <Right>
              <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Icon name='arrow-forward'  />
            </Button>
              </Right>
            </CardItem>
            
            <CardItem footer>
            
            </CardItem>
          </Card>


          <Card style={{marginTop: 50}}>
            <CardItem header>
              <Text>FAQs</Text>
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
