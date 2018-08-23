

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  AsyncStorage
} from 'react-native'

import {Navigator} from 'react-native-deprecated-custom-components';

import Login from './Acount/Login'

const defaultRoute = {
  component: Login,
};


export default class App extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
       islogin:false
    };
  }

  _configureScene(route, routeStack)
  {
      return Navigator.SceneConfigs.FadeAndroid;;
  }
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
   render(){ 
     return(
      <Navigator
      initialRoute={defaultRoute}
      renderScene={this._renderScene}
      configureScene={this._configureScene}
       />)
  
  }
   
}


