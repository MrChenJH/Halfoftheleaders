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
    AsyncStorage,
    Dimensions
} from 'react-native';
import Main from '../Main3'
import app from '../../app.json';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import CheckBox from '../component/xwCheckBox'

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class Jhsh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            jtnc: '',
            type: 1,
            typetitle: '',
            typecontent: ''
        }
    }

    pro(id) {
        fetch(app.Host + 'api/ys/YsShs?id=' + id)
            .then((response) => {
                if (response.ok) {
                    fetch(app.Host + 'api/ys/ysSearch?jtnc=' + this.state.jtnc)
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

            fetch(app.Host + 'api/ys/ysSearch?jtnc=' + decodeURI(item.nc))
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    let data = responseJson.data;
                    this.setState({
                        dataSource: ds.cloneWithRows(data)
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        })
    }


    render() {
        const {back} = this.props;
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
                            /* onPress={() => {
                                 let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                     return item.id == "Main3"
                                 })

                                 this.props.navigator.popToRoute(destRoute);
                             }}*/
                        >
                            {/* <Image source={require('./shyImage/back.png')} resizeMode='stretch'
                                   style={{height: 20, width: 20}}>
                            </Image>*/}
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}>小鬼的预算</Text>
                    </View>
                    <View style={{marginRight: 5, width: 40}}>

                    </View>
                </View>

                <View style={{backgroundColor: '#F2F2F2', height: deviceheight}}>
                    <ScrollView>
                        <ListView
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) =>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({type: 2})
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            borderTopColor: '#F0F0F0',
                                            backgroundColor: '#fff',
                                            borderTopWidth: 1,
                                            margin: 5,
                                            borderRadius: 10,
                                            height: 50
                                        }}>
                                        <View style={{
                                            flex: 4,
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',

                                            marginLeft: 10
                                        }}>
                                            <Text
                                                style={{color: '#474747'}}>{decodeURI(rowData.realName) + "   " + decodeURI(rowData.syMd)}</Text>
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
                                            <Text style={{color: '#474747'}}>{rowData.zhSy}</Text>
                                        </View>
                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <CheckBox
                                                isChecked={rowData.ysState === 3}
                                                selected={this.pro.bind(this, rowData.id)}
                                                styles={{height: 20, width: 20}}/>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                            }
                        />

                    </ScrollView>
                </View>
            </View>)
    }
}