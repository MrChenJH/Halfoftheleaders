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
 ScrollView
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
 
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            type:1,
            dataSource: ds.cloneWithRows([
                {title:'春游',time:'2018-7-1 13:00:00'},
                {title:'成果展',time:'2018-7-1 13:00:00'},
                {title:'其他展',time:'2018-7-1 13:00:00'},
                {title:'成果展',time:'2018-7-1 13:00:00'},
                {title:'其他展',time:'2018-7-1 13:00:00'}
              ]),

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
               
                <View  style={{height:50,width:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
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
             
             
               <ScrollView style={{backgroundColor:'#F2F2F2'}}>
               <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                   <TouchableOpacity  
                              
                                     onPress={()=>{this.setState({type:2})}}
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
                                         source={require('./imgs/txx.png')} 
                                           style={{width:deviceWidth*0.12,
                                            height:deviceWidth*0.12}} 
                                            resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{
                                             width:deviceWidth*0.85,
                                             justifyContent:'center',
                                             alignItems:'flex-start'}}>
          
                                         <View
                                         style={{flexDirection:'row'}} >
                                       
                                            
                                                <Text style={{fontSize:14,
                                                    color:'#2E2E2E'
                                                  }}>家庭账号:张三的家</Text>
                                          <Text style={{fontSize:10,fontWeight:'bold',textAlignVertical:'center'}}>｜</Text>
                                            <Text style={{fontSize:14,
                                                   color:'#2E2E2E',
                                                    }}>系统角色:家庭管理员</Text>
                                            
                                          </View>
                                           
                                          <View
                                         style={{flexDirection:'row',
                                        marginTop:5}} >
                                       
                                       <Text style={{fontSize:14,
                                                    color:'#2E2E2E',
                                                   }}>家庭角色:父亲</Text>
                                              <Text style={{fontSize:10,fontWeight:'bold',textAlignVertical:'center'}}>｜</Text>
                                            <Text style={{fontSize:14,
                                                   color:'#2E2E2E',
                                           }}>最近登录时间:2018/8/9 13:31</Text>
                                         
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
                   height:50,
                   alignItems:'center',
                   justifyContent:'space-between'
                   }}>
                   
                    <View>
      
                      
      
      
                    <TouchableOpacity  style={{height:20,width:20}}
                          onPress={()=>{this.setState({type:1})}}>
                            <Image source={require('./imgs/back.png')} 
                             resizeMode='stretch' 
                              style={{height:20,width:20}} >
                            </Image>
                          </TouchableOpacity> 
                          </View> 
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>计划详情</Text>
                          </View> 
                          <View style={{marginRight:5,width:22}}> 
                        
                          </View> 
                      </View>
                       
      
      
                      <View backgroundColor='#F2F2F2' 
                      style={{height:deviceheight-60}}>
      
                         <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'类型',typecontent:'系统预设'})}}>
                    
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
                                   类型:</Text>  
                                   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   系统预设</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'项目名称',typecontent:'8'})}}>
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
                                   style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                  项目名称</Text>
                                  <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                 <Text style={{
                                     fontSize:13,
                                     color:'#585858',
                                     fontFamily:'Microsoft YaHei'}}>
                                   系统预设</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                 
                        </View> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'金豆数量',typecontent:'8'})}}>
                    
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
                                       金豆数量:</Text>  
                                       <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                      8</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                </View>
                                </TouchableOpacity>
                              
      
                            <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期',typecontent:'5天'})}}>
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
                                 周期</Text> 
                                 <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                      5天</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                              </View>
                              </TouchableOpacity>
      
      
          <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期开始时间',typecontent:'2018-09-01'})}}>
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
                                     周期开始时间</Text> 
                                <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                       2018-09-01</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>                    
                              </View>
                              </TouchableOpacity>
                      
      
      
                            <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期结束时间',typecontent:'2019-08-01'})}}>
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
                         周期结束时间</Text> 
                         <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                       2019-08-01</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>               
                              </View> 
                              </TouchableOpacity>
      
      
      
                            <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'是否循环',typecontent:'是'})}}>
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
                                   是否循环</Text> 
                                 <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                      是</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>                                             
                              </View>
                              </TouchableOpacity>
                         
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


  