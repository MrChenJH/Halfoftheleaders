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
 ImageBackground,
 ScrollView
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
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:50,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                <TouchableOpacity  style={{height:20,width:20}}
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:20,
                            color:'#FFF',fontWeight:'bold'}}>成员管理</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
                             <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                             </Image>
                           </TouchableOpacity> 
                           </View> 
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                               <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>添加活动</Text>
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
                     账号:</Text>
                     <TextInput 
                     style={{flex:2}}
                      underlineColorAndroid='transparent'
                      placeholder='请输入账号'
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
                   
                   <Text style={{fontSize:15,
                     color:'#6E6E6E',
                     flex:1}}>
                         密码:</Text>
             
              
                     <TextInput 
                      style={{flex:2}}
                      underlineColorAndroid='transparent'
                      placeholder='请输入密码'
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
                        确认密码 :</Text>
          
                     <TextInput 
                         style={{flex:2}}
                     underlineColorAndroid='transparent'
                      placeholder='请输入确认密码'
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
     
                
                <Text style={{fontSize:15,
               
                 color:'#6E6E6E',
                 flex:1}}>
                         系统角色:</Text>
                         <ModalDropdown options={['角色1', '角色2']}
    defaultValue={'请选择系统角色'}
     dropdownStyle={{width:150}}
     style={{flex:2}}/>
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
                         用户角色:</Text>
   <ModalDropdown options={['角色1', '角色2']}
    defaultValue={'请选择用户角色'}
     dropdownStyle={{width:150}}
     style={{flex:2}}/>
                 
        </View>
        <View style={{paddingLeft:10,paddingRight:10,marginTop:10,marginBottom:20,height:80,alignItems:'center'}}>
           <TouchableOpacity>
               <Image source={require('./imgs/sub.png')}
                style={{height:50,width:200}} 
                resizeMode='cover'></Image>
           </TouchableOpacity>
        </View>
        </ScrollView>
     </View>
    )  
     }
    }
}


  