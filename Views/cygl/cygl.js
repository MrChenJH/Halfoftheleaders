import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
 Text,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 Image,
 ImageBackground
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
 const deviceWidth = Dimensions.get('window').width;  
 
export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            type:1

        }
     }

  
    render() {
        const {back}=this.props
    if(this.state.type==1){
   
         return(
            <View>
                  <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:30,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                      <TouchableOpacity  style={{height:15,width:15}} 
                       onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>成员管理</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:25,width:25}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View> 
                  <View
                        style={{
                      
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        height:450,
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <ImageBackground
                            source={{
                            source: require('../page/gly/boy_bg.png')
                        }}
                            style={{
                           width:deviceWidth,
                           height:500
                        }}
                            resizeMode='contain'>
                            <View
                                style={{
                                height:30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>家庭成员</Text>
                            </View>
                            <View
                                style={{
                                height:400,
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                marginBottom: 20
                                }}>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require('../page/gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>父亲</Text>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    marginTop: 5
                                }}>
                                    <Image
                                          source={require('../page/gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>母亲</Text>
                                </View>

                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}>
                                    <Image
                                            source={require('../page/gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>小鬼</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View> 
             </View>
              )}else{
               return (    <View>
                    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:30,alignItems:'center'}}>
                        <TouchableOpacity  style={{height:15,width:15}}
                        onPress={()=>{this.setState({type:1})}}>
                          <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                          </Image>
                        </TouchableOpacity>
                    </View>
                 
                    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>账号名</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入账号名'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
  
                          <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>密码</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入密码'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>确认密码</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入密码'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>系统角色</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown  options={['角色1', '角色2']}/>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>家庭角色</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown options={['角色1', '角色2']}/>
                             </View>
                   </View>
  
                   <View style={{paddingLeft:10,paddingRight:10,marginTop:10}}>
                       <Button onPress={()=>{}} color='blue' title='提交'></Button>
                   </View>
                </View>)  

                }
    }
}


  