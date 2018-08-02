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
 ScrollView
} from 'react-native'; 

export default class canshu extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:''
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
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>参数设置</Text>
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
                              <Text>金豆兑换比例:</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                              <TextInput 
                                 style={{width:200}}
                              underlineColorAndroid='transparent'
                               placeholder='金豆兑换比例'
                               placeholderTextColor='black'
                               value={this.state.user}></TextInput>
                           </View>
                 </View>

                       <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:120,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>金豆兑换比例:</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                              <TextInput 
                                 style={{width:200}}
                               underlineColorAndroid='transparent'
                               placeholder='金豆兑换比例'
                               placeholderTextColor='black'
                               value={this.state.user}></TextInput>
                           </View>
                 </View>
                </ScrollView>
            </View>)

    }
}