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
    Dimensions,
    TextInput,
    Switch,
    RefreshControl,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import Main from '../Main1'
import app from '../../app.json'
import CheckBox from '../component/checkbox'
import DatePicker from 'react-native-datepicker'
import DropdownAlert from 'react-native-dropdownalert';
import ModalDropdown from 'react-native-modal-dropdown';

const deviceWidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class jtjh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: ds.cloneWithRows([]),
            tjdatalist: ds.cloneWithRows([]),
            isShowBottomRefresh: false,
            isRefreshing: false,
            isNoMoreData: false,
            isFirstload: true,
            jtnc: '',
            type: 1,
            tabxmlx: '计划任务',
            xmlx: '计划任务',
            xmName: '',
            jds: 0,
            zqlx: '',
            zqstart: '2018-01-01',
            zqend: '2018-01-01',
            sfxh: false,
            xwms: '',
            md: ''
        }
    }

    _endReached = () => {
        if (this.state.isFirstload) {
            this.setState({isFirstload: false});
            return
        }
        if (this.state.isNoMoreData) {
            return
        }

        this.fetchData(false, true);
    };

    _onRefresh = () => {
        // 当加载到最后一页数据，再次下拉刷新时，需关闭isNoMoreData状态机
        this.setState({
            isNoMoreData: false
        });

        this.fetchData(false, false);
    };

    _renderFooter() {

        if (this.state && this.state.isShowBottomRefresh) {
            return (<View style={{marginVertical: 10}}>
                <ActivityIndicator/>
            </View>);
        }
        return <View style={{marginVertical: 10}}/>;
    }

    fetchData(isFirst, isLoadMore) {
        let page;
        if (isLoadMore) { // 上拉加载更多
            // 取出页码
            page = this.datalistPageInde;
            // 修改加载状态
            this.setState({isShowBottomRefresh: true});
        } else { // 下拉刷新
            // 刷新时页码始终是1
            this.datalistPageInde = 1
            page = 1;
            // 第一次加载数据时不打开刷新机制
            if (!isFirst) {
                this.setState({
                    isRefreshing: true
                });
            }
        }

        let url = app.Host + 'api/plans/Plans?p=' + page + '&num=10';

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((responseJson) => {
                if (responseJson.sucess) {
                    let responseData = responseJson.data;

                    if (responseData.length != 0) {
                        if (isLoadMore) {
                            // 将新数据追加到旧数据中
                            if (this.datalist) {
                                this.datalist = this.datalist.concat(responseData)
                            } else {

                                this.datalist = responseData
                            }
                            // 页数+1
                            this.datalistPageInde += 1;

                            // 默认每十条为一页，不足十条，则说明没有更多数据
                            if (responseData.length < 10) {
                                this.setState({
                                    isNoMoreData: true
                                });
                            }
                        } else { // 下拉刷新

                            this.datalist = [];

                            // 重置页数存储数组
                            this.datalistPageInde = 1;
                            this.datalist = responseData;
                        }

                        // 利用 immutability-helper 更新状态机
                        this.setState({datalist: ds.cloneWithRows(this.datalist)});
                    } else {
                        this.datalist = [];
                    }

                    // 修改加载状态
                    if (isLoadMore) {
                        // 关闭加载状态
                        this.setState({
                            isShowBottomRefresh: false
                        });
                    } else {
                        // TODO 可区分是否是第一次加载
                        this.setState({
                            isRefreshing: false
                        });
                    }
                }
            })
            .catch((error) => {
                // 修改加载状态
                if (isLoadMore) {
                    // 关闭加载状态
                    this.setState({
                        isShowBottomRefresh: false
                    });
                } else {
                    // TODO 可区分是否是第一次加载
                    this.setState({
                        isRefreshing: false
                    });
                }
            });
    }

    _remove(id) {
        fetch(app.Host + 'api/plans/removePaln1?id=' + id)
            .then((response) => {
                if (response.ok) {

                    fetch(app.Host + 'api/plans/Plans?jtnc=' + this.state.jtnc)
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
            }).catch((error) => {
            console.error(error);
        });
    }

    PostJtjh() {

        let url = app.Host + "api/plans/AddPlan";

        let params = {
            "jtnc": this.state.jtnc,
            "projectType": this.state.xmlx,
            "projectName": this.state.xmName,
            "jds": this.state.jds,
            "zqType": this.state.zqlx,
            "zqStartTime": this.state.zqstart,
            "zqEndTime": this.state.zqend,
            "sfxh": this.state.sfxh,
            "yqmd": this.state.md
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
              fetch(app.Host+'api/plans/Plans?jtnc='+this.state.jtnc)
              .then((response) =>{
                if(response.ok){
                  return response.json();
                }
              })
              .then((responseJson) => { 
                let data=responseJson.data;
                this.setState({datalist:ds.cloneWithRows(data)})
              })
              .catch((error) => {
                console.error(error); 
              }); 

            }
        }).catch((error) => {
            console.error(error);
        });

    }

    __remderjh(jhlx) {
        //if (jhlx == "计划任务") {
            return (
                <View>
                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F0F0F0',
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 20
                    }}>
                        <Text style={{flex: 1}}>项目名称</Text>

                        <TextInput
                            style={{flex: 2}}
                            underlineColorAndroid='transparent'
                            placeholder='请输入项目名称'
                            placeholderTextColor='#BDBDBD'
                            onChangeText={(v) => {
                                this.setState({xmName: v})
                            }}
                        >
                        </TextInput>
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
                        <Text style={{flex: 1}}>金豆数量</Text>
                        <TextInput
                            style={{flex: 2}}
                            underlineColorAndroid='transparent'
                            placeholder='请输入金豆数量'
                            placeholderTextColor='#BDBDBD'
                            onChangeText={(v) => {
                                this.setState({jds: v})
                            }}>
                        </TextInput>
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
                        <Text style={{flex: 1}}>周期类型</Text>
                        <ModalDropdown options={['每周', '每月']}
                                       defaultValue={'请选择周期类型'}
                                       dropdownStyle={{width: 150}}
                                       dropdownTextStyle={{fontSize: 14}}
                                       textStyle={{fontSize: 14, justifyContent: 'center'}}
                                       style={{flex: 2, justifyContent: 'center', height: 40}}
                                       onSelect={(i, v) => {
                                           this.setState({zqlx: v})
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


                        <Text style={{flex: 1}}>周期开始时间</Text>
                        <DatePicker
                            style={{flex: 2, marginRight: 40}}
                            date={this.state.zqstart}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1890-01-01"
                            maxDate="2199-12-31"
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
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {
                                this.setState({zqstart: date})
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


                        <Text style={{flex: 1}}>周期结束时间</Text>
                        <DatePicker
                            style={{flex: 2, marginRight: 40}}
                            date={this.state.zqend}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1890-01-01"
                            maxDate="2199-12-31"
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
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {
                                this.setState({zqend: date})
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
                        <Text style={{flex: 1}}>是否循环</Text>
                        <View style={{flex: 2, alignItems: 'flex-start'}}>
                            <Switch
                                value={this.state.sfxh}
                                onValueChange={(v) => {
                                    this.setState({sfxh: v})
                                }}></Switch>
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
                        <Text style={{flex: 1}}>预期目的</Text>
                        <TextInput
                            style={{flex: 2}}
                            underlineColorAndroid='transparent'
                            placeholder='请输入预期目的'
                            placeholderTextColor='#BDBDBD'
                            onChangeText={(v) => {
                                this.setState({md: v})
                            }}>
                        </TextInput>
                    </View>

                </View>
            )

        /* } else {
             return (
                 <View>
                     <View style={{
                         flexDirection: 'row',
                         borderBottomWidth: 1,
                         borderBottomColor: '#F0F0F0',
                         height: 60,
                         alignItems: 'center',
                         justifyContent: 'space-between',
                         paddingLeft: 20
                     }}>
                         <Text style={{flex: 1}}>行为描述</Text>

                         <TextInput
                             style={{flex: 2}}
                             underlineColorAndroid='transparent'
                             placeholder='请输入行为描述'
                             placeholderTextColor='#BDBDBD'
                             onChangeText={(v) => {
                                 this.setState({xmName: v})
                             }}
                         >
                         </TextInput>
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
                         <Text style={{flex: 1}}>预期目的</Text>
                         <TextInput
                             style={{flex: 2}}
                             underlineColorAndroid='transparent'
                             placeholder='请输入预期目的'
                             placeholderTextColor='#BDBDBD'
                             onChangeText={(v) => {
                                 this.setState({md: v})
                             }}>
                         </TextInput>
                     </View>
                 </View>
             )
         }*/
    }

    _remderItem(t, i) {
        if (t.img) {
            return (<View key={i}
                          style={{
                              width: 80,
                              height: 60,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 10
                          }}>
                <Image
                    source={t.img}
                    style={{
                        height: 45,
                        width: 45
                    }}
                    resizeMode='contain'>
                </Image>
                <Text style={{fontSize: 12}}> {
                    t.name
                }
                </Text>
            </View>)
        } else {
            return <View key={i}
                         style={{width: 80, height: 60, justifyContent: 'center', alignItems: 'center'}}/>
        }
    }
    
    _showddddd(){
      fetch(app.Host+'api/plans/PlansTj?jtnc='+this.state.jtnc)
      .then((response) =>{
        if(response.ok){
          return response.json();
        }
      })
      .then((responseJson) => {
        let data=responseJson.data;
        this.setState({tjdatalist:ds.cloneWithRows(data)})
      })
      .catch((error) => {
        console.error(error);
      });
    }
    componentWillMount(){

      AsyncStorage.getItem('user').then((item)=>{
        return JSON.parse(item)
          }).then((item)=>{

               this.setState({jtnc:decodeURI(item.nc)})

               fetch(app.Host+'api/plans/Plans?jtnc='+this.state.jtnc)
               .then((response) =>{
                 if(response.ok){
                   return response.json();
                 }
               })
               .then((responseJson) => {
                 let data=responseJson.data;
                 this.setState({datalist:ds.cloneWithRows(data)})
               })
               .catch((error) => {
                 console.error(error);
               });

               this._showddddd.bind(this)()
             
               
          })
    }

    render() {
        if (this.state.type == 1) {//成长计划列表
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
                                /* onPress={() => {
                                     let destRoute = this.props.navigator.getCurrentRoutes().find((item) => {
                                         return item.id == "Main1"
                                     })

                                     this.props.navigator.popToRoute(destRoute);
                                 }}*/
                            >
                                {/*<Image source={require('./imgs/back.png')}
                                       resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>*/}
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#FFF', fontWeight: 'bold'
                                }}>成长计划</Text>
                        </View>
                        <View style={{
                            marginRight: 5,
                            flexDirection: 'row'
                        }}>

                            <TouchableOpacity
                                style={{height: 25, width: 25, marginRight: 10}}
                                onPress={() => {
                                    this._showddddd();
                                    this.setState({type: 6})
                                }}>
                                <Image source={require('./imgs/tj.png')}
                                       resizeMode='stretch'
                                       style={{height: 25, width: 25}}>
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{height: 20, width: 20, marginRight: 10}}
                                onPress={() => {
                                    this.setState({type: 3})
                                }}>
                                <Image source={require('./imgs/add.png')}
                                       resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ListView style={{backgroundColor: '#efefef', height: deviceheight - 40}}
                              dataSource={this.state.datalist}
                              enableEmptySections={true}
                              renderRow={(rowData) => this._renderRow(rowData)}
                              renderFooter={() => this._renderFooter()}
                              onEndReached={() => this._endReached()}
                              onEndReachedThreshold={20}
                              refreshControl={
                                  <RefreshControl
                                      refreshing={this.state.isRefreshing}
                                      onRefresh={() => this._onRefresh()}/>
                              }
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
                                          <Text style={{color: '#474747'}}>{decodeURI(rowData.projectName)}</Text>
                                      </View>
                                      <View style={{
                                          flex: 2,
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                      }}>
                                          <Text style={{color: '#474747'}}>金豆:{rowData.jds}</Text>
                                      </View>
                                      <View style={{
                                          flex: 1,
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                      }}>
                                          <TouchableOpacity
                                              onPress={this._remove.bind(this, rowData.id)}
                                          >
                                              <Image source={require('./imgs/delete.png')} resizeMode='stretch'
                                                     style={{height: 20, width: 20}}></Image>
                                          </TouchableOpacity>
                                      </View>
                                  </View>
                              }
                    />
                </View>
            )
        }
        else if (this.state.type == 2) {//计划详情
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
                                    this.setState({type: 1})
                                }}>


                                <Image source={require('./imgs/back.png')} resizeMode='stretch'
                                       style={{height: 20, width: 20}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>计划详情</Text>
                        </View>
                        <View style={{marginRight: 5, width: 22}}>

                        </View>
                    </View>

                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>

                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '类型', typecontent: '系统预设'})
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
                                    类型:</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        系统预设</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '项目名称', typecontent: '8'})
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
                                    项目名称</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        系统预设</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '金豆数量', typecontent: '8'})
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
                                    金豆数量:</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        8</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '周期', typecontent: '5天'})
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
                                    周期</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        5天</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '周期开始时间', typecontent: '2018-09-01'})
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
                                    周期开始时间</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        2018-09-01</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '周期结束时间', typecontent: '2019-08-01'})
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
                                    周期结束时间</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        2019-08-01</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            this.setState({type: 4, typetitle: '是否循环', typecontent: '是'})
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
                                    是否循环</Text>
                                <View
                                    style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{
                                        color: '#585858',
                                        fontFamily: 'Microsoft YaHei'
                                    }}>
                                        是</Text>
                                    <Image source={require('./imgs/go.png')}
                                           style={{width: 10, height: 10, marginLeft: 5}} resizeMode='stretch'></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            )
        }
        else if (this.state.type == 4) {//计划项编辑
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
                        <View style={{marginRight: 5, width: 21}}>

                        </View>
                    </View>
                    <View backgroundColor='#F2F2F2'
                          style={{height: deviceheight - 60}}>
                        <View style={{backgroundColor: '#fff', marginTop: 10, height: 40}}>
                            <TextInput underlineColorAndroid='transparent'
                                       clearButtonMode='always'
                                       multiline={false}
                                       defaultValue={this.state.typecontent}
                            >

                            </TextInput>
                        </View>
                    </View>
                </View>
            )
        }
        else if(this.state.type==6){
                return (
                    <View>
                            <DropdownAlert
                                ref={ref => this.loginAlert = ref}
                                 containerStyle={{height:100}}
                                    showCancel={true}
                                     closeInterval={3000}
                                     zIndex={1000000}

                                    />
                               <View style={{
                               flexDirection:'row',
                               borderBottomWidth:1,
                               borderBottomColor:'#E6E6E6',
                               backgroundColor:'#fe9c2e',
                               height:40,
                               alignItems:'center',
                               justifyContent:'space-between'}}>

                               <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
                               <TouchableOpacity
                   style={{height:50,
                    width:35,

                 justifyContent:'center',
                 alignItems:'flex-end'}}
                                      onPress={()=>{this.setState({type:1})}}>
                                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                                        </Image>
                                      </TouchableOpacity>
                                </View>
                                      <View style={{justifyContent:'center',alignItems:'center'}}>
                                          <Text
                                          style={{fontSize:16,
                                            color:'#FFF',fontWeight:'bold'}}>推荐计划</Text>
                                      </View>
                                      <View style={{marginRight:5,width:40}}>

                                      </View>
                                  </View>


                               <View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>
                               <ScrollView >
                               <ListView
                                  dataSource={this.state.tjdatalist}
                                   renderRow={(rowData) =>

                                          <View
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',

                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{decodeURI(rowData.projectName)}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>来自：{decodeURI(rowData.jtnc)==""?"平台推荐":decodeURI(rowData.jtnc)}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>应用次数: {rowData.times}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                              <CheckBox   styles={{height:20,width:20}}
                                                         selected={(isS)=>{
                                                                if(!isS){
                                                                  this.setState({xmName:decodeURI(rowData.projectName),jds:rowData.jds})
                                                                   this.PostJtjh.bind(this)();
                                                                   this.loginAlert.alertWithType('success', '提示', '推荐成功');
                                                                   this._showddddd.bind(this)()
                                                                  }
                                                         }}
                                                         />


                                                      </View>


                                         </View>

                                         }
                                   />

                               </ScrollView>
               </View>
                            </View>
                            )
            }
            else{
                return(<View>
            <View style={{
               flexDirection:'row',
               borderBottomWidth:1,
               borderBottomColor:'#E6E6E6',
               backgroundColor:'#fe9c2e',
               height:40,
               alignItems:'center',
               justifyContent:'space-between'}}>

                <View>
                <TouchableOpacity
                   style={{height:40,
                    width:35,

                 justifyContent:'center',
                 alignItems:'flex-end'}}
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity>
                      </View>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>计划添加</Text>
                      </View>
                      <View style={{marginRight:5,width:35}}>
                     <TouchableOpacity onPress={()=>{
                         this.setState({type:1})
                         this.PostJtjh.bind(this)()}
                     }>
                       <Text style={{color:'#FFF',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                  </View>
                  <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   

                        <Text style={{flex: 1}}>项目类型</Text>

                        <ModalDropdown options={["学习", '国学', '社交', "艺术", "体育", "其他"]}
                                       defaultValue={'学习'}
                                       dropdownStyle={{width: 200}}
                                       dropdownTextStyle={{fontSize: 14}}
                                       textStyle={{fontSize: 14, justifyContent: 'center'}}
                                       style={{flex: 2, justifyContent: 'center', height: 40}}
                                       onSelect={(i, v) => {
                                           this.setState({xmlx: v})
                                       }}
                        />

                    </View>

                    {this.__remderjh(this.state.xmlx)}

                </View>
            )
        }
    }
}