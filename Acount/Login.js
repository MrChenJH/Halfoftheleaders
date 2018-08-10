import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
  
    Image,
    ImageBackground
} from 'react-native';

import Button from '../Views/component/button'
import CheckBox from '../Views/component/checkboxsy'
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pwd: ''
        };
    }
    render() {
        const {afterlogin} = this.props
        return (
            <View style={{height:deviceheight,width:deviceWidth}}>
                <ImageBackground
                    style={{height:deviceheight,width:deviceWidth,alignItems:'center'}}
                    resizeMode='cover'
                    source={require('./bg.png')}
                   >
                    <View style={{height:100,marginTop:80,marginBottom:30}}>
                        <Image
                            style={{height:100,
                                    width:130}}
                            resizeMode='contain'
                            source={require('./logo.png')}
                            ></Image>
                    </View>

                    <View
                        style={{
                        height: 45,
                        width: 250,
                        borderRadius:35,
                        marginBottom: 10
                    }}>

                        <ImageBackground
                            style={{
                              flex: 1,
                              flexDirection:'row',
                              alignItems:'center',
                              paddingLeft:10
                              
                        }}
                            source={require('./usertext.png')}
                            resizeMode='cover'>

                            <Image
                                resizeMode='contain'
                                source={require('./username.png')}
                                style={{
                                height: 20,
                                width:30
                               
                            }}></Image>
                            <TextInput
                                style={{
                                flex: 1
                            }}
                                placeholder="请输入用户名"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {
                                this.setState({userName: text})
                            }}></TextInput>

                        </ImageBackground>

                    </View>

                 
                 <View
                        style={{
                        height: 45,
                        width: 250,
                        borderRadius:35,
                        marginTop:5
                      
                    }}>

                        <ImageBackground
                            style={{
                              flex: 1,
                              flexDirection:'row',
                              alignItems:'center',
                              paddingLeft:10
                        }}
                            source={require('./usertext.png')}
                            resizeMode='cover'>

                            <Image
                                resizeMode='contain'
                                source={require('./pwd.png')}
                                style={{
                                height: 20,
                                width:30
                            }}></Image>
                            <TextInput
                                style={{
                                flex: 1
                            }}
                                placeholder="请输入密码"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => {
                                this.setState({userName: text})
                            }}></TextInput>

                        </ImageBackground>

                    </View>
                     

                    
                    <View
                        style={{
                          height: 30,
                          width: 250,
                        flexDirection: 'row',
                        marginTop: 15,
                      
                        justifyContent: 'space-between'
                    }}>

                        <View
                            style={{
                              width: 120,
                              flexDirection: 'row',
                              alignItems:'center'
                        }}>
                       
                              <Image source={require('./jzmm.png')}
                                style={{height:30,width:60}}
                                resizeMode='center' ></Image>

                        </View>

                             <Image source={require('./zhmm.png')}
                                   style={{height:30,width:60}}
                                   resizeMode='center' 
                              ></Image>

                    </View>

                       <View
                        style={{
                          height: 45,
                          width: 250,
                        flexDirection: 'row',
                        marginTop: 10
                      }}>
                      <View style={{flex:1}}>
                   
                        <Button
                            ref="button"
                            onPress={() => {
                            afterlogin()
                        }}
                           img={require('./log.png')}
                           textStyle={{width: 110,
                            height: 40}}
                            btnStyle={{
                            borderRadius: 30,
                            height: 40,
                            width: 110,
                            justifyContent:'flex-start',
                            alignItems:'flex-start'
                       }}></Button>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end'}}>
                        <Button
                            ref="button"
                            onPress={() => {}}
                            img={require('./zhuce.png')}
                            textStyle={{width: 110,
                                height: 40}}
                            btnStyle={{
                            borderRadius: 30,
                            width: 110,
                            height: 40,
                            justifyContent:'flex-start',
                            alignItems:'flex-start'
                     }}></Button>
                    </View>
                    </View>
                    <View style={{
                        flex: 5
                    }}></View>
                </ImageBackground>
            </View>

        );
    }
}

