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
               <View>
              <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:40,
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
                            color:'#FFF',fontWeight:'bold'}}>家庭计划</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
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
               
                  <ScrollView>
                  <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                     <TouchableOpacity  
                                           onPress={()=>{this.setState({type:2})}}>
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:rowData.xz?'#FB9401':'#efefef',
                                                      borderTopWidth:1,
                                                      margin:10,
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
                                                          <Image source={require('./jdjf/remove.png')} resizeMode='stretch' style={{height:30,width:30}}></Image>
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
             height:50,
             alignItems:'center',
             justifyContent:'space-between'
             }}>
             <View  style={{height:50,width:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
            }else if(this.state.type==4){
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
                               onPress={()=>{this.setState({type:2})}}>
                                 <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                                 </Image>
                               </TouchableOpacity> 
                               </View> 
                               <View style={{justifyContent:'center',alignItems:'center'}}>
                                   <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
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
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:20,
                            color:'#FFF',fontWeight:'bold'}}>计划添加</Text>
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