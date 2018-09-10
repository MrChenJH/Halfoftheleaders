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
            userName:''
        }
    }
    
    _showDatad(){
        fetch(app.Host + 'api/plans/tj?xgzh=' + this.state.userName)
       .then((response) => {
           if (response.ok) {
               return response.json();
           }
       })
       .then((responseJson) => {
           let data = responseJson.data;
            let data1 = responseJson.data1;
           this.setState({
               dataList: ds.cloneWithRows(data),
               zjds: data1[0].zs,
               whjds: data1[0].w,
               yhjds: data1[0].y
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
                userName:decodeURI(item.userName),
                jtnc: decodeURI(item.nc),
                xgzh: decodeURI(item.userName),
                realname: decodeURI(item.realName)
            }) 

            this._showDatad.bind(this)()
        })
    }

    render() {
        const {back} = this.props;
        return (
            <View style={{
                backgroundColor: '#F7F7F7'
            }}>
                <View style={{
                    height: 200
                }}>
                    <ImageBackground
                        resizeMode='stretch'
                        source={require('../shy/shyImage/banner.png')
                        }

                        style={{
                            height: 200,
                            width: deviceWidth
                        }}>

                        <TouchableOpacity
                            style={{
                                height: 40,
                                marginLeft: 10,
                                width: 40,
                                alignItems: 'flex-start',
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                    return item.id == "Main2"
                                });
                                this.props.navigator.popToRoute(destRoute);
                            }}>
                            <Image source={require('../shy/shyImage/close.png')}

                                   style={{
                                       height: 20,
                                       width: 20
                                   }}
                                   resizeMode='stretch'></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <ScrollView
                    style={{backgroundColor: '#efefef', height: deviceheight}}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            height: 40,
                            margin: 5,
                            alignItems: 'center',
                            //justifyContent:'center',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>

                        <View
                            style={{flexDirection: 'row'}}>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>今日</Text>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                borderBottomColor: '#FFBF00',
                                borderBottomWidth: 2,
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>计划</Text>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: 'bold',
                                height: 40,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>任务</Text>
                        </View>


                    </View>


                    <View
                        style={{
                            height: 40,
                            backgroundColor: '#fff',
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 5,
                            flexWrap: 'wrap'
                        }}>
                        <Text style={{flex: 1,textAlign:"center"}}>计划总金豆数:{this.state.zjds}</Text>
                        <Text style={{flex: 1}}>获得金豆数:{this.state.yhjds}</Text>
                        <Text style={{flex: 1}}>未获得金豆数:{this.state.whjds}</Text>
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
                                        fontSize: 12,
                                        color: '#474747'
                                    }}>{decodeURI(rowData.realName) + "   " + decodeURI(rowData.projectName)}</Text>
                                </View>

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#474747',
                                        marginRight: 20
                                    }}>金豆数:{decodeURI(rowData.jds)}</Text>

                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent:'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                            <Checkbox
                                            isChecked={rowData.state >= 1}
                                            styles={{height: 20, width: 20, marginRight: 10}}
                                            selected={(isS) => {

                                                if (!isS) {
                                                    this._shenhe.bind(this, rowData.xgid)()
                                                }
                                            }
                                            }
                                        ></Checkbox>
                                 </View>
                            </View>
                        }
                    />

                </ScrollView>

            </View>
        )
    }
}

