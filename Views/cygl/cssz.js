import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    ListView,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Main from '../Main1'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class canshu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            Proportion: '',
            ProjectName: '',
            jtnc: '',
            type: 1
        }
    }


    _removeFund(id) {
        let url = app.Host + "api/FundSetting/RemoveFundSetting?id=" + id;
        fetch(url).then((response) => {
            if (response.ok) {
                fetch(app.Host + 'api/FundSetting/FundSetting?jtnc=' + this.state.jtnc)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((responseJson) => {
                        let data = responseJson.data;
                        this.setState({dataSource: ds.cloneWithRows(data), type: 1})
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }).catch((error) => {
            console.error(error);
        });

    }

    //添加成员
    AddFund() {
        let url = app.Host + "api/FundSetting/addFundSetting";
        let params = {
            "jtnc": this.state.jtnc,
            "Proportion": this.state.Proportion,
            "ProjectName": this.state.ProjectName
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((response) => {
            if (response.ok) {
                fetch(app.Host + 'api/FundSetting/FundSetting?jtnc=' + this.state.jtnc)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((responseJson) => {
                        let data = responseJson.data;
                        this.setState({dataSource: ds.cloneWithRows(data), type: 1})
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }).catch((error) => {
            console.error(error);
        });

    }

    componentWillMount() {

        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            this.setState({jtnc: decodeURI(item.nc)});
            fetch(app.Host + 'api/FundSetting/FundSetting?jtnc=' + decodeURI(item.nc))
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
        })
    }

    render() {

        if (this.state.type === 1) {
            return (
                <View>
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
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#FFF', fontWeight: 'bold'
                                }}>参数设置</Text>
                        </View>
                        <View style={{marginRight: 5, width: 35}}>
                           {/* <TouchableOpacity style={{height: 20, width: 20, marginRight: 10}} onPress={() => {
                                this.setState({type: 3})
                            }}>
                                <Image source={require('./imgs/add.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>*/}
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: "#F7F7F7",
                            alignItems: 'center',
                            height:deviceheight-40
                        }}
                    >
                        <View style={{
                            backgroundColor: "#FFF",
                            borderRadius: 10,
                            width: deviceWidth * 0.96,
                            height: 150,
                            alignItems: "center",
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginTop: 15,
                            marginBottom: 5
                        }}>
                            {/*<View style={{justifyContent: 'center', flex: 1}}>
                                <Text style={{
                                    justifyContent: 'center',
                                    flex: 1,
                                    fontWeight: 'bold',
                                    marginTop: 10
                                }}>成长基金兑换比例</Text>
                            </View>*/}
                            <View style={{
                                flexDirection: 'row',
                                borderBottomWidth: 1,
                                borderBottomColor: '#E6E6E6',
                                borderRadius:10,
                                backgroundColor: '#fe9c2e',
                                height: 40,
                                width:deviceWidth*0.88,
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>

                                <View style={{height: 50, width: 35, alignItems: 'center', justifyContent: 'center'}}>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: '#FFF', fontWeight: 'bold'
                                        }}>成长基金兑换比例</Text>
                                </View>
                                <View style={{marginRight: 5, width: 40}}>
                                    <TouchableOpacity style={{height: 20, width: 40, marginRight: 10}} onPress={() => {
                                        this.setState({type: 3})
                                    }}>
                                        <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    margin: 5,
                                    borderRadius: 10,
                                    height: 40
                                }}>
                                <View style={{
                                    flex: 3,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    marginLeft: 10
                                }}>
                                    <Text style={{color: '#474747'}}>100金豆 =</Text>
                                </View>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <TextInput style={{width: 150}}/>
                                </View>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{width: 100}}>元成长基金</Text>
                                </View>

                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    borderTopColor: '#F0F0F0',
                                    borderTopWidth: 1,
                                    margin: 5,
                                    borderRadius: 10,
                                    height: 40
                                }}>
                                <View style={{
                                    flex: 3,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    marginLeft: 10
                                }}>
                                    <Text style={{color: '#474747'}}>100银豆 =</Text>
                                </View>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <TextInput style={{width: 150}}/>
                                </View>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{width: 100}}>元成长基金</Text>
                                </View>

                            </View>

                        </View>

                        <View style={{
                            backgroundColor: "#FFF",
                            borderRadius: 10,
                            width: deviceWidth * 0.96,
                            height:deviceheight-280,
                            alignItems: "center",
                            marginTop: 10,
                            marginBottom: 5
                        }}>
                         {/*   <View style={{justifyContent: 'center',height:40}}>
                                <Text style={{
                                    justifyContent: 'center',
                                    flex: 1,
                                    fontWeight: 'bold',
                                    marginTop: 10
                                }}>成长基金分配比例</Text>
                            </View>*/}
                            <View style={{
                                flexDirection: 'row',
                                borderBottomWidth: 1,
                                borderRadius:10,
                                borderBottomColor: '#E6E6E6',
                                backgroundColor: '#fe9c2e',
                                height: 40,
                                width:deviceWidth*0.88,
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>

                                <View style={{height: 50, width: 35, alignItems: 'center', justifyContent: 'center'}}>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: '#FFF', fontWeight: 'bold'
                                        }}>成长基金分配比例</Text>
                                </View>
                                <View style={{marginRight: 5, width: 35}}>
                                    <TouchableOpacity style={{height: 20, width: 20, marginRight: 10}} onPress={() => {
                                        this.setState({type: 3})
                                    }}>
                                        <Image source={require('./imgs/add.png')} resizeMode='stretch'
                                               style={{height: 20, width: 20}}>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <ScrollView style={{backgroundColor: '#FFF', flex: 1}}>
                                <ListView
                                    dataSource={this.state.dataSource}
                                    enableEmptySections={true}
                                    renderRow={(rowData) =>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderTopColor: '#F0F0F0',
                                                backgroundColor: rowData.xz ? '#FB9401' : '#F7F7F7',
                                                borderTopWidth: 1,
                                                margin: 5,
                                                borderRadius: 10,
                                                height: 40,
                                                width: deviceWidth * 0.92
                                            }}>
                                            <View style={{
                                                flex: 4,
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                marginLeft: 10
                                            }}>
                                                <Text style={{color: '#474747'}}>{decodeURI(rowData.ProjectName)}</Text>
                                            </View>
                                            <View style={{
                                                flex: 2,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{color: '#474747'}}>设置比例:{rowData.Proportion}</Text>
                                            </View>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this._removeFund.bind(this)(rowData.id)
                                                    }}
                                                >
                                                    <Image source={require('./imgs/delete.png')} resizeMode='stretch'
                                                           style={{height: 20, width: 20}}/>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    }
                                />
                            </ScrollView>
                        </View>

                    </View>

                </View>
            )
        } else {
            return (<View>

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
                                this.setState({type: 1})
                            }}>
                            <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>参数设置</Text>
                    </View>
                    <View style={{marginRight: 5, width: 35}}>
                        <TouchableOpacity onPress={this.AddFund.bind(this)}>
                            <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>

                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F0F0F0',
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 20
                    }}>
                        <Text style={{
                            color: '#6E6E6E',
                            flex: 3
                        }}>成长基金分类名称:</Text>
                        <TextInput
                            style={{flex: 5}}
                            underlineColorAndroid='transparent'
                            placeholder='请输入成长基金分类名称'
                            placeholderTextColor='#BDBDBD'
                            onChangeText={(v) => {
                                this.setState({ProjectName: v})
                            }}
                        ></TextInput>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F0F0F0',
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 20
                    }}>
                        <Text style={{
                            color: '#6E6E6E',
                            flex: 3
                        }}>成长基金分类比例:</Text>
                        <TextInput
                            style={{flex: 5}}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='#BDBDBD'
                            placeholder='请输入此成长基金所占的比例'
                            onChangeText={(v) => {
                                this.setState({Proportion: v})
                            }}
                        ></TextInput>
                    </View>
                </ScrollView>
            </View>)
        }
    }
}