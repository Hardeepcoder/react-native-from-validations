import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,View,TextInput,Button,
  TouchableOpacity,Keyboard
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      fname:'',
      lname:'', password:''
    }
  }
myFun=() =>{
  const {fname,lname,password} = this.state;
  if(fname==""){
    //alert('please fill the first name');
    this.setState({Error: 'please fill the first name'});
  }
  else if(lname==""){
  //  alert('please fill the last name');
      this.setState({Error: 'please fill the last name'});
  }
  else if(password==""){
    this.setState({Error: 'please fill the password'});
  }
  else if(password.length <5){
    this.setState({Error: 'password  must be more than 5'});
  }

  else{
    //alert('thank you, your form is submitted successfully');

    this.setState({Error: 'thank you, your form is submitted successfully'});
  }

  Keyboard.dismiss();
}
  render() {
    return (
      <View style={styles.container}>

      <Text style={{color:'red', textAlign:'center'}}>
      {this.state.Error}
      </Text>
      <TextInput
      placeholder="first name"
      style={styles.myText}
      onChangeText={
        fname => this.setState({fname})
      }
      />

      <TextInput
      placeholder="last name"
      style={styles.myText}
      onChangeText={
        lname => this.setState({lname})
      }
      />

      <TextInput
      placeholder="password"
      style={styles.myText}
      onChangeText={
        password => this.setState({password})
      }
      />


      <TouchableOpacity
      onPress={this.myFun}
      style={{backgroundColor:'red',padding:10,width:150}}
      >
      <Text style={{color:'white',textAlign:'center',
      fontSize:20,fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  myText:{
    borderWidth:1,borderColor:'#ccc',
    margin:10, padding:10, width:'90%'
  }
});
