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

export default class zhqh extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            dataSource: ds.cloneWithRows([
                {title:'账号1'},
                {title:'账号2'},
                {title:'账号3'},
                {title:'账号4'}
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
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>账号切换</Text>
                      </View> 
                      <View> 
                      
                      </View> 
                  </View> 
                <ScrollView>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                                           <TouchableHighlight underlayColor={'transparent'} onPress={() => this.checkClick()}>
                                           <View style={{
                                               height:40,
                                               flexDirection:'row',
                                            justifyContent:'space-between',
                                            marginBottom:10,
                                            borderBottomWidth:1,
                                            borderBottomColor:'#F0F0F0'}}> 
                                          <View style={{flex:3,justifyContent:'center',paddingLeft:20}}>
                                
                                        <Image source={require('./imgs/tx.png')}


                                         style={{height:30,width:30}}
                                          resizeMode='stretch'></Image>
                                        </View>
                                     
                                        <View style={{flex:10,justifyContent:'center',paddingLeft:20}}>
                                        <Text >{rowData.title}</Text>
                                        </View>
                              
                                        <View style={{flex:3,justifyContent:'center'}}>
                                        <Checkbox styles={{height:20,width:20}}></Checkbox>
                                       </View>
                                       </View>
                                        
                                       </TouchableHighlight>}
                                   />
                </ScrollView>
            </View>)

    }
}

