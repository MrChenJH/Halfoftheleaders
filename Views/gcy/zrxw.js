import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Switch,

    AsyncStorage
} from 'react-native';
import Main from '../Main2'
import Checkbox from '../component/xwCheckBox'
import app from '../../app.json';
import ModalDropdown from 'react-native-modal-dropdown'


const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class xwpj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            dataCySource: [],
            dataJhSource: ds.cloneWithRows([]),
            userName: "",
            type: 1,
            jtnc: "",
            xgzh: "",
            xwMc: "",
            ydTpe: "",
            xwSocre: 0,
            realName: '',
            zjds: 0,
            yhjds: 0,
            whjds: 0,
            zyds: 0,
            yhyds: 0,
            whyds: 0
        }
    }


    _rednerCy1() {
        return (this.state.dataCySource.map((t, i) => this._rednerCy(t, i)))
    }

    _rednerCy(item, i) {
        let role = decodeURI(item.userRole);
        return (

            <View key={i}
                  style={{width: 80, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {
                    this._showDeatil(decodeURI(item.userName));
                    this._showTjData(decodeURI(item.userName));
                }}>
                    <Image
                        source={role === "豆伢" ? require('../cygl/imgs/tx/boy.png') : require('../cygl/imgs/tx/girl.png')}
                        style={{
                            height: 50,
                            width: 50
                        }}
                        resizeMode='stretch'
                    />
                    <Text
                        style={{
                            width: 50,
                            textAlign: 'center'
                        }}>{decodeURI(item.realName)}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _showTjData(xgzh) {
        fetch(app.Host + 'api/plans/tj?xgzh=' + xgzh)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                let data = responseJson.data;
                let data1 = responseJson.data1;
                this.setState({
                    dataList: ds.cloneWithRows(data),
                    zjds: data1[0].zs,
                    whjds: data1[0].w,
                    yhjds: data1[0].y
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _showDeatil(xgzh) {
        fetch(app.Host + 'api/plans/xgPlanzr?jtnc=' + this.state.jtnc + "&xgzh=" + xgzh)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                let data = responseJson.data;
                this.setState({dataJhSource: ds.cloneWithRows(data)})
            })
            .catch((error) => {
                console.error(error);
            });
        fetch(app.Host + 'api/behavior/behaviorSzr?jtnc=' + this.state.jtnc + "&xg=" + xgzh)
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
            });
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {

            fetch(app.Host + 'api/plans/xgSearch?jtnc=' + decodeURI(item.nc))
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;
                    this.setState({dataCySource: data, jtnc: decodeURI(item.nc), userName: decodeURI(item.userName)});

                    if (data.length > 0) {
                        this._showDeatil.bind(this)(data[0].userName);
                        this._showTjData.bind(this)(data[0].userName);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }

    render() {
        const {back} = this.props;
        if (this.state.type === 1) {

            return (
                <View style={{backgroundColor: '#efefef', height: deviceheight}}>
                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#E6E6E6',
                        backgroundColor: '#fe9c2e',
                        height: 40,
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
                                        return item.id === "Main4"
                                    });
                                    this.props.navigator.popToRoute(destRoute);
                                }
                                }>
                                <Image source={require('./shyImage/back.png')}
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
                                }}>昨日表现</Text>
                        </View>
                        <View style={{
                            marginRight: 5,
                            flexDirection: 'row'
                        }}>
                        </View>
                    </View>

                    <View
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
                            {this._rednerCy1()}
                        </View>
                    </View>

                    <ScrollView
                        style={{backgroundColor: '#efefef', height: deviceheight}}>
                        <View
                            style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                backgroundColor: '#fff',
                                height: 40,
                                margin: 5,
                                alignItems: 'center',
                                paddingLeft: 10,
                                paddingRight: 10
                            }}>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 1})
                            }}>
                                <View
                                    style={{flexDirection: 'row'}}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        borderBottomColor: '#FFBF00',
                                        borderBottomWidth: 4,
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>昨日计划任务</Text>
                                    {/* <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        borderBottomColor: '#FFBF00',
                                        borderBottomWidth: 4,
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>计划</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        borderBottomColor: '#FFBF00',
                                        borderBottomWidth: 4,
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>任务</Text>*/}
                                </View>
                            </TouchableOpacity>
                            <View style={{width: 20}}/>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 2})
                            }}>
                                <View
                                    style={{flexDirection: 'row', marginLeft: 5}}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>昨日行为养成</Text>
                                    {/*  <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>行为</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>养成</Text>*/}
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                height: 40,
                                backgroundColor: '#fff',
                                justifyContent: 'flex-start',
                                alignContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 5,
                                flexWrap: 'wrap'
                            }}>
                            <View style={{
                                justifyContent: 'flex-start',
                                alignContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{flex: 1, textAlign: "center"}}>总金豆:{this.state.zjds}</Text>
                                <Text style={{flex: 1, textAlign: "center"}}>获得:{this.state.yhjds}</Text>
                                <Text style={{flex: 1, textAlign: "center"}}>未获得:{this.state.whjds}</Text>
                            </View>
                        </View>

                        <ListView
                            dataSource={this.state.dataJhSource}
                            enableEmptySections={true}
                            renderRow={(rowData) =>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        borderTopColor: '#F0F0F0',
                                        backgroundColor: '#fff',
                                        borderTopWidth: 1,
                                        margin: 5,
                                        borderRadius: 10,
                                        height: 30
                                    }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{color: '#474747', width: 80}}>{decodeURI(rowData.realName)}</Text>
                                    </View>
                                    <View style={{
                                        flex: 4,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{color: '#474747'}}>{decodeURI(rowData.projectName)}</Text>
                                    </View>
                                    <View style={{
                                        flex: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: '#474747'}}>金豆：{rowData.jds}</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                        <Image
                                            source={decodeURI(rowData.ydType) === "优" ? require('./shyImage/you.png') : decodeURI(rowData.ydType) === "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                            resizeMode='stretch'
                                            style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}/>

                                    </View>
                                </View>
                            }
                        />
                    </ScrollView>
                </View>
            )
        }
        else {
            return (
                <View style={{backgroundColor: '#efefef', height: deviceheight}}>
                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#E6E6E6',
                        backgroundColor: '#fe9c2e',
                        height: 40,
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
                                        return item.id === "Main4"
                                    });
                                    this.props.navigator.popToRoute(destRoute);
                                }
                                }>
                                <Image source={require('./shyImage/back.png')}
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
                                }}>昨日表现</Text>
                        </View>
                        <View style={{
                            marginRight: 5,
                            flexDirection: 'row'
                        }}>
                        </View>
                    </View>

                    <View
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
                            {this._rednerCy1()}
                        </View>
                    </View>

                    <ScrollView
                        style={{backgroundColor: '#efefef', height: deviceheight}}>
                        <View
                            style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                backgroundColor: '#fff',
                                height: 40,
                                margin: 5,
                                alignItems: 'center',
                                paddingLeft: 10,
                                paddingRight: 10
                            }}>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 1})
                            }}>
                                <View
                                    style={{flexDirection: 'row'}}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>昨日计划任务</Text>
                                    {/*  <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'

                                    }}>计划</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>任务</Text>*/}
                                </View>
                            </TouchableOpacity>
                            <View style={{width: 20}}/>
                            <TouchableOpacity onPress={() => {
                                this.setState({type: 2})
                            }}>
                                <View
                                    style={{flexDirection: 'row', marginLeft: 5}}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        borderBottomColor: '#FFBF00',
                                        borderBottomWidth: 4,
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>昨日行为养成</Text>
                                    {/*  <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        borderBottomColor: '#FFBF00',
                                        borderBottomWidth: 4,
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>行为</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        height: 40,
                                        textAlign: 'center',
                                        textAlignVertical: 'center'
                                    }}>养成</Text>*/}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <ListView
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) =>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        borderTopColor: '#F0F0F0',
                                        backgroundColor: '#fff',
                                        borderTopWidth: 1,
                                        margin: 5,
                                        borderRadius: 10,
                                        height: 50
                                    }}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{color: '#474747', width: 80}}>{decodeURI(rowData.realName)}</Text>
                                    </View>
                                    <View style={{
                                        flex: 4,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',

                                        marginLeft: 10
                                    }}>
                                        <Text style={{fontSize: 12, color: '#474747'}}>{decodeURI(rowData.xwMc)}</Text>
                                    </View>
                                    <View style={{
                                        flex: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: 12, color: '#474747'}}>银豆：{rowData.yd}</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>

                                        <Image
                                            source={decodeURI(rowData.ydType) === "优" ? require('./shyImage/you.png') : decodeURI(rowData.ydType) === "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                            resizeMode='stretch'
                                            style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}/>
                                    </View>
                                </View>
                            }
                        />
                    </ScrollView>
                </View>
            )
        }

        /* return (
             <View
                 style={{backgroundColor: '#efefef', height: deviceheight}}
             >
                 <View style={{
                     flexDirection: 'row',
                     borderBottomWidth: 1,
                     borderBottomColor: '#E6E6E6',
                     backgroundColor: '#fe9c2e',
                     height: 40,
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
                                     return item.id === "Main4"
                                 });
                                 this.props.navigator.popToRoute(destRoute);
                             }
                             }>
                             <Image source={require('./shyImage/back.png')}
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
                             }}>昨日表现</Text>
                     </View>
                     <View style={{
                         marginRight: 5,
                         flexDirection: 'row'
                     }}>
                     </View>
                 </View>

                 <View
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
                         {this._rednerCy1()}
                     </View>
                 </View>


                 <ListView
                     dataSource={this.state.dataSource}
                     enableEmptySections={true}
                     renderRow={(rowData) =>

                         <View
                             style={{
                                 flexDirection: 'row',
                                 borderTopColor: '#F0F0F0',
                                 backgroundColor: '#fff',
                                 borderTopWidth: 1,
                                 margin: 5,
                                 borderRadius: 10,
                                 height: 50
                             }}>
                             <View style={{
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'flex-start',

                                 marginLeft: 10
                             }}>
                                 <Text style={{color: '#474747', width: 80}}>{decodeURI(rowData.realName)}</Text>
                             </View>
                             <View style={{
                                 flex: 4,
                                 justifyContent: 'center',
                                 alignItems: 'flex-start',

                                 marginLeft: 10
                             }}>
                                 <Text style={{fontSize: 12, color: '#474747'}}>{decodeURI(rowData.xwMc)}</Text>
                             </View>
                             <View style={{
                                 flex: 2,
                                 justifyContent: 'center',
                                 alignItems: 'center'
                             }}>
                                 <Text style={{fontSize: 12, color: '#474747'}}>银豆 {rowData.yd}</Text>
                             </View>
                             <View style={{
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center'
                             }}>

                                 <Image
                                     source={decodeURI(rowData.ydType) === "优" ? require('./shyImage/you.png') : decodeURI(rowData.ydType) === "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                     resizeMode='stretch'
                                     style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}/>

                             </View>


                         </View>

                     }
                 />


             </View>
         )*/

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBar: {
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: 0.5,
        backgroundColor: '#ffffff',
    },
    navigationTitle: {
        padding: 10,
    },
    navigationButton: {
        padding: 10,
    },
    navigationLeftButton: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    navigator: {
        flex: 1,

    },
});