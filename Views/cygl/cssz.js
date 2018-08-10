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
                            color:'#FFF',fontWeight:'bold'}}>参数设置</Text>
                      </View> 
                      <View style={{marginRight:5,width:23}}> 
                
                      </View> 
                  </View>
             
                <ScrollView>

                <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
                             <Text style={{fontSize:15,
                
                color:'#6E6E6E',
                flex:3}}>成长基金兑换比例:</Text>
                         <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                               placeholder='成长基金兑换比例'
                               placeholderTextColor='#BDBDBD'
                               value={this.state.user}></TextInput>
                 </View>

   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
                                     <Text style={{fontSize:15,
                
                color:'#6E6E6E',
                flex:3}}>成长基金设置:</Text>
                             <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                               placeholder='设置内容：名称、比例'
                               placeholderTextColor='#BDBDBD'
                               value={this.state.user}></TextInput>
                                    </View>
             
                </ScrollView>
            </View>)

    }
}