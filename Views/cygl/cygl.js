import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
 Text,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 Image
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
 const deviceWidth = Dimensions.get('window').width;  
 
export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:''

        }
     }

  
    render() {
         return(<View>
                  <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:30,alignItems:'center'}}>
                      <TouchableOpacity  style={{height:15,width:15}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:15,width:15}} >
                        </Image>
                      </TouchableOpacity>
                  </View>
               
                  <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>账号名</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                              <TextInput 
                                 style={{width:200}}
                              underlineColorAndroid='transparent'
                               placeholder='请输入账号名'
                               placeholderTextColor='black'
                               value={this.state.user}></TextInput>
                           </View>
                 </View>

                        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>密码</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                              <TextInput 
                                 style={{width:200}}
                              underlineColorAndroid='transparent'
                               placeholder='请输入密码'
                               placeholderTextColor='black'
                               value={this.state.user}></TextInput>
                           </View>
                 </View>
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>确认密码</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                              <TextInput 
                                 style={{width:200}}
                              underlineColorAndroid='transparent'
                               placeholder='请输入密码'
                               placeholderTextColor='black'
                               value={this.state.user}></TextInput>
                           </View>
                 </View>
                 
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>系统角色</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                           <ModalDropdown  options={['角色1', '角色2']}/>
                           </View>
                 </View>
                 
                 <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#F0F0F0',height:50,alignItems:'center'}}>
                           <View  style={{width:80,alignItems:'flex-end',justifyContent:"flex-start"}}>
                              <Text>家庭角色</Text>
                           </View>
                           <View  style={{width:200,alignItems:'flex-start',justifyContent:"flex-start"}}>
                           <ModalDropdown options={['角色1', '角色2']}/>
                           </View>
                 </View>

                 <View style={{paddingLeft:10,paddingRight:10,marginTop:10}}>
                     <Button onPress={()=>{}} color='blue' title='提交'></Button>
                 </View>
              </View>
                )
    }
}


  