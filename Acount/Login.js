import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import Main   from '../Views/Main'
import Button from '../Views/component/button'
import CheckBox from '../Views/component/checkboxsy'
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pwd: '',
            type:1,
            mainType:1
        };
    }

    userNameChange(val){
      this.setState({userName:val})
    }

    pwdChange(val){
      this.setState({pwd:val})
    }
    render() {
        

        if(this.state.type==1){
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
                                onChangeText={this.userNameChange.bind(this)}></TextInput>

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
                                    this.setState({pwd: text})
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
                             <CheckBox></CheckBox>
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
                           if(this.state.userName=='xgz'){
                            this.setState({type:4,mainType:2})
                           }else if(this.state.userName=='shy'){
                            this.setState({type:4,mainType:3})
                           }else{
                            this.setState({type:4,mainType:1})
                           }
                         
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
                            onPress={() => {this.setState({type:2})}}
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
    }else if(this.state.type==2){
              

        return (
            <View style={{height:deviceheight,width:deviceWidth}}>
                <ImageBackground
                    style={{height:deviceheight,
                        width:deviceWidth,
                        alignItems:'center'}}
                    resizeMode='cover'
                    source={require('./bg.png')}
                   >
                   
                    <View style={{flexDirection:'row',
                         padding:20,
                        height:100,
                        width:deviceWidth,
                        alignItems:'flex-start',
                        justifyContent:'flex-start'
                        }}>
               
               <TouchableOpacity onPress={()=>{this.setState({type:1})}}>
                     <Image source={require('../Views/cygl/imgs/close.png')}
                     resizeMode='stretch' style={{height:20,width:20}} ></Image> 

                     </TouchableOpacity>
            
   </View>
   <View style={{height:50,marginTop:10,marginBottom:10}}>
                        <Image
                            style={{height:50,
                                    width:130}}
                            resizeMode='contain'
                            source={require('./logo.png')}
                            ></Image>
                    </View>

                   <ScrollView>
           <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        width:deviceWidth*0.8,
                        alignItems:'center',
                        justifyContent:'space-between'
                        }}>
           
                <Text style={{fontSize:15,
                
                    color:'#fff',
                    flex:2}}>
                家庭昵称</Text>
                <TextInput 
                style={{flex:3}}
                 underlineColorAndroid='transparent'
                  ></TextInput>
            
   </View>


                 

            <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
 
 <Text style={{fontSize:15,
                color:'#fff',
                 flex:2}}>手机号码</Text>

                <TextInput 
                style={{flex:3}}
                underlineColorAndroid='transparent'
                value={this.state.user}></TextInput>
                <TouchableOpacity >
                    <Text style={{color:'#FAFAFA',fontSize:12}}>获取验证码</Text>
                </TouchableOpacity>
      
   </View> 

   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                     }}>
 
         
 <Text style={{fontSize:15,

    color:'#fff',
    flex:2}}>
                    手机验证码</Text>
       <TextInput 
                   style={{flex:3}}
                underlineColorAndroid='transparent'
            
                 value={this.state.user}></TextInput>
        
   </View>
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                      }}>
              
              <Text style={{fontSize:15,
            
                color:'#fff',
                flex:2}}>
                    密码</Text>
        
         
                <TextInput 
                 style={{flex:3}}
                 underlineColorAndroid='transparent'
               
                 placeholderTextColor='#848484'
                 value={this.state.user}></TextInput>
      
   </View>
   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                        }}>
              
              <Text style={{
                  fontSize:15,
          
                color:'#fff',
                flex:2}}>
                  确认密码</Text>
     
                <TextInput 
                 style={{flex:3}}
                 underlineColorAndroid='transparent'
                 placeholderTextColor='#848484'
                 value={this.state.user}></TextInput>
         
   </View>

       <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                        }}>
              
              <Text style={{
                  fontSize:15,
                  color:'#fff',
                  flex:2}}>
                  推荐人</Text>
     
                <TextInput 
                 style={{flex:2}}
                 underlineColorAndroid='transparent'
                 placeholderTextColor='#848484'
                 value={this.state.user}
                ></TextInput>
                <Image
                 source={require('../Views/cygl/imgs/sm.png')}
                 style={{width:30,height:30,flex:1}}
                  resizeMode='contain'></Image>
         
   </View>


        
   <View style={{paddingLeft:10,
                 paddingRight:10,
                 marginTop:10,
                 marginBottom:20,
                 height:80,
                 alignItems:'center'}}>
      <TouchableOpacity>
          <ImageBackground 
            source={require('../Views/cygl/imgs/zc.png')}
            style={{
            height:60,
            width:200,
            justifyContent:'center',
            alignItems:"center"}} 
            resizeMode='contain'>
       
           </ImageBackground>
       </TouchableOpacity>
                  </View>
               </ScrollView>
      </ImageBackground>
            </View>
           );
      
    }else{
        return(<Main type={this.state.mainType}></Main>)
 
     }
    }
}
