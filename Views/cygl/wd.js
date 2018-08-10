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
         
             type:1,
             typetitle:'',
             typecontent:''
       }
    }

  
render(){
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
               
                <View style={{height:20,width:20}}>
                   </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>我的</Text>
                      </View> 
                      <View style={{marginRight:5,width:22}}> 
                    
                      </View> 
                  </View>
                   


              <View backgroundColor='#F2F2F2' 
                  style={{height:deviceheight-60}}>

             <View 
                                    style={{flexDirection:'row',
                                             borderTopColor:'#F0F0F0',
                                             borderTopWidth:1,
                                             backgroundColor:'#fff',
                                             marginTop:5,
                                             height:110}}>
                                        <View style={{width:deviceWidth*0.3,
                                             paddingLeft:5,
                                             paddingTop:5}}>
                                        <Image source={require('./imgs/tx.png')} style={{width:deviceWidth*0.25,height:deviceWidth*0.2
                                        
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{width:deviceWidth*0.75,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>张三</Text>
                                      
                                       </View>
      
                                        </View>
                    <TouchableOpacity onPress={()=>{this.setState({type:5,typetitle:'活动内容简介'})}}>
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
                         
                                
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                             
                  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'活动地点',typecontent:'上海'})}}>
                
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
                               
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                            </View>
                            </TouchableOpacity>
                          

                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'活动时间',typecontent:'2018-9-1'})}}>
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
                               
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                          </View>
                          </TouchableOpacity>


      <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'组织人',typecontent:'张三'})}}>
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
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   张三</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>                    
                          </View>
                          </TouchableOpacity>
                  


                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'联系方式',typecontent:'12222222'})}}>
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
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   133000000</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>               
                          </View> 
                          </TouchableOpacity>



                        <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'招募人数',typecontent:'5'})}}>
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
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   6/人</Text>  
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
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
                      关于豆为</Text> 
                      <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                
                              <Image source={require('./imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>           
                              </View>   
                   </View>
              </View>
          )
}
}