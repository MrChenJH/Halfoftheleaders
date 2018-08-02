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


import QRCode from 'react-native-qrcode';
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
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>我的推荐</Text>
                      </View> 
                      <View> 
                      
                      </View> 
                  </View> 
           <View 
            style={{
                 justifyContent:'center',
                 alignItems:'center',
                 borderColor:'black',
                 marginTop:10,
                 borderRadius:5,
                 borderWidth:1,
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
            logo={tx}
            />
     
           <View 
            style={{
                flexDirection:'row',
                justifyContent:'center'
            }}
            >
                <Text>扫我推荐</Text>
            </View>
            </View>
            <View
                     style={{
                        borderColor:'black',
                        marginTop:10,
                        borderRadius:5,
                        borderWidth:1,
                        marginLeft:10,
                        marginRight:10,
                        paddingLeft:20,
                        paddingRight:20,
                        paddingTop:10,
                        paddingBottom:20,
                        height:100
                   }}
            >
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
    
      )
}
}