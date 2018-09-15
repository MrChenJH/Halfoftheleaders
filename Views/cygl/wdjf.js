import React, {Component} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Dimensions,
    AsyncStorage

} from 'react-native';
import Echarts from 'native-echarts';
import Main from '../Main1'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

export default class wdjf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            jtnc:""
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            this.setState({jtnc: decodeURI( item.nc)});
        })
    }

    render() {

        const option = {
            title: {
                text: 'ECharts demo'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        const {back} = this.props;
        if (this.state.type === 1) {
            return (
                <ScrollView style={{backgroundColor: '#E6E6E6'}}>
                    <View style={{height: 270}}>
                        <ImageBackground source={require('./jdjf/bg.png')}
                                         style={{width: deviceWidth, height: 270}}
                                         resizeMode='stretch'>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 10, width: deviceWidth,
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity
                                    style={{alignSelf: 'flex-start', paddingLeft: 10, flex: 1}}
                                    onPress={() => {
                                        if (this.props.tc) {
                                            this.props.navigator.push({
                                                component: Main,
                                            })
                                        } else {
                                            this.props.navigator.jumpBack()
                                        }
                                    }}>
                                    <Image source={require('./imgs/close.png')}
                                           resizeMode='stretch' style={{height: 20, width: 20}}/>
                                </TouchableOpacity>
                                <View style={{
                                    alignSelf: 'center',
                                    flex: 3,
                                    height: 30
                                }}>
                                    <ImageBackground source={require('./jdjf/yjh.png')}
                                                     style={{
                                                         width: 200,
                                                         height: 30,
                                                         alignItems: 'center',
                                                         marginTop: 10,
                                                         justifyContent: 'center'
                                                     }}
                                                     resizeMode='stretch'>

                                        <Text style={{fontSize: 12, color: '#fff'}}>我们一起为{this.state.jtnc}来攒豆</Text>
                                    </ImageBackground>
                                </View>
                                <View style={{flex: 1}}/>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 30}}>

                                <View style={{flex: 4}}>
                                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                                        <View>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                <Text>总豆数</Text>
                                            </View>
                                            <View style={{
                                                height: 30,
                                                width: 60,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRightWidth: 1,
                                                borderStyle: 'dashed'
                                            }}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    color: '#fff',
                                                    backgroundColor: "#008000",
                                                    borderRadius: 40,
                                                    height: 30,
                                                    width: 50,
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center'
                                                }}>100</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Text>可用豆数</Text>
                                            </View>

                                            <View style={{

                                                height: 30,
                                                width: 60,
                                                alignItems: 'center',
                                                justifyContent: 'center'

                                            }}>
                                                <Text style={{
                                                    fontSize: 14,
                                                    color: '#fff',
                                                    backgroundColor: "#008000",
                                                    borderRadius: 40,
                                                    height: 30,
                                                    width: 50,
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center'
                                                }}>60</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 2,
                                        alignItems: 'center'
                                    }}>

                                        <Image source={require('./jdjf/zd.png')} resizeMode="stretch"
                                               style={{
                                                   backgroundColor: "#008000",
                                                   height: 40,
                                                   width: 150
                                               }}/>
                                    </View>
                                </View>
                                <View style={{flex: 3}}>

                                    <Image
                                        source={require('./jdjf/dc.png')}
                                        style={{height: 150, width: 150}}
                                        resizeMode='stretch'
                                    />
                                </View>
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image source={require('./jdjf/hhtx.png')}
                                       resizeMode='stretch'
                                       style={{width: 100, height: 40}}/>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{
                        margin: 10,
                        borderRadius: 10,
                        height: 150,
                        backgroundColor: '#fff',
                        paddingLeft: 5,
                        paddingRight: 5
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomWidth: 1,
                            borderBottomColor: '#BDBDBD',
                            height: 40,
                            alignItems: 'center'
                        }}>
                            <Text>当月排名</Text>
                            <Text>击败全国98%的家庭</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100
                        }}>
                            <Image source={require('./jdjf/jdt.png')}
                                   style={{height: 30, width: deviceWidth * 0.8}}
                                   resizeMode='stretch'/>
                        </View>

                    </View>
                    <View style={{
                        margin: 10,
                        borderRadius: 10,
                        height: 150,
                        backgroundColor: '#fff',
                        paddingLeft: 5,
                        paddingRight: 5
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomWidth: 1,
                            borderBottomColor: '#BDBDBD',
                            height: 40,
                            alignItems: 'center'
                        }}>
                            <Text>年度排名</Text>
                            <Text>击败全国98%的家庭</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100
                        }}>
                            <Image source={require('./jdjf/jdt.png')}
                                   style={{height: 30, width: deviceWidth * 0.8}}
                                   resizeMode='stretch'/>
                        </View>

                    </View>


                    <View style={{
                        margin: 10,
                        borderRadius: 10,
                        height: 350,
                        backgroundColor: '#fff',
                        paddingLeft: 5,
                        paddingRight: 5
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomWidth: 1,
                            borderBottomColor: '#BDBDBD',
                            height: 40,
                            alignItems: 'center'
                        }}>
                            <Text>历史每月排名</Text>
                            <Text>击败全国98%的家庭</Text>
                        </View>
                        <View style={{
                            height: 350,
                            justifyContent: 'flex-start',
                        }}>

                            <Image source={require('./jdjf/tb.png')}
                                   resizeMode='stretch'
                                   style={{width: deviceWidth * 0.9, height: 250}}/>
                        </View>

                    </View>

                    <View style={{flexDirection: 'row', height: 50, marginTop: 20}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <TouchableOpacity>

                                <Image source={require('./jdjf/zdgl.png')} style={{width: 100, height: 30}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <TouchableOpacity>
                                <Image source={require('./jdjf/sygl.png')} style={{width: 100, height: 30}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )
        }

    }
}