import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Button,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';  

const deviceWidth = Dimensions.get('window').width;  
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];
export default class wdfk extends Component {
    constructor(props) {
        super(props);
     this.state = {
           type:1,
           value:0,
           types3: [
            {label: '功能异常:功能故障或不可用', value: 0},
            {label: '产品建议:用的不爽，我有建议', value: 1}, 
            {label: '安全问题:密码，隐私，欺诈等', value: 2},
            {label: '其他问题', value: 2}],
           value3: 0,
           value3Index: 0,
   
        }
    }

  
render(){
    const {back}=this.props
    return(
    <View>
     <View style={{flexDirection:'row',
     borderBottomWidth:1,
     borderBottomColor:'#F0F0F0',
     height:30,
     alignItems:'center',
     justifyContent:'space-between'}}>
            <TouchableOpacity  style={{flexDirection:'row'}}
                  onPress={()=>{back()}}>
                <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                 </Image>
            </TouchableOpacity>
            <View>
                          <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>我的反馈</Text>
                      </View> 
            <TouchableOpacity  style={{height:30,width:60}}
                  onPress={()=>{back()}}>
              
                 <Text style={{fontSize:20,color:'blue'}}>提交</Text>
            </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#C8C8C8',justifyContent:'center',paddingLeft:20,height:30}}>
         <Text style={{color:'#989898',fontSize:10,fontStyle:'normal'}}>(必 选) 你想反馈问题类型</Text>
      </View>
      <View style={{height:250,justifyContent:'flex-start',alignItems:'flex-start'}}>
      <RadioForm formHorizontal={false} animation={true} style={{alignItems:'flex-start'}} >
              {this.state.types3.map((obj, i) => {
                var onPress = (value, index) => {
                    this.setState({
                      value3: value,
                      value3Index: index
                    })
                  }
                return (
                  <RadioButton labelHorizontal={true} key={i} >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value3Index === i}
                      onPress={onPress}
                      buttonInnerColor={'#f39c12'}
                      buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                      buttonSize={10}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                )
              })}
            </RadioForm>
           </View>
           <View style={{backgroundColor:'#C8C8C8',justifyContent:'center',paddingLeft:20,height:30}}>
            <Text style={{color:'#989898',fontSize:10,fontStyle:'normal'}}>请补充详细问题和意见</Text>
           </View>
           <View style={{height:100,alignContent:'flex-start',justifyContent:'flex-start'}}>
               <TextInput multiline={true} numberOfLines={10}  style={{width:deviceWidth}}  
                underlineColorAndroid='transparent'
                placeholder={"请填写不少于10个字描述"}></TextInput>
           </View>
     </View>)
}
}