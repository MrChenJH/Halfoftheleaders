

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  AsyncStorage
} from 'react-native'



import Login from './Acount/Login';


export default class App extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
       islogin:false
    };
  }
  componentDidMount(){
     this._asyncSetCode() 
  
  }
  _asyncSetCode(){
   let user= AsyncStorage.getItem('user').then(t=>{

   })
  }

   render(){ 
     return(
    <Login ></Login>)
  
  }
   
}


