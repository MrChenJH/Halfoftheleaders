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
export default class canshu extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            dataSource: ds.cloneWithRows([
                {title:'学习基金',bl:'20%'},
                {title:'学杂费',bl:'20%'},
                {title:'社交活动',bl:'20%'},
                {title:'零花钱',bl:'20%'}
              ]),
              type:1
        }
    } 

    render() {
      const  {back}=this.props

      if(this.state.type==1){
      return (<View>
              
              <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#F0F0F0',
               height:30,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
                <View>
                   
                      </View> 
                      <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>我的预算</Text>
                      </View> 
                      <View> 
                      <TouchableOpacity  style={{height:15,width:15}} onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View> 
                <ScrollView>
                <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                                        <View style={{flex:1}}></View>
                                        <Text style={{flex:10}}>{rowData.title}</Text>
                                       <Text style={{flex:8}}>{rowData.bl}</Text>
                                       </View>}
                                   />
                </ScrollView>
            </View>)}else{
                return(<View>
                <View style={{
                 flexDirection:'row',
                 borderBottomWidth:1,
                 borderBottomColor:'#F0F0F0',
                 height:30,
                 alignItems:'center',
                 justifyContent:'space-between'}}>
                 
                  <View>
                        <TouchableOpacity  style={{height:15,width:15}} 
                         onPress={()=>{this.setState({type:1})}}>
                          <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                          </Image>
                        </TouchableOpacity> 
                        </View> 
                        <View>
                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>预算维护</Text>
                        </View> 
                        <View> 
                        <TouchableOpacity  style={{height:15,width:15}} onPress={()=>{ this.setState({type:3})}}>
                          <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                          </Image>
                        </TouchableOpacity> 
                        </View> 
                    </View> 
                  <ScrollView>
                  <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>预算名称:</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                underlineColorAndroid='transparent'
                                 placeholder='预算名称'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
  
                         <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                             <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                                <Text>预算比例:</Text>
                             </View>
                             <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                                <TextInput 
                                   style={{width:200}}
                                 underlineColorAndroid='transparent'
                                 placeholder='预算比例'
                                 placeholderTextColor='black'
                                 value={this.state.user}></TextInput>
                             </View>
                   </View>
                  </ScrollView>
              </View>)
            }

    }
}