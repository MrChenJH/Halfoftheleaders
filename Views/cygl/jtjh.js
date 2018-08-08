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
    TextInput
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
                {title:'做作业'},
                {title:'打扫卫生'},
                {title:'洗碗'},
                {title:'按时睡觉'}
              ]),
              dataSource1: ds.cloneWithRows([
                {title:'做作业'},
                {title:'打扫卫生'},
                {title:'洗碗'},
                {title:'按时睡觉'}
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
                            color:'#FFF',fontWeight:'bold'}}>家庭计划</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
               
                  <ScrollView>
                               <ListView
                                  dataSource={this.state.dataSource1}
                                   renderRow={(rowData) => 
                                    
                                     <TouchableOpacity  
                              
                                     onPress={()=>{this.setState({type:2})}}
                                     >
                                        <View 
                                    style={{flexDirection:'row',
                                             borderTopColor:'#F0F0F0',
                                             borderTopWidth:1,
                                             marginTop:5,
                                             height:110}}>
                                        <View style={{width:deviceWidth*0.3,
                                             paddingLeft:5,
                                             paddingTop:5}}>
                                        <Image source={require('./imgs/plan.jpg')} style={{width:deviceWidth*0.25,height:deviceWidth*0.2
                                        
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{width:deviceWidth*0.75,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>{rowData.title}</Text>
                                      

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
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:30,alignItems:'center'}}>
                <TouchableOpacity  onPress={()=>{this.setState({type:1})}} style={{height:15,width:15}}>
                  <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                  </Image>
                </TouchableOpacity>
            </View>
                <ScrollView style={{
                    backgroundColor: '#D0D0D0'
                }}>
                   <View
                        style={{
                        height:600,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 5,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 5
                    }}>
                     
                            <View
                                style={{
                                  flexDirection:'row',
                                  height:50,
                                  justifyContent:'space-between',
                                  alignItems:'center'
                            }}>
                            <View style={{flexShrink:1}}></View>
                            <View style={{flexShrink:1,alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:20}}>家庭计划库</Text></View>
                            <View style={{flexShrink:1,flexDirection:'row',justifyContent:'space-between'}}>
                         
                            </View>
                           </View>
                          
                           <ScrollView>
                               <ListView
                                  dataSource={this.state.dataSource1}
                                   renderRow={(rowData) => 
                                    
                                     <TouchableOpacity  
                              
                                     onPress={()=>{this.setState({type:2})}}
                                     >
                                        <View 
                                    style={{flexDirection:'row',
                                             borderTopColor:'#F0F0F0',
                                             borderTopWidth:1,
                                             marginTop:5,
                                             height:110}}>
                                        <View style={{width:deviceWidth*0.3,
                                             paddingLeft:5,
                                             paddingTop:5}}>
                                        <Image source={require('./imgs/hd2.jpg')} style={{width:deviceWidth*0.25,height:deviceWidth*0.2
                                        
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{width:deviceWidth*0.75,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>{rowData.title}</Text>
                                         <View
                                         style={{flexDirection:'row',
                                        marginTop:5}}
                                         >
                                       
                                            <View 
                                             style={{
                                                 borderRightWidth:1,
                                                 borderRightColor:'#A2A0A0',
                                                 flex:3
                                             }}>
                                                <Text style={{fontSize:10,color:'#848484'}}>招募人数:5</Text>
                                             </View>
                                             <View 
                                             style={{
                                                 borderRightWidth:1,
                                                 borderRightColor:'#A2A0A0',
                                                 flex:3,
                                                 alignItems:'center'
                                             }}>
                                                <Text style={{fontSize:10,color:'#848484'}}>组织人:张三</Text>
                                             </View>
                                             <View style={{   flex:5}}>
                                             </View>
                                            
                                         </View>
                                         <Text style={{fontSize:10,color:'#848484',fontWeight:'bold',marginTop:5}}>地点:上海市普陀区长寿公园</Text>
                                         <Text style={{fontSize:10,color:'#848484',fontWeight:'bold',marginTop:5}}>活动报名开始时间:{rowData.time}</Text>
                                         <Text style={{fontSize:10,color:'#848484',fontWeight:'bold',marginTop:5}}>活动报名截止时间:{rowData.time}</Text>
                                       </View>
      
                                        </View>
                                        </TouchableOpacity>
                                         }
                                   />
                    
                            </ScrollView>
                            <View style={{paddingLeft:10,paddingRight:10,marginBottom: 10}}>
                                <Button onPress={()=>{}} color='blue' title='提交'></Button>
                            </View>
                       </View>
                </ScrollView>
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
                            color:'#FFF',fontWeight:'bold'}}>计划编辑</Text>
                      </View> 
                      <View style={{marginRight:5,width:22}}> 
                     
                      </View> 
                  </View>
                  <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   

                                <Text style={{flex:1}}>类型</Text>
                        
                              <TextInput 
                                 style={{flex:2}}
                                 underlineColorAndroid='transparent'
                                 placeholder='请输入类型'
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
                                     <Text style={{flex:1}}>周期</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入周期'
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
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入是否循环'
                           placeholderTextColor='black'
                           value={this.state.user}>
                           </TextInput>
                   </View>

                      <View style={{paddingLeft:10,paddingRight:10,marginTop:10,marginBottom:20,height:80,alignItems:'center'}}>
           <TouchableOpacity>
               <Image source={require('./imgs/sub.png')}
                style={{height:50,width:200}} 
                resizeMode='cover'></Image>
           </TouchableOpacity>
        </View>
                </View>
                  )
      }
   }
}