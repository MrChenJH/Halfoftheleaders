import React, {Component} from 'react';
import {

    StyleSheet,
    Text,

    View,
    TextInput,
    CheckBox,
    Image,
    ImageBackground
} from 'react-native';

import Button from '../Views/component/button'
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
            <View style={styles.container}>
                <ImageBackground
                    style={{
                    flex: 1,
                    alignItems:'center'
                }}
                    resizeMode='cover'
                    source={require('./bg.png')}
                    width='800'
                    height='1000'>
                    <View style={styles.titleView}>
                        <Image
                            resizeMode='contain'
                            source={require('./logo.png')}
                            style={styles.loginImg}></Image>
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
                    
                              alignItems:'flex-end'
                        }}
                            source={require('./usertext.png')}
                            resizeMode='cover'>

                            <Image
                                resizeMode='contain'
                                source={require('./username.png')}
                                style={{
                                height: 20,
                                width:30,
                                marginBottom:13
                            }}></Image>
                            <TextInput
                                style={{
                                flex: 1
                            }}
                                placeholder="请输入用户名"
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
                    
                              alignItems:'flex-end'
                        }}
                            source={require('./usertext.png')}
                            resizeMode='cover'>

                            <Image
                                resizeMode='contain'
                                source={require('./username.png')}
                                style={{
                                height: 20,
                                width:30,
                                marginBottom:13
                            }}></Image>
                            <TextInput
                                style={{
                                flex: 1
                            }}
                                placeholder="请输入密码"
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
                            alignItems:'flex-start'
                        }}>
                            <CheckBox
                                style={{
                                width: 30,
                                marginTop:5
                             
                            }}></CheckBox>
                       
                              <Image source={require('./jzmm.png')}
                                style={{height:40,width:85}}
                                resizeMode='contain'
                              ></Image>

                        </View>

                             <Image source={require('./zhmm.png')}
                                   style={{height:40,width:85}}
                                resizeMode='contain'
                              ></Image>

                    </View>

                       <View
                        style={{
                          height: 45,
                          width: 250,
                        flexDirection: 'row',
                        marginTop: 10,
                      
                        justifyContent: 'space-between'
                    }}>
                        <Button
                            ref="button"
                            onPress={() => {
                            afterlogin()
                        }}
                           img={require('./log.png')}
                           textStyle={{width: 100,
                            height: 40}}
                            btnStyle={{
                            borderRadius: 30,
                            height: 40,
                            width: 100,
                            justifyContent:'flex-start',
                            alignItems:'flex-start'
                       }}></Button>

                        <Button
                            ref="button"
                            onPress={() => {}}
                            img={require('./zhuce.png')}
                            textStyle={{width: 100,
                                height: 40}}
                            btnStyle={{
                            borderRadius: 30,
                            width: 100,
                            height: 40,
                            justifyContent:'flex-start',
                            alignItems:'flex-start'
                     }}></Button>

                    </View>
                    <View style={{
                        flex: 5
                    }}></View>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
      
    },
    titleView: {
        height: 60,
        alignItems: 'center',
        marginTop: 100

    },
    loginImg: {
        width: 80,
        height: 40
    },

    dix: {

        height: 60,
        width: 400,
        alignSelf: 'center',

        flexDirection: 'row'

    }
});
