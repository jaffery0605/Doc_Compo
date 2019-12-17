import React from 'react';
import Constants from 'expo-constants';
import { View,Image,SafeAreaView,ScrollView,Platform,Dimensions} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title,List,ListItem,Button,Text } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

///******************************************************************************** */
//header
class CustomHeader extends React.Component{
  render(){
    let {title,isHome} =this.props
    return(
        <Header>
          <Left>
          {
            isHome?
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>:
             <Button transparent onPress={() => this.props.navigation.goBack(null)}>
              <Icon name='arrow-back'  />
            </Button>
          }
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>
    );
  }
}
//**************************************************************** */
//side bar menu
class SideMenu extends React.Component{
  render(){
    return(
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150,alignItems: 'center',justifyContent:'center'}}>
        <Image source = {require('./assets/Doc_logo.png')}
          style={{height: 120,width: 120, borderRadius: 60}}/>
        </View>
        <ScrollView>
          <List>
            <ListItem onPress={()=>this.props.navigation.navigate('MyProfile')}>
              <Text>My Profile</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('MyCredits')}>
              <Text>My Credits</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('Precautions')}>
              <Text>Precautions</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('Tasks')}>
              <Text>Tasks</Text>
            </ListItem>
          </List>
        </ScrollView>
        <List>
          <ListItem noBorder>
            <Text>Log Out</Text>
          </ListItem>
        </List>
      </SafeAreaView>
      
    );
  }
}
///***************************************************************** */
//screens

class MyProfile extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop: Constants.statusBarHeight,}}>
      <CustomHeader title="My Profile" navigation={this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyProfile</Text>
      </View>
      </View>
    );
  }
}

class MyCredits extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop: Constants.statusBarHeight,}}>
      <CustomHeader title="My Credits" navigation={this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Credits</Text>
      </View>
      </View>
    );
  }
}

class Precautions extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop: Constants.statusBarHeight,}}>
      <CustomHeader title="Precautions" navigation={this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Precautions</Text>
      </View>
      </View>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop: Constants.statusBarHeight,}}>
      <CustomHeader title="Tasks" navigation={this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tasks</Text>
      </View>
      </View>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop: Constants.statusBarHeight,}}>
      <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
      </View>
    );
  }
}


//************************************************************************* */
//navigation

const navOptionHandler = (navigation) => ({header: null})

const MainStack = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: navOptionHandler
  },
   MyProfile:{
    screen: MyProfile,
    navigationOptions: navOptionHandler
  },
   MyCredits:{
    screen: MyCredits,
    navigationOptions: navOptionHandler
  },
   Precautions:{
    screen: Precautions,
    navigationOptions: navOptionHandler
  },
  Tasks:{
    screen: Tasks,
    navigationOptions: navOptionHandler
  },
},{
  initialRouteName: 'Home'
})

//////*********************************************************** */
//Drawer
const AppDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width*3/4
  }
)
const HomeApp = createAppContainer(AppDrawer)

//************************************************************** */

export default class App extends React.Component{
  render(){
    return(
      <HomeApp/>
    );
  }
}
