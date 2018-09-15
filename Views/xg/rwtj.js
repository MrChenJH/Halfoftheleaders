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
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import Checkbox from '../component/xwCheckBox'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class rwtj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: ds.cloneWithRows([]),
            jtnc: "",
            xgzh: "",
            realname: "",
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
                this._showXgJH.bind(this)(this.state.userName);
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
            this._showXgJH.bind(this)(this.state.userName)
        })
    }

    render() {
        const {back} = this.props;
        return (
            <View style={{backgroundColor: '#F7F7F7'}}>
                <View style={{height: 200}}>
                    <ImageBackground
                        resizeMode='stretch'
                        source={require('../shy/shyImage/banner.png')}
                        style={{height: 200, width: deviceWidth}}>
                    </ImageBackground>
                </View>
                <ScrollView
                    style={{backgroundColor: '#efefef', height: deviceheight}}>
                    <View
                        style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            height: 40,
                            margin: 5,
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>

                        <View
                            style={{flexDirection: 'row'}}>
                            <Text style={{
                                fontWeight: 'bold',
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>今日</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                borderBottomColor: '#FFBF00',
                                borderBottomWidth: 2,
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>计划</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>任务</Text>
                        </View>
                    </View>
                    <ListView
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
                                    }}>{decodeURI(rowData.projectName)}</Text>
                                </View>

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        color: '#474747',
                                        marginRight: 20
                                    }}>金豆数:{decodeURI(rowData.jds)}</Text>

                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Checkbox
                                        isChecked={rowData.sta >= 1}
                                        styles={{height: 20, width: 20, marginRight: 10}}
                                        selected={(isS) => {
                                            if (!isS) {
                                                this._shenhe.bind(this, rowData.xgid)();
                                            }else{
                                                return;
                                            }
                                        }}
                                    />
                                </View>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

