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
 ListView,
 TouchableHighlight
} from 'react-native'; 
import Checkbox from '../component/checkbox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class zhqh extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            dataSource: ds.cloneWithRows([
                {title:'账号名称:张三的家   家庭角色:父亲'},
                {title:'账号名称:张三       家庭角色:父亲'},
                {title:'账号名称:李思       家庭角色:父亲'},
                {title:'账号名称:张小三     家庭角色:儿子'}
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
               
               <View  style={{height:50,width:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:20,
                            color:'#FFF',fontWeight:'bold'}}>账号切换</Text>
                      </View> 
                      <View style={{marginRight:5,width:20}}> 
                
                      </View> 
                  </View>
                <ScrollView style={{
                    backgroundColor:'#D8D8D8',
                    height:deviceheight
                 }}>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 

                                           <View style={{
                                                height:50,
                                                flexDirection:'row',
                                                margin:10,
                                                borderBottomWidth:1,
                                                backgroundColor:'#FFFFFF',
                                                borderBottomColor:'#F0F0F0',
                                                borderRadius:10}}> 
                                          <View style={{flex:1,justifyContent:'center',paddingLeft:20}}>
                                
                                        <Image source={require('./imgs/tx.png')}


                                         style={{height:30,width:30}}
                                          resizeMode='stretch'></Image>
                                        </View>
                                     
                                        <View style={{flex:12,justifyContent:'center',paddingLeft:20}}>
                                        <Text >{rowData.title}</Text>
                                        </View>
                              
                                        <View style={{flex:3,justifyContent:'center'}}>
                                             <Image
                                                 source={require('./jdjf/qh.png')} 
                                                 style={{height:20,width:20}}
                                                 resizeMode='stretch'>
                                            </Image>
                                       </View>
                                       </View>
                                        
                                
                                       }
                                   />
                </ScrollView>
            </View>)

    }
}

