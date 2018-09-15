import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
    View,
    Dimensions,
    ImageBackground

} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export default class app2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: {
                text: '豆金分布图'
            },
            optionpie: {
                tooltip: {    //定义环形图item点击弹框
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {     //定义右边的菜单目录效果
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                series: [{
                    name: '月份销量',
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['58%', '90%'],     //设置环形图展示半径空心圆环
                    avoidLabelOverlap: false,
                    center: ['50%', '50%'],     //这里可以设置环形图展示的位置
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {               //设置点击展示环形图内部文本样式
                            show: true,
                            textStyle: {
                                color: '#666666',
                                fontSize: '11',
                                fontWeight: 'bold'
                            }
                        }
                    },

                    labelLine: {
                        normal: {
                            show: false
                        }
                    },

                    data: [{value: 2.00, name: '1月'}, {value: 3.00, name: '2月'}, {
                        value: 3.00,
                        name: '3月'
                    }, {value: 2.00, name: '4月'}, {value: 5.00, name: '5月'}, {value: 7.00, name: '6月'},
                        {value: 3.00, name: '7月'}, {value: 7.00, name: '8月'}, {value: 25.00, name: '9月'}, {
                            value: 3,
                            name: '10月'
                        }, {value: 3, name: '11月'}, {value: 3, name: '12月'}]
                }],
                //可以根据下标来定义item内容的颜色
                color: ['#01a2ea', '#8ac99c', '#23ac38', '#b4d467', '#ffff00', '#fdcc89', '#f19049', '#ea6941', '#f95353', '#cc5ac0', '#ac5fd7', '#5570b5']

            },
            optionline1: {
                title: {
                    text: '豆金统计图（周）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }, optionline2: {
                title: {
                    text: '豆金统计图（天）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }, optionline3: {
                title: {
                    text: '豆金统计图（周）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            text: 'test'
        };
    }

    componentDidMount() {
        this.setState({
            title: {
                text: '豆金分布图'
            },
            optionpie: {
                tooltip: {    //定义环形图item点击弹框
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {     //定义右边的菜单目录效果
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                series: [{
                    name: '月份销量',
                    type: 'pie',
                    hoverAnimation: false,
                    radius: ['58%', '90%'],     //设置环形图展示半径空心圆环
                    avoidLabelOverlap: false,
                    center: ['50%', '50%'],     //这里可以设置环形图展示的位置
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {               //设置点击展示环形图内部文本样式
                            show: true,
                            textStyle: {
                                color: '#666666',
                                fontSize: '11',
                                fontWeight: 'bold'
                            }
                        }
                    },

                    labelLine: {
                        normal: {
                            show: false
                        }
                    },

                    data: [{value: 2.00, name: '1月'}, {value: 3.00, name: '2月'}, {
                        value: 3.00,
                        name: '3月'
                    }, {value: 2.00, name: '4月'}, {value: 5.00, name: '5月'}, {value: 7.00, name: '6月'},
                        {value: 3.00, name: '7月'}, {value: 7.00, name: '8月'}, {value: 25.00, name: '9月'}, {
                            value: 3,
                            name: '10月'
                        }, {value: 3, name: '11月'}, {value: 3, name: '12月'}]
                }],
                //可以根据下标来定义item内容的颜色
                color: ['#01a2ea', '#8ac99c', '#23ac38', '#b4d467', '#ffff00', '#fdcc89', '#f19049', '#ea6941', '#f95353', '#cc5ac0', '#ac5fd7', '#5570b5']

            },
            optionline1: {
                title: {
                    text: '豆金统计图（周）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }, optionline2: {
                title: {
                    text: '豆金统计图（天）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }, optionline3: {
                title: {
                    text: '豆金统计图（周）'
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
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            text: 'test'
        })
    }

    render() {
        const {back} = this.props;
        return (
            <ScrollView style={{width: deviceWidth}}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fe9c2e',
                    height: 40,
                    width:deviceWidth,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    <View style={{height: 50, width: 35, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                            onPress={() => {
                                let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                    return item.id === "Main2"
                                });
                                this.props.navigator.popToRoute(destRoute);
                            }}
                        >
                            <Image source={require('./imgs/back.png')}
                                   resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>成长基金</Text>
                    </View>
                    <View style={{marginRight: 5, width: 35}}>
                        {/* <TouchableOpacity style={{height: 20, width: 20, marginRight: 10}} onPress={() => {
                                this.setState({type: 7})
                            }}>
                                <Image source={require('./imgs/add.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>*/}
                    </View>
                </View>

                <ImageBackground
                    source={require('./gly/2menu_bg.png')}
                    style={{width: deviceWidth, padding: 5}}>

                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            alignItems: 'flex-end',
                            marginTop: 20,
                            marginBottom: 3
                        }}>
                        <Text
                            style={{
                                flex: 5, color: '#fff'
                            }}
                        >本周攒豆情况</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flex: 1
                            }}
                        >
                            <Image source={require('./jdjf/syz.png')} resizeMode='cover'
                                   style={{height: 15, width: 20, marginRight: 5}}/>
                            <Image source={require('./jdjf/xyz.png')} resizeMode='cover'
                                   style={{height: 15, width: 20}}/>
                        </View>
                    </View>
                    <View style={{
                        height: 45, flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff', borderRadius: 5, alignItems: 'center'
                    }}>
                        <Text style={{marginLeft: 10, color: 'orange', fontSize: 12}}>
                            豆金总余额: 1500
                        </Text>

                        <TouchableOpacity style={{width: 100, height: 30}} onPress={() => {
                        }}>
                            <Image source={require('./jdjf/djcz.png')}
                                   style={{width: 100, height: 35}}
                                   resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 250,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./jdjf/djfb.png')}
                               style={{width: deviceWidth - 10, height: 250}}
                               resizeMode='contain'/>
                    </View>
                    <View style={{
                        height: 250,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./jdjf/djtj.png')} style={{width: deviceWidth - 10, height: 250}}
                               resizeMode='stretch'/>
                    </View>
                    <View style={{
                        height: 250,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./jdjf/jdtj.png')} style={{width: deviceWidth - 10, height: 250}}
                               resizeMode='stretch'/>
                    </View>
                    <View style={{
                        height: 250,
                        marginTop: 10,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <Image source={require('./jdjf/ydtj.png')} style={{width: deviceWidth - 10, height: 250}}
                               resizeMode='stretch'/>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

