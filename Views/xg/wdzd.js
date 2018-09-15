import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native';
import app from '../../app.json'
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class wdzd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            yslx: [],
            xmjelb: [],
            zjye: 0,
            type: 1,
            dialogShow: false,
            realName: "",
            jtnc: "",
            ysType: '',
            syMd: '',
            zhSy: 0,
            zzysid: 0,
            SponsorJe: 0,
            userName: '',
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            this.setState({
                jtnc: decodeURI(item.nc),
                userName: decodeURI(item.userName),
                realName: decodeURI(item.realName)
            });
            fetch(app.Host + 'api/FundSetting/gFundSetting?jtnc=' + this.state.jtnc + '&userName=' + this.state.userName)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;
                    data.forEach(element => {
                        this.state.yslx.push(decodeURI(element.ProjectName));
                        this.state.xmjelb.push({key: element.ProjectName, value: element.je})
                    });
                    this.setState({yslx: this.state.yslx});
                    this.setState({xmjelb: this.state.xmjelb})
                })
                .catch((error) => {
                    console.error(error);
                });

            fetch(app.Host + 'api/ys/YsS?jtnc=' + item.nc + '&xgzh=' + item.userName)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;

                    this.setState({
                        dataSource: ds.cloneWithRows(data),
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }

    render() {
        const {back} = this.props;
        if (this.state.type === 1) {//我的账单列表
            return (
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
                                }}>我的账单</Text>
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

                    <ListView
                        dataSource={this.state.dataSource}
                        enableEmptySections={true}
                        renderRow={(rowData) =>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderTopColor: '#F0F0F0',
                                    backgroundColor: rowData.xz ? '#FB9401' : '#fff',
                                    borderTopWidth: 1,
                                    margin: 5,
                                    borderRadius: 10,
                                    height: 40
                                }}>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',

                                    marginLeft: 10
                                }}>
                                    <Text style={{color: '#474747'}}>{decodeURI(rowData.syMd)}</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{color: '#474747'}}>{decodeURI(rowData.ysType)}</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{color: '#474747'}}>{decodeURI(rowData.zhSy)}</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 10,
                                    justifyContent: 'flex-end'
                                }}>
                                </View>
                            </View>
                        }
                    />

                </View>
            )
        }
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
        flex: 1
    },
});