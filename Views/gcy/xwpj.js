import React, {Component} from 'react';
import {
    StyleSheet,
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
  
    AsyncStorage
} from 'react-native';
import Main from '../Main2'  
import Checkbox from '../component/xwCheckBox'

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
            dataSource: ds.cloneWithRows([  ]),
            xgzhs:[],
            userName:"",
            type:1,
            jtnc:"",
            xgzh:"",
            xwMc:"",
            yd:""
           
        }
    }

    _remove(id){
        fetch('http://117.50.46.40:8003/api/behavior/Deletebehavior?id='+id)
        .then((response) =>{
          if(response.ok){
            fetch('http://117.50.46.40:8003/api/behavior/behaviorS?jtnc='+this.state.jtnc+"&loginName="+this.state.userName)
            .then((response) =>{
              if(response.ok){
                return response.json();
              }
            })
            .then((responseJson) => { 
              let data=responseJson.data;
              this.setState({dataSource:ds.cloneWithRows(data)})
            })
            .catch((error) => {
              console.error(error); 
            });
          }
        }).catch((error) => {
          console.error(error); 
        });
    }



    Save(){
      
      let url = "http://117.50.46.40:8003/api/behavior/addBehavior";  
      let params ={
          "jtnc":this.state.jtnc,
          "xgzh":this.state.xgzh,
          "xwMc":this.state.xwMc,
          "yd":this.state.yd,
          "creator":this.state.userName,
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
            fetch('http://117.50.46.40:8003/api/behavior/behaviorS?jtnc='+this.state.jtnc+"&loginName="+this.state.userName)
            .then((response) =>{
              if(response.ok){
                return response.json();
              }
            })
            .then((responseJson) => { 
              let data=responseJson.data;
              this.setState({dataSource:ds.cloneWithRows(data),type:1})
            })
            .catch((error) => {
              console.error(error); 
            });
          }
      }).catch((error) => {
          console.error(error);
      });
    
    }

    componentWillMount() {

        AsyncStorage.getItem('user').then((item)=>{
           return JSON.parse(item)
             }).then((item)=>{ 
                  this.setState({jtnc:decodeURI(item.nc),userName:decodeURI(item.userName)}) 
                  fetch('http://117.50.46.40:8003/api/behavior/behaviorS?jtnc='+item.nc+"&loginName="+decodeURI(item.userName))
                  .then((response) =>{
                    if(response.ok){
                      return response.json();
                    }
                  })
                  .then((responseJson) => { 
                    let data=responseJson.data;
                    this.setState({dataSource:ds.cloneWithRows(data)})
                  })
                  .catch((error) => {
                    console.error(error); 
                  });


                  fetch('http://117.50.46.40:8003/api/behavior/xgs?jtnc='+item.nc)
                  .then((response) =>{
                    if(response.ok){
                      return response.json();
                    }
                  })
                  .then((responseJson) => { 
                    let data=responseJson.data;
                    data.forEach(element => {
                        this.state.xgzhs.push(decodeURI(element.userName))
                    });
                    
                    this.setState({xgzhs: this.state.xgzhs})
                  })
                  .catch((error) => {
                    console.error(error); 
                  });
             })
      }


    
    
  
    render() { 
        const {back}=this.props
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
                        if(this.props.tc){
                          this.props.navigator.push({
                              component:Main,
                              })
                        }else{
                          this.props.navigator.jumpBack()
                        }
                        }
                          }>
                        <Image source={require('./shyImage/back.png')}  
                        resizeMode='stretch' 
                         style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>行为评价</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
            
                        <TouchableOpacity  
                      style={{height:20,width:20}} 
                      onPress={()=>{ this.setState({type:7})}}>
                        <Image source={require('./shyImage/add.png')}  
                        resizeMode='stretch'
                        style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                 
                
                
                 <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                      
                                    <View 
                                    style={{flexDirection:'row',
                                            borderTopColor:'#F0F0F0',
                                            backgroundColor:'#fff',
                                            borderTopWidth:1,
                                            margin:5,
                                            borderRadius:10,
                                            height:30}}>
                                            <View style={{flex:1,
                                              justifyContent:'center',
                                              alignItems:'flex-start',
                                           
                                              marginLeft:10}}>
                                                <Text style={{   fontSize:12,color:'#474747'}}>{decodeURI(rowData.realName)}</Text>
                                            </View>
                                            <View style={{flex:4,
                                              justifyContent:'center',
                                              alignItems:'flex-start',
                                           
                                              marginLeft:10}}>
                                                <Text style={{   fontSize:12,color:'#474747'}}>{decodeURI(rowData.xwMc)}</Text>
                                            </View>
                                            <View style={{flex:2,
                                              justifyContent:'center',
                                              alignItems:'center'
                                          }}>
                                                <Text style={{  fontSize:12, color:'#474747'}}>银豆 {rowData.yd}</Text>
                                            </View>
                                            <View style={{flex:2,
                                              justifyContent:'center',
                                              alignItems:'center'
                                          }}>
                                          <TouchableOpacity
                                          onPress={this._remove.bind(this,rowData.id)}
                                          >
                                            <Image source={require('../shy/shyImage/delete.png')} resizeMode='stretch' style={{height:20,width:20,marginLeft:10,marginRight:10}}></Image>
                                            </TouchableOpacity>
                                            </View>
                                  
                               </View>
                                
                                         }
                                   />
                    
                 
           </View>
            )
        }
            else{

              
                return(<View 
                style={{height:deviceheight}}>
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
                 onPress={()=>{
                     this.setState({type:1})
                 }}
                     >
                        <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>行为添加</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.Save.bind(this)}>
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
                            
                   <Text style={{flex:1}}>小鬼账号</Text>
                   <ModalDropdown options={this.state.xgzhs}
                                   
                                        onSelect={(i,v)=>{
                                             this.setState({xgzh:v})
                                        }}
                                        dropdownStyle={{width:150,fontSize:12}}
                                        dropdownTextStyle={{fontSize:12}}
                                        textStyle={{fontSize:12,justifyContent:'center'}}
                                        style={{flex:2,justifyContent:'center',height:40}}/>
                           
                          
                        
                            
                   </View>

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

                              this.setState({xwMc:v})
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
                            

                    <Text style={{flex:1}}>奖罚银豆数</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入奖罚银豆数'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                              this.setState({yd:v})
                          }}>
                           
                          
                           </TextInput>
                            
                   </View>
                  </View>
                  )
      }
   }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialogContentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navigationBar: {
      borderBottomColor: '#b5b5b5',
      borderBottomWidth: 0.5,
      backgroundColor: '#ffffff',
    },
    navigationTitle: {
      padding: 10,
    },
    navigationButton: {
      padding: 10,
    },
    navigationLeftButton: {
      paddingLeft: 20,
      paddingRight: 40,
    },
    navigator: {
      flex: 1,
      // backgroundColor: '#000000',
    },
  });