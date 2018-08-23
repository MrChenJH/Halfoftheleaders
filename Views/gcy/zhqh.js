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

import Main from '../Main4'  
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
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
               <View  style={{height:40,width:35,alignItems:'center',justifyContent:'center'}}>
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
                            color:'#FFF',fontWeight:'bold'}}>账号切换</Text>
                      </View> 
                      <View style={{marginRight:5,width:20}}> 
                
                      </View> 
                  </View>
                <ScrollView style={{
                    backgroundColor:'#F7F7F7',
                    height:deviceheight
                 }}>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 

                                           <View style={{
                                                height:40,
                                                flexDirection:'row',
                                                margin:10,
                                                borderBottomWidth:1,
                                                backgroundColor:'#FFFFFF',
                                                borderBottomColor:'#F0F0F0',
                                                borderRadius:10}}> 
                                          <View style={{flex:1,justifyContent:'center',paddingLeft:20}}>
                                
                                        <Image source={require('./shyImage/bb.png')}


                                         style={{height:30,width:30}}
                                          resizeMode='stretch'></Image>
                                        </View>
                                     
                                        <View style={{flex:12,justifyContent:'center',paddingLeft:20}}>
                                        <Text >{rowData.title}</Text>
                                        </View>
                              
                                        <View style={{flex:3,justifyContent:'center'}}>
                                             <Image
                                                 source={require('./shyImage/qh.png')} 
                                                 style={{height:25,width:25}}
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

