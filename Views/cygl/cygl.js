import React, {Component} from 'react';
import {
    ListView,
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    AsyncStorage
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import DropdownAlert from 'react-native-dropdownalert';

import Main from '../Main1'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jtnc: "",
            userName: '',
            updateUserName: '',
            pwd: '',
            qrpwd: '',
            realName: '',
            birthday: '',
            systemRole: '',
            userRole: '',
            type: 1,
            dataSource: ds.cloneWithRows([]),
        }
    }

    _remove(id) {
        fetch(app.Host + 'api/family/deleteMembers?id=' + id)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                fetch(app.Host + 'api/family/Members?jtnc=' + this.state.jtnc)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((responseJson) => {
                        let data = JSON.parse(responseJson).data;
                        this.setState({dataSource: ds.cloneWithRows(data)})
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //添加成员
    AddMember() {
        let url = app.Host + "api/family/AddMember";
        if (!this.state.jtnc) {
            this.regAert.alertWithType('info', '提示', '家庭昵称不能为空');
            return;
        }
        if (!this.state.userName) {
            this.regAert.alertWithType('info', '提示', '家人账号名称不能为空');
            return;
        }
        if (!this.state.pwd) {
            this.regAert.alertWithType('info', '提示', '家人账号密码不能为空');
            return;
        }
        if (!this.state.realName) {
            this.regAert.alertWithType('info', '提示', '家人昵称不能为空');
            return;
        }
        let params = {
            "jtnc": this.state.jtnc,
            "userName": this.state.userName,
            "pwd": this.state.pwd,
            "realName": this.state.realName,
            "sex": ['豆妈', '豆外婆', '豆奶奶', '豆丫', '阿姨'].findIndex(t => t == this.state.userRole) > -1 ? 1 : 0,
            "birthday": this.state.birthday,
            "systemRole": this.state.systemRole,
            "userRole": this.state.userRole
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
                return response.text()
            }
        }).then((t) => {
                if (t.includes('1') > 0) {
                    this.regAert.alertWithType('error', 'Error', '用户名已经存在');
                } else {
                    fetch(app.Host + 'api/family/Members?jtnc=' + this.state.jtnc)
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                        })
                        .then((responseJson) => {
                            let data = JSON.parse(responseJson).data;
                            this.setState({dataSource: ds.cloneWithRows(data), type: 1})
                        })
                }

            }
        ).catch((error) => {
            console.error(error);
        });

    }

    updateMember() {
        if (this.state.jtnc == "") {
            this.cyxqAlert.alertWithType('info', '提示', '家庭昵称不能为空');
            return;
        }
        if (this.state.userName == "") {
            this.cyxqAlert.alertWithType('info', '提示', '家人账号名称不能为空');
            return;
        }
        if (this.state.pwd == "") {
            this.cyxqAlert.alertWithType('info', '提示', '家人账号密码不能为空');
            return;
        }
        if (this.state.realName == "") {
            this.cyxqAlert.alertWithType('info', '提示', '家人昵称不能为空');
            return;
        }
        let url = app.Host + "api/family/UpdateMember";
        let params = {
            "jtnc": this.state.jtnc,
            "userName": this.state.updateUserName,
            "pwd": this.state.pwd,
            "realName": this.state.realName,
            "sex": ['豆妈', '豆外婆', '豆奶奶', '豆丫', '阿姨'].findIndex(t => t == this.state.userRole) > -1 ? 1 : 0,
            "birthday": this.state.birthday,
            "systemRole": this.state.systemRole,
            "userRole": this.state.userRole
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
                fetch(app.Host + 'api/family/Members?jtnc=' + this.state.jtnc)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((responseJson) => {
                        let data = JSON.parse(responseJson).data;
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

            fetch(app.Host + 'api/family/Members?jtnc=' + this.state.jtnc)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = JSON.parse(responseJson).data;
                    this.setState({dataSource: ds.cloneWithRows(data)})
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }

    render() {
        const {back} = this.props
        if (this.state.type == 1) {//家人列表

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
                                onPress={() => {
                                    let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                        return item.id == "Main1"
                                    })

                                    this.props.navigator.popToRoute(destRoute);
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
                                }}>家人管理</Text>
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


                    <ScrollView style={{backgroundColor: '#F2F2F2'}}>
                        <ListView
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) =>
                                <TouchableOpacity

                                    onPress={() => {
                                        this.setState({
                                            type: 2, updateUserName: decodeURI(rowData.userName),
                                            pwd: decodeURI(rowData.pwd),
                                            systemRole: decodeURI(rowData.systemRole),
                                            userRole: decodeURI(rowData.userRole)
                                        })
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            borderTopColor: '#F0F0F0',
                                            borderTopWidth: 1,
                                            backgroundColor: '#fff',
                                            margin: 10,
                                            height: deviceWidth * 0.2
                                        }}>
                                        <View style={{
                                            width: deviceWidth * 0.2,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Image
                                                source={decodeURI(rowData.userRole) == "豆爸" ? require('../cygl/imgs/tx/bb.png') : (decodeURI(rowData.userRole) == "豆妈" ? require('../cygl/imgs/tx/mm.png') : decodeURI(rowData.userRole) == "叔叔" ? require('../cygl/imgs/tx/uncle.png') :
                                                    (decodeURI(rowData.userRole) == "豆爷爷" || decodeURI(rowData.userRole) == "豆外公") ? require('../cygl/imgs/tx/yeye.png') : decodeURI(rowData.userRole) == "豆伢" ? require('../cygl/imgs/tx/boy.png') : decodeURI(rowData.userRole) == "豆丫" ? require('../cygl/imgs/tx/girl.png') :
                                                        (decodeURI(rowData.userRole) == "豆奶奶" || decodeURI(rowData.userRole) == "豆外婆") ? require('../cygl/imgs/tx/nainai.png') : require('../cygl/imgs/tx/mm.png'))}
                                                style={{
                                                    width: deviceWidth * 0.12,
                                                    height: deviceWidth * 0.12
                                                }}
                                                resizeMode='stretch'></Image>
                                        </View>
                                        <View style={{
                                            width: deviceWidth * 0.85,
                                            justifyContent: 'center',
                                            alignItems: 'flex-start'
                                        }}>

                                            <View
                                                style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: '#2E2E2E',
                                                    fontWeight: 'bold',
                                                    width: 80
                                                }}>{decodeURI(rowData.userName)}</Text>

                                                <Text style={{
                                                    color: '#BDBDBD',
                                                    fontSize: 12,
                                                    width: 100,
                                                    textAlign: 'center'
                                                }}>{decodeURI(rowData.systemRole)}</Text>
                                                <Text style={{
                                                    color: '#BDBDBD',
                                                    fontSize: 12,
                                                    textAlign: 'center'
                                                }}>{decodeURI(rowData.userRole)}</Text>

                                            </View>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    marginTop: 5
                                                }}>
                                                <Text style={{
                                                    fontSize: 12,
                                                    color: '#BDBDBD',
                                                }}>最近登录时间 :{decodeURI(rowData.logTime)}</Text>

                                            </View>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View>
            )
        } else if (this.state.type == 2) {//成员详情
            return (
                <View>
                    <DropdownAlert
                        ref={ref => this.cyxqAlert = ref}
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
                                    this.setState({type: 1})
                                }}>
                                <Image source={require('./imgs/back.png')}
                                       resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>成员详情</Text>
                        </View>
                        <View style={{marginRight: 5, width: 40}}>
                            <TouchableOpacity onPress={this.updateMember.bind(this)}>
                                <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>

                        <TouchableOpacity
                            //onPress={()=>{this.setState({type:4,typetitle:'账号名',typecontent:this.state.userName})}}
                        >

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
                                    color: '#585858',
                                    fontFamily: 'Microsoft YaHei'
                                }}>
                                    家人账号:</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        {this.state.updateUserName}</Text>
                                    <Image source={require('./imgs/go.png')} style={{width: 10, height: 10}}
                                           resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({type: 4, typetitle: '家人昵称', typecontent: this.state.realName})
                            }}
                        >

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
                                    color: '#585858',
                                    fontFamily: 'Microsoft YaHei'
                                }}>
                                    家人昵称:</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        {this.state.realName}</Text>
                                    <Image source={require('./imgs/go.png')} style={{width: 10, height: 10}}
                                           resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '密码', typecontent: this.state.pwd})
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
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                    密码</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        {this.state.pwd}
                                    </Text>
                                    <Image source={require('./imgs/go.png')} style={{width: 10, height: 10}}
                                           resizeMode='stretch'></Image>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({type: 5, typetitle: '系统角色', typecontent: this.state.systemRole})
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
                                    color: '#585858',
                                    fontFamily: 'Microsoft YaHei'
                                }}>
                                    系统角色:</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        {this.state.systemRole}</Text>
                                    <Image source={require('./imgs/go.png')} style={{width: 10, height: 10}}
                                           resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.setState({type: 6, typetitle: '家庭角色', typecontent: this.state.userRole})
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
                                    color: '#585858',
                                    fontFamily: 'Microsoft YaHei'
                                }}>
                                    家庭角色</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        {this.state.userRole}</Text>
                                    <Image source={require('./imgs/go.png')} style={{width: 10, height: 10}}
                                           resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else if (this.state.type == 4) {//账号密码编辑
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
                                onPress={() => {
                                    this.setState({type: 2})
                                }}>
                                <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: 16,
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}>{this.state.typetitle}编辑</Text>
                        </View>
                        <View style={{marginRight: 5, width: 35}}>

                        </View>
                    </View>
                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>
                        <View style={{backgroundColor: '#fff', marginTop: 10, height: 40}}>
                            <TextInput underlineColorAndroid='transparent'
                                // style={{fontSize: 12}}
                                       clearButtonMode='always'
                                       multiline={false}
                                       defaultValue={this.state.typecontent}
                                       onChange={(v) => {

                                           if (this.state.typetitle == "家人账号") {

                                               this.setState({userName: v.nativeEvent.text})
                                           }
                                           if (this.state.typetitle == "密码") {

                                               this.setState({pwd: v.nativeEvent.text})
                                           }
                                           if (this.state.typetitle == "家人昵称") {

                                               this.setState({realName: v.nativeEvent.text})
                                           }
                                       }}
                            >

                            </TextInput>
                        </View>
                    </View>
                </View>
            )
        }
        else if (this.state.type == 5) {//系统角色编辑
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
                                onPress={() => {
                                    this.setState({type: 2})
                                }}>
                                <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: 16,
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}>{this.state.typetitle}编辑</Text>
                        </View>
                        <View style={{marginRight: 5, width: 35}}>

                        </View>
                    </View>
                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>
                        <View style={{backgroundColor: '#fff', marginTop: 10, height: 40, justifyContent: 'center'}}>
                            <ModalDropdown options={['审核员', '观察员', '小鬼']}
                                           defaultValue={this.state.systemRole}
                                           onSelect={(i, v) => {
                                               this.setState({systemRole: v})
                                           }}
                                           dropdownStyle={{width: deviceWidth, height: deviceheight - 100}}
                                           dropdownTextStyle={{fontSize: 14}}
                                           textStyle={{fontSize: 14, justifyContent: 'center'}}
                                           style={{flex: 2, justifyContent: 'center', height: 40}}/>
                        </View>
                    </View>
                </View>
            )
        }
        else if (this.state.type == 6) {//家庭角色编辑
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
                                onPress={() => {
                                    this.setState({type: 2})
                                }}>
                                <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontSize: 16,
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}>{this.state.typetitle}编辑</Text>
                        </View>
                        <View style={{marginRight: 5, width: 35}}>

                        </View>
                    </View>
                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>
                        <View style={{backgroundColor: '#fff', marginTop: 10, height: 40, justifyContent: 'center'}}>
                            <ModalDropdown options={['豆爸', '豆妈', '豆爷爷', '豆奶奶', '豆外公', '豆外婆', '豆伢', '豆丫', '叔叔', '阿姨']}
                                           defaultValue={this.state.userRole}
                                           onSelect={(i, v) => {
                                               this.setState({userRole: v})
                                           }}
                                           dropdownStyle={{width: deviceWidth, height: deviceheight - 100}}
                                           dropdownTextStyle={{fontSize: 14, justifyContent: 'center',}}
                                           textStyle={{fontSize: 14, justifyContent: 'center'}}
                                           style={{flex: 2, justifyContent: 'center', height: 40}}/>
                        </View>
                    </View>
                </View>
            )
        }
        else {//添加成员
            return (
                <View>
                    <DropdownAlert
                        ref={ref => this.regAert = ref}
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
                                    this.setState({type: 1})
                                }}>
                                <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>添加家人</Text>
                        </View>

                        <View style={{marginRight: 5, width: 35}}>
                            <TouchableOpacity onPress={this.AddMember.bind(this)}>
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
                                flex: 1
                            }}>
                                家人账号:</Text>
                            <TextInput
                                style={{flex: 2}}
                                underlineColorAndroid='transparent'
                                placeholder='请输入家人账号'
                                placeholderTextColor='#BDBDBD'
                                onChangeText={(v) => {
                                    this.setState({userName: v})
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
                                flex: 1
                            }}>
                                家人昵称:</Text>
                            <TextInput
                                style={{flex: 2}}
                                underlineColorAndroid='transparent'
                                placeholder='请输入家人姓名或昵称'
                                placeholderTextColor='#BDBDBD'
                                onChangeText={(v) => {
                                    this.setState({realName: v})
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
                                flex: 1
                            }}>
                                登录密码:</Text>

                            <TextInput
                                style={{flex: 2}}
                                underlineColorAndroid='transparent'
                                placeholder='请输入密码'
                                placeholderTextColor='#BDBDBD'
                                textContentType='password'
                                secureTextEntry={true}
                                onChangeText={(v) => {
                                    this.setState({pwd: v})
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
                                flex: 1
                            }}>
                                确认密码 :</Text>

                            <TextInput
                                style={{flex: 2}}
                                underlineColorAndroid='transparent'
                                placeholder='请输入确认密码'
                                placeholderTextColor='#BDBDBD'
                                secureTextEntry={true}
                                onChangeText={(v) => {
                                    this.setState({qrpwd: v})
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
                                flex: 1
                            }}>
                                出生日期</Text>

                            <DatePicker
                                style={{flex: 2}}
                                date={this.state.birthday}
                                mode="date"
                                placeholder="请选择出生日期"
                                format="YYYY-MM-DD"
                                minDate="1880-05-01"
                                maxDate="2999-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 0
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    this.setState({birthday: date})
                                }}
                            />
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
                                flex: 1
                            }}>
                                系统角色:</Text>
                            <ModalDropdown options={['审核员', '观察员', '小鬼']}
                                           onSelect={(i, v) => {
                                               this.setState({systemRole: v})
                                           }}
                                           defaultValue={'请选择系统角色'}
                                           dropdownStyle={{width: deviceWidth, height: 150}}
                                           dropdownTextStyle={{fontSize: 14, justifyContent: 'center',}}
                                           textStyle={{fontSize: 14, justifyContent: 'center'}}
                                           style={{flex: 2}}/>
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
                                flex: 1
                            }}>
                                用户角色:</Text>
                            <ModalDropdown options={['豆爸', '豆妈', '豆爷爷', '豆奶奶', '豆外公', '豆外婆', '豆伢', '豆丫', '叔叔', '阿姨']}
                                           onSelect={(i, v) => {
                                               this.setState({userRole: v})
                                           }}
                                           defaultValue={'请选择用户角色'}
                                           dropdownStyle={{width: deviceWidth, height: 200}}
                                           dropdownTextStyle={{fontSize: 14, justifyContent: 'center',}}
                                           textStyle={{fontSize: 14, justifyContent: 'center'}}
                                           style={{flex: 2}}/>

                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
}


  