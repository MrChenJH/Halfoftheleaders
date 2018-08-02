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
                {title:'消息1111',time:'2018-07-01 10:45'},
                {title:'消息1111',time:'2018-07-01 10:45'},
                {title:'消息1111',time:'2018-07-01 10:45'},
                {title:'消息1111',time:'2018-07-01 10:45'}
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
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>我的消息</Text>
                      </View> 
                      <View> 
                      
                      </View> 
                  </View> 
                <ScrollView>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}> 
                                        <View style={{flex:1}}></View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                       <Text style={{flex:8}}>{rowData.time}</Text>
                                       </View>}
                                   />
                </ScrollView>
            </View>)

    }
}