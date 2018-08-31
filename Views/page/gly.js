import React, {Component} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Dimensions,
    TextInput,
    AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper'
import Button from '../component/button'
import Cygl from '../cygl/cygl'
import Jtjh from '../cygl/jtjh'
import Wdjf from '../cygl/wdjf'
import Cssz from '../cygl/cssz'
import Hd from   '../cygl/hd'
import Wdxx from '../cygl/wdxx'
import Zhqh from '../cygl/zhqh'
import Wdtj from '../cygl/wdtj'
import Wdfk from '../cygl/wdfk'
import DatePicker from 'react-native-datepicker'
import jtjh from '../cygl/jtjh';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
export default class page1 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows([
                {title:'做作业',content:'一小时前'},
                {title:'打扫卫生',content:'三小时前'},
                {title:'洗碗',content:'洗碗'}
               ]),
             dataCySource: [
            
               ],
             
              type:1
        }
    }
    _rednerCy1(){
         return (this.state.dataCySource.map((t, i) =>this._rednerCy(t, i)))
   }
 
 
   _rednerCy(item,i){ 
     return (
        <View  key = {i} 
        style={{ width: 80,
                  alignItems: 'center'  }}> 
  
       <TouchableOpacity onPress={()=>{this.setState({type:111})}}>
        <Image
            source={item.userRole=="爸爸"? require('../cygl/imgs/tx/bb.png'):(item.userRole=="妈妈"?require('../cygl/imgs/tx/mm.png'):item.userRole=="叔叔"?require('../cygl/imgs/tx/uncle.png'):item.userRole=="爷爷"?require('../cygl/imgs/tx/yeye.png'):require('../cygl/imgs/tx/nainai.png'))}
            style={{
            height: 50,
            width: 50
        }}
            resizeMode='stretch'
        ></Image>
        <Text 
             style={{
             
                width: 50,
                fontSize:12,
                textAlign:'center'
            }} >{  
                decodeURI(item.userRole)}</Text>
        </TouchableOpacity>
    </View>
     )

    }
    _rednerJH() {
        let icons = []
        icons.push({img: require('./gly/icon_chengyuan.png'), name: '成员管理'})
        icons.push({img: require('./gly/icon_jihua.png'),     name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'),    name: '参数设置'})
        icons.push({img: require('./gly/icon_chongzhi.png'),   name: '会员充值'})
        icons.push({img: require('./gly/icon_tuijian.png'),    name: '我的推荐'})
        icons.push({img: require('./gly/icon_jifen.png'), name: '家庭钻豆'})
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
           if(t.name=="成员管理")
           {
           this.props.navigator.push({
               component:Cygl,
                })
           }
           else if(t.name=="计划管理")
           {
            this.props.navigator.push({
                component:Jtjh,
                 })
           }
           else if(t.name=="参数设置")
           {
            this.props.navigator.push({
                component:Cssz,
                 })
           }
           else if(t.name=="会员充值")
           {
            this.setState({type:5})
           }
           else if(t.name=="我的推荐")
           { this.props.navigator.push({
            component:Wdtj,
             })
          
           }
           else if(t.name=="家庭钻豆")
           {   this.props.navigator.push({
            component:Wdjf,
             })
           
           }
           else if(t.name=="我的活动")
           {
            this.props.navigator.push({
                component:Hd,
                 })
           }
           else if(t.name=="我的消息")
           {
            this.props.navigator.push({
                component:Wdxx,
                 })
           }
           else if(t.name=="我的反馈")
           {
            this.props.navigator.push({
                component:Wdfk,
                 })
           } 
            else if(t.name=="切换账号")
           {
            this.props.navigator.push({
                component:Zhqh,
                 })
           }
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
    componentWillMount(){

        AsyncStorage.getItem('user').then((item)=>{
            return JSON.parse(item)
              }).then((item)=>{ 
             
                   this.setState({jtnc:item.nc}) 
     
                   fetch('http://192.168.0.100:38571/api/family/Members?jtnc='+item.nc)
                   .then((response) =>{
                     if(response.ok){
                       return response.json();
                     }
                   })
                   .then((responseJson) => { 
                     let data=JSON.parse(responseJson).data;
                     this.setState({dataCySource:data})
                   })
                   .catch((error) => {
                     console.error(error); 
                   });
              })
    }
    render() {
        if(this.state.type==1){
        return (
            <ScrollView style={{
                backgroundColor: '#F7F7F7'
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
                                   
                         
                                source={ require('./gly/banner.png')
                            }
                            resizeMode='stretch'
                                style={{
                                 height:200,
                                 width:deviceWidth
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
                                           width:160,
                                           height:30,
                                           fontWeight:'bold'
                                        }}>
                                    欢迎您,豆为之家</Text>
                           
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
                                <Text>我的家人</Text>
                            </View>
                            <View
                                style={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                alignContent:'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20,
                                marginTop: 10,
                                flexWrap:'wrap'
                            }}>
                             {this._rednerCy1()}
                             </View>
                        </ImageBackground>
                    </View>

                    <View
                        style={{
                        height:250,
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
                                 height:40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 5
                            }}>
                                <Text style={{
                                    fontSize:14,
                                    color:'#151515'
                                    }}>服务提醒</Text>
                            </View>
                            <View
                                style={{
                                flex: 4,
                                height:90,
                                marginBottom: 20,
                                marginTop: 5
                            }}>
                               
                               <ListView
                              dataSource={this.state.dataSource}
                               renderRow={(rowData) => 
                               <View style={{
                               flexDirection:'row', 
                                borderBottomWidth:1,
                                height:30,
                               borderBottomColor:'#F2F2F2',
                               marginLeft:5,
                               marginRight:5
                               }}> 
                                    <View style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'}}>
                                    <Image source={rowData.yd?require('../shy/shyImage/iconYd.png'):require('../shy/shyImage/wd.png')} style={{width:10,height:10}} resizeMode='stretch'></Image>
                                    </View>
                                    <Text style={{flex:6,textAlign:'left'}}>{rowData.title}</Text>
                                    <Text style={{flex:3,
                                        color:'#BDBDBD',textAlign:'right'}}>{rowData.content}</Text>
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
      
         if(this.state.type==5){
            return <View>
                <TouchableOpacity onPress={()=>{this.setState({type:1})}}>
                <Text>敬请期待</Text>
                
                </TouchableOpacity></View>
         }
         else if(this.state.type==111)
              {
                    return(
                      <View>
                        
                      <View style={{
                   flexDirection:'row',
                   borderBottomWidth:1,
                   borderBottomColor:'#E6E6E6',
                   backgroundColor:'#fe9c2e',
                   height:50,
                   alignItems:'center',
                   justifyContent:'space-between'
                   }}>
                   
                    <View>
      
                      
      
      
                    <TouchableOpacity  style={{height:20,width:20}}
                          onPress={()=>{this.setState({type:1})}}>
                            <Image source={require('../cygl/imgs/back.png')} 
                             resizeMode='stretch' 
                              style={{height:20,width:20}} >
                            </Image>
                          </TouchableOpacity> 
                          </View> 
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>成员详情</Text>
                          </View> 
                          <View style={{marginRight:5,width:22}}> 
                        
                          </View> 
                      </View>
                       
      
      
                      <View backgroundColor='#F2F2F2' 
                      style={{height:deviceheight-60}}>
      
                         <TouchableOpacity onPress={()=>{this.setState({type:444,typetitle:'账号名',typecontent:'张三的家'})}}>
                    
                    <View style={{flexDirection:'row',
                             backgroundColor:'#fff',
                             borderTopColor:'#F0F0F0',
                             borderTopWidth:1,
                             borderBottomWidth:1,
                             borderBottomColor:'#F0F0F0',
                             height:40,
                             alignItems:'center',
                             justifyContent:'space-between',
                             paddingLeft:10,
                             paddingRight:10,
                             marginTop:10,
                             }}>
                              <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                   账号名:</Text>  
                                   <View 
                              style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{fontSize:13,
                                color:'#585858',
                                fontFamily:'Microsoft YaHei'}}>
                                  张三的家</Text>  
                              <Image source={require('../cygl/imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                              </View>
                            </View>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:444,typetitle:'密码',typecontent:'123456'})}}>
                          <View style={{flexDirection:'row',
                                 backgroundColor:'#fff',
                                 borderTopColor:'#F0F0F0',
                                 borderTopWidth:1,
                                 borderBottomWidth:1,
                                 borderBottomColor:'#F0F0F0',
                                 height:40,
                                 alignItems:'center',
                                 justifyContent:'space-between',
                                 paddingLeft:10,
                                 paddingRight:10,
                                 marginTop:10,
                                 }}>
                                  <Text 
                                   style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                  密码</Text>
                                  <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                 <Text style={{
                                     fontSize:13,
                                     color:'#585858',
                                     fontFamily:'Microsoft YaHei'}}>
                                   123456</Text>  
                                  <Image source={require('../cygl/imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                 
                        </View> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({type:444,typetitle:'系统角色',typecontent:'家庭管理员'})}}>
                    
                        <View style={{flexDirection:'row',
                                 backgroundColor:'#fff',
                                 borderTopColor:'#F0F0F0',
                                 borderTopWidth:1,
                                 borderBottomWidth:1,
                                 borderBottomColor:'#F0F0F0',
                                 height:40,
                                 alignItems:'center',
                                 justifyContent:'space-between',
                                 paddingLeft:10,
                                 paddingRight:10,
                                 marginTop:10,
                                 }}>
                                  <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                      系统角色</Text>  
                                       <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                     家庭管理员</Text>  
                                  <Image source={require('../cygl/imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                                </View>
                                </TouchableOpacity>
                              
      
                            <TouchableOpacity onPress={()=>{this.setState({type:444,typetitle:'家庭角色',typecontent:'普通用户'})}}>
                                <View style={{flexDirection:'row',
                                 backgroundColor:'#fff',
                                 borderTopColor:'#F0F0F0',
                                 borderTopWidth:1,
                                 borderBottomWidth:1,
                                 borderBottomColor:'#F0F0F0',
                                 height:40,
                                 alignItems:'center',
                                 justifyContent:'space-between',
                                 paddingLeft:10,
                                 paddingRight:10,
                                 marginTop:10,
                                 }}>
                                  <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                               家庭角色</Text> 
                                 <View 
                                  style={{flexDirection:'row',alignItems:'center'}}>
                                         <Text style={{fontSize:13,
                                    color:'#585858',
                                    fontFamily:'Microsoft YaHei'}}>
                                    普通用户</Text>  
                                  <Image source={require('../cygl/imgs/go.png')}  style={{width:10,height:10}} resizeMode='stretch'></Image>
                                  </View>
                              </View>
                              </TouchableOpacity>
                       </View>
                  </View>
                    )
                  }else if(this.state.type==444){
                    return (
                        <View>
                        <View style={{
                            flexDirection:'row',
                            borderBottomWidth:1,
                            borderBottomColor:'#E6E6E6',
                            backgroundColor:'#fe9c2e',
                            height:50,
                            alignItems:'center',
                            justifyContent:'space-between'}}>
                            
                             <View>
                             <TouchableOpacity  style={{height:20,width:20}}
                                   onPress={()=>{this.setState({type:111})}}>
                                     <Image source={require('../cygl/imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                                     </Image>
                                   </TouchableOpacity> 
                                   </View> 
                                   <View style={{justifyContent:'center',alignItems:'center'}}>
                                       <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
                                   </View> 
                                   <View style={{marginRight:5,width:21}}> 
                                        
                                   </View> 
                               </View>
                               <View backgroundColor='#F2F2F2' 
                                           style={{height:deviceheight-60}}>
                                <View style={{backgroundColor:'#fff',marginTop:10,height:40}}>
                                <TextInput   underlineColorAndroid='transparent' 
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
        }
    }
}