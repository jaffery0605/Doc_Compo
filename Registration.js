import React,{Component} from 'react';
import { Text,ScrollView,TouchableOpacity, View,KeyboardAvoidingView, StyleSheet,Button,TextInput,Image,Picker} from 'react-native';
import Constants from 'expo-constants';
import { Card} from 'react-native-paper';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel } from 'react-native-simple-radio-button';

var gender=[
  {label:'Male',value:'0'},
  {label:'Female',value:'1'},
  {label:'Others',value:'2'}
]

export default class App extends React.Component {
  state = {
    value: 'first',
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
      <View style={styles.container}>
      
      <View style={{marginVertical: 45}}>
      <Image style={[styles.logo]} source={require('Doc_Log.png')} /> 
        <Text style={styles.paragraph}>
          DocMan
        </Text>
        <Text style={styles.paragraph}>
          Commit To Be Fit
        </Text>
        </View>
    <TextInput
      style={[styles.inputBox]} placeholder = 'Name'
    />
    <TextInput
    keyboardType='email-address'
      style={[styles.inputBox]} placeholder = 'Email'
    />
    <TextInput
    keyboardType = 'numeric'
      style={[styles.inputBox]} placeholder = 'Age'
    />
    <TextInput
    keyboardType = 'numeric'
      style={[styles.inputBox]} placeholder = 'Height' blurOnSubmit
    />
    <TextInput
    keyboardType = 'numeric'
      style={[styles.inputBox]} placeholder = 'Weight'
    />
    <TextInput
      keyboardType= 'visible-password'
      selectionColor= '#fff'
      style={[styles.inputBox]} placeholder = 'Password'
      secureTextEntry={true}
    />
    <TextInput
      keyboardType= 'visible-password'
      style={[styles.inputBox]} placeholder = 'Confirm Password'
      secureTextEntry={true}
    />
    <Text style={[styles.font]}>Gender</Text>
    <RadioForm
    radio_props={gender}
    labelColor={'white'}
    labelWidth={'30'}
    buttonColor={'#212121'}
    selectedButtonColor={'white'}
    selectedLabelColor={'white'}
    labelStyle={{fontSize: 20}}
    formHorizontal={true}
    onPress={(value)=>{}}
    />
      </View>
      <TouchableOpacity style={[styles.button]}>
      <Text style={[styles.paragraph,{fontSize:20,color:'#F5F5F5'}]}>REGISTER</Text>
      </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#455a64',
    color: 'white',
    padding: 7,
  },
  paragraph: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox:{
    width: 400,
    height: 50,
    color: 'white',
    shadowColor: "#121212",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    elevation: 2,
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginVertical:10,
  },
  font:
  {
    fontSize: 20,
     color: 'white',
  },
  button:{
    width: 400,
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#212121',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical:10,
  },
  logo:{
    height: 125,
    width: 125,
  }
});
