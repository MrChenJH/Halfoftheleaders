import React, {Component} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    ListView
} from 'react-native';

import Button from '../component/button'
import Cygl from '../cygl/cygl'
import Jtjh from '../cygl/jtjh'

import Cssz from '../cygl/cssz'
import Hd from   '../cygl/hd'
import Wdxx from '../cygl/wdxx'
import Zhqh from '../cygl/zhqh'
import Wdtj from '../cygl/wdtj'
import Wdfk from '../cygl/wdfk'

export default class page1 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01 10:45'},
                {title:'打扫卫生',time:'2018-07-01 10:45'},
                {title:'洗碗',time:'2018-07-01 10:45'},
                {title:'按时睡觉',time:'2018-07-01 10:45'}
               ]),
              type:1
        }
    }
    _rednerJH() {
        let icons = []
        icons.push({img: require('./gly/icon_chengyuan.png'), name: '成员管理'})
        icons.push({img: require('./gly/icon_jihua.png'),     name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'),    name: '参数设置'})
        icons.push({img: require('./gly/icon_chongzhi.png'),   name: '会员充值'})
        icons.push({img: require('./gly/icon_tuijian.png'),    name: '我的推荐'})
        icons.push({img: require('./gly/icon_jifen.png'), name: '我的积分'})
        icons.push({img: require('./gly/icon_huodong.png'), name: '我的活动'})
        icons.push({img: require('./gly/icon_xiaoxi.png'), name: '我的消息'})
        icons.push({img: require('./gly/icon_fankui.png'), name: '我的反馈'})
        icons.push({img: require('./gly/icon_qiehuan.png'), name: '切换账号'})
        icons.push({})
        icons.push({})
        return (icons.map((t, i) =>this._remderItem(t, i)))
    }

    _remderItem(t, i) {
        if(t.img){
        return (
      <View key = {i} 
        style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center',marginTop:10}} >
       <TouchableOpacity onPress={()=>{
            this.setState({type:(i+2)})
        }} >
        <Image
            source={t.img}
            style={{
            height: 45,
            width: 45
        }}
        resizeMode='contain'>
        </Image> 
        </TouchableOpacity>
        <Text style={{fontSize:12}}> {
            t.name
        }
         </Text>
            </View>)}else{
                return <View key = {i} 
                style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center'}} />
            }
    }

    render() {
        if(this.state.type==1){
        return (
            <ScrollView style={{
                backgroundColor: '#D0D0D0'
            }}>
                    <View
                        style={{
                        height: 250,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            height:200
                        }}>
                                 <ImageBackground
                                   
                             resizeMode='contain'
                                source={ require('./gly/banner_bg.png')
                            }
                              
                                style={{
                                 height:200,
                                 width:1000
                            }}></ImageBackground>
                        </View>
                       
                        <View
                            style={{
                            height:50,
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingLeft:20
                        }}>
                            
                             <View style={{flex:1}}>
                          
                                    <Text
                                        style={{
                                           width:100,
                                           height:30,
                                           fontWeight:'bold'
                                        }}>
                                    账号状况:生效</Text>
                           
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start',paddingTop:10}}>
                                <Image source={require('./gly/woyaocz.png')}
                            style={{   width:130,
                                height:70}}
                                resizeMode='stretch'
                            >

                                </Image>
                                </View>
                              
                               
                             
                            
                        </View>
                    </View>
                  
                  
                  
                  
                    <View
                        style={{
                        flex: 2,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <ImageBackground
                            source={{
                            source: require('./gly/boy_bg.png')
                        }}
                            style={{
                            flex: 1
                        }}
                            resizeMode='contain'>
                            <View
                                style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>家庭成员</Text>
                            </View>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20,
                                marginTop: 10
                            }}>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>父亲</Text>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    marginTop: 5
                                }}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>母亲</Text>
                                </View>

                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>小鬼</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View
                        style={{
                        height:300,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <ImageBackground
                            source={{
                            source: require('./gly/boy_bg.png')
                        }}
                            style={{
                            flex: 1
                        }}
                            resizeMode='contain'>
                            <View
                                style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>计划管理</Text>
                            </View>
                            <View
                                style={{
                                flex:5,
                                justifyContent:'space-between',
                                flexDirection: 'row',
                                alignItems:'flex-start',
                                marginBottom: 20,
                                marginTop: 10,
                                flexWrap: 'wrap'
                            }}>
                                {this._rednerJH()}
                            </View>
                        </ImageBackground>
                    </View>

                 
                 
                    <View
                        style={{
                        height: 150,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        <ImageBackground
                            source={{
                            source: require('./gly/boy_bg.png')
                        }}
                            style={{
                            flex: 1
                        }}
                            resizeMode='contain'>
                            <View
                                style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 5
                            }}>
                                <Text>消息中心</Text>
                            </View>
                            <View
                                style={{
                                flex: 4,
                              
                                marginBottom: 20,
                                marginTop: 5
                            }}>
                               
                               <ListView
                              dataSource={this.state.dataSource}
                               renderRow={(rowData) => <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
                                    <View style={{flex:1}}></View>
                                    <Text style={{flex:10}}>{rowData.title}</Text>
                                   <Text style={{flex:8}}>{rowData.time}</Text>
                                   </View>}
                               />
                            </View>




                         
                        </ImageBackground>
                    </View>
                    <View style={{flexDirection:'row',
                                 marginLeft: 5,
                                 marginRight: 5,
                                 marginTop: 10,
                                 borderStyle: 'solid',
                                 backgroundColor: '#D0D0D0',
                               
                            height:180}}>
                            <Image source={require('./gly/gg2.png')} style={{flex:1}}></Image>
                            </View>
               

            </ScrollView>
        )}else {
         if(this.state.type==2){
            return <Cygl back={()=>{
                this.setState({type:1})}}></Cygl>
         }
         if(this.state.type==3){
            return <Jtjh back={()=>{
                this.setState({type:1})}}></Jtjh>
         }
         if(this.state.type==4){
            return <Cssz back={()=>{
                this.setState({type:1})}}></Cssz>
         }
        if(this.state.type==6){

            return <Wdtj  back={()=>{
                this.setState({type:1})}}
            ></Wdtj>
        }
         if(this.state.type==8){
            return <Hd back={()=>{
                
                this.setState({type:1})}}></Hd>
         }

         if(this.state.type==9){
            return <Wdxx back={()=>{
                this.setState({type:1})}}></Wdxx>
         }

         if(this.state.type==10){
            return <Wdfk back={()=>{
                this.setState({type:1})}}></Wdfk>
         }

         if(this.state.type==11){
            return <Zhqh back={()=>{
                this.setState({type:1})}}></Zhqh>
         }
        }
    }
}