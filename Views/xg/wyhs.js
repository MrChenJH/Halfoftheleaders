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
import DropdownAlert from 'react-native-dropdownalert';
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
              type:1,
              typetitle:'',
              typecontent:''
        }
    }
    
    itemAction(item) {
        switch (item.type) {
          case 'close':
            this.closeAction();
            break;
          default:
            const random = Math.floor(Math.random() * 1000 + 1);
            const title = item.type + ' #' + random;
            this.dropdown.alertWithType(item.type, title, item.message);
        }
      }
      closeAction() {
        this.dropdown.close();
      }
      handleClose(data) {
        console.log(data);
      }
      handleCancel(data) {
        console.log(data);
      }


    render(){ 
        const {back}=this.props
        if(this.state.type==1){
    return (
        <View >
                   <DropdownAlert
          ref={ref => this.dropdown = ref}
          containerStyle={{height:100}}
          showCancel={true}
          closeInterval={3000}
          zIndex={1000000}
        
        />
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
                    if(back){
                    back()}

                }}>
                  <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                  </Image>
                </TouchableOpacity> 
          </View> 
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text 
                    style={{fontSize:16,
                      color:'#FFF',fontWeight:'bold'}}>我有话说</Text>
                </View> 
                <View style={{width:100,marginRight:5}}> 
                <TouchableOpacity  style={{width:100,alignItems:'flex-end'}} onPress={()=>{ this.setState({type:2})}}>
                  <Text style={{fontSize:16,
                      color:'#FFF'}}>最近评价</Text>
                </TouchableOpacity> 
                </View> 
            </View>
       
         

         <View
                                style={{
                                  height:30,
            
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>我的家人</Text>
                            </View>
                      
                            <View
                                style={{
                                 height:70,
                                 justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20,
                                marginTop: 10
                            }}>
                                       
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}> 
                                   <TouchableOpacity onPress={()=>{}}>
                                    <Image
                                        source={require('./imgs/tx/bb.png')}
                                        style={{
                                        height: 60,
                                        width: 60
                                    }}
                                    
                                    resizeMode='stretch'></Image>
                                    <Text   style={{
                                     
                                        width: 60,
                                        textAlign:'center'
                                    }}>爸爸</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems:"center",
                                    marginTop: 5
                                }}> 
                                     <TouchableOpacity onPress={()=>{}}>
                                    <Image
                                        source={require('./imgs/tx/mm.png')}
                                        style={{
                                        height: 60,
                                        width: 60
                                    }}
                                    
                                    resizeMode='stretch'></Image>
                                    <Text   style={{
                                     
                                        width: 60,
                                        textAlign:'center'
                                    }}>妈妈</Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                    flex: 1,
                                    alignItems:"center"
                                }}>
                                 <TouchableOpacity onPress={()=>{}}>
                                    <Image
                                        source={require('./imgs/tx/yy.png')}
                                        style={{
                                            height: 60,
                                        width: 60
                                    }} 
                                    resizeMode='stretch'></Image>
                                      <Text   style={{
                                 
                                        width: 60,
                                        textAlign:'center'
                                    }}>爷爷</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
            
 
    
         <ScrollView style={{backgroundColor:'#efefef',height:deviceheight}}>
         <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:30,
             marginBottom:5,
             marginTop:5,
             alignItems:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
             <Text style={{fontSize:13,fontWeight:'bold'}}>我想对爸爸说:</Text> 
             <TouchableOpacity onPress={()=>{   this.dropdown.alertWithType('success', '发送成功', '发送成功' );}}>
             <Text style={{fontSize:13,fontWeight:'bold'}}>发送</Text>
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
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                         <CheckBox  styles={{height:20,width:20}}></CheckBox>
   
                                                      </View>
                                                    
                                            
                                         </View>
                        
                                         }
                                   />
                   </ScrollView>
  
      </View>
            )
            }else{
                return (<View>
                    <View style={{
                  flexDirection:'row',
                  borderBottomWidth:1,
                  borderBottomColor:'#E6E6E6',
                  backgroundColor:'#fe9c2e',
                  height:40,
                  alignItems:'center',
                  justifyContent:'space-between'}}>
                  
                  <View  style={{height:40,width:35,alignItems:'center',justifyContent:'center'}}>
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
   
   
                         <View style={{justifyContent:'center',
                                        alignItems:'center'}}>
                             <Text 
                             style={{fontSize:16,
                               color:'#FFF',fontWeight:'bold'}}>我的评价</Text>
                         </View> 
                         <View style={{marginRight:5,width:20}}> 
                      
                         </View> 
                     </View>
                   <ScrollView style={{backgroundColor:'#F7F7F7',height:deviceheight}}>
                   <ListView
                                     dataSource={this.state.dataSource}
                                      renderRow={(rowData) =>
                                          <View style={{alignItems:'center',height:200}}> 
                                           <View style={{width:130,
                                               borderRadius:40,
                                               backgroundColor:'#A4A4A4',
                                               alignItems:'center',
                                               flex:1,
                                               justifyContent:'center',
                                               height:30,
                                               marginTop:25,
                                               marginBottom:10
                                               }}>
                                               <Text style={{color:'#fff',fontSize:15}}>昨天 16:57</Text>
                                               </View>
                                           <View style={{flex:4,
                                               marginLeft:5,
                                               marginRight:5,
                                               backgroundColor:'#fff',
                                               width:deviceWidth*0.96,
                                               height:50,
                                               padding:10,
                                               borderRadius:10
                                           }}>
                                                 <View style={{flexDirection:'row',
                                                                marginTop:5,
                                                                justifyContent:'space-around'}}>  
                                                 <Text style={{fontSize:13,
                                                              flex:1,
                                                              textAlign:'left'}}>我对爸爸说:</Text>
                                                 <View style={{flexDirection:'row',
                                                               flex:1,
                                                               justifyContent:'flex-end'}}>
                                                   <Image source={require('./xgsy/lian.png')} style={{height:20,width:20}} resizeMode='stretch'></Image>
                                                     <Image source={require('./xgsy/chai.png')} style={{height:20,width:20}}  resizeMode='stretch'></Image>
                                               </View>
                                                 </View>
                                               <View style={{marginTop:5,alignItems:'flex-end'}}>
                                                           <Text style={{fontSize:13}}>不要玩手机一直不理我:</Text>
                                                </View>
                                           </View>
                                           <View style={{flex:4,
                                               marginLeft:5,
                                               marginRight:5,
                                               backgroundColor:'#fff',
                                               width:deviceWidth*0.96,
                                               height:50,
                                               padding:10,
                                               borderRadius:10
                                           }}>
                                                 <View style={{flexDirection:'row',
                                                                marginTop:5,
                                                                justifyContent:'space-around'}}>  
                                                 <Text style={{fontSize:13,
                                                              flex:1,
                                                              textAlign:'left'}}>我对爸爸说:</Text>
                                                 <View style={{flexDirection:'row',
                                                               flex:1,
                                                               justifyContent:'flex-end'}}>
                                                     <Image source={require('./xgsy/lian.png')} style={{height:20,width:20}} resizeMode='stretch'></Image>
                                                     <Image source={require('./xgsy/chai.png')} style={{height:20,width:20}}  resizeMode='stretch'></Image>
                                               
                                                 </View>
                                                 </View>
                                               <View style={{marginTop:5,alignItems:'flex-end'}}>
                                                           <Text style={{fontSize:13}}>不要玩手机一直不理我:</Text>
                                                </View>
                                           </View>
                                         
                                          </View>}
                                      />
                   </ScrollView>
               </View>)

            }
          
            
    }
}

