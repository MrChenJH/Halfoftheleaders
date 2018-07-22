

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
import Main   from './Views/Main'

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
_afterlogin(){
  this.setState({islogin:true})
}
   render(){ 
    if(!this.state.islogin){
    return (<Login afterlogin={()=>{this._afterlogin()}}></Login>)
  }
    return <Main/>
  }
   
}


