import React, {Component} from 'react';
import {
    ListView,
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
     ImageBackground,
    ScrollView,
    AsyncStorage
} from 'react-native'; 
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import Main from '../Main1' 
import app from '../../app.json';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            jtnc:"",
            userName:'',
            updateUserName:'',
            pwd:'',
            qrpwd:'',
            realName:'',
            birthday:'',
            systemRole:'',
            userRole:'',
            type:1,
            dataSource: ds.cloneWithRows([
             
              ]),
         }
     }
 


 _remove(id){
  fetch(app.Host+'api/family/deleteMembers?id='+id)
  .then((response) =>{
    if(response.ok){
      return response.json();
    }
  })
  .then((responseJson) => { 
    fetch(app.Host+'api/family/Members?jtnc='+this.state.jtnc)
    .then((response) =>{
      if(response.ok){
        return response.json();
      }
    })
    .then((responseJson) => { 
      let data=JSON.parse(responseJson).data;
      this.setState({dataSource:ds.cloneWithRows(data)})
    })
    .catch((error) => {
      console.error(error); 
    });
  })
  .catch((error) => {
    console.error(error); 
  });
 }
 

  //添加成员
  AddMember(){
    let url = app.Host+"api/family/AddMember";  
    let params ={
        "jtnc":this.state.jtnc,
        "userName":this.state.userName,
        "pwd":this.state.pwd,
        "realName":this.state.realName,
        "sex":['妈妈','外婆','奶奶','女儿'].findIndex(t=>t==this.state.userRole)>-1?1:0,
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
        fetch(app.Host+'api/family/Members?jtnc='+this.state.jtnc)
          .then((response) =>{
            if(response.ok){
              return response.json();
            }
          })
          .then((responseJson) => { 
            let data=JSON.parse(responseJson).data;
            this.setState({dataSource:ds.cloneWithRows(data),type:1})
          })
          .catch((error) => {
            console.error(error); 
          });
        }
    }).catch((error) => {
        console.error(error);
    });
 
  }
    
  updateMember(){
    let url = app.Host+"api/family/UpdateMember";  
    let params ={
        "jtnc":this.state.jtnc,
        "userName":this.state.updateUserName,
        "pwd":this.state.pwd,
        "realName":this.state.realName,
        "sex":['妈妈','外婆','奶奶','女儿'].findIndex(t=>t==this.state.userRole)>-1?1:0,
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
          fetch(app.Host+'api/family/Members?jtnc='+this.state.jtnc)
          .then((response) =>{
            if(response.ok){
              return response.json();
            }
          })
          .then((responseJson) => { 
            let data=JSON.parse(responseJson).data;
            this.setState({dataSource:ds.cloneWithRows(data),type:1})
          })
          .catch((error) => {
            console.error(error); 
          });
        }
    }).catch((error) => {
        console.error(error);
    });
  }

  componentWillMount() {

    AsyncStorage.getItem('user').then((item)=>{
       return JSON.parse(item)
         }).then((item)=>{ 
        
              this.setState({jtnc:decodeURI(item.nc)}) 

              fetch(app.Host+'api/family/Members?jtnc='+this.state.jtnc)
              .then((response) =>{
                if(response.ok){
                  return response.json();
                }
              })
              .then((responseJson) => { 
                let data=JSON.parse(responseJson).data;
                this.setState({dataSource:ds.cloneWithRows(data)})
              })
              .catch((error) => {
                console.error(error); 
              });
         })
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
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity   
                   style={{height:50,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{
                        let  destRoute=this.props.navigator.getCurrentRoutes().find((item)=>{
                          return item.id=="Main1"
                        })
                      
                        this.props.navigator.popToRoute(destRoute);
                      }}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>成员管理</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
             
             
               <ScrollView style={{backgroundColor:'#F2F2F2'}}>
               <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                   <TouchableOpacity  
                              
                                     onPress={()=>{
                                       this.setState({type:2,updateUserName: decodeURI(rowData.userName),
                                                               pwd:decodeURI(rowData.pwd),
                                                           systemRole:decodeURI(rowData.systemRole),
                                                           userRole:decodeURI(rowData.userRole)})}}
                                     >
                                        <View 
                                    style={{flexDirection:'row',
                                             borderTopColor:'#F0F0F0',
                                             borderTopWidth:1,
                                             backgroundColor:'#fff',
                                             margin:10,
                                             height:deviceWidth*0.2}}>
                                        <View style={{
                                                      width:deviceWidth*0.2,
                                                     justifyContent:'center',
                                                     alignItems:'center'
                                             }}>
                                        <Image
                                         source={require('./imgs/tx/bb.png')} 
                                           style={{width:deviceWidth*0.12,
                                            height:deviceWidth*0.12}} 
                                            resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{
                                             width:deviceWidth*0.85,
                                             justifyContent:'center',
                                             alignItems:'flex-start'}}>
          
                                         <View
                                         style={{flexDirection:'row',alignItems:'flex-end'}} >
                                       
                                            
                                                <Text style={{fontSize:16,
                                                    color:'#2E2E2E',
                                                    fontWeight:'bold',
                                                    width:80
                                                  }}>{decodeURI(rowData.userName)}</Text>
                       
                                            <Text style={{
                                                   color:'#BDBDBD',
                                                   fontSize:12,
                                                   width:100,
                                                   textAlign:'center'
                                                    }}>{decodeURI(rowData.systemRole)}</Text>
                                               <Text style={{
                                                    color:'#BDBDBD',
                                                    fontSize:12,
                                                        textAlign:'center'
                                                    }}>{decodeURI(rowData.userRole)}</Text>
                                               
                                          </View>
                                             
                                          <View
                                         style={{flexDirection:'row',
                                        marginTop:5}} >
                                       
                                    
            
                                            <Text style={{fontSize:12,
                                                   color:'#2E2E2E',
                                                   color:'#BDBDBD',
                                           }}>最近登录时间 :{decodeURI(rowData.logTime)}</Text>
                                         
                                          </View>
                                       </View>
      
                                        </View>
                                        </TouchableOpacity>
                                         }
                                   />
               </ScrollView>
            </View>
              )} else if(this.state.type==2)
              {
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
                          onPress={()=>{this.setState({type:1})}}>
                            <Image source={require('./imgs/back.png')} 
                             resizeMode='stretch' 
                              style={{height:20,width:20}} >
                            </Image>
                          </TouchableOpacity> 
                          </View> 
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>成员详情</Text>
                          </View> 
                          <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.updateMember.bind(this)}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                      </View>
                       
      
      
                      <View backgroundColor='#F2F2F2' 
                      style={{height:deviceheight-60}}>
      
                         <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'账号名',typecontent:this.state.userName})}}>
                    
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
                              <Text style={{fontSize:12,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   账号名:</Text>  
                                   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:12,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                  {this.state.updateUserName}</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'密码',typecontent:this.state.pwd})}}>
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
                                  <Text 
                                   style={{fontSize:12,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                  密码</Text>
                                  <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                 <Text style={{
                                     fontSize:12,
                                     color:'#585858',
                                     fontFamily:'Microsoft YaHei'}}>
                                   {this.state.pwd}</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                 
                        </View> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'系统角色',typecontent:this.state.systemRole})}}>
                    
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
                                  <Text style={{fontSize:12,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                      系统角色:</Text>  
                                       <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:12,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                     {this.state.systemRole}</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                </View>
                                </TouchableOpacity>
                              
      
                            <TouchableOpacity onPress={()=>{this.setState({type:6,typetitle:'家庭角色',typecontent:this.state.userRole})}}>
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
                                  <Text style={{fontSize:12,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                               家庭角色</Text> 
                                 <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:12,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                    {this.state.userRole}</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                              </View>
                              </TouchableOpacity>
                       </View>
                  </View>
                    )
                  }else if(this.state.type==4){
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
                                     <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
                                   style={{fontSize:12}}
                                     clearButtonMode='always'
                                      multiline={false}
                                      defaultValue={this.state.typecontent}
                                      onChange={(v)=>{

                                          if(this.state.typetitle=="账号名"){

                                            this.setState({userName:v})
                                          }
                                          if(this.state.typetitle=="密码"){

                                            this.setState({pwd:v})
                                          }
                                      }}
                                >
        
                                </TextInput>
                                </View>
                                </View>
                           </View>
                               )
                  }else if(this.state.type==5){
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
                            
                             <View>
                             <TouchableOpacity  style={{height:20,width:20}}
                                   onPress={()=>{this.setState({type:2})}}>
                                     <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
                                <View style={{backgroundColor:'#fff',marginTop:10,height:40,justifyContent:'center'}}>
                                <ModalDropdown options={['审核员', 
                         '观察员','小鬼']}
                         defaultValue={this.state.systemRole}
                         onSelect={(i,v)=>{
                     
                           this.setState({systemRole:v})
                         }}
     dropdownStyle={{width:150,fontSize:12}}
     dropdownTextStyle={{fontSize:12}}
     textStyle={{fontSize:12,justifyContent:'center'}}
     style={{flex:2,justifyContent:'center',height:40}}/>
                                </View>
                                </View>
                           </View>
                               )
                  }else if(this.state.type==6){
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
                                     <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
                                <View style={{backgroundColor:'#fff',marginTop:10,height:40,justifyContent:'center'}}>
                                <ModalDropdown options={['爸爸','妈妈','爷爷','奶奶','外公','外婆']}
    defaultValue={this.state.userRole}
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
                  }else{
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
                           onPress={()=>{this.setState({type:1})}}>
                             <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                             </Image>
                           </TouchableOpacity> 
                           </View> 
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                               <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>添加家人</Text>
                           </View> 
                           
                           <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.AddMember.bind(this)}>
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
                
                     <Text style={{fontSize:12,
                     
                         color:'#6E6E6E',
                         flex:1}}>
                     登录账号:</Text>
                     <TextInput 
                     style={{flex:2}}
                      underlineColorAndroid='transparent'
                      placeholder='请输入账号'
                      placeholderTextColor='#BDBDBD'
                      onChangeText={(v)=>{
                                this.setState({userName:v})
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
                         登录密码:</Text>
             
              
                     <TextInput 
                      style={{flex:2}}
                      underlineColorAndroid='transparent'
                      placeholder='请输入密码'
                      placeholderTextColor='#BDBDBD'
                      textContentType='password'
                      onChangeText={(v)=>{
                        this.setState({pwd:v})
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
                   
                   <Text style={{
                       fontSize:12,
               
                     color:'#6E6E6E',
                     flex:1}}>
                        确认密码 :</Text>
          
                     <TextInput 
                         style={{flex:2}}
                     underlineColorAndroid='transparent'
                      placeholder='请输入确认密码'
                      placeholderTextColor='#BDBDBD'
         
                      onChangeText={(v)=>{
                        this.setState({qrpwd:v})
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
                   
                   <Text style={{
                       fontSize:12,
               
                     color:'#6E6E6E',
                     flex:1}}>
                        出生日期</Text>
          
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
                         onSelect={(i,v)=>{
                            this.setState({systemRole:v})
                         }}
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
        
        <Text style={{fontSize:12,
     
         color:'#6E6E6E',
         flex:1}}>
                         用户角色:</Text>
   <ModalDropdown options={['爸爸','妈妈','爷爷','奶奶','外公','外婆','儿子','女儿']}
          onSelect={(i,v)=>{
            this.setState({userRole:v})
         }}
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


  