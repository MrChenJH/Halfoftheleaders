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
import Main1   from '../Views/Main1'
import Main2   from '../Views/Main2'
import Main3   from '../Views/Main3'
import Main4   from '../Views/Main4'
import Button from '../Views/component/button'
import CheckBox from '../Views/component/checkboxsy'
import ModalDropdown from 'react-native-modal-dropdown';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pwd: '',
            type:1,
            mainType:1,
            jtnc:'',
            phone:'',
            mm:'',
            tjr:'',
            userId:'',
            birthday:'',
            systemRole:'',
            userRole:''
          };
    }
   

  


Perfect(){
  
    let url = "http://192.168.10.12:38571/api/user/AddPerfect";  
    let params ={
        "userId":this.state.userId,
        "birthday":this.state.birthday,
        "systemRole":this.state.systemRole,
        "userRole":this.state.userRole
    };
    fetch(url, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
               },
       body: JSON.stringify(params)
       }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((json) => {
        console.log(json)
    }).catch((error) => {
        console.error(error);
    });
}

  regUser(){

    let url = "http://192.168.10.12:38571/api/user/RegUser";  
       
    let params ={
        "jtnc":this.state.jtnc,
        "phone":this.state.jtnc,
        "mm":this.state.mm,
        "tjr":this.state.tjr
    };


  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((json) => {
        console.log(json)
    }).catch((error) => {
        console.error(error);
    });
    
    this.setState({type:3})
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
                           
                           if(this.state.userName=='xg'){
                            this.props.navigator.push({
                                component:Main2,
                                })
                           }else if(this.state.userName=='shy'){
                            this.props.navigator.push({
                                component:Main3,
                                })
                           }else if(this.state.userName=='gcy'){
                            this.props.navigator.push({
                                component:Main4,
                                })
                           }else{
                            this.props.navigator.push({
                                component:Main1,
                                })
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
                style={{flex:5}}
                 underlineColorAndroid='transparent'
                 onChangeText={(v)=>{
                     this.setState({jtnc:v})
                 }}
                 value={this.state.jtnc}
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
                style={{flex:4}}
                underlineColorAndroid='transparent'
                   onChangeText={(v)=>{
                   this.setState({phone:v})
                 }}></TextInput>
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
                flex:2}}>
                    密码</Text>
        
         
                <TextInput 
                 style={{flex:3}}
                 underlineColorAndroid='transparent'
                  placeholderTextColor='#848484'
                  onChangeText={(v)=>{
                      this.setState({mm:v})
                  }}
                ></TextInput>
      
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
                 ></TextInput>
         
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
                 onChangeText={(v)=>{
                    this.setState({tjr:v})
                }}
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
      <TouchableOpacity onPress={()=>{
       this.regUser()
      }}>
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
      
    }else if(this.state.type==3){
      
return ( 
<View>
<View style={{
flexDirection:'row',
borderBottomWidth:1,
borderBottomColor:'#E6E6E6',
backgroundColor:'#fe9c2e',
height:40,
alignItems:'center',
justifyContent:'space-between'}}>
    
    <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity   
   style={{height:50,
    width:35,
    justifyContent:'center',
    alignItems:'flex-end'}} 
           onPress={()=>{this.setState({type:2})}}>
             <Image source={require('../Views/cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
             </Image>
           </TouchableOpacity> 
           </View> 
           <View style={{justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>完善信息</Text>
           </View> 
           
           <View style={{marginRight:5,width:40}}> 
     <TouchableOpacity onPress={this.Perfect.bind(this)}>
       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
     </TouchableOpacity>
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
   
   <Text style={{
       fontSize:12,

     color:'#6E6E6E',
     flex:1}}>
        出生日期</Text>

     <TextInput 
         style={{flex:2}}
         underlineColorAndroid='transparent'
         placeholder='请输入出生日期'
         placeholderTextColor='#BDBDBD'
         onChangeText={(v)=>{
           thi.setState({birthday:v})
         }}
       ></TextInput>

</View>

<View style={{flexDirection:'row',
             borderBottomWidth:1,
             borderBottomColor:'#F0F0F0',
             height:60,
             alignItems:'center',
             justifyContent:'space-between',
             paddingLeft:20}}>


<Text style={{fontSize:12,
              color:'#6E6E6E',
             flex:1}}>
         系统角色:</Text>
         <ModalDropdown options={['审核员', 
         '观察员','小鬼']}
             defaultValue={'请选择系统角色'}
             dropdownStyle={{width:150}}
             style={{flex:2}}
             onSelect={(i,v)=>{this.setState({systemRole:v})}}
           />
</View>


<View style={{flexDirection:'row',
             borderBottomWidth:1,
             borderBottomColor:'#F0F0F0',
             height:60,
             alignItems:'center',
             justifyContent:'space-between',
             paddingLeft:20}}>

<Text style={{fontSize:12,

color:'#6E6E6E',
flex:1}}>
         用户角色:</Text>
<ModalDropdown options={['爸爸','妈妈','爷爷','奶奶','外公','外婆','儿子','女儿']}
defaultValue={'请选择用户角色'}
dropdownStyle={{width:150}}
style={{flex:2}}/>
 
</View>

</ScrollView>
</View>
       )
    }
    
   
    }
}
