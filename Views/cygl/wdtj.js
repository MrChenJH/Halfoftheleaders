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
              type:1
        }
    }
render(){
    let tx = require('./imgs/tx.png');
    const {back}=this.props
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
            size={300}
            bgColor='purple'
            fgColor='white'/>
        
     
           <View 
            style={{
                flexDirection:'row',
                justifyContent:'center'
            }}
            >
            <Text style={{fontSize:20}}>扫我推荐</Text>
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
                        paddingBottom:20,
                        height:400,
                        marginBottom:100
                   }}
            >
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
                                        <Image source={require('./imgs/jt.jpg')} style={{width:deviceWidth*0.1,height:deviceWidth*0.1
                                        
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
            </View>
            </ScrollView>
        </View>
    
      )
}
}