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

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource1: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01 10:45'},
                {title:'洗碗',time:'2018-07-01 10:45'},
                {title:'按时睡觉',time:'2018-07-01 10:45'}
              ]),
              dataSource2: ds.cloneWithRows([
                {title:'家庭1'},
                {title:'家庭2'},
                {title:'家庭3'},
                {title:'家庭4'}
              ]),
              type:1
        }
    }

    render(){ 
        const {back}=this.props
        if(this.state.type==1){
    return (<View>
               <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:30,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                <TouchableOpacity  style={{height:15,width:15}}
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>我的活动</Text>
                      </View> 
                      <View> 
                      <TouchableOpacity  style={{height:15,width:15}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
             
               <View style={{flexDirection:'row',
                     height:30,
                     borderBottomWidth:1,
                     borderBottomColor:'#F0F0F0'
            }}> 
                 
                   <View style={{
                       flex:1,
                       borderLeftColor:'#F0F0F0',
                       borderLeftWidth:1,
                       flexDirection:'row'
                       }}>
                       <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}>
                       <TouchableOpacity >
                        <Text>全部</Text> 
                       </TouchableOpacity>
                       </View> 
                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                       <Image source={require('./imgs/xia.png')}  style={{height:5,width:5}} resizeMode='stretch'></Image>
                       </View>
                   </View>
              


               
                   <View style={{
                             flex:1,
                             borderLeftColor:'#F0F0F0',
                             borderLeftWidth:1,
                             flexDirection:'row'
                   }}>
                       <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}>
                       <TouchableOpacity >
                       <Text>最近</Text>
                       </TouchableOpacity>
                       </View> 
                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                       <Image source={require('./imgs/xia.png')}  style={{height:5,width:5}} resizeMode='stretch'></Image>
                       </View>
                   </View>
             

                
                   <View style={{
                             flex:1,
                             borderLeftColor:'#F0F0F0',
                             borderLeftWidth:1,
                             flexDirection:'row'
                   }}>
                       <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}>
                       <TouchableOpacity >
                       <Text>最热</Text>
                       </TouchableOpacity>
                       </View> 
                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                       <Image source={require('./imgs/xia.png')}  style={{height:5,width:5}} resizeMode='stretch'></Image>
                       </View>
                   </View>
           


                
                   <View style={{
                             flex:1,
                             borderLeftColor:'#F0F0F0',
                             borderLeftWidth:1,
                             flexDirection:'row'
                   }}>
                       <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}> 
                       <TouchableOpacity >
                       <Text>筛选</Text>
                       </TouchableOpacity>
                       </View> 
                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}> 
                       <Image source={require('./imgs/xia.png')}  style={{height:5,width:5}} resizeMode='stretch'></Image>
                       </View>

                   </View>
                   
               

               </View> 
               <ScrollView>
               <ListView
                                  dataSource={this.state.dataSource1}
                                   renderRow={(rowData) => 
                                     <TouchableOpacity  
                                     style={{flexDirection:'row',height:30}}
                                     onPress={()=>{this.setState({type:2})}}
                                     >
                                        <View style={{flex:1}}>
                                        </View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                        <Text style={{flex:8}}>{rowData.time}</Text>
                                        <View style={{flex:1}}></View>
                                        </TouchableOpacity>
                                         }
                                   />
               </ScrollView>
            </View>)
            }else if(this.state.type==2){
              return (
              <View>
                <View style={{
                  flexDirection:'row',
                  borderBottomWidth:1,
                  borderBottomColor:'#F0F0F0',
                  height:30,
                  alignItems:'center',
                  justifyContent:'space-between'}}>
               
                <View>
                      <TouchableOpacity 
                      onPress={()=>{this.setState({type:1})}}
                      style={{height:15,width:15}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>活动详情</Text>
                      </View> 
                      <View> 
                     
                      </View> 
                  </View>
                  <ScrollView>
                      <View>
                      <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30,
                             alignItems:'center'}}>
                              <Text>活动内容简介:</Text></View> 
                              <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:100,
                            alignItems:'center'}}>
                              <Text numberOfLines={6} >单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法单独浮动放大放大书法</Text>
                          </View>
                          <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30,
                            alignItems:'center'}}>

                          <View>
                              <Text>活动地点:</Text>  
                              </View>   
                          <View>
                              <Text>上海</Text>
                                </View>   
                          </View>
                          <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30,
                             alignItems:'center'}}>

                          <View>
                               <Text>活动时间:</Text> 
                                </View>   
                          <View>
                              <Text>2017-10-01</Text>
                                </View>   
                          </View>
                          <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30,
                             alignItems:'center'}}>

                          <View>  
                              <Text>组织人:</Text> 
                                </View>    
                          <View>
                              <Text>陈金华</Text> 
                               </View>   
                          </View>
                          <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30}}>

                          <View>  
                               <Text>联系方式:</Text> 
                                </View>     
                          <View>
                              <Text>13390878023</Text> 
                               </View>   
                          </View> 
                          <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:30}}>

                          <View> 
                                <Text>招募人数:</Text> 
                                 </View>    
                          <View>
                              <Text>5</Text>  
                              </View>   
                          </View>

                           <View style={{flexDirection:'row',
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             alignItems:'center',
                             height:30}}>

                     
                                <Text>报名家庭/参与家庭</Text> 
                                 </View>    
                          <View>
                          <ListView
                                  dataSource={this.state.dataSource2}
                                   renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                                        <View style={{flex:1}}></View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                        <View style={{flex:2}}> 
                                        <TouchableOpacity  style={{height:20,width:20}}>
                                        <Image source={require('./imgs/zan.png')} style={{height:20,width:20}} resizeMode='stretch'></Image>
                                        </TouchableOpacity>  
                                        </View>
                                       </View>}
                                   />
                              </View>   
                      
                      </View>

                  
                  </ScrollView>
              </View>
              )

            }else{

        return ( 
            <View>
        <View style={{
                  flexDirection:'row',
                  borderBottomWidth:1,
                  borderBottomColor:'#F0F0F0',
                  height:30,
                  alignItems:'center',
                  justifyContent:'space-between'}}>
               
                <View>
                      <TouchableOpacity  onPress={()=>{this.setState({type:1})}}
                       style={{height:15,width:15}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>活动添加</Text>
                      </View> 
                      <View> 
                     
                      </View> 
                  </View>
 
    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>活动主题:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入活动主题'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>

          <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>活动时间:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入活动时间'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>
   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>活动地点:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入活动地点'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>
   
   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>组织人:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入组织人'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View> 

      
      <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>联系方式:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入联系方式'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>


         <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>预计招募人数:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入预计招募人数'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>
 
   <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>报名截止时间:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入报名截止时间'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>
  

    <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                <Text>注意事项:</Text>
             </View>
             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                <TextInput 
                   style={{width:200}}
                underlineColorAndroid='transparent'
                 placeholder='请输入注意事项'
                 placeholderTextColor='black'
                 value={this.state.user}></TextInput>
             </View>
   </View>
   <View style={{paddingLeft:10,paddingRight:10,marginTop:10}}>
       <Button onPress={()=>{}} color='blue' title='提交'></Button>
   </View>
</View>)
            }
    }
}

