import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';
import Main from '../Main2'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import Checkbox from '../component/xwCheckBox'
import DropdownAlert from "react-native-dropdownalert";

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class jrrw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: ds.cloneWithRows([]),
            jtnc: "",
            xgzh: "",
            realname: "",
            zjds: 0,
            yhjds: 0,
            whjds: 0,
            userName: ''
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

    _shenhe(id) {
        let url = app.Host + "api/plans/planTj?id=" + id;
        fetch(url).then((response) => {
            if (response.ok) {
                this._showDatad.bind(this)()
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    componentWillMount() {

        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {

            this.setState({
                userName: decodeURI(item.userName),
                jtnc: decodeURI(item.nc),
                xgzh: decodeURI(item.userName),
                realname: decodeURI(item.realName)
            });
            this._showXgJH.bind(this)(item.userName)
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
                                    return item.id === "Main2"
                                });
                                this.props.navigator.popToRoute(destRoute);
                            }}>
                            <Image source={require('../xg/imgs/back.png')} resizeMode='stretch'
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
                                }}>{ decodeURI(rowData.projectName)}</Text>
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

