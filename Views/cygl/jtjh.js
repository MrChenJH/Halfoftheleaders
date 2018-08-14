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
    Dimensions,
    TextInput,
    Switch
} from 'react-native';

import Checkbox from '../component/checkbox'

import ModalDropdown from 'react-native-modal-dropdown';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class jtjh extends Component {
    constructor(props) {
        super(props);
     this.state = {
            dataSource: ds.cloneWithRows([
                {title:'做作业',xz:true,jds:100},
                {title:'打扫卫生',xz:false,jds:100},
                {title:'洗碗',xz:false,jds:100},
                {title:'按时睡觉',xz:false,jds:100}
              ]),
              type:1
        }
    }
  
    _remderItem(t, i) {
        if(t.img){
        return ( <View key = {i} 
        style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center',marginTop:10}} >
        <Image
            source={t.img}
            style={{
            height: 45,
            width: 45
        }}
        resizeMode='contain'>
        </Image> 
        <Text style={{fontSize:12}}> {
            t.name
        }
         </Text>
            </View>)}else{
                return <View key = {i} 
                style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center'}} />
            }
    }

    render() { 
        const {back}=this.props
        if(this.state.type==1){
            return (
               <View
               
               style={{ backgroundColor:'#efefef',height:deviceheight}}
               >
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
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  
                        resizeMode='stretch' 
                         style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>家庭计划</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
                  <TouchableOpacity  
                      style={{height:25,width:25,marginRight:10}} 
                      onPress={()=>{ this.setState({type:6})}}>
                        <Image source={require('./imgs/tj.png')}  
                        resizeMode='stretch'
                        style={{height:25,width:25,marginRight:10}} >
                        </Image>
                      </TouchableOpacity> 
                        <TouchableOpacity  
                      style={{height:20,width:20}} 
                      onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  
                        resizeMode='stretch'
                        style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                  <View style={{flexDirection:'row',
                                     height:40,
                                     borderBottomWidth:1,
                                     borderBottomColor:'#F0F0F0',
                                     backgroundColor:'#fff'
                                     
                            }}> 
                                 
                                   <View style={{
                                       flex:1,
                                       flexDirection:'row'
                                       }}>
                                       <View style={{flex:2,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                        <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>全部</Text> 
                                       </TouchableOpacity>
                                       </View> 
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                                      
                                       </View>
                                   </View>
                              
                
                
                               
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>计划任务</Text> 
                                      
                                       </TouchableOpacity>
                                       </View> 
                                       
                                   </View>
                                  
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>日常行为</Text>
                                       </TouchableOpacity>
                                       </View> 
                    
                                   </View>
                                
                                   <View style={{
                                             flex:2,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,
                                        justifyContent:'center',
                                        alignItems:'center',
                                       flexDirection:'row'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>我有话说</Text>
                                       </TouchableOpacity>
                     
                                       </View> 
                    
                                   </View>
                           
                                   
                               
                
                               </View> 
                  <ScrollView style={{backgroundColor:'#efefef'}}>
                  <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                     <TouchableOpacity  
                                           onPress={()=>{this.setState({type:2})}}>
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:rowData.xz?'#FB9401':'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>金豆:{rowData.jds}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>

                                                          <Image source={require('./imgs/delete.png')} resizeMode='stretch' style={{height:20,width:20}}></Image>
                                                      </View>
                                                    
                                            
                                         </View>
                                        </TouchableOpacity>
                                         }
                                   />
                    
                            </ScrollView>
           </View>
            )
        }
        else if(this.state.type==2)
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
                       
                       
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>计划详情</Text>
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
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>
                      </View>
                      </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'项目名称',typecontent:'8'})}}>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>                                             
                        </View>
                        </TouchableOpacity>
                   
                 </View>
            </View>
              )
            }else if(this.state.type==4){
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
                                 clearButtonMode='always'
                                  multiline={false}
                                  defaultValue={this.state.typecontent}
                            >
    
                            </TextInput>
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
                                      onPress={()=>{this.setState({type:1})}}>
                                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                                        </Image>
                                      </TouchableOpacity> 
                                </View> 
                                      <View style={{justifyContent:'center',alignItems:'center'}}>
                                          <Text 
                                          style={{fontSize:16,
                                            color:'#FFF',fontWeight:'bold'}}>推荐计划</Text>
                                      </View> 
                                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={()=>{}}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                                  </View>
                             
                               <View style={{flexDirection:'row',
                                     height:40,
                                     borderBottomWidth:1,
                                     borderBottomColor:'#F0F0F0'
                            }}> 
                                 
                                   <View style={{
                                       flex:1,
                                     
                                       flexDirection:'row'
                                       }}>
                                       <View style={{flex:2,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                        <Text style={{fontFamily:'SimSun',
                                                fontSize:13,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>全部</Text> 
                                       </TouchableOpacity>
                                       </View> 
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                                                 
                                       </View>
                                   </View>
                              
                
                
                               
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:13,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>计划任务</Text> 
                                      
                                       </TouchableOpacity>
                                       </View> 
                                       
                                   </View>
                                  
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:13,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>日常行为</Text>
                                       </TouchableOpacity>
                                       </View> 
                    
                                   </View>
                                
                                   <View style={{
                                             flex:2,
                                             flexDirection:'row'
                                   }}>
                                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                       <TouchableOpacity >
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:13,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>我有话说</Text>
                                       </TouchableOpacity>
                                       </View> 
                    
                                   </View>
                           
                                   
                               
                
                               </View> 
                               <View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>
                               <ScrollView >
                               <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                     <TouchableOpacity  
                                           onPress={()=>{this.setState({type:2})}}>
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>平台推荐</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>应用次数 39</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>

                                                         <Checkbox styles={{height:20,width:20}}  isChecked={rowData.xz}></Checkbox>
                                                      </View>
                                                    
                                            
                                         </View>
                                        </TouchableOpacity>
                                         }
                                   />
                                              
                               </ScrollView>
               </View>
                            </View>
                            )
            }
            else{
                return(<View>
            <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                <TouchableOpacity   
                   style={{height:40,
                    width:35,
 
                 justifyContent:'center',
                 alignItems:'flex-end'}} 
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>计划添加</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={()=>{}}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                  </View>
                  <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   

                                <Text style={{flex:1}}>项目类型</Text>
                        
                                <ModalDropdown options={['计划任务', 
                         '日常行为','我有话说']}
    defaultValue={'请选择项目类型'}
     dropdownStyle={{width:150,fontSize:12}}
     dropdownTextStyle={{fontSize:12}}
     textStyle={{fontSize:12,justifyContent:'center'}}
     style={{flex:2,justifyContent:'center',height:40}}/>
                           
                   </View>
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                          <Text style={{flex:1}}>项目名称</Text>
                        
                        <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入项目名称'
                           placeholderTextColor='black'
                           value={this.state.user}>
                           </TextInput>
                            
                            
                           
                   </View>
                  
                  
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                              <Text style={{flex:1}}>金豆数量</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入金豆数量'
                           placeholderTextColor='black'
                           value={this.state.user}>
                           </TextInput>
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                                     <Text style={{flex:1}}>周期类型</Text>
                                     <ModalDropdown options={['每周', 
                         '每月']}
    defaultValue={'请选择周期类型'}
     dropdownStyle={{width:150,fontSize:12}}
     dropdownTextStyle={{fontSize:12}}
     textStyle={{fontSize:12,justifyContent:'center'}}
     style={{flex:2,justifyContent:'center',height:40}}/>
                          
                   </View>
                 
                 
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>      
                            

                                           <Text style={{flex:1}}>周期开始时间</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入周期开始时间'
                           placeholderTextColor='black'
                           value={this.state.user}>
                           </TextInput>
                            
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                            

                            
                            <Text style={{flex:1}}>周期结束时间</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入周期结束时间'
                           placeholderTextColor='black'
                           value={this.state.user}>
                           </TextInput>
                           
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                                 <Text style={{flex:1}}>是否循环</Text>
                                 <View style={{flex:2,alignItems:'flex-start'}}>
                                 <Switch onValueChange={()=>{


                                 }}></Switch>
                                 </View>
                   </View>

        
                </View>
                  )
      }
   }
}