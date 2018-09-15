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
    Dimensions,
    AsyncStorage
} from 'react-native';

import app from '../../app.json'
import DropdownAlert from 'react-native-dropdownalert';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import CheckBox from '../component/xwCheckBox'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCySource: [],
            dataList: ds.cloneWithRows([]),

            jtnc: '',
            txtContent: '',
            sysRole: '',
            userRole: '',
            xgzh: '',
            zjds: 0,
            yhjds: 0,
            whjds: 0
        }
    }


    _showXgJH(xgzh) {
        fetch(app.Host + 'api/plans/xgPlanJr?jtnc='+this.state.jtnc+'&xgzh=' + xgzh)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                let data = responseJson.data;
                this.setState({
                    dataList: ds.cloneWithRows(data)
                })
            })
            .catch((error) => {
                console.error(error);
            });
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
                    this._showXgJH.bind(this)(decodeURI(item.userName))
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
                            fontSize: 12,
                            textAlign: 'center'
                        }}>{decodeURI(item.realName)}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    itemAction(item) {
        switch (item.type) {
            case 'close':
                this.closeAction();
                break;
            default:
                const random = Math.floor(Math.random() * 1000 + 1);
                const title = item.type + ' #' + random;
                this.dropdown.alertWithType(item.type, title, item.message);
        }
    }

    closeAction() {
        this.dropdown.close();
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            this.setState({jtnc: decodeURI(item.nc)});
            fetch(app.Host + 'api/plans/xgSearch?jtnc=' + this.state.jtnc)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;
                    this.setState({dataCySource: data});
                    if(data.length>0) {
                        this._showXgJH.bind(this)(data[0].userName);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }

    render() {
        const {back} = this.props;
        return (
            <View style={{backgroundColor: '#efefef', height: deviceheight}}>
                <DropdownAlert
                    ref={ref => this.dropdown = ref}
                    containerStyle={{height: 100}}
                    showCancel={true}
                    closeInterval={3000}
                    zIndex={1000000}
                />

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
                            }}>
                            <Image source={require('./shyImage/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>今日计划</Text>
                    </View>
                    <View style={{
                        marginRight: 5,
                        flexDirection: 'row'
                    }}></View>
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


                {/*      <View
                    style={{
                        height: 40,
                        justifyContent: 'flex-start',
                        alignContent: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5,
                        flexWrap: 'wrap'
                    }}>

                    <Text style={{flex: 1, fontSize: 12, marginLeft: 10}}>计划总金豆数{this.state.zjds}</Text>
                    <Text style={{flex: 1, fontSize: 12}}>获得金豆数{this.state.yhjds}</Text>
                    <Text style={{flex: 1, fontSize: 12}}>未获得金豆数{this.state.whjds}</Text>
                </View>*/}

                <ListView
                    // style={{height: deviceWidth, width: deviceheight - 80}}
                    dataSource={this.state.dataList}
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
                                height: 40
                            }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    color: '#474747'
                                }}>{decodeURI(rowData.realName) + "   " + decodeURI(rowData.projectName)}</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    color: '#474747',
                                    marginRight: 20
                                }}>金豆数{decodeURI(rowData.jds)}</Text>
                            </View>
                            <View style={{width: 10}}></View>
                        </View>
                    }
                />
            </View>
        )
    }
}

