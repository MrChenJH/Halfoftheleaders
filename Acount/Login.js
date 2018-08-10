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
            type:1
        };
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
                           this.setState({type:4})
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
            <View>
           <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:50,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                <TouchableOpacity  style={{height:20,width:20}}
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('../Views/cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>用户注册</Text>
                      </View> 
                      <View style={{marginRight:5,width:22}}> 
                 
                      </View> 
                  </View>
            <ScrollView>
           <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
           
                <Text style={{fontSize:15,
                
                    color:'#6E6E6E',
                    flex:1}}>
                账号(家庭昵称)</Text>
                <TextInput 
                style={{flex:2}}
                 underlineColorAndroid='transparent'
                  ></TextInput>
            
   </View>

                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
              
              <Text style={{fontSize:15,
            
                color:'#6E6E6E',
                flex:1}}>
                    密码</Text>
        
         
                <TextInput 
                 style={{flex:2}}
                 underlineColorAndroid='transparent'
               
                 placeholderTextColor='#848484'
                 value={this.state.user}></TextInput>
      
   </View>
   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
              
              <Text style={{
                  fontSize:15,
          
                color:'#6E6E6E',
                flex:1}}>
                  确认密码</Text>
     
                <TextInput 
                    style={{flex:2}}
                underlineColorAndroid='transparent'
              
                 placeholderTextColor='#848484'
                 value={this.state.user}></TextInput>
         
   </View>
              

                 <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20,
                        paddingRight:10}}>
 
 <Text style={{fontSize:15,
 
    color:'#6E6E6E',
    flex:1}}>
         手机号码</Text>

                <TextInput 
                style={{flex:2}}
                underlineColorAndroid='transparent'
                value={this.state.user}></TextInput>
                <TouchableOpacity >
                    <Text style={{color:'#BDBDBD'}}>获取验证码</Text>
                </TouchableOpacity>
      
   </View> 
   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
 
         
 <Text style={{fontSize:15,

    color:'#6E6E6E',
    flex:1}}>
                    手机验证码</Text>
       <TextInput 
                   style={{flex:2}}
                underlineColorAndroid='transparent'
            
                 value={this.state.user}></TextInput>
        
   </View>


        
   <View style={{paddingLeft:10,paddingRight:10,marginTop:10,marginBottom:20,height:80,alignItems:'center'}}>
      <TouchableOpacity>
          <Image source={require('../Views/cygl/imgs/sub.png')}
           style={{height:60,width:200}} 
           resizeMode='stretch'></Image>
      </TouchableOpacity>
   </View>
   </ScrollView>
</View>)
    }else{
        return(<Main></Main>)
 
     }
    }
}

