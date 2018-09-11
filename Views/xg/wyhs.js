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
import ModalDropdown from 'react-native-modal-dropdown'
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
                {title: '不要一直不理我', content: '家风豆:500', xz: true},
                {title: '在家不能抽烟', content: '家风豆:500', xz: false}
            ]),
            dataCySource: [],
            datalist: ds.cloneWithRows([
               
            ]),
            type: 1,
            jtnc: '',
            DuserName: '',
            DuserRole:'',
            realName:'',
            userName:'',
            talk:'',
            id:0
        }
    }
   
    Save() {
        if (!this.state.DuserRole) {
            this.dropdown.alertWithType('error', 'Error', '请选择家人')
            return
        }
        if (!this.state.talk) {
            this.dropdown.alertWithType('error', 'Error', '请选择要说的话')
            return
        }
        let url = app.Host + "api/evaluate/AddEvaluate";
        let params = {
            "jtnc": this.state.jtnc,
            "toUser": this.state.DuserName,
            "toRole": this.state.DuserRole,
            "realName": this.state.realName,
            "xgzh":  this.state.userName,
            "talk":this.state.talk,
            "evaluate": '良',
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


    _rednerCy1() {
        return (this.state.dataCySource.map((t, i) => this._rednerCy(t, i)))
    }


    _rednerCy(item, i) {
        let role = decodeURI(item.userRole)  
   
        if(role!="儿子"&role!="女儿"){
        return (

            <View key={i}
                  style={{width: 80, alignItems: 'center'}}>

                <TouchableOpacity onPress={() => {
                    this.setState({DuserName: decodeURI(item.userName), DuserRole:decodeURI(item.userRole) })
                  
                }}>
                    <Image
                        source={role == "豆伢" ? require('../cygl/imgs/tx/boy.png') : require('../cygl/imgs/tx/girl.png')}
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
                        }}>{role}</Text>
                </TouchableOpacity>
            </View>
        )}
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

    /*    handleClose(data) {
            console.log(data);
        }

        handleCancel(data) {
            console.log(data);
        }*/
    _show(){
        this.setState({type:2})
        fetch(app.Host + 'api/evaluate/Evaluate?xgzh='+this.state.userName)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((responseJson) => {
            let data = JSON.parse(responseJson).data;
            if(data)
            this.setState({datalist:ds.cloneWithRows(data)})
        })
        .catch((error) => {
            console.error(error);
        });
    }

    _update(id){
        fetch(app.Host + "api/evaluate/EvaluateUpdate?id=" +id+"&evaluate="+this.state.evaluate)
        .then((response) => {
            if (response.ok) {
            this._show.bind(this)()
            }
        })
       
        .catch((error) => {
            console.error(error);
        });


    }
    componentWillMount() {
        AsyncStorage.getItem('user').then((item) => {
            return JSON.parse(item)
        }).then((item) => {
            
            fetch(app.Host + "api/family/Members?jtnc=" +decodeURI(item.nc))
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = JSON.parse(responseJson).data;
                    this.setState({dataCySource: data, jtnc: decodeURI(item.nc), userName: decodeURI(item.userName),realName:decodeURI(item.realName)})
                 
                })
                .catch((error) => {
                    console.error(error);
                });


              
        })
    }


    render() {
        const {back} = this.props
       if(this.state.type==1){
           return (
            <View>
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
                            /*       onPress={() => {
                                       let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                           return item.id == "Main2"
                                       })

                                       this.props.navigator.popToRoute(destRoute);
                                   }}*/
                        >
                            {/*  <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>*/}
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF', fontWeight: 'bold'
                            }}>我有话说</Text>
                    </View>
                    <View style={{width: 70, marginRight: 5}}>
                    <TouchableOpacity onPress={this._show.bind(this)}>
                    <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF'
                            }}>最近评价</Text>
                    </TouchableOpacity>
                    </View>
                </View>


                <View
                    style={{
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                    <Text>我的家人</Text>
                </View>

                <View
                    style={{
                        width: deviceWidth,
                        height: 150,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#fff',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            height:130,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: 20,
                             flexWrap: 'wrap'
                        }}>
                        {this._rednerCy1()}
                    </View>
                </View>

                <ScrollView style={{backgroundColor: '#efefef', height: deviceheight}}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            height: 30,
                            marginBottom: 5,
                            marginTop: 5,
                            alignItems: 'center',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>我想对{this.state.DuserRole}说:</Text>
                        <TouchableOpacity onPress={this.Save.bind(this)}>
                            <Text style={{fontSize: 13, fontWeight: 'bold'}}>发送</Text>
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
                                    height: 40
                                }}>
                                <View style={{
                                    flex: 4,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',

                                    marginLeft: 10
                                }}>
                                    <Text style={{fontSize: 12, color: '#474747'}}>{rowData.title}</Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{fontSize: 12, color: '#474747'}}>{rowData.content}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <CheckBox styles={{height: 20, width: 20}}
                                              selected={(isS) => {
                                                  if (!isS) {
                                                      this.setState({talk: rowData.title})
                                                  }
                                              }}
                                    ></CheckBox>
                                </View>
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        )  }else if(this.state.type==2){
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
                                {<Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>}
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#FFF', fontWeight: 'bold'
                                }}>最近评价</Text>
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
    
                        dataSource={this.state.datalist}
                        enableEmptySections={true}
                        renderRow={(rowData) =>
                           <TouchableOpacity onPress={()=>{

                            this.setState({type:3,id:rowData.id})
                           }}>
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
                                    }}>{decodeURI(rowData.toRole)}</Text>
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
                                            source={decodeURI(rowData.evaluate) == "优" ? require('../shy/shyImage/you.png') : decodeURI(rowData.evaluate) == "良" ? require('../shy/shyImage/lian.png') : require('../shy/shyImage/chai.png')}
                                            resizeMode='stretch'
                                            style={{height: 20, width: 20, marginLeft: 10, marginRight: 10}}></Image>
    
                                    </View>
                                <View style={{width: 10}}>
    
                                </View>
    
                            </View>
                            </TouchableOpacity>
                        }
                    />
    
    
                </View>
            )
         }else{

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
                            }}>评价</Text>
                    </View>
                    <View style={{marginRight: 5, width: 35}}>
                        <TouchableOpacity onPress={this._update.bind(this,this.state.id)}>
                            <Text style={{color: '#FFF', fontSize: 16}}>保存</Text>
                        </TouchableOpacity>
                    </View>
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
                                 <ModalDropdown options={["优", "良", "差"]}
                                       onSelect={(i, v) => {
                                          this.setState({evaluate:v})
                                       }}
                                       defaultValue={'请选择行为评价'}
                                       dropdownStyle={{width: 200}}
                                       dropdownTextStyle={{fontSize: 14}}
                                       textStyle={{fontSize: 14, justifyContent: 'center'}}
                                       style={{flex: 2, justifyContent: 'center', height: 40}}/>

  
                    </View>

              
            </View>)
         }
    }
}

