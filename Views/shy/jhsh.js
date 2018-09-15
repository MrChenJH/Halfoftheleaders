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
import Checkbox from '../component/xwCheckBox'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCySource: [],
            dataList: ds.cloneWithRows([

            ]),
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

    _shenhe(id) {
        let url = app.Host + "api/plans/planSh?id=" + id;
        fetch(url).then((response) => {
            if (response.ok) {
                this._showXgJH.bind(this)(this.state.xgzh);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    _showXgJH(xgzh) {
        fetch(app.Host + 'api/plans/xgPlanJrds?jtnc=' + this.state.jtnc + '&xgzh=' + xgzh)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                let data = responseJson.data;
                this.setState({dataList: ds.cloneWithRows(data)});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _rednerCy1() {
        return (this.state.dataCySource.map((t, i) => this._rednerCy(t, i)));
    }

    _rednerCy(item, i) {
        let role = decodeURI(item.userRole);
        return (

            <View key={i}
                  style={{width: 80, alignItems: 'center'}}>

                <TouchableOpacity onPress={() => {
                    this.setState({xgzh: decodeURI(item.userName)});
                    this._showXgJH.bind(this)(this.state.xgzh);
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
                         /*   onPress={() => {
                                let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                    return item.id === "Main3"
                                });
                                this.props.navigator.popToRoute(destRoute);
                            }}*/
                        >
                            {/*<Image source={require('./shyImage/back.png')} resizeMode='stretch'*/}
                                   {/*style={{height: 20, width: 20}}>*/}
                            {/*</Image>*/}
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>计划审核</Text>
                    </View>
                    <View style={{
                        marginRight: 5,
                        flexDirection: 'row'
                    }}/>
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
                    /* style={{
                         height: deviceWidth,
                         width: deviceheight - 80
                     }}*/

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
                                <Checkbox
                                    isChecked={rowData.sta>1}
                                    styles={{height: 20, width: 20}}
                                    selected={(isS) => {
                                        if (!isS) {
                                            this._shenhe.bind(this)(rowData.xgid);
                                        }
                                    }}
                                />

                            </View>
                            <View style={{width: 10}}>

                            </View>

                        </View>

                    }
                />


            </View>
        )


    }
}

