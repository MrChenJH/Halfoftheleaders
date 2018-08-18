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
import CheckBox from '../component/xwCheckBox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource: ds.cloneWithRows([
                {title:'不要一直不理我',content:'家风豆:500',xz:true},
                {title:'在家不能抽烟',content:'家风豆:500',xz:false}
              ]),
              dataSource1: ds.cloneWithRows([
                {title:'按时睡觉',content:'银豆:500',xz:true},
                {title:'按时睡觉',content:'银豆:500',xz:false}
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
        <View style={{
            backgroundColor: '#F7F7F7'
        }}>
                <View
                    style={{
                    height: 250,

                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <View style={{
                        height:200
                    }}>
                             <ImageBackground
                               
                         resizeMode='contain'
                            source={ require('./shyImage/banner.png')
                        }
                          
                            style={{
                             height:200,
                             width:1000
                        }}>
                        
                        <View 
              style={{height:40,
                marginLeft:10,
                 alignItems:'flex-start',
                 justifyContent:'center'}} >
             
             <TouchableOpacity onPress={()=>{
                 if(back){  back()}
               }}>
                  <Image source={require('./shyImage/close.png')}
              
                   style={{height:20,
                           width:20}} 
                           resizeMode='stretch' ></Image>
                           </TouchableOpacity>
              </View>

                              
                        </ImageBackground>
                    </View>
                    </View>
                     <ScrollView 
                     style={{backgroundColor:'#efefef',height:deviceheight}}>
                     <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:30,
             margin:5,
             alignItems:'center',
             justifyContent:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
         <TouchableOpacity onPress={()=>{
             this.setState({type:1})
         }}>
         <View 
         style={{flexDirection:'row'}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>今日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                borderBottomColor:'#FFBF00',
                borderBottomWidth:2,
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>行为</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>列表</Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{
             this.setState({type:2})
         }}>
         <View 
         style={{flexDirection:'row',marginLeft:5}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>今日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>行为</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>列表</Text>
         </View>
         </TouchableOpacity>
        </View>
                  <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                           
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
                                                          <Text style={{   fontSize:12,color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{  fontSize:12, color:'#474747'}}>{rowData.content}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        flexDirection:'row',
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                         <CheckBox  styles={{height:20,width:20}}></CheckBox>
                                                         <Image source={require('./shyImage/zxj.png')} style={{height:20,width:20,marginLeft:5}} resizeMode='stretch'></Image>
                                                      </View>
                                                    
                                            
                                         </View>
                        
                                         }
                                   />
                    
                            </ScrollView>
               
     </View>
            )
            }else{
                return (
                    <View style={{
                        backgroundColor: '#F7F7F7'
                    }}>
                            <View
                                style={{
                                height: 250,
            
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
            
                                <View style={{
                                    height:200
                                }}>
                                         <ImageBackground
                                           
                                     resizeMode='contain'
                                        source={ require('./shyImage/banner.png')
                                    }
                                      
                                        style={{
                                         height:200,
                                         width:1000
                                    }}>
                                    
                                    <View style={{flexDirection:'row',
                                marginTop:10,width:deviceWidth
                                }}>
                                  <TouchableOpacity 
                                  style={{alignSelf:'flex-start',paddingLeft:10,flex:1}}
                                  onPress={()=>{back()}}>
                                 <Image source={require('./shyImage/close.png')}
                                 resizeMode='stretch' style={{height:20,width:20}} ></Image> 
                               
                               </TouchableOpacity>
                               </View>
                                    </ImageBackground>
                                </View>
                                </View>
                                 <ScrollView 
                                 style={{backgroundColor:'#efefef',height:deviceheight}}>
                                 <View  
                        style={{
                         justifyContent:'space-between',
                         flexDirection:'row',
                         backgroundColor:'#fff',
                         height:30,
                         margin:5,
                         alignItems:'center',
                         justifyContent:'center',
                         paddingLeft:10,
                         paddingRight:10
                     }}>
                     <TouchableOpacity onPress={()=>{
                         this.setState({type:1})
                     }}>
                     <View 
                     style={{flexDirection:'row'}}>
                         <Text style={{fontSize:13,
                            fontWeight:'bold',
                            height:30,
                            textAlign:'center',
                            textAlignVertical:'center'}}>今日</Text>
                          <Text style={{fontSize:13,
                            fontWeight:'bold',
                         
                            height:30,
                            textAlign:'center',
                            textAlignVertical:'center'}}>行为</Text>
                         <Text style={{fontSize:13,
                            fontWeight:'bold',
                            height:30,
                            textAlign:'center',
                            textAlignVertical:'center'}}>列表</Text>
                     </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{
                         this.setState({type:2})
                     }}>
                     <View 
                     style={{flexDirection:'row',marginLeft:5}}>
                         <Text style={{fontSize:13,
                            fontWeight:'bold',
                            height:30,
                            textAlign:'center',
                            textAlignVertical:'center'}}>今日</Text>
                          <Text style={{fontSize:13,
                            fontWeight:'bold',
                            height:30,
                            borderBottomColor:'#FFBF00',
                            borderBottomWidth:2,
                            textAlign:'center',
                            textAlignVertical:'center'}}>行为</Text>
                         <Text style={{fontSize:13,
                            fontWeight:'bold',
                            height:30,
                            textAlign:'center',
                            textAlignVertical:'center'}}>列表</Text>
                     </View>
                     </TouchableOpacity>
                    </View>
                              <ListView
                                              dataSource={this.state.dataSource1}
                                               renderRow={(rowData) => 
                                       
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
                                                                      <Text style={{   fontSize:12,color:'#474747'}}>{rowData.title}</Text>
                                                                  </View>
                                                                  <View style={{flex:2,
                                                                    justifyContent:'center',
                                                                    alignItems:'center'
                                                                }}>
                                                                      <Text style={{  fontSize:12, color:'#474747'}}>{rowData.content}</Text>
                                                                  </View>
                                                              
                                                                
                                                        
                                                     </View>
                                    
                                                     }
                                               />
                                
                                        </ScrollView>
                           
                 </View>
                        )

            }
          
            
    }
}

