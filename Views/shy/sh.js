import React, {Component} from 'react';
import {
ListView,
 ImageBackground,
 Text,
 View,
 TouchableOpacity,

 Dimensions,
 Image,
 ScrollView
} from 'react-native'; 
import CheckBoxsy from '../component/xwCheckBox';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class sh extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:'',
            pwd:'',
            qrpwd:'',
            dataSource: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01'},
                {title:'打扫卫生',time:'2018-07-01'},
                {title:'洗碗',time:'2018-07-01'},
                {title:'按时睡觉',time:'2018-07-01'},
                {title:'学习数学',time:'2018-07-01'}
               ])
        }
    } 

    render() {
      const  {back}=this.props
      return (<ScrollView  >
             <ImageBackground source={require('./shyImage/shybg.png')}
                  style={{width:deviceWidth}}
                  resizeMode='cover'>
             
              <View 
              style={{height:40,
                marginLeft:10,
                 alignItems:'flex-start',
                 justifyContent:'center'}} >
             
             <TouchableOpacity onPress={()=>{
                 if(back){  back()}
               }}>
                  <Image source={require('./shyImage/close.png')}
              
                   style={{height:20,
                           width:20}} 
                           resizeMode='stretch' ></Image>
                           </TouchableOpacity>
              </View>
              <View
              style={{
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center'

              }}
              >
                <View style={{alignItems:'center'}}>
                    <Text style={{
                        fontSize:12,
                        color:'black',
                        marginBottom:10
                    }}>金豆</Text>
                    <Image source={require('./shyImage/jd.png')} 
                    style={{height:80,width:80,marginBottom:5}}
                     resizeMode='stretch'></Image>
                       <Text style={{
                        fontSize:10,
                        color:'#fff',
                        marginBottom:3
                    }}>计划数:3</Text>
                       <Text
                        style={{
                            fontSize:10,
                            color:'#fff',
                            marginBottom:10
                        }}
                       >完成数:20</Text>
                </View>
                <View style={{width:20}}></View>
                <View style={{alignItems:'center'}}>
                <Text style={{
                        fontSize:12,
                        color:'black',
                        marginBottom:10
                    }}>银豆</Text>
                   <Image source={require('./shyImage/yd.png')} 
                    style={{height:80,width:80,marginBottom:5}}
                     resizeMode='stretch'></Image>
                    <Text
                      style={{
                        fontSize:10,
                        color:'#fff',
                        marginBottom:3
                    }}
                    >计划数:3</Text>
                    <Text
                      style={{
                        fontSize:10,
                        color:'#fff',
                        marginBottom:10
                    }}
                    >完成数:20</Text>
                </View>
                
              </View>
            
             <View
                        style={{
                        height: 210,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        
                            <View
                                style={{ 
                               
                                    flexDirection:'row', 
                                    borderBottomWidth:1,
                                    borderBottomColor:'#F2F2F2',
                                    marginLeft:5,
                                    marginRight:5,
                                    height:30,
                                    alignItems:'center',
                                    paddingLeft:10,
                                    paddingRight:10
                            }}>
                              
                                    <Text style={{flex:6,textAlign:'left',fontSize:12}}>计划任务</Text>
                                    <Text style={{flex:2,
                                        color:'#BDBDBD',fontSize:12,textAlign:'center'}}>确认</Text>
                                               <Text style={{flex:2,
                                        color:'#BDBDBD',textAlign:'right',fontSize:12}}>评价</Text>
                            </View>
                            <View
                                style={{
                                    height:180,
                                marginBottom: 20,
                                marginTop: 5
                            }}>
                               
                               <ListView
                              dataSource={this.state.dataSource}
                               renderRow={(rowData) => 
                               <View style={{
                                   height:30,
                               flexDirection:'row', 
                                borderBottomWidth:1,
                               borderBottomColor:'#F2F2F2',
                               marginLeft:5,
                               marginRight:5,
                               alignItems:'center',
                           
                                paddingLeft:10,
                                paddingRight:10,
                               }}> 
                                 
                                    <Text style={{flex:6,
                                        textAlign:'left',
                                        fontSize:12}}>{rowData.title}</Text>
                                   <View  style={{flex:2,alignItems:'center'}}>
                                   <CheckBoxsy styles={{width:20,height:20}}></CheckBoxsy>
                                   </View>
                                   <View  style={{flex:2,alignItems:'flex-end',marginLeft:10}}>
                                    <Image source={require('./shyImage/lian.png')} style={{width:20,height:20}} resizeMode='stretch'></Image>
                                   </View>
                                   </View>}
                               />
                            </View>




                         
                   
                    </View>
    




     
     <View
                        style={{
                        height: 180,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 10,
                        borderStyle: 'solid',
                        backgroundColor: '#fff',
                        borderRadius: 10
                    }}>
                        
                            <View
                                style={{ 
                                    height:30,
                                    borderBottomWidth:1,
                                    borderBottomColor:'#F2F2F2',
                                    marginLeft:5,
                                    marginRight:5,
                                    alignItems:'flex-start',
                                    justifyContent:'center',
                                    paddingLeft:10
                                 }}>
                              
                                    <Text style={{fontSize:12,
                                             color:'#1C1C1C'}}>本周银豆奖扣比例</Text>
                                        </View>
                          <View
                           style={{ 
                            height:90,
                      
                            alignItems:'center',
                            justifyContent:'center'
                           }}>
                        
                        <Image source={require('./shyImage/aq.png')}
                        style={{width:300,height:30}} 
                        resizeMode='stretch'></Image> 
                        <Text   style={{
                            width:300,
                            height:30,
                            marginLeft:15,
                            color:'#aa6800'}}>您本周扣分有点少,提高点孩子的要求吧</Text>
                          </View>

                             <View
                            style={{ 
                            height:80, 
                            backgroundColor:'#D8D8D8',
                            marginLeft:10,
                            marginRight:10
                              }} > 
                                      <View
                            style={{ 
                            flex:1,
                            backgroundColor:'#fff',
                           margin:1,
                            alignItems:'center'
                              }} > 

                              <Text>本周收获</Text> 
                              <View
                              style={{flexDirection:'row',
                                      justifyContent:'center',
                                      height:50,
                                    alignItems:'center'}}
                             >
                                <View 
                                      style={{flex:1}}
                              ></View>
                              <View 
                                      style={{flex:1,alignItems:'center'}}
                              >
                              <ImageBackground source={require('./shyImage/bzyd.png')} 
                              style={{width:70,height:30,alignItems:"center"}} resizeMode='stretch'
                              ><Text>100</Text></ImageBackground>
                              <Text>金豆</Text>
                              </View> 
                              <View
                                      style={{flex:1,alignItems:'center'}}
                              >
                                  <ImageBackground source={require('./shyImage/bzyd.png')} 
                                 style={{width:70,height:30,alignItems:"center"}} resizeMode='stretch'
                              ><Text>200</Text></ImageBackground>
                                   <Text>银豆</Text>
                              </View>
                              <View 
                                      style={{flex:1}}
                              ></View>
                             </View>
                                   </View>
                           </View>
               </View>
              </ImageBackground>
              </ScrollView>)

    }
}