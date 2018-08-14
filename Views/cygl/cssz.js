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
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>
               
               <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity   
                   style={{height:50,
                    width:35,
                    justifyContent:'center',
                    alignItems:'flex-end'}} 
                      onPress={()=>{back()}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>参数设置</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={()=>{}}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
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
                             <Text style={{fontSize:14,
                
                color:'#6E6E6E',
                flex:3}}>基金兑换比例:</Text>
                         <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                               placeholder='成长基金兑换比例'
                               placeholderTextColor='#BDBDBD'
                              ></TextInput>
                 </View>

   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
                                     <Text style={{fontSize:14,
                
                color:'#6E6E6E',
                flex:3}}>基金项目配置:</Text>
                             <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                              placeholderTextColor='#BDBDBD'
                               placeholder='设置内容：名称、比例'
                              ></TextInput>
                                    </View>
             
                </ScrollView>
            </View>)

    }
}