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

import Jrrw from '../shy/jrrw'
import Zrbx from '../shy/zrxw'
import Mrjh from '../shy/mrjh'
import Jdhd from '../shy/hd'
import Jssh from '../shy/jssh'
import Zhqh from '../shy/zhqh'
import Wdjf from '../cygl/wdjf'
import Wdqb from '../xg/wdqb'
import Wdtj from '../cygl/wdtj'
import Wyhs from '../shy/wyhs'
import app from '../../app.json';
const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class page1 extends Component {
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
            type: 1,
            jtnc: "",
            xgzh: "",
            realname: ""
        }
    }

    _rednerJH() {
        let icons = [];
        icons.push({img: require('./shy/zrbx.png'), name: '昨日表现'});
        icons.push({img: require('./shy/jrrw.png'), name: '今日任务'});
        icons.push({img: require('./shy/mrjh.png'), name: '明日计划'});
        icons.push({img: require('./shy/mrjh.png'), name: '我有话说'});
        icons.push({img: require('./shy/yssh.png'), name: '结算审核'});
        icons.push({img: require('./shy/jfd.png'), name: '成长基金'});
        icons.push({img: require('./gly/icon_jifen.png'), name: '家庭钻豆'});
        icons.push({img: require('./shy/jttj.png'), name: '家庭推荐'});
        icons.push({img: require('./gly/icon_qiehuan.png'), name: '切换账号'});
        return (icons.map((t, i) => this._remderItem(t, i)))
    }

    _remderItem(t, i) {
        if (t.img) {
            return (
                <View key={i}
                      style={{width: 80, height: 60, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <TouchableOpacity onPress={() => {
                        if (t.name === "今日任务") {
                            this.props.navigator.push({
                                component: Jrrw,
                            })
                        }
                        else if (t.name === "昨日表现") {
                            this.props.navigator.push({
                                component: Zrbx,
                            })
                        }
                        else if (t.name === "明日计划") {
                            this.props.navigator.push({
                                component: Mrjh,
                            })
                        }
                        else if (t.name === "结算审核") {
                            this.props.navigator.push({
                                component: Jssh,
                            })
                        }
                        else if (t.name === "成长基金") {
                            this.props.navigator.push({
                                component: Wdqb,
                            })

                        }
                        else if (t.name === "家庭钻豆") {
                            this.props.navigator.push({
                                component: Wdjf,
                            })
                        }
                        else if (t.name === "家庭推荐") {
                            this.props.navigator.push({
                                component: Wdtj,
                            })
                        }
                        else if (t.name === "切换账号") {
                            this.props.navigator.push({
                                component: Zhqh,
                            })
                        } else if (t.name === "我有话说") {
                            this.props.navigator.push({
                                component: Wyhs,
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
            this.setState({jtnc: item.nc, xgzh: decodeURI(item.userName), realname: decodeURI(item.realName)});
            fetch(app.Host + 'api/plans/Plans?jtnc=' + item.nc)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;
                    this.setState({datalist: ds.cloneWithRows(data)})
                })
                .catch((error) => {
                    console.error(error);
                });

            /* fetch(app.Host + 'api/plans/xgPlans?jtnc=' + item.nc)
                 .then((response) => {
                     if (response.ok) {
                         return response.json();
                     }
                 })
                 .then((responseJson) => {
                     let data = responseJson.data;
                     this.setState({dataSource: ds.cloneWithRows(data)})
                 })
                 .catch((error) => {
                     console.error(error);
                 });*/

        }).catch((error) => {
            console.error(error);
        })
    }

    render() {
        if (this.state.type === 1) {
            return (
                <ScrollView style={{
                    backgroundColor: '#F7F7F7'
                }}>
                    <View
                        style={{
                            height: 200,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                        <View style={{
                            height: 200
                        }}>
                            <ImageBackground
                                source={require('./gly/banner.png')}
                                style={{
                                    height: 200,
                                    width: deviceWidth
                                }}
                                resizeMode='stretch'
                            />
                        </View>

                        {/*  <View
                            style={{
                                width: deviceWidth,
                                height: 100,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                backgroundColor: '#fff',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    height: 90,
                                    flexDirection: 'row',

                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    paddingLeft: 20
                                }}>
                                <View
                                    style={{
                                        width: 50
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            alignItems: 'center'
                                        }}
                                        onPress={() => {
                                            this.setState({type: 111})
                                        }}>
                                        <Image
                                            source={require('./gly/boy.png')}
                                            style={{
                                                height: 50,
                                                width: 50
                                            }}></Image>
                                        <Text>小鬼</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                                <Text
                                    style={{fontSize: 13, color: "#FFBF00"}}
                                >切换头像</Text>
                            </View>
                        </View>*/}

                    </View>

                    <View
                        style={{
                            height: 250,
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
                            height: 90,
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
                                    height: 60,
                                    marginBottom: 20,
                                    marginTop: 10
                                }}>

                                <ListView
                                    dataSource={this.state.dataSource}
                                    enableEmptySections={true}
                                    renderRow={(rowData) =>
                                        <View style={{
                                            height: 30,
                                            flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            alignItems: 'center',
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
                                            <Text style={{
                                                flex: 6,
                                                textAlign: 'left',
                                                fontSize: 12
                                            }}>{rowData.title}</Text>
                                            <Text style={{
                                                flex: 3,
                                                color: '#BDBDBD', textAlign: 'right', fontSize: 12
                                            }}>{rowData.time}</Text>
                                        </View>}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#D0D0D0',
                        height: 140
                    }}>
                        <Image source={require('./gly/gg2.png')}
                               style={{height: 140, width: deviceWidth - 10}}
                               resizeMode='stretch'/>
                    </View>
                </ScrollView>
            )
        } else {
            if (this.state.type === 2) {
                return <Jrrw back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 3) {
                return <Zrbx back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 4) {
                return <Mrjh back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 5) {
                return <Jssh back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 6) {
                return <Wdjf back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 7) {
                return <Wdqb back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 8) {
                return <Wyhs back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 9) {
                return <Wdtj back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 10) {
                return <Jdhd back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 11) {
                return <Zhqh back={() => {
                    this.setState({type: 1})
                }}/>
            }
            else if (this.state.type === 111) {
                return (
                    <View>

                        <View style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: '#E6E6E6',
                            backgroundColor: '#fe9c2e',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>

                            <View>
                                <TouchableOpacity
                                    style={{height: 20, width: 20}}
                                    onPress={() => {
                                        this.setState({type: 1})
                                    }}>
                                    <Image source={require('../cygl/imgs/back.png')}
                                           resizeMode='stretch'
                                           style={{height: 20, width: 20}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: '#FFF', fontWeight: 'bold'}}>成员详情</Text>
                            </View>
                            <View style={{marginRight: 5, width: 22}}>

                            </View>
                        </View>


                        <View backgroundColor='#F2F2F2'
                              style={{height: deviceheight - 60}}>

                            <TouchableOpacity onPress={() => {
                                this.setState({type: 444, typetitle: '账号名', typecontent: '张三的家'})
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F0F0F0',
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        账号名:</Text>
                                    <View
                                        style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{
                                            fontSize: 13,
                                            color: '#585858',
                                            fontFamily: 'Microsoft YaHei'
                                        }}>
                                            张三的家</Text>
                                        <Image
                                            source={require('../cygl/imgs/go.png')}
                                            style={{width: 10, height: 10}}
                                            resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 444, typetitle: '密码', typecontent: '123456'})
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F0F0F0',
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 10,
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: '#585858',
                                            fontFamily: 'Microsoft YaHei'
                                        }}>
                                        密码</Text>
                                    <View
                                        style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{
                                            fontSize: 13,
                                            color: '#585858',
                                            fontFamily: 'Microsoft YaHei'
                                        }}>
                                            123456</Text>
                                        <Image
                                            source={require('../cygl/imgs/go.png')}
                                            style={{width: 10, height: 10}}
                                            resizeMode='stretch'/>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 444, typetitle: '系统角色', typecontent: '家庭管理员'})
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F0F0F0',
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        系统角色</Text>
                                    <View
                                        style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{
                                            fontSize: 13,
                                            color: '#585858',
                                            fontFamily: 'Microsoft YaHei'
                                        }}>
                                            家庭管理员</Text>
                                        <Image
                                            source={require('../cygl/imgs/go.png')}
                                            style={{width: 10, height: 10}}
                                            resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => {
                                this.setState({type: 444, typetitle: '家庭角色', typecontent: '普通用户'})
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#fff',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#F0F0F0',
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        家庭角色</Text>
                                    <View
                                        style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{
                                            fontSize: 13,
                                            color: '#585858',
                                            fontFamily: 'Microsoft YaHei'
                                        }}>
                                            普通用户</Text>
                                        <Image
                                            source={require('../cygl/imgs/go.png')}
                                            style={{width: 10, height: 10}}
                                            resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            } else if (this.state.type === 444) {
                return (
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: '#E6E6E6',
                            backgroundColor: '#fe9c2e',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>

                            <View>
                                <TouchableOpacity style={{height: 20, width: 20}}
                                                  onPress={() => {
                                                      this.setState({type: 111})
                                                  }}>
                                    <Image source={require('../cygl/imgs/back.png')} resizeMode='stretch'
                                           style={{height: 20, width: 20}}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{
                                    fontSize: 20,
                                    color: '#FFF',
                                    fontWeight: 'bold'
                                }}>{this.state.typetitle}编辑</Text>
                            </View>
                            <View style={{marginRight: 5, width: 21}}>

                            </View>
                        </View>
                        <View backgroundColor='#F2F2F2'
                              style={{height: deviceheight - 60}}>
                            <View style={{backgroundColor: '#fff', marginTop: 10, height: 40}}>
                                <TextInput underlineColorAndroid='transparent'
                                           clearButtonMode='always'
                                           multiline={false}
                                           defaultValue={this.state.typecontent}
                                >

                                </TextInput>
                            </View>
                        </View>
                    </View>
                )
            }
        }
    }
}