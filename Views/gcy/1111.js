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
import app from '../../app.json'; 
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource1: ds.cloneWithRows([
                {title:'春游',time:'2018-7-1 13:00:00'},
                {title:'成果展',time:'2018-7-1 13:00:00'},
                {title:'其他展',time:'2018-7-1 13:00:00'},
                {title:'成果展',time:'2018-7-1 13:00:00'},
                {title:'其他展',time:'2018-7-1 13:00:00'}
              ]),
              dataSource2: ds.cloneWithRows([
                {title:'家庭1'},
                {title:'家庭2'},
                {title:'家庭3'},
                {title:'家庭4'}
              ]),
              type:1,
              typetitle:'',
              typecontent:''
        }
    }

    render(){ 
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
               
               <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity   
                   style={{height:50,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{back()}}>
                        <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>我的活动</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./shyImage/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
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
                                 color:'#8a8a8a'}}>我组织的</Text> 
                      
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
                                 color:'#8a8a8a'}}>我参加的</Text>
                       </TouchableOpacity>
                       </View> 
    
                   </View>
           


                
                   <View style={{
                             flex:2,
                             flexDirection:'row'
                   }}>
                       <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}> 
                       <TouchableOpacity >
                       <Text style={{fontFamily:'SimSun',
                                fontSize:13,
                                 fontStyle:'normal',
                                 color:'#8a8a8a'}}>筛选</Text>
                       </TouchableOpacity>
                       </View> 
                       <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}> 
                       <Image source={require('./shyImage/sx.png')}  style={{height:10,width:10}} resizeMode='cover'></Image>
                       </View>

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
                                        <Image source={require('./shyImage/hd.png')} style={{width:deviceWidth*0.25,height:deviceWidth*0.2
                                        
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
            </View>
            )
            }
            else if(this.state.type==2){
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
               
               <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity   
                   style={{height:50,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{back()}}>
                        <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>活动详情</Text>
                      </View> 
                      <View style={{marginRight:5,width:22}}> 
                    
                      </View> 
                  </View>
                   


                  <View backgroundColor='#F2F2F2' 
                  style={{height:deviceheight-60}}>

                     <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'活动标题',typecontent:'春游'})}}>
                
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
                               活动标题</Text>  
                               <View 
                          style={{flexDirection:'row',alignItems:'center'}}>
                                 <Text style={{fontSize:13,
                            color:'#585858',
                            fontFamily:'Microsoft YaHei'}}>
                               春游</Text>  
                          <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                          </View>
                        </View>
                        </TouchableOpacity>
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
                              活动内容简介</Text>
                              <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>
                             
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
                                   活动地点</Text>  
                                   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   上海</Text>  
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                             活动时间</Text> 
                             <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   2018-10-01</Text>  
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
          组织人</Text> 
          <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   张三</Text>  
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                     联系方式</Text> 
                     <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   133000000</Text>  
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
   招募人数</Text> 
   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   6/人</Text>  
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
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
                      报名家庭/参与家庭</Text> 
                      <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                
                              <Image source={require('./shyImage/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                              </View>           
                              </View>   
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
                              <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
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
                               style={{fontSize:12}}
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
                    
                    <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
                     <TouchableOpacity   
                   style={{height:50,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                           onPress={()=>{this.setState({type:2})}}>
                             <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                             </Image>
                           </TouchableOpacity> 
                           </View> 
                           <View style={{justifyContent:'center',alignItems:'center'}}>
                               <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
                           </View> 
                           <View style={{marginRight:5,width:22}}> 
                                
                           </View> 
                       </View>
                       <View backgroundColor='#F2F2F2' 
                                   style={{height:deviceheight-60}}>
                        <View style={{backgroundColor:'#fff',marginTop:10,height:150}}>
                        <TextInput   underlineColorAndroid='transparent' 
                        maxLength={50}
                        multiline={true}
                        style={{fontSize:12}}
                        style={{textAlignVertical:'top'}}
                        numberOfLines={5}
                        >

                        </TextInput>
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
                        <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>添加活动</Text>
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
           
                <Text style={{fontSize:15,
                
                    color:'#6E6E6E',
                    flex:1}}>
                活动主题:</Text>
                <TextInput 
                style={{flex:2}}
                 underlineColorAndroid='transparent'
                 placeholder='请输入活动主题'
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
                    活动时间:</Text>
        
         
                <TextInput 
                 style={{flex:2}}
                 underlineColorAndroid='transparent'
                 placeholder='请输入活动时间'
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
                    活动地点:</Text>
     
                <TextInput 
                    style={{flex:2}}
                underlineColorAndroid='transparent'
                 placeholder='请输入活动地点'
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
 组织人:</Text>

                <TextInput 
                      style={{flex:2}}
                underlineColorAndroid='transparent'
                 placeholder='请输入组织人'
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
                    联系方式:</Text>
    
         
                <TextInput 
                   style={{flex:2}}
                underlineColorAndroid='transparent'
                 placeholder='请输入联系方式'
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
                    预计招募人数:</Text>
      
          
                <TextInput 
                    style={{flex:2}}
                underlineColorAndroid='transparent'
                 placeholder='请输入预计招募人数'
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
                    报名截止时间:</Text>
          
             <TextInput 
                     style={{flex:2}}
                underlineColorAndroid='transparent'
                 placeholder='请输入报名截止时间'
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
                    注意事项:</Text>
        
               <TextInput 
                     style={{flex:2}}
                 underlineColorAndroid='transparent'
                 placeholder='请输入注意事项'
                 placeholderTextColor='#848484'
                 value={this.state.user}></TextInput>
            
   </View>
  
   </ScrollView>
</View>)
            }
    }
}

