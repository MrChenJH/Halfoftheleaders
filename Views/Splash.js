import React , { Component } from 'react';
import {
    View,
    ImageBackground, 
    Dimensions, 
    Platform,
    Text
} from 'react-native';

var {height, width} = Dimensions.get('window');

import Login from '../Acount/Login';
import {BackAndroid} from 'react-native-deprecated-custom-components';
/**
 * 启动界面
 */

let navigator;

export default class Splash extends Component{

    constructor(props){
        super(props);
        navigator = this.props.navigator;
    }



    componentDidMount(){
        setTimeout(() => {
            const navigator = this.props.navigator;
            if(navigator){
                navigator.push({
                    name:'登录界面',
                    component:Login,
                    params:{
                        data:'login test',
                    }
                });
            }
        },10);
    }

    render(){
        return (
            <View style={{flex:1}}>
        <Text>欢迎</Text>
                <ImageBackground source={require('./img/hy.png')} style={{width:width,height:height}} resizeMode='stretch'></ImageBackground>
            </View>
        );
    }
}