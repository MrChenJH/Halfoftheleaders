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
import Checkbox from '../component/checkbox'
import DatePicker from 'react-native-datepicker'
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
        datalist:  ds.cloneWithRows([
       
           ]), 
           tjdatalist:  ds.cloneWithRows([
       
          ]),
                isShowBottomRefresh: false,
                isRefreshing: false,
                isNoMoreData: false,
                isShowBottomRefresh:false,
                isFirstload:true,
                jtnc:'',
                type:1,
                tabxmlx:'计划任务',
                xmlx:'计划任务',
                xmName:'',
                jds:0,
                zqlx:'',
                zqstart:'2018-01-01',
                zqend:'2018-01-01',
                sfxh:false,
                xwms:'',
                md:''
          }
    }
    

    _endReached = () => { 
      if(this.state.isFirstload){
         this.setState({isFirstload:false})
          return
      }
      if(this.state.isNoMoreData){
          return
      }
    
      this.fetchData(false, true);
    }

    _onRefresh = () => {
    // 当加载到最后一页数据，再次下拉刷新时，需关闭isNoMoreData状态机
    this.setState({
      isNoMoreData: false
    });

    this.fetchData(false, false);
    }
    
    _renderFooter(){

      if(this.state&&this.state.isShowBottomRefresh){
        return (<View style={{marginVertical: 10}}>
                <ActivityIndicator />
        </View>);
                   }                   
              return <View style={{marginVertical: 10}} />;;
    }

    fetchData(isFirst, isLoadMore) { 
        let page;
        if(isLoadMore) { // 上拉加载更多
          // 取出页码
          page = this.datalistPageInde;
          // 修改加载状态
          this.setState({ isShowBottomRefresh: true });
        } else { // 下拉刷新
          // 刷新时页码始终是1
          this.datalistPageInde=1
          page = 1;
          // 第一次加载数据时不打开刷新机制
          if(!isFirst) {
            this.setState({
              isRefreshing: true
            });
          }
        }
        
        let url = 'http://192.168.0.100:38571/api/plans/Plans?p=' + page + '&num=10';
        
        fetch(url)
        .then((response)=>{
          if(response.ok){
            return response.json();
          }
        })
        .then((responseJson)=>{
          if(responseJson.sucess) {
            let responseData = responseJson.data;
    
            if(responseData.length != 0) {
              if(isLoadMore) { 
               // 将新数据追加到旧数据中
                if(this.datalist)
                {
                this.datalist = this.datalist.concat(responseData)
              }else{

                this.datalist=responseData
              }
                // 页数+1
                this.datalistPageInde+= 1;
    
                // 默认每十条为一页，不足十条，则说明没有更多数据
                if(responseData.length < 10) {
                  this.setState({
                    isNoMoreData: true
                  });
                }
              } else { // 下拉刷新
            
                  this.datalist = [];
    
                  // 重置页数存储数组
                  this.datalistPageInde= 1;
                  this.datalist=responseData;
                }
    
              // 利用 immutability-helper 更新状态机
              this.setState({datalist:ds.cloneWithRows(this.datalist)});
            } else {
              this.datalist = [];
            }
    
            // 修改加载状态
            if(isLoadMore) {
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
        .catch((error)=>{
          // 修改加载状态
          if(isLoadMore) {
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
   
    PostJtjh(){

        let url = "http://192.168.0.100:38571/api/plans/AddPlan";  
       
        let params ={
            "jtnc":this.state.jtnc,
            "projectType":this.state.xmlx,
            "projectName":this.state.xmName,
            "jds":this.state.jds,
            "zqType":this.state.zqlx,
            "zqStartTime":this.state.zqstart,
            "zqEndTime":this.state.zqend,
            "sfxh":this.state.sfxh
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
                return response.json();
            }
        }).then((json) => {
            console.log(json)
        }).catch((error) => {
            console.error(error);
        });
    
      }
    
   __remderjh(jhlx){
      if(jhlx=="计划任务"){
        return(
          <View>
          <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                          <Text style={{flex:1}}>项目名称</Text>
                        
                        <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入项目名称'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                               this.setState({xmName:v})
                           }}
                          >
                           </TextInput>
                    </View>
                  
                  
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                              <Text style={{flex:1}}>金豆数量</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入金豆数量'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                            this.setState({jds:v})
                        }}>
                           </TextInput>
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                                     <Text style={{flex:1}}>周期类型</Text>
                                     <ModalDropdown options={['每周', '每月']}
                                                    defaultValue={'请选择周期类型'}
                                                    dropdownStyle={{width:150,fontSize:12}}
                                                    dropdownTextStyle={{fontSize:12}}
                                                    textStyle={{fontSize:12,justifyContent:'center'}}
                                                   style={{flex:2,justifyContent:'center',height:40}}
     onSelect={(i,v)=>{
        this.setState({zqlx:v})
     }}
     />
                          
                   </View>
                 
                 
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>      
                            

                                           <Text style={{flex:1}}>周期开始时间</Text>
                                           <DatePicker
         style={{flex:2,marginRight:40}}
        date={this.state.zqstart}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
            this.setState({zqstart: date})}}
      />
                            
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                            

                            
                            <Text style={{flex:1}}>周期结束时间</Text>
                            <DatePicker
        style={{flex:2,marginRight:40}}
        date={this.state.zqend}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
            this.setState({zqend: date})}}
      />
                           
                   </View>
                   
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>  
                                 <Text style={{flex:1}}>是否循环</Text>
                                 <View style={{flex:2,alignItems:'flex-start'}}>
                                 <Switch
                                 value={this.state.sfxh}
                                 onValueChange={(v)=>{
                                        this.setState({sfxh:v})
                                 }}></Switch>
                                 </View>
                   </View>

                     <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                              <Text style={{flex:1}}>预期目的</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入预期目的'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                            this.setState({jds:v})
                        }}>
                           </TextInput>
                   </View>
                   
                   </View>
        )

      }else{
        return(
          <View>
          <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                          <Text style={{flex:1}}>行为描述</Text>
                        
                        <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入行为描述'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                               this.setState({xmName:v})
                           }}
                          >
                           </TextInput>
                   </View>
                  
                  
                   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>   
                        <Text style={{flex:1}}>预期目的</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入预期目的'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                            this.setState({jds:v})
                        }}>
                           </TextInput>
                   </View>
                   
                
                   </View>

        )

      }
     
   }

    _remderItem(t, i) {
        if(t.img){
        return ( <View key = {i} 
        style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center',marginTop:10}} >
        <Image
            source={t.img}
            style={{
            height: 45,
            width: 45
        }}
        resizeMode='contain'>
        </Image> 
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
        
          this.fetchData(true, false); 
          AsyncStorage.getItem('user').then((item)=>{
            return JSON.parse(item)
              }).then((item)=>{ 
             
                   this.setState({jtnc:item.nc}) 
     
                 
              })
    }

    render() { 
 
        if(this.state.type==1){
            return (
               <View
               
               style={{ backgroundColor:'#efefef',height:deviceheight}}
               >
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
                      onPress={()=>{ 

                        this.props.navigator.push({
                          component:Main,
                          })
                      }}>
                        <Image source={require('./imgs/back.png')}  
                        resizeMode='stretch' 
                         style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>家庭计划</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
                  <TouchableOpacity  
                      style={{height:25,width:25,marginRight:10}} 
                      onPress={()=>{ this.setState({type:6})}}>
                        <Image source={require('./imgs/tj.png')}  
                        resizeMode='stretch'
                        style={{height:25,width:25,marginRight:10}} >
                        </Image>
                      </TouchableOpacity> 
                        <TouchableOpacity  
                      style={{height:20,width:20}} 
                      onPress={()=>{ this.setState({type:3})}}>
                        <Image source={require('./imgs/add.png')}  
                        resizeMode='stretch'
                        style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                  <View style={{flexDirection:'row',
                                     height:40,
                                     borderBottomWidth:1,
                                     borderBottomColor:'#F0F0F0',
                                     backgroundColor:'#fff'
                                     
                            }}> 
                                 
                            
                
                
                               
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row',
                                             justifyContent:'center'
                                   }}>
                                     
                                       <TouchableOpacity onPress={()=>{
                                         this.setState({tabxmlx:'计划任务'})
                                       }}>
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a',
                                                 height:40,
                                                 width:150,
                                                 textAlignVertical:'center',
                                                 textAlign:'center',
                                                
                                                 backgroundColor:this.state.tabxmlx=='计划任务'?"#DBA901":"#FFFFFF"}}>计划任务</Text> 
                                      
                                       </TouchableOpacity>
                                  
                                       
                                   </View>
                                  
                                   <View style={{
                                             flex:1,
                                             flexDirection:'row'
                                   }}>
                                     
                                     <TouchableOpacity onPress={()=>{
                                         this.setState({tabxmlx:'日常行为'})
                                       }}>
                                       <Text style={{fontFamily:'SimSun',
                                                fontSize:12,
                                                height:40,
                                                width:150,
                                                textAlignVertical:'center',
                                                textAlign:'center',
                                                backgroundColor:this.state.tabxmlx=='日常行为'?"#DBA901":"#FFFFFF",
                                                 fontStyle:'normal',
                                                 color:'#8a8a8a'}}>日常行为</Text>
                                       </TouchableOpacity>
                                    
                    
                                   </View>
                                
                                   <View style={{
                                             flex:2,
                                             flexDirection:'row'
                                   }}>
                                  
                    
                                   </View>
                           
                                   
                               
                
                               </View> 
         
                  <ListView  style={{backgroundColor:'#efefef',height:deviceheight-40}}
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
                                     <TouchableOpacity  
                                           onPress={()=>{this.setState({type:2})}}>
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:rowData.xz?'#FB9401':'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                        marginLeft:10}}>
                                                          <Text style={{color:'#474747'}}>{rowData.projectName}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{color:'#474747'}}>金豆:{rowData.jds}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>

                                                          <Image source={require('./imgs/delete.png')} resizeMode='stretch' style={{height:20,width:20}}></Image>
                                                      </View>
                                                    
                                            
                                         </View>
                                        </TouchableOpacity>
                                         }
                                   />
                    
               
           </View>
            )
        }
        else if(this.state.type==2)
        {
              return(
                <View>
                  
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
                        <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>计划详情</Text>
                    </View> 
                    <View style={{marginRight:5,width:22}}> 
                  
                    </View> 
                </View>
                 


                <View backgroundColor='#F2F2F2' 
                style={{height:deviceheight-60}}>

                   <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'类型',typecontent:'系统预设'})}}>
              
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
                             类型:</Text>  
                             <View 
                        style={{flexDirection:'row',alignItems:'center'}}>
                               <Text style={{fontSize:13,
                          color:'#585858',
                          fontFamily:'Microsoft YaHei'}}>
                             系统预设</Text>  
                        <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                        </View>
                      </View>
                      </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'项目名称',typecontent:'8'})}}>
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
                            项目名称</Text>
                            <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                           <Text style={{
                               fontSize:13,
                               color:'#585858',
                               fontFamily:'Microsoft YaHei'}}>
                             系统预设</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>
                           
                  </View> 
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'金豆数量',typecontent:'8'})}}>
              
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
                                 金豆数量:</Text>  
                                 <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                                   <Text style={{fontSize:13,
                              color:'#585858',
                              fontFamily:'Microsoft YaHei'}}>
                                8</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>
                          </View>
                          </TouchableOpacity>
                        

                      <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期',typecontent:'5天'})}}>
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
                           周期</Text> 
                           <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                                   <Text style={{fontSize:13,
                              color:'#585858',
                              fontFamily:'Microsoft YaHei'}}>
                                5天</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>
                        </View>
                        </TouchableOpacity>


    <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期开始时间',typecontent:'2018-09-01'})}}>
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
                               周期开始时间</Text> 
                          <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                                   <Text style={{fontSize:13,
                              color:'#585858',
                              fontFamily:'Microsoft YaHei'}}>
                                 2018-09-01</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>                    
                        </View>
                        </TouchableOpacity>
                


                      <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'周期结束时间',typecontent:'2019-08-01'})}}>
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
                   周期结束时间</Text> 
                   <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                                   <Text style={{fontSize:13,
                              color:'#585858',
                              fontFamily:'Microsoft YaHei'}}>
                                 2019-08-01</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>               
                        </View> 
                        </TouchableOpacity>



                      <TouchableOpacity onPress={()=>{this.setState({type:4,typetitle:'是否循环',typecontent:'是'})}}>
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
                             是否循环</Text> 
                           <View 
                            style={{flexDirection:'row',alignItems:'center'}}>
                                   <Text style={{fontSize:13,
                              color:'#585858',
                              fontFamily:'Microsoft YaHei'}}>
                                是</Text>  
                            <Image source={require('./imgs/go.png')}  style={{width:10,height:10,marginLeft:5}} resizeMode='stretch'></Image>
                            </View>                                             
                        </View>
                        </TouchableOpacity>
                   
                 </View>
            </View>
              )
            }else if(this.state.type==4){
                return(
                    <View>
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
                               onPress={()=>{this.setState({type:2})}}>
                                 <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                                 </Image>
                               </TouchableOpacity> 
                               </View> 
                               <View style={{justifyContent:'center',alignItems:'center'}}>
                                   <Text style={{fontSize:16,color:'#FFF',fontWeight:'bold'}}>{this.state.typetitle}编辑</Text>
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
            }else if(this.state.type==6){
                return (
                    <View>
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
                     <TouchableOpacity onPress={()=>{}}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                                  </View>
                             
                            
                               <View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>
                               <ScrollView >
                               <ListView
                                  dataSource={this.state.datalist}
                                   renderRow={(rowData) => 
                                     <TouchableOpacity  
                                           onPress={()=>{this.setState({type:2})}}>
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
                                                          <Text style={{   color:'#474747'}}>{rowData.projectName}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>平台推荐</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>应用次数 39</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>

                                                         <Checkbox styles={{height:20,width:20}}  ></Checkbox>
                                                      </View>
                                                    
                                            
                                         </View>
                                        </TouchableOpacity>
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
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.PostJtjh.bind(this)}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
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

                                <Text style={{flex:1}}>项目类型</Text>
                        
                                <ModalDropdown options={['计划任务', 
                         '日常行为']}
    defaultValue={'计划任务'}
     dropdownStyle={{width:150,fontSize:12}}
     dropdownTextStyle={{fontSize:12}}
     textStyle={{fontSize:12,justifyContent:'center'}}
     style={{flex:2,justifyContent:'center',height:40}}
     onSelect={(i,v)=>{this.setState({xmlx:v})}}
     />
                           
                   </View>
                 
                {this.__remderjh(this.state.xmlx)}
        
                </View>
                  )
      }
   }
}