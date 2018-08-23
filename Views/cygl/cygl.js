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
import Main from '../Main1'
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
                        this.props.navigator.push({
                            component:Main,
                            })
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
                                                  }}>豆为之家</Text>
                       
                                            <Text style={{
                                                   color:'#BDBDBD',
                                                   fontSize:12,
                                                   width:100,
                                                   textAlign:'center'
                                                    }}>家庭管理员</Text>
                                               <Text style={{
                                                    color:'#BDBDBD',
                                                    fontSize:12,
                                                        textAlign:'center'
                                                    }}>父亲</Text>
                                               
                                          </View>
                                             
                                          <View
                                         style={{flexDirection:'row',
                                        marginTop:5}} >
                                       
                                    
            
                                            <Text style={{fontSize:12,
                                                   color:'#2E2E2E',
                                                   color:'#BDBDBD',
                                           }}>最近登录时间 :  2018/8/9  13:31</Text>
                                         
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
                          <View style={{marginRight:5,width:22}}> 
                        
                          </View> 
                      </View>
                       
      
      
                      <View backgroundColor='#F2F2F2' 
                      style={{height:deviceheight-60}}>
      
                         <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'账号名',typecontent:'张三的家'})}}>
                    
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
                                  张三的家</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'密码',typecontent:'123456'})}}>
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
                                   123456</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                 
                        </View> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'系统角色',typecontent:'家庭管理员'})}}>
                    
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
                                     审核员</Text>  
                                  <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                </View>
                                </TouchableOpacity>
                              
      
                            <TouchableOpacity onPress={()=>{this.setState({type:6,typetitle:'家庭角色',typecontent:'普通用户'})}}>
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
                                    爸爸</Text>  
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
    defaultValue={'请选择系统角色'}
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
    defaultValue={'请选择用户角色'}
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
                     <TouchableOpacity onPress={()=>{}}>
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
                      value={this.state.user}></TextInput>
                 
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
                       fontSize:12,
               
                     color:'#6E6E6E',
                     flex:1}}>
                        确认密码 :</Text>
          
                     <TextInput 
                         style={{flex:2}}
                     underlineColorAndroid='transparent'
                      placeholder='请输入确认密码'
                      placeholderTextColor='#BDBDBD'
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
                       fontSize:12,
               
                     color:'#6E6E6E',
                     flex:1}}>
                        出生日期</Text>
          
                     <TextInput 
                         style={{flex:2}}
                     underlineColorAndroid='transparent'
                      placeholder='请输入出生日期'
                      placeholderTextColor='#BDBDBD'
                      value={this.state.user}></TextInput>
              
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


  