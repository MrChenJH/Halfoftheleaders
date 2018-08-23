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

import Main from '../Main3'  
import QRCode from 'react-native-qrcode';

const deviceWidth = Dimensions.get('window').width;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class wdtj extends Component {
    constructor(props) {
        super(props);
     this.state = {
            dataSource: ds.cloneWithRows([
                {title:'张三家庭',time:'2018-07-01 10:45'},
                {title:'李四家庭',time:'2018-07-01 10:45'}
           
              ]),
              dataSource1: ds.cloneWithRows([
                {title:'张三家庭',time:'2018-07-01 10:45'}
           
              ]),
              type:1
        }
    }
render(){
    let tx = require('./shyImage/tx.png');
    const {back}=this.props
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
               
               <View  style={{height:40,width:30,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity   
                   style={{height:40,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{
                        this.props.navigator.push({
                            component:Main,
                            })
                          }}>
                        <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>我的推荐</Text>
                      </View> 
                      <View style={{marginRight:5,width:20}}> 
              
                      </View> 
                  </View>

                  <ScrollView 
                  style={{backgroundColor:'#F2F2F2'}}>
           <View 
            style={{
                 justifyContent:'center',
                 alignItems:'center',
                 backgroundColor:'#fff',
                 marginTop:10,
                 borderRadius:5,
                 marginLeft:10,
                 marginRight:10,
                 paddingLeft:20,
                 paddingRight:20,
                 paddingTop:50,
                 paddingBottom:20
            }}
           >
         <QRCode
            value="http://awesome.link.qr"
            size={220}
            bgColor='purple'
            fgColor='white'/>
        
     
           <View 
            style={{
                flexDirection:'row',
                justifyContent:'center'
            }}
            >
            <Text style={{fontSize:16}}>扫我推荐</Text>
            </View>
            </View>
            <View
                     style={{
                        backgroundColor:'#fff',
                        marginTop:10,
                        borderRadius:5,
                        marginLeft:10,
                        marginRight:10,
                        paddingLeft:20,
                        paddingRight:20,
                        paddingTop:10,
                      
                        height:160,
                        marginBottom:20
                   }}
            >
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>我推荐的人</Text>
            </View>
          <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                    
                                     <TouchableOpacity  
                              
                                     onPress={()=>{this.setState({type:2})}}
                                     >
                                        <View 
                                    style={{flexDirection:'row',
                                             borderTopColor:'#F0F0F0',
                                             borderTopWidth:1,
                                             marginTop:5,
                                            height:deviceWidth*0.15}}>
                                        <View style={{width:deviceWidth*0.3,
                                             paddingLeft:5,
                                             paddingTop:5}}>
                                        <Image source={require('./shyImage/jt.jpg')} style={{width:deviceWidth*0.1,height:deviceWidth*0.1
                                        
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                        <View style={{width:deviceWidth*0.75,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>{rowData.title}</Text>
                                        
  
      
                                        </View>
      
                                        </View>
                                        </TouchableOpacity>
                                         }
                                   />
            </View>
            <View
                     style={{
                        backgroundColor:'#fff',
                        marginTop:10,
                        borderRadius:5,
                        marginLeft:10,
                        marginRight:10,
                        paddingLeft:20,
                        paddingRight:20,
                        paddingTop:10,
                        paddingBottom:20,
                        height:100,
                        marginBottom:50
                   }}
            >
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>我的推荐人</Text>
            </View>
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
                                            height:deviceWidth*0.15}}>
                                        <View style={{width:deviceWidth*0.3,
                                             paddingLeft:5,
                                             paddingTop:5}}>
                                        <Image source={require('./shyImage/jt.jpg')} 
                                        style={{width:deviceWidth*0.1,height:deviceWidth*0.1
                                        }} resizeMode='stretch'></Image>
                                        </View>
                                         <View style={{width:deviceWidth*0.75,
                                            paddingLeft:5,
                                            paddingTop:10,
                                            justifyContent:'flex-start'}}>
                                        <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>{rowData.title}</Text>
                                        
  
                                         </View>
      
                                        </View>
                                        </TouchableOpacity>
                                         }
                                   />
            </View>
            </ScrollView>
        </View>
    
      )
}
}