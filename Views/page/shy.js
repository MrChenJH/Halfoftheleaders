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
    TextInput
} from 'react-native';

import Button from '../component/button'
 import Jrrw from '../shy/jrrw'
 import Zrbx from '../shy/zrxw'
 import Mrjh from '../shy/mrjh'
 import YsSh from '../shy/jhsh'
 import JHSh from '../shy/sh'
 import Jfd from '../cygl/wdjf'
 import Wdtj from '../shy/wdtj'
 import Jdhd from '../shy/hd'

 import Zhqh from '../shy/zhqh'


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
                {title:'做作业',yd:true,time:'2018-10-01 9:10'},
                {title:'打扫卫生',yd:false,time:'2018-10-01 9:10'}
               ]),
              type:1
        }
    }
    _rednerJH() {
        let icons = []
        icons.push({img: require('./shy/jrrw.png'), name: '今日任务'})
        icons.push({img: require('./shy/zrbx.png'),     name: '昨日表现'})
        icons.push({img: require('./shy/mrjh.png'),    name: '明日计划'})
        icons.push({img: require('./shy/yssh.png'),   name: '预算审核'})
        icons.push({img: require('./shy/jttj.png'),    name: '家庭推荐'})
        icons.push({img: require('./shy/jfd.png'), name: '家风豆'})
        icons.push({img: require('./shy/jthd.png'), name: '家庭活动'})
        icons.push({img: require('./shy/qhzh.png'), name: '切换账号'})
       
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
                                   
                             resizeMode='contain'
                                source={ require('./gly/banner.png')
                            }
                              
                                style={{
                                 height:200,
                                 width:1000
                            }}></ImageBackground>
                        </View>
                       <View
                       style={{
                       width:deviceWidth,
                        height:90,
                        flexDirection: 'row',
                         justifyContent:'space-between', 
                         backgroundColor: '#fff',
                        alignItems:'center'
                     }}
                       >
                        <View
                            style={{
                            flex:1,
                            height:90,
                            flexDirection: 'row',
                          
                            justifyContent:'flex-start',
                            alignItems:'center',
                            paddingLeft:20
                        }}>
                             <View
                                    style={{
                                    width:50
                                }}>
                                 <TouchableOpacity 
                                         style={{
                                          alignItems: 'center'}}
                                         onPress={()=>{this.setState({type:111})}}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>小鬼</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end',marginRight:20}}>
                                <Text
                                style={{fontSize:13,color:"#FFBF00"}}
                                >切换头像</Text>
                            </View>
                            </View>
                           
                     </View>
                  
                   <View
                        style={{
                        height:180,
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
                        height: 90,
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
                               height:60,
                                marginBottom: 20,
                                marginTop: 10
                            }}>
                               
                               <ListView
                                   dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                               <View style={{
                                   height:30,
                               flexDirection:'row', 
                                borderBottomWidth:1,
                                alignItems:'center',
                               borderBottomColor:'#F2F2F2',
                               marginLeft:5,
                               marginRight:5
                               }}> 
                                    <View style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'}}>
                                    <Image source={rowData.yd?require('../shy/shyImage/iconYd.png'):require('../shy/shyImage/wd.png')} style={{width:10,height:10}} resizeMode='stretch'></Image>
                                    </View>
                                    <Text style={{flex:6,textAlign:'left',fontSize:12}}>{rowData.title}</Text>
                                    <Text style={{flex:3,
                                        color:'#BDBDBD',textAlign:'right',fontSize:12}}>{rowData.time}</Text>
                                   </View>}
                               />
                            </View>
                        </ImageBackground>
                    </View>
                
               

            </ScrollView>
        )}else {
         if(this.state.type==2){
            return <Jrrw back={()=>{
                this.setState({type:1})}}></Jrrw>
         }
         else  if(this.state.type==3){
            return <Zrbx back={()=>{
                this.setState({type:1})}}></Zrbx>
         }
         else  if(this.state.type==4){
            return <Mrjh back={()=>{
                this.setState({type:1})}}></Mrjh>
         }
         else  if(this.state.type==5){
            return <YsSh back={()=>{
                this.setState({type:1})}}></YsSh>
         }
         else  if(this.state.type==6){

            return <Wdtj  back={()=>{
                this.setState({type:1})}}
            ></Wdtj>
        }
        else  if(this.state.type==7){

            return <Jfd
            back={()=>{
                 this.setState({type:1})}}></Jfd>
        }


        else if(this.state.type==8){
            return <Jdhd back={()=>{
                 this.setState({type:1})}}></Jdhd>
         }

         else if(this.state.type==9){
            return <Zhqh back={()=>{
                this.setState({type:1})}}></Zhqh>
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