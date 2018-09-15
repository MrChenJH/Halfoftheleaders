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


import DropdownAlert from 'react-native-dropdownalert'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class wdzz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            type: 1,
            typetitle: '',
            typecontent: '',
            jtnc: '',
            userName: '',
            realName: ''
        }
    }
    showData() {
        fetch(app.Host + "api/sponsor/SponsorS?jtnc=" + this.state.jtnc)
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
            })
    }
    zanzhu(ysType, xgzh, id, je) {
        let url = app.Host + "api/sponsor/UpudateSponsor?ysType=" + ysType + "&xgzh=" + xgzh + "&id=" + id + "&je=" + je + "&zzr=" + this.state.userName;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((json) => {
            console.log(json);
            this.showData.bind(this)();
            this.loginAlert.alertWithType('success', 'Success', '赞助成功');
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
                realName: decodeURI(item.realName),
                jtnc: decodeURI(item.nc)
            });
            this.showData.bind(this)();
        })
    }

    render() {
        const {back} = this.props;
        return (
            <View style={{backgroundColor: '#efefef', height: deviceheight}}>
                <DropdownAlert
                    ref={ref => this.loginAlert = ref}
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

                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}>预算赞助</Text>
                    </View>
                    <View style={{marginRight: 5, width: 40}}>

                    </View>
                </View>

                <View style={{backgroundColor: '#F2F2F2', height: deviceheight}}>

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
                                    height: 60
                                }}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    marginLeft: 20
                                }}>
                                    <Text style={{
                                        color: '#474747'
                                    }}>{decodeURI(rowData.rq) + "    " + decodeURI(rowData.realName)}发起申请</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between', width: deviceWidth,marginTop: 5
                                    }}>
                                        <Text style={{
                                            color: '#474747'
                                        }}>{
                                            rowData.isSponsor==="True"?(decodeURI(rowData.syMd) + "所需"+decodeURI(rowData.SponsorJe)+"元已由"+ decodeURI(rowData.zzrName)+"赞助"):( decodeURI(rowData.syMd) + " " + decodeURI(rowData.ysType) + "  还差" + decodeURI(rowData.SponsorJe) + "元")
                                        }</Text>
                                    </View>
                                </View>

                                {
                                    rowData.isSponsor==="True" ? (
                                        null
                                    ) : (
                                        <View style={{ position: 'absolute',right:0, marginBottom: "auto",marginTop:"auto", height:60}}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.zanzhu( decodeURI( rowData.ysType), rowData.xgzh, rowData.id, rowData.SponsorJe)
                                                }}>
                                              {/*  onPrass={this.zanzhu.bind(this, rowData.ysType, rowData.xgzh, rowData.id, rowData.SponsorJe)}>*/}
                                                <Text style={{color: '#0080FF',  marginRight: 30}}>我要赞助</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }





                            </View>


                        }
                    />


                </View>

            </View>)
    }
}