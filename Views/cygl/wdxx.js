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
                            color:'#FFF',fontWeight:'bold'}}>我的消息</Text>
                      </View> 
                      <View style={{marginRight:5}}> 
                      <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                <ScrollView style={{backgroundColor:'#E6E6E6'}}>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) =>
                                       <View style={{alignItems:'center',height:250}}> 
                                        <View style={{width:130,
                                            borderRadius:40,
                                            backgroundColor:'#A4A4A4',
                                            alignItems:'center',
                                            flex:1,
                                            justifyContent:'center',
                                            height:100
                                            }}>
                                            <Text style={{color:'#fff',fontSize:15}}>2018/8/7 16:57</Text>
                                            </View>
                                        <View style={{flex:4,
                                            marginLeft:10,
                                            marginRight:10,
                                            backgroundColor:'#fff',
                                            flexDirection:'row',
                                            width:deviceWidth,
                                            height:150
                                        }}>
                                          <Text style={{color:'#fff',fontSize:15}}>2018/8/7 16:57</Text>
                                        </View>
                                       </View>}
                                   />
                </ScrollView>
            </View>)

    }
}