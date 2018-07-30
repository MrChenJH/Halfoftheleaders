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
    TextInput
} from 'react-native';

import Checkbox from '../component/checkbox'

import ModalDropdown from 'react-native-modal-dropdown';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class jtjh extends Component {
    constructor(props) {
        super(props);
     this.state = {
            dataSource: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01 10:45'},
                {title:'打扫卫生',time:'2018-07-01 10:45'},
                {title:'洗碗',time:'2018-07-01 10:45'},
                {title:'按时睡觉',time:'2018-07-01 10:45'}
              ]),
              dataSource1: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01 10:45'},
                {title:'打扫卫生',time:'2018-07-01 10:45'},
                {title:'洗碗',time:'2018-07-01 10:45'},
                {title:'按时睡觉',time:'2018-07-01 10:45'}
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
        if(this.state.type==1){
            return (
       
              
                <View>
                       
                        <View
                            style={{
                            height: 250,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
    
                            <View style={{
                                height:250
                            }}>
                                     <ImageBackground
                                       
                                 resizeMode='contain'
                                    source={ require('./imgs/banner_bg.png')
                                }
                                  
                                    style={{
                                     height:250,
                                     width:1000
                                }}></ImageBackground>
                            </View>
                           
                         
                        </View>
                      
                      
                      
                      <ScrollView style={{
                        backgroundColor: '#D0D0D0'
                    }}>
                    
    
                      
                     
                     
                        <View
                            style={{
                            height: 150,
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
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        dataSource: ds.cloneWithRows([
                                            {title:'做作业',time:'2018-07-01 10:45'},
                                            {title:'打扫卫生',time:'2018-07-01 10:45'},
                                            {title:'洗碗',time:'2018-07-01 10:45'},
                                            {title:'按时睡觉',time:'2018-07-01 10:45'}
                                          ]),
                                          dataSource1: ds.cloneWithRows([
                                            {title:'做作业',time:'2018-07-01 10:45'},
                                            {title:'打扫卫生',time:'2018-07-01 10:45'},
                                            {title:'洗碗',time:'2018-07-01 10:45'},
                                            {title:'按时睡觉',time:'2018-07-01 10:45'}
                                          ]),
                                          type:2
                                    })
                                }} >
                                <Image source={require('./imgs/tj.png')} style={{height:30,width:30}} resizeMode='stretch'></Image>
                            
                                </TouchableOpacity> 
                                <TouchableOpacity onPress={()=>{
                                   this.setState({
                                        dataSource: ds.cloneWithRows([
                                            {title:'做作业',time:'2018-07-01 10:45'},
                                            {title:'打扫卫生',time:'2018-07-01 10:45'},
                                            {title:'洗碗',time:'2018-07-01 10:45'},
                                            {title:'按时睡觉',time:'2018-07-01 10:45'}
                                          ]),
                                          dataSource1: ds.cloneWithRows([
                                            {title:'做作业',time:'2018-07-01 10:45'},
                                            {title:'打扫卫生',time:'2018-07-01 10:45'},
                                            {title:'洗碗',time:'2018-07-01 10:45'},
                                            {title:'按时睡觉',time:'2018-07-01 10:45'}
                                          ]),
                                          type:3
                                    })
                                }} style={{marginLeft:10,marginRight:10}} >
                                <Image source={require('./imgs/add.png')}   style={{height:25,width:25}} resizeMode='stretch'></Image>
                                     
                                </TouchableOpacity>
                                </View>
                               </View>
                              
                                <View
                                    style={{
                                    height: 300,
                                    marginBottom: 20,
                                    marginTop: 5
                                }}>
                                   
                                   <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                                        <View style={{flex:1}}></View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                       <Text style={{flex:8}}>{rowData.time}</Text>
                                       </View>}
                                   />
                                </View>
                           </View>
                    </ScrollView>
           </View>
            )
        }
        else if(this.state.type==2)
        {
              return(
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
                          
                            <View
                                style={{
                                height:400,
                                marginBottom: 10,
                                marginTop: 5
                            }}>
                                     <ListView
                                  dataSource={this.state.dataSource1}
                                   renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                                        <View style={{flex:1}}></View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                        <Text style={{flex:8}}>{rowData.time}</Text>
                                        <Checkbox styles={{height:20,width:20}}></Checkbox>
                                       </View>}
                                   />
                    
                            </View>
                            <View style={{paddingLeft:10,paddingRight:10,marginBottom: 10}}>
                                <Button onPress={()=>{}} color='blue' title='提交'></Button>
                            </View>
                       </View>
                </ScrollView>
              )
            }
            else{
                return(<View>
                    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:30,alignItems:'center'}}>
                        <TouchableOpacity  style={{height:15,width:15}}>
                          <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                          </Image>
                        </TouchableOpacity>
                    </View>
                 
                    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>类型</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入账号名'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
  
                          <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>项目名称</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入密码'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>金豆数量</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='请输入密码'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>周期</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown  options={['角色1', '角色2']}/>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>周期开始时间</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown options={['角色1', '角色2']}/>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>周期结束时间</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown options={['角色1', '角色2']}/>
                             </View>
                   </View>
                   
                   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>是否循环</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                             <ModalDropdown options={['角色1', '角色2']}/>
                             </View>
                   </View>

                   <View style={{paddingLeft:10,paddingRight:10,marginTop:10}}>
                       <Button onPress={()=>{}} color='blue' title='提交'></Button>
                   </View>
                </View>
                  )
      }
   }
}