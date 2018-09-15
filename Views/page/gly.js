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
    TextInput,
    AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper'

import Cygl from '../cygl/cygl'
import Jtjh from '../cygl/jtjh'
import Wdjf from '../cygl/wdjf'
import Cssz from '../cygl/cssz'
import Hd from '../cygl/hd'
import Wdxx from '../cygl/wdxx'
import Zhqh from '../cygl/zhqh'
import Wdtj from '../cygl/wdtj'
import Wdfk from '../cygl/wdfk'

import app from '../../app.json'
const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
export default class gly extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                {title: '做作业', yd: true, time: '2018-10-01 9:10'},
                {title: '打扫卫生', yd: false, time: '2018-10-01 9:10'}
            ]),
            dataSource1: ds.cloneWithRows([
                {title: '做作业', yd: true, time: '2018-10-01 9:10'},
                {title: '打扫卫生', yd: false, time: '2018-10-01 9:10'}
            ]),
            dataCySource: [],
            jtnc: '',
            txtContent: '',
            type: 1,
            sysRole: '',
            userRole: ''
        }
    }

    _rednerCy1() {
        return (this.state.dataCySource.map((t, i) => this._rednerCy(t, i)));
    }

    _rednerCy(item, i) {
        let role = decodeURI(item.userRole);
        return (
            <View key={i}
                  style={{
                      width: 85,
                      alignItems: 'center'
                  }}>

                <TouchableOpacity onPress={() => {
                }}>
                    <Image
                        source={role === "豆爸" ? require('../cygl/imgs/tx/bb.png') : (role === "豆妈" ? require('../cygl/imgs/tx/mm.png') : role === "叔叔" ? require('../cygl/imgs/tx/uncle.png') :
                            (role === "豆爷爷" || role === "豆外公") ? require('../cygl/imgs/tx/yeye.png') : role === "豆伢" ? require('../cygl/imgs/tx/boy.png') : role === "豆丫" ? require('../cygl/imgs/tx/girl.png') :
                                (role === "豆奶奶" || role === "豆外婆") ? require('../cygl/imgs/tx/nainai.png') : require('../cygl/imgs/tx/mm.png'))}
                        style={{
                            height: 50,
                            width: 50
                        }}
                        resizeMode='stretch'
                    />
                    <Text
                        style={{
                            width: 50,
                            fontSize: 12,
                            textAlign: 'center',
                            marginBottom:10
                        }}>{
                        decodeURI(item.realName)}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _rednerJH() {
        let icons = [];
        icons.push({img: require('./gly/icon_chengyuan.png'), name: '家人管理'});
        icons.push({img: require('./gly/icon_chongzhi.png'), name: '会员充值'});
        icons.push({img: require('./gly/icon_tuijian.png'), name: '我的推荐'});
        icons.push({img: require('./gly/icon_jifen.png'), name: '家庭钻豆'});
        icons.push({img: require('./gly/icon_huodong.png'), name: '我的活动'});
        icons.push({img: require('./gly/icon_xiaoxi.png'), name: '我的消息'});
        icons.push({img: require('./gly/icon_fankui.png'), name: '我的反馈'});
        icons.push({img: require('./gly/icon_qiehuan.png'), name: '切换账号'});
        return (icons.map((t, i) => this._remderItem(t, i)))
    }

    _remderItem(t, i) {
        if (t.img) {
            return (
                <View key={i}
                      style={{width: 80, height: 60, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <TouchableOpacity onPress={() => {
                        if (t.name === "家人管理") {
                            this.props.navigator.push({
                                component: Cygl,
                            })
                        }
                        else if (t.name === "计划设置") {
                            this.props.navigator.push({
                                component: Jtjh,
                            })
                        }
                        if (t.name === "行为设置") {
                            this.setState({type: 6})
                        }
                        else if (t.name === "参数设置") {
                            this.props.navigator.push({
                                component: Cssz,
                            })
                        }
                        else if (t.name === "会员充值") {
                            this.setState({type: 5})
                        }
                        else if (t.name === "我的推荐") {
                            this.props.navigator.push({
                                component: Wdtj,
                            })
                        }
                        else if (t.name === "家庭钻豆") {
                            this.props.navigator.push({
                                component: Wdjf,
                            })
                        }
                        else if (t.name === "我的活动") {
                            this.props.navigator.push({
                                component: Hd,
                            })
                        }
                        else if (t.name === "我的消息") {
                            this.props.navigator.push({
                                component: Wdxx,
                            })
                        }
                        else if (t.name === "我的反馈") {
                            this.props.navigator.push({
                                component: Wdfk,
                            })
                        }
                        else if (t.name === "切换账号") {
                            this.props.navigator.push({
                                component: Zhqh,
                            })
                        }
                    }}>
                        <Image
                            source={t.img}
                            style={{
                                height: 45,
                                width: 45
                            }}
                            resizeMode='contain'>
                        </Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 12}}> {
                        t.name
                    }
                    </Text>
                </View>)
        } else {
            return <View key={i}
                         style={{width: 80, height: 60, justifyContent: 'center', alignItems: 'center'}}/>
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            let url = app.Host + "api/family/Members?jtnc=" +decodeURI(item.nc);
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = JSON.parse(responseJson).data;
                    this.setState({dataCySource: data, jtnc: item.nc})
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }

    render() {
        if (this.state.type === 1) {//首页
            return (
                <ScrollView style={{
                    backgroundColor: '#F7F7F7'
                }}>
                    <View
                        style={{
                            height: 250,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                        <View style={{
                            height: 200
                        }}>
                            <ImageBackground
                                source={require('./gly/banner.png')
                                }
                                resizeMode='stretch'
                                style={{
                                    height: 200,
                                    width: deviceWidth
                                }}/>
                        </View>

                        <View
                            style={{
                                height: 50,
                                flexDirection: 'row',
                                backgroundColor: '#fff',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: 20
                            }}>

                            <View style={{flex: 1}}>

                                <Text
                                    style={{
                                        width: 160,
                                        height: 30,
                                        fontWeight: 'bold'
                                    }}>
                                    欢迎您,{decodeURI(this.state.jtnc)} 的家长</Text>

                            </View>
                            {/*<View
                                style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: 10}}>
                                <Image source={require('./gly/woyaocz.png')}
                                       style={{
                                           width: 130,
                                           height: 70
                                       }}
                                       resizeMode='stretch'
                                >
                                </Image>
                            </View>*/}
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 2,
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10,
                            borderStyle: 'solid',
                            backgroundColor: '#fff',
                            borderRadius: 10

                        }}>
                        <ImageBackground
                            source={{
                                source: require('./gly/boy_bg.png')
                            }}
                            style={{
                                flex: 1
                            }}
                            resizeMode='contain'>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 10
                                }}>
                                <Text>我的家人</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignContent: 'flex-start',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 20,
                                    marginTop: 10,
                                    flexWrap: 'wrap'
                                }}>
                                {this._rednerCy1()}
                            </View>
                        </ImageBackground>
                    </View>

                    <View
                        style={{
                            height: 180,
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10,
                            borderStyle: 'solid',
                            backgroundColor: '#fff',
                            borderRadius: 10
                        }}>
                        <ImageBackground
                            source={{
                                source: require('./gly/boy_bg.png')
                            }}
                            style={{
                                flex: 1
                            }}
                            resizeMode='contain'>

                            <View
                                style={{
                                    flex: 5,
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginBottom: 20,
                                    marginTop: 10,
                                    flexWrap: 'wrap'
                                }}>
                                {this._rednerJH()}
                            </View>
                        </ImageBackground>
                    </View>


                    <View
                        style={{
                            height: 150,
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 10,
                            borderStyle: 'solid',
                            backgroundColor: '#fff',
                            borderRadius: 10
                        }}>
                        <ImageBackground
                            source={{
                                source: require('./gly/boy_bg.png')
                            }}
                            style={{
                                flex: 1
                            }}
                            resizeMode='contain'>
                            <View
                                style={{
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 5
                                }}>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#151515'
                                }}>服务提醒</Text>
                            </View>

                            <Swiper
                                showsPagination={false}
                                height={90}
                                loop={true}
                                autoplay={true}
                                autoplayTimeout={4}
                                horizontal={true}
                                paginationStyle={{bottom: 10}}
                                showsButtons={false}>
                                <ListView
                                    dataSource={this.state.dataSource}
                                    renderRow={(rowData) =>
                                        <View style={{
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            height: 30,
                                            borderBottomColor: '#F2F2F2',
                                            marginLeft: 5,
                                            marginRight: 5
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image
                                                    source={rowData.yd ? require('../shy/shyImage/iconYd.png') : require('../shy/shyImage/wd.png')}
                                                    style={{width: 10, height: 10}} resizeMode='stretch'/>
                                            </View>
                                            <Text style={{flex: 6, textAlign: 'left'}}>{rowData.title}</Text>
                                            <Text style={{
                                                flex: 3,
                                                color: '#BDBDBD', textAlign: 'right'
                                            }}>{rowData.content}</Text>
                                        </View>}
                                />
                                <ListView
                                    dataSource={this.state.dataSource1}
                                    enableEmptySections={true}
                                    renderRow={(rowData) =>
                                        <View style={{
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            height: 30,
                                            borderBottomColor: '#F2F2F2',
                                            marginLeft: 5,
                                            marginRight: 5
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image
                                                    source={rowData.yd ? require('../shy/shyImage/iconYd.png') : require('../shy/shyImage/wd.png')}
                                                    style={{width: 10, height: 10}} resizeMode='stretch'/>
                                            </View>
                                            <Text style={{flex: 6, textAlign: 'left'}}>{rowData.title}</Text>
                                            <Text style={{
                                                flex: 3,
                                                color: '#BDBDBD', textAlign: 'right'
                                            }}>{rowData.content}</Text>
                                        </View>}
                                />

                            </Swiper>
                        </ImageBackground>
                    </View>
                    {/* <View style={{
                        flexDirection: 'row',
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#D0D0D0',

                        height: 180
                    }}>
                        <Image source={require('./gly/gg2.png')} style={{flex: 1}}></Image>
                    </View>*/}


                </ScrollView>
            )
        }
        if (this.state.type === 5) {//充值页面
            return <View>
                <TouchableOpacity onPress={() => {
                    this.setState({type: 1})
                }}>
                    <Text>敬请期待</Text>

                </TouchableOpacity></View>
        }
        if (this.state.type === 6) {//计划库页面
            return <View>
                <TouchableOpacity>
                    <Text>敬请期待</Text>
                </TouchableOpacity></View>
        }
    }
}