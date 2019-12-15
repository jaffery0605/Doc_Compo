import React, { Component } from 'react';
import { Platform, StyleSheet,StatusBar, View, Text, Button,Image } from 'react-native';
import Swiper from "react-native-web-swiper";
import Constants from 'expo-constants';

export default class DocSwip extends Component {
  render() {

    return (
      <View style={styles.container}>
      <StatusBar
          barStyle="light-content"
          backgroundColor="#212121"
        />
        <View style={{ flex: 1}}>
        
          <Swiper
            index={1}
          >
          
            <View style={[styles.slideContainer,styles.slide1]}>
              
        <Image style={[styles.logo]} source={require('./assets/doctorlog.png')} /> 
        <Text style={styles.paragraph}>
         Find expert doctors for particular problem on one tap
        </Text>
            </View>
            <View style={[styles.slideContainer,styles.slide1]}>
              <Image style={[styles.logo]} source={require('./assets/free.png')} /> 
        <Text  style={styles.paragraph}>
         Free of cost
        </Text>
            </View>
            <View style={[styles.slideContainer,styles.slide1]}>
              <Image style={[styles.logo]} source={require('./assets/pulse.png')} /> 
        <Text style={styles.paragraph}>
         Continuous Health Track
        </Text>
            </View>
            <View style={[styles.slideContainer,styles.slide1]}>
              <Image style={[styles.logo]} source={require('./assets/bot.png')} /> 
        <Text style={styles.paragraph}>
         24*7 Chat Assisstance
        </Text>
            </View>
             <View style={[styles.slideContainer,styles.slide1]}>
              <Image style={[styles.logo]} source={require('./assets/report.png')} /> 
        <Text style={styles.paragraph}>
         Detailed reports
        </Text>
        <View style={[{ width: "90%", margin: 20 }]}>
        <Button title="Get Started"/></View>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    paddingTop: Constants.statusBarHeight,
  }, 
  slideContainer: {
    justifyContent: 'center',
    alignItems: "center",
    
    marginTop: 150,
    padding: 50,
  },
  slide1: {
    backgroundColor: '#212121',
  },
  paragraph:{
    margin: 35,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 215,
  },
});
