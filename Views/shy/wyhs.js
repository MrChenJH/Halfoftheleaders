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

import Main from '../Main2'
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
            dataSource: ds.cloneWithRows([
                 ]),
         
            jtnc: '',
            txtContent: '',
            type: 1,
            sysRole: '',
            userRole: ''
        }
    }

    Save() {
        if (!this.state.userRole) {
            this.dropdown.alertWithType('error', 'Error', '请选择家人')
            return
        }
        if (!this.state.txtContent) {
            this.dropdown.alertWithType('error', 'Error', '请选择要说的话')
            return
        }
        let url = app.Host + "api/message/AddMessageS";
        let params = {
            "jtnc": this.state.jtnc,
            "txtContent": this.state.txtContent,
            "type": this.state.type,
            "sysRole": this.state.sysRole,
            "userRole": decodeURI(this.state.userRole)
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
                return response.json();
            }
        }).then((json) => {
            console.log(json)
            this.dropdown.alertWithType('success', '发送成功', '发送成功')
        }).catch((error) => {
            console.error(error);
        });
    }

    /*_rednerCy1() {
         return (this.state.dataCySource.map((t, i) => this._rednerCy(t, i)))
       /!* return (
            this.state.dataCySource.map(
                (t, j) => {
                    if ( decodeURI(t.userRole) != "豆伢"&&decodeURI(t.userRole) != "豆丫") {
                        this._rednerCy(t, j)
                    }
                }
            )
        )*!/
    }

    _rednerCy(item, i) {
        let role = decodeURI(item.userRole)
        return (

            <View key={i}
                  style={{width: 80, alignItems: 'center'}}>

                <TouchableOpacity onPress={() => {
                    this.setState({userName: item.userName})
                }}>
                    <Image
                        source={role == "豆爸" ? require('../cygl/imgs/tx/bb.png') : (role == "豆妈" ? require('../cygl/imgs/tx/mm.png') : role == "叔叔" ? require('../cygl/imgs/tx/uncle.png') :
                            (role == "豆爷爷" || role == "豆外公") ? require('../cygl/imgs/tx/yeye.png') : role == "豆伢" ? require('../cygl/imgs/tx/boy.png') : role == "豆丫" ? require('../cygl/imgs/tx/girl.png') :
                                (role == "豆奶奶" || role == "豆外婆") ? require('../cygl/imgs/tx/nainai.png') : require('../cygl/imgs/tx/mm.png'))}
                        style={{
                            height: 50,
                            width: 50
                        }}
                        resizeMode='stretch'
                    ></Image>
                    <Text
                        style={{
                            width: 50,
                            fontSize: 12,
                            textAlign: 'center'
                        }}>
                        {decodeURI(item.userName)}</Text>
                </TouchableOpacity>
            </View>
        )
    }*/

      componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            this.setState({ jtnc: decodeURI(item.nc), userName: decodeURI(item.userName)})
              
            fetch(app.Host + 'api/evaluate/EvaluateTo?jtnc=' + decodeURI(item.nc)+'&touser='+decodeURI(item.userName))
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = JSON.parse(responseJson).data;
              
                    this.setState({dataSource:ds.cloneWithRows(data)})
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }


    render() {
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
                                     return item.id == "Main3"
                                 })

                                 this.props.navigator.popToRoute(destRoute);
                             }}
                        >
                            {<Image source={require('./shyImage/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>}
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>我有话说</Text>
                    </View>
                    <View style={{
                        marginRight: 5,
                        flexDirection: 'row'
                    }}>


                    </View>
                </View>

             

                <ListView
                    /* style={{
                         height: deviceWidth,
                         width: deviceheight - 80
                     }}*/

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
                                }}>{decodeURI(rowData.realName) + " 说  " }</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    color: '#474747',
                                    marginRight: 20
                                }}>{decodeURI(rowData.talk)}</Text>
                                

                            </View>

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                    <Image
                                        source={decodeURI(rowData.evaluate) == "优" ? require('./shyImage/you.png') : decodeURI(rowData.evaluate) == "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                        resizeMode='stretch'
                                        style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}></Image>

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

