import React, {Component} from 'react';
import {
 StyleSheet,
 Button,
 Text,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 Image,
 ScrollView,
 ListView
} from 'react-native'; 
const deviceWidth = Dimensions.get('window').width;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class wdxx extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            dataSource: ds.cloneWithRows([
                {msg:'消息1111'},
                {msg:'消息1111'},
                {msg:'消息1111'},
                {msg:'消息1111'}
              ]),
              type:1
        }
    } 

    render() {
      const  {back}=this.props
      return (<View>
                 <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
               <View  style={{height:40,width:30,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity   
                   style={{height:40,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 


                      <View style={{justifyContent:'center',
                                     alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>我的消息</Text>
                      </View> 
                      <View style={{marginRight:5,width:20}}> 
                   
                      </View> 
                  </View>
                <ScrollView style={{backgroundColor:'#F7F7F7'}}>
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
                                            height:100,
                                            padding:10,
                                            borderRadius:10
                                        }}>
                                               <Text>您用新的要审核的项目</Text>
                                            <View style={{flexDirection:'row',marginTop:5}}>
                                            <View style={{flex:2}}>
                                            <Image 
                                            source={require('./imgs/xxtx.png')}
                                            resizeMode='stretch'
                                            style={{height:60,width:60
                                            }}
                                            ></Image>
                                            </View>
                                            <Text numberOfLines={6} 
                                            style={{fontSize:12,
                                          
                                            flex:6,textAlign:'left',textAlignVertical:'top'}}>{rowData.msg}</Text>
                                         
                                            </View>
                                        </View>
                                      
                                       </View>}
                                   />
                </ScrollView>
            </View>)

    }
}