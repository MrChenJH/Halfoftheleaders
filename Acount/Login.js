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
    ScrollView,
    AsyncStorage
} from 'react-native';
import app from '../app.json';
import DatePicker from 'react-native-datepicker'
import DropdownAlert from 'react-native-dropdownalert';
import Main1   from '../Views/Main1'
import Main2   from '../Views/Main2'
import Main3   from '../Views/Main3'
import Main4   from '../Views/Main4'
import Button from '../Views/component/button'
import CheckBox from '../Views/component/checkboxsy'
import ModalDropdown from 'react-native-modal-dropdown';
import ScannerScreen from '../src/screen/ScannerScreen'

const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class Login extends Component {
    constructor(props) {
        super(props);
        var timer2=null;
        this.state = {
            userName: 'admin',
            pwd: '',
            type:1,
            mainType:1,
            jtnc:'',
            uName:'',
            phone:'',
            mm:'',
            qrmm:'',
            tjr:'',
            realName:'',
            sex:'',
            contactAddress:'',
            state:'',
            birthday:'2016-05-15',
            userRole:'',
            regionBelong:'' 
          };
    }
      
    componentWillUnmount() {
        this.timer2 && clearTimeout(this.timer2);
    }

  _Login(){
   let url =app.Host+'api/user/Login?userName=' + this.state.userName + '&pwd='+this.state.pwd;
   fetch(url)
    .then((response)=>{
      if(response.ok){
        return response.json();
      }
    })
    .then((responseJson)=>{
      if(responseJson.sucess) {
        let responseData = responseJson.Result;

        let user= JSON.stringify(responseData);
        AsyncStorage.setItem("user",user);
       
                     
        if(decodeURI(responseData.systemRole)=='小鬼'){
    this.props.navigator.push({
        component:Main2,id:"Main2"
        })
   }else if(decodeURI(responseData.systemRole)=='审核员'){
    this.props.navigator.push({
        component:Main3,id:"Main3"
        })
   }else if(decodeURI(responseData.systemRole)=='观察员'){
    this.props.navigator.push({
        component:Main4,id:"Main4"
        })
   }else{
    this.props.navigator.push({
        component:Main1,id:"Main1"
        })
   }
      }else{

        this.loginAlert.alertWithType('error', 'Error', '用户名密码错误');
      }
    })
    .catch((error)=>{
     
    });

   
  }

   ScanSucess(v){
     this.setState({tjr:v,type:2})
     
   }

  regUser(){
   
        let url = app.Host+ "api/user/RegUser";  
        let params ={
            "nc":this.state.jtnc,
            "userName":this.state.uName,
            "pwd":this.state.mm,
            "phone":this.state.phone,
            "tjr":this.state.tjr,
            "systemRole":'家庭管理员'
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
            this.setState({type:3})
        }).catch((error) => {
    
          this.regAlert.alertWithType('error', 'Error', error);
            console.error(error);
        });
     }
    

      Perfect(){
    let url = app.Host+"api/user/AddPerfect";  
    let params ={
        "userName":this.state.uName,
        "realName":this.state.realName,
        "sex":['妈妈','外婆','奶奶','女儿'].findIndex(t=>t==this.state.userRole)>-1?1:0,
        "contactAddress":this.state.userRole,
        "birthday":this.state.birthday,
        "regionBelong":this.state.regionBelong,
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
           

            this.reg1Alert.alertWithType('success', 'Success','注册成功请登录');

            this.timer2 = setTimeout(
                ()=>{ this.setState({type:1})},
                1000,
              );
        }
    }).catch((error) => {
        console.error(error);
    });
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
             <DropdownAlert
                                ref={ref => this.loginAlert = ref}
                                 containerStyle={{height:100}}
                                    showCancel={true}
                                     closeInterval={3000}
                                     zIndex={1000000}
        
                                    />
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
                                textContentType='password'
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
                            onPress={this._Login.bind(this)}
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
               <DropdownAlert
                                ref={ref => this.regAlert = ref}
                                 containerStyle={{height:100}}
                                    showCancel={true}
                                     closeInterval={3000}
                                     zIndex={1000000}
        
                                    />
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
           
            
                <TextInput 
                style={{flex:1}}
                 underlineColorAndroid='transparent'
                 placeholder='家庭昵称'
                 placeholderTextColor='#fff'
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
                        width:deviceWidth*0.8,
                        alignItems:'center',
                        justifyContent:'space-between'
                        }}>
           
            
                <TextInput 
                style={{flex:1}}
                 underlineColorAndroid='transparent'
                 placeholder='登录名'
                 placeholderTextColor='#fff'
                 onChangeText={(v)=>{
                     this.setState({uName:v})
                 }}
                 value={this.state.uName}
                  ></TextInput>
            
                  </View>
                 

            <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:50,
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
 

                <TextInput 
                style={{flex:1}}
                placeholder='手机号码'
                placeholderTextColor='#fff'
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
 
         

       <TextInput 
        style={{flex:1}}
        placeholder='手机验证码'
        placeholderTextColor='#fff'
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
              
         
                <TextInput 
                 style={{flex:1}}
                 textContentType='password'
             
                 underlineColorAndroid='transparent'
                 placeholder='密码'
                  placeholderTextColor='#fff'
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
              
          
     
                <TextInput 
                placeholder='确认密码'
                placeholderTextColor='#fff'
                textContentType='password'
                style={{flex:1}}
                onChangeText={(v)=>{
                    this.setState({qrmm:v})
                }}
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
              
        
                <TextInput 
                 style={{flex:1}}
                 placeholder='推荐人'
                 underlineColorAndroid='transparent'
                 placeholderTextColor='#fff'
                 value={this.state.tjr}
                 onChangeText={(v)=>{
                    this.setState({tjr:v})
                }}
                ></TextInput>
                <TouchableOpacity 
                 onPress={()=>{
                     this.setState({type:7})
                 }}
                >
                <Image
                 source={require('../Views/cygl/imgs/sm.png')}
                 style={{width:30,height:30,flex:1}}
                  resizeMode='contain'></Image>
         </TouchableOpacity>
   </View>


        
   <View style={{paddingLeft:10,
                 paddingRight:10,
                 marginTop:10,
                 marginBottom:20,
                 height:80,
                 alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{

         if(!this.state.jtnc){
                 this.regAlert.alertWithType('error', 'Error', '请输入家庭昵称')
                 return
             }

          if(!this.state.uName){
                   this.regAlert.alertWithType('error', 'Error', '请输入登录名')
                   return
                 }
       
                 if(this.state.mm!=this.state.qrmm){
            this.regAlert.alertWithType('error', 'Error', '确认密码和用户密码不一致')
            return
        }
     
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
       <Text style={{color:'#fff'}}>注册即表示同意豆为服务协议</Text>
                  </View>
               </ScrollView>
      </ImageBackground>
            </View>
           );
      
    }else if(this.state.type==3){
      
return ( 
    <View>
                   <DropdownAlert
                                ref={ref => this.reg1Alert = ref}
                                 containerStyle={{height:100}}
                                    showCancel={true}
                                     closeInterval={3000}
                                     zIndex={1000000}
        
                                    />
    <View style={{
 flexDirection:'row',
 borderBottomWidth:1,
 borderBottomColor:'#E6E6E6',
 backgroundColor:'#fe9c2e',
 height:40,
 alignItems:'center',
 justifyContent:'space-between'
 }}>
  
 <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity   
                   style={{height:50,
                    width:35,
 
                 justifyContent:'center',
                 alignItems:'flex-end'}} 
                      onPress={()=>{this.setState({type:1})}}>
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
     


<ScrollView scrollEnabled={true} style={{backgroundColor:'#F2F2F2'}} >
<TouchableOpacity onPress={()=>{this.setState({type:8,typetitle:'家庭角色'})}}>

<View 
                      style={{flexDirection:'row',
                               borderTopColor:'#F0F0F0',
                               borderTopWidth:1,
                               backgroundColor:'#fff',
                               marginTop:5,
                               height:60}}>
                          <View style={{width:60,
                               paddingLeft:5,
                               paddingTop:5}}>
                          <Image source={
                              this.state.userRole=="爸爸"?
                              require('../Views/cygl/imgs/tx/bb.png'):(this.state.userRole=="妈妈"?require('../Views/cygl/imgs/tx/mm.png'):require('../Views/cygl/imgs/tx/uncle.png'))} style={{width:48,height:48
                          
                          }} resizeMode='stretch'></Image>
                          </View>
                           <View style={{flex:1,
                              paddingLeft:5,
                              paddingTop:10,
                              justifyContent:'flex-start'}}>
                          <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>{this.state.jtnc}</Text>
                          <Text style={{fontSize:12,color:'#D8D8D8'}}>豆为号:{this.state.userName}</Text>
                        
                         </View>

                          </View>
                          </TouchableOpacity>
     


     <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'真实姓名'})}}>
        <View style={{flexDirection:'row',
               backgroundColor:'#fff',
               borderTopColor:'#F0F0F0',
               borderTopWidth:1,
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:40,
               alignItems:'center',
               justifyContent:'space-between',
               paddingLeft:10,
               paddingRight:10,
               marginTop:10,
               }}>
                <Text style={{fontSize:13,
                  color:'#585858',
                  fontFamily:'Microsoft YaHei'}}>
                真实姓名</Text>
           
                <View 
                style={{flexDirection:'row',alignItems:'center'}}>
                 
                <TextInput
                underlineColorAndroid='transparent' 
                value={this.state.realName}
                ></TextInput>
                <Image source={require('../Views/cygl/imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
               </View>
                </View>
                </TouchableOpacity>
    
        <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'联系地址'})}}>
        <View style={{flexDirection:'row',
               backgroundColor:'#fff',
               borderTopColor:'#F0F0F0',
               borderTopWidth:1,
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:40,
               alignItems:'center',
               justifyContent:'space-between',
               paddingLeft:10,
               paddingRight:10,
               marginTop:10,
               }}>
                <Text style={{fontSize:13,
                  color:'#585858',
                  fontFamily:'Microsoft YaHei'}}>
              联系地址</Text> 
               <View 
                style={{flexDirection:'row',alignItems:'center'}}>
                 
     

<Text style={{fontSize:13,
color:'#585858',
fontFamily:'Microsoft YaHei'}}>
{this.state.contactAddress}</Text>
<Image source={require('../Views/cygl/imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
</View>
                </View>
     
            </TouchableOpacity> 

          <TouchableOpacity onPress={()=>{this.setState({type:6,typetitle:'出生年月'})}}>
          <View style={{flexDirection:'row',
               backgroundColor:'#fff',
               borderTopColor:'#F0F0F0',
               borderTopWidth:1,
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:40,
               alignItems:'center',
               justifyContent:'space-between',
               paddingLeft:10,
               paddingRight:10,
               marginTop:10,
               }}>
                <Text style={{fontSize:13,
                  color:'#585858',
                  fontFamily:'Microsoft YaHei'}}>
                出生年月</Text> 
                <View 
                style={{flexDirection:'row',alignItems:'center'}}>

                            

<Text style={{fontSize:13,
color:'#585858',
fontFamily:'Microsoft YaHei'}}>
{this.state.birthday}</Text>
<Image source={require('../Views/cygl/imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
 
              
                 </View>                                             
            </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'所属区域'})}}>
            <View style={{flexDirection:'row',
               backgroundColor:'#fff',
               borderTopColor:'#F0F0F0',
               borderTopWidth:1,
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:40,
               alignItems:'center',
               justifyContent:'space-between',
               paddingLeft:10,
               paddingRight:10,
               marginTop:10,
               }}>
                <Text style={{fontSize:13,
                  color:'#585858',
                  fontFamily:'Microsoft YaHei'}}>
                     所属区域</Text> 
                  <View 
                style={{flexDirection:'row',alignItems:'center'}}>
                  
             
             
           

<Text style={{fontSize:13,
color:'#585858',
fontFamily:'Microsoft YaHei'}}>
{this.state.regionBelong}</Text>
<Image source={require('../Views/cygl/imgs/go.png')}  
style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
</View>     
           
             
                 
                </View>   
                </TouchableOpacity>
                  

     </ScrollView>

     
</View>
       )
    }else if(this.state.type==5){

        return(
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
                       onPress={()=>{this.setState({type:3})}}>
                         <Image source={require('../Views/cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                         </Image>
                       </TouchableOpacity> 
                       </View> 
                       <View style={{justifyContent:'center',alignItems:'center'}}>
                           <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
                       </View> 
                       <View style={{marginRight:5,width:21}}> 
                            
                       </View> 
                   </View>
                   <View backgroundColor='#F2F2F2' 
                               style={{height:deviceheight-60}}>
                    <View style={{backgroundColor:'#fff',marginTop:10,height:40}}>
                    <TextInput   underlineColorAndroid='transparent' 
                         clearButtonMode='always'
                          multiline={false}
                          defaultValue={this.state.typecontent} 
                          onChangeText={(v)=>{
                             if(this.state.typetitle=="真实姓名"){
                                    this.setState({realName:v})
                             } 
                           
                             else if(this.state.typetitle=="联系地址"){

                                this.setState({contactAddress:v})
                             }
                             else if(this.state.typetitle=="出生年月"){

                                this.setState({birthday:v})
                             } 
                             else if(this.state.typetitle=="所属区域"){

                                this.setState({regionBelong:v})
                             }
                        
                          }}
                    >

                    </TextInput>
                    </View>
                    </View>
               </View>
        )
    }  else if(this.state.type==6){

        return(
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
                       onPress={()=>{this.setState({type:3})}}>
                         <Image source={require('../Views/cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                         </Image>
                       </TouchableOpacity> 
                       </View> 
                       <View style={{justifyContent:'center',alignItems:'center'}}>
                           <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
                       </View> 
                       <View style={{marginRight:5,width:21}}> 
                            
                       </View> 
                   </View>
                   <View backgroundColor='#F2F2F2' 
                               style={{height:deviceheight-60}}>
                    <View style={{backgroundColor:'#fff',marginTop:10,height:40}}>
                    <DatePicker
        style={{width: 200}}
        date={this.state.birthday}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { 
            this.setState({birthday: date})}}
      />
                    </View>
                    </View>
               </View>
        )
     }else if(this.state.type==7){
         return <ScannerScreen callback={this.ScanSucess.bind(this)}></ScannerScreen>
       }
       else if(this.state.type==8){
        return(
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
                       onPress={()=>{this.setState({type:3})}}>
                         <Image source={require('../Views/cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                         </Image>
                       </TouchableOpacity> 
                       </View> 
                       <View style={{justifyContent:'center',alignItems:'center'}}>
                           <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
                       </View> 
                       <View style={{marginRight:5,width:21}}> 
                            
                       </View> 
                   </View>
                   <View backgroundColor='#F2F2F2' 
                               style={{height:deviceheight-60}}>
                    <View style={{backgroundColor:'#fff',marginTop:10,height:40}}>
                    <ModalDropdown options={['爸爸','妈妈','爷爷','奶奶','外公','外婆']}
                                   defaultValue={'请选择用户角色'}
                                   onSelect={(i,v)=>{
                                    this.setState({userRole:v})
                                 }}
                                      dropdownStyle={{width:150,fontSize:16}}
                                      dropdownTextStyle={{fontSize:16}}
                                      textStyle={{fontSize:16,justifyContent:'center'}}
                                      style={{flex:2,justifyContent:'center',height:40}}/>
                    </View>
                    </View>
               </View>
        )
      }
}
}
