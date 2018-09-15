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
import ModalDropdown from 'react-native-modal-dropdown'
const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class xwsz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: ds.cloneWithRows([]),
            jtnc: '',
            xwMc: '',
            ydType: '',
            type: 1
        }
    }


    _show() {
        fetch(app.Host + 'api/behavior/behaviorLib?jtnc=' + this.state.jtnc)
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
    }

    _save() {

        let url = app.Host + "api/behavior/addbehaviorLib";
        let params = {
            "jtnc": this.state.jtnc,
            "xwMc": this.state.xwMc,
            "ydType": this.state.ydType
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
                this.setState({type: 1});
                this._show.bind(this)()

            }
        }).catch((error) => {
            console.error(error);
        });

    }

    _remove(id) {
        fetch(app.Host + 'api/behavior/RemoveBehaviorLib?id=' + id)
            .then((response) => {
                if (response.ok) {
                    this._show.bind(this)()
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
            this._show.bind(this)()
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
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: 35,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end'
                                }}
                                /*  onPress={() => {

                                      let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                          return item.id == "Main1"
                                      })

                                      this.props.navigator.popToRoute(destRoute);
                                  }}*/
                            >
                                {/* <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>*/}
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#FFF', fontWeight: 'bold'
                                }}>行为列表</Text>
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


                    <ListView
                        dataSource={this.state.datalist}
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
                                    <Text style={{color: '#474747'}}>{decodeURI(rowData.xwMc)}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                    <Image
                                        source={decodeURI(rowData.ydType) === "优" ? require('../shy/shyImage/you.png') : decodeURI(rowData.ydType) === "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                        resizeMode='stretch'
                                        style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}/>

                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this._remove.bind(this)(rowData.id)
                                        }}
                                    >
                                        <Image source={require('./imgs/delete.png')} resizeMode='stretch'
                                               style={{height: 20, width: 20}}/>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        }
                    />

                </View>
            )
        } else {
            return (<View
                style={{height: deviceheight}}>
                <View style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6E6E6',
                    backgroundColor: '#fe9c2e',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                    <View>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: 35,
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                            onPress={() => {
                                this.setState({type: 1})
                            }}
                        >
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
                            }}>{this.state.realName}行为添加</Text>
                    </View>
                    <View style={{marginRight: 5, width: 35}}>
                        <TouchableOpacity onPress={this._save.bind(this)}>
                            <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#F0F0F0',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 20
                }}>


                    <ModalDropdown options={["优", "良", "差"]}
                                   onSelect={(i, v) => {
                                       if (v === "优")
                                           this.setState({ydType: v, xwSocre: 10});
                                       else if (v === "良")
                                           this.setState({ydType: v, xwSocre: 5});
                                       else if (v === "差")
                                           this.setState({ydType: v, xwSocre: -5});
                                   }}
                                   defaultValue={'请选择行为评价'}
                                   dropdownStyle={{width: 200}}
                                   dropdownTextStyle={{fontSize: 14}}
                                   textStyle={{fontSize: 14, justifyContent: 'center'}}
                                   style={{flex: 2, justifyContent: 'center', height: 40}}/>


                </View>
                <View style={{
                    height: 100,
                    borderBottomWidth: 1,
                    borderBottomColor: '#F0F0F0',
                    alignContent: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 20
                }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        style={{
                            width: deviceWidth * 0.98,
                            height: 100,
                            textAlignVertical: 'top',
                            textAlign: 'left'
                        }}
                        underlineColorAndroid='transparent'
                        placeholder={"请填写行为描述"}
                        onChangeText={(v) => {
                            this.setState({xwMc: v})
                        }}
                    />
                </View>

            </View>)
        }
    }
}