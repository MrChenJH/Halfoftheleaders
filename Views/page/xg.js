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
  
 
  import Jrrw from '../xg/jrrw'
  import Zrxw from '../xg/zrxw'  
  import Mrjh from '../xg/mrjh' 
  import Wdys from '../xg/wdys'
  import Wyhs from '../xg/wyhs' 
  import Wdqb from '../xg/wdqb'

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
                {title:'做作业',time:'2018-07-01'},
                {title:'打扫卫生',time:'2018-07-01'},
                {title:'洗碗',time:'2018-07-01'},
                {title:'按时睡觉',time:'2018-07-01'}
               ]),
              type:1
        }
    }
    _rednerJH() {
        let icons = []
        icons.push({img: require('./gly/icon_chengyuan.png'), name: '今日任务'})
        icons.push({img: require('./gly/icon_jihua.png'),     name: '昨日表现'})
        icons.push({img: require('./gly/icon_canshu.png'),    name: '明日计划'})
        icons.push({img: require('./gly/icon_chongzhi.png'),   name: '我的预算'})
        icons.push({img: require('./gly/icon_tuijian.png'),    name: '我有话说'})
        icons.push({img: require('./gly/icon_jifen.png'), name: '我的钱包'})
        icons.push({})
        icons.push({})
        return (icons.map((t, i) =>this._remderItem(t, i)))
    }
    back(){
        this.setState({type:1})
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
                                      您好张思成同学</Text>
                           
                                    </View>
                                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start',paddingTop:10}}>
                    
                                </View>
                              
                               
                             
                            
                        </View>
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
                                flex: 1,
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
                              
                                marginBottom: 20,
                                marginTop: 5
                            }}>
                               
                               <ListView
                              dataSource={this.state.dataSource}
                               renderRow={(rowData) => 
                               <View style={{
                               flexDirection:'row', 
                                borderBottomWidth:1,
                               borderBottomColor:'#F2F2F2',
                               marginLeft:5,
                               marginRight:5
                               }}> 
                                    <View style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'}}>
                                    <Image source={require('./gly/xxyd.png')} style={{width:5,height:5}} resizeMode='stretch'></Image>
                                    </View>
                                    <Text style={{flex:6,textAlign:'left'}}>{rowData.title}</Text>
                                    <Text style={{flex:3,
                                        color:'#BDBDBD',textAlign:'right'}}>{rowData.time}</Text>
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
            return <Jrrw back={this.back.bind(this)}></Jrrw>
         }
         if(this.state.type==3){
             return <Zrxw
             back={this.back.bind(this)}
             ></Zrxw>
         }
         if(this.state.type==4){
             return <Mrjh
               back={
                   this.back.bind(this)
               }> </Mrjh>
         }
         if(this.state.type==5){
            return <Wdys
            back={this.back.bind(this)}
            ></Wdys>
        } 
       if(this.state.type==6){
            return <Wyhs
            back={this.back.bind(this)}
            ></Wyhs>
        }
        if(this.state.type==7){
            return <Wdqb
            back={this.back.bind(this)}
            ></Wdqb>
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