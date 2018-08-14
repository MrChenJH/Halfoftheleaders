import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Button,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';  

const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class Wd extends Component {
    constructor(props) {
        super(props);
        this.state = {
             typetitle:'',
             typecontent:'',
             type:1
       }
    }

  
render(){
    const {tc}=this.props;
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
               justifyContent:'space-between'
               }}>
               
                <View style={{height:20,width:20}}>
                   </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>我的</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ tc()}}>
                        <Image source={require('./imgs/tc.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                   


              <ScrollView scrollEnabled={true} style={{backgroundColor:'#F2F2F2'}} >
              <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'活动内容简介'})}}>
              
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
                                        <Image source={require('./imgs/tx/mm.png')} style={{width:48,height:48
                                        
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{flex:1,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>豆为之家</Text>
                                        <Text style={{fontSize:12,color:'#D8D8D8'}}>豆为号:134****233</Text>
                                      
                                       </View>
      
                                        </View>
                                        </TouchableOpacity>
                   
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
                              账户安全</Text>
                         
                                
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>
                             
                  
               
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
                                   清理缓存</Text>  
                                   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                               
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>
                            </View>
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
                            常见问题</Text> 
                             <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                               
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>
                          </View>
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
        功能介绍</Text> 
          <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                          
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>                    
                          </View>
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
                    当前版本</Text> 
                     <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                 
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>               
                          </View> 
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
   联系客服</Text> 
   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                 
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>                                             
                          </View>
                      
                

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
                      关于豆为</Text> 
                      <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>           
                              </View>   

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
                      关于豆为</Text> 
                      <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>           
                              </View>        
              
                   </ScrollView>

                   
              </View>
          )}
          else{
           return (
            <View>
                  
            <View style={{
         flexDirection:'row',
         borderBottomWidth:1,
         borderBottomColor:'#E6E6E6',
         backgroundColor:'#fe9c2e',
         height:40,
         alignItems:'center',
         justifyContent:'space-between'
         }}>
         
         <View  style={{height:50,width:20,alignItems:'center',justifyContent:'center'}}>
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
                    <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>我的</Text>
                </View> 
                <View style={{marginRight:5,width:20}}> 
             
                </View> 
            </View>
             


        <ScrollView  
        scrollEnabled={true} 
        style={{backgroundColor:'#F2F2F2'}} >

     
              <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'活动内容简介'})}}>
                <View style={{flexDirection:'row',
                       backgroundColor:'#fff',
                       borderTopColor:'#F0F0F0',
                       borderTopWidth:1,
                       borderBottomWidth:1,
                       borderBottomColor:'#F0F0F0',
                       height:60,
                       alignItems:'center',
                       justifyContent:'space-between',
                       paddingLeft:10,
                       paddingRight:10,
                       marginTop:10,
                       }}>
                        <Text style={{fontSize:13,
                          color:'#585858',
                          fontFamily:'Microsoft YaHei'}}>
                        头像</Text>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Image source={require('./imgs/tx/boy.png')}  style={{width:48,height:48}} resizeMode='stretch'></Image>  
                         <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>
                        </View>
                       
            
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'昵称',typecontent:'上海'})}}>
          
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
                             家庭昵称</Text>  
                             <View 
                        style={{flexDirection:'row',alignItems:'center'}}>
                         <Text>豆为之家</Text>
                        <Image source={require('./imgs/go.png')}
                          style={{width:10,height:10,marginLeft:5}} 
                          resizeMode='stretch'></Image>
                        </View>
                      </View>
                      </TouchableOpacity>
                    

                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'真实姓名',typecontent:'2018-9-1'})}}>
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
                        <Text>刘德华</Text>
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>
                    </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'性别',typecontent:'张三'})}}>
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
                         <Text>上海市松江区</Text>
                        <Image source={require('./imgs/go.png')}
                          style={{
                              width:10,
                            height:10,
                            marginLeft:5}}
                           resizeMode='stretch'></Image>
                        </View>                    
                    </View>
                    </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'联系地址',typecontent:'12222222'})}}>
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
                            <Text>四城公路111</Text>
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>               
                    </View> 
                    </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'出生年月',typecontent:'5'})}}>
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
性别</Text> 
<View 
                        style={{flexDirection:'row',alignItems:'center'}}>
                           <Text>男</Text>
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>                                             
                    </View>
                    </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'出生年月',typecontent:'5'})}}>
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
出生日期</Text> 
<View 
                        style={{flexDirection:'row',alignItems:'center'}}>
                           <Text>2013-9-10</Text>
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>                                             
                    </View>
                    </TouchableOpacity>

          

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
                账号有效期</Text> 
                <View 
                        style={{flexDirection:'row',alignItems:'center'}}>
                           
                           <Text>2018-12-31</Text>
                        <Image source={require('./imgs/go.png')} 
                     style={{width:10,height:10,marginLeft:5}}resizeMode='stretch'></Image>
                        </View>           
                        </View>   

                   
        
             </ScrollView>

             
        </View>
           )

          }
}
}