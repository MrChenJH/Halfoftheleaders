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
import app from '../../app.json';
import Main from '../Main1'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const radio_props = [
    {label: 'param1', value: 0},
    {label: 'param2', value: 1}
];
export default class wdfk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            value: 0,
            types3: [
                {label: '功能异常:功能故障或不可用', value: 0},
                {label: '产品建议:用的不爽，我有建议', value: 1},
                {label: '安全问题:密码，隐私，欺诈等', value: 2},
                {label: '其他问题', value: 3}],
            value3: 0,
            value3Index: 0,

        }
    }


    render() {
        const {back} = this.props
        return (
            <View style={{backgroundColor: '#E6E6E6', height: deviceHeight}}>

                <View style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6E6E6',
                    backgroundColor: '#fe9c2e',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    <View style={{height: 40, width: 35, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                            onPress={() => {

                                this.props.navigator.push({
                                    component: Main,
                                })
                            }}>
                            <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>我的反馈</Text>
                    </View>
                    <View style={{marginRight: 5, width: 40}}>
                        <TouchableOpacity onPress={() => {
                        }}>
                            <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{justifyContent: 'center', paddingLeft: 20, height: 30}}>
                    <Text style={{color: '#b2b2b2', fontSize: 12, fontStyle: 'normal'}}>(必 选) 你想反馈问题类型</Text>
                </View>
                <View style={{
                    height: 200,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#fff'
                }}>
                    <RadioForm formHorizontal={false} animation={true} style={{alignItems: 'flex-start'}}>
                        {this.state.types3.map((obj, i) => {
                            var onPress = (value, index) => {
                                this.setState({
                                    value3: value,
                                    value3Index: index
                                })
                            };
                            return (
                                <RadioButton labelHorizontal={true} key={i} style={{marginTop: 20}}>
                                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={this.state.value3Index === i}
                                        onPress={onPress}
                                        buttonInnerColor={'#A4A4A4'}
                                        buttonOuterColor={this.state.value3Index === i ? '#A4A4A4' : '#A4A4A4'}
                                        buttonSize={10}
                                        buttonStyle={{}}
                                        buttonWrapStyle={{marginLeft: 10, marginRight: 10}}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        onPress={onPress}
                                        labelStyle={{color: '#2E2E2E'}}
                                        labelWrapStyle={{}}
                                    />
                                </RadioButton>
                            )
                        })}
                    </RadioForm>
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 20, height: 30}}>
                    <Text style={{color: '#BDBDBD', fontSize: 12, fontStyle: 'normal'}}>请补充详细问题和意见</Text>
                </View>
                <View style={{
                    height: 100,
                    alignContent: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: '#fff'
                }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        style={{width: deviceWidth * 0.98, height: 100, textAlignVertical: 'top', textAlign: 'left'}}
                        underlineColorAndroid='transparent'
                        placeholder={"请填写不少于10个字描述"}/>
                </View>
            </View>)
    }
}