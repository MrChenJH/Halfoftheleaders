import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Dimensions} from 'react-native';

const deviceheight = Dimensions.get('window').height;

export default class wdzd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1
        }
    }
    render() {
        const {back} = this.props;
        if (this.state.type === 1) {//我的秘密列表
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
                                }}>我的秘密</Text>
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
                    <View>
                        <TouchableOpacity onPress={() => {
                            this.setState({type: 1})
                        }}>
                            <Text>敬请期待</Text>
                        </TouchableOpacity></View>
                </View>
            )
        }
    }
}
