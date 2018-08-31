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
    AsyncStorage,
    RefreshControl
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
            dataSource: ds.cloneWithRows([
               
              ]), 
              datalist:  ds.cloneWithRows([
       
              ]),
              isShowBottomRefresh: false,
              isRefreshing: false,
              isNoMoreData: false,
              isShowBottomRefresh:false,
              isFirstload:true,
              selectIds:"",
              type:1
        }
    }
    

    _save(){
      
      let url = "http://192.168.0.100:38571/api/plans/AddXgPlan?ids="+this.state.selectIds;  
     
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
          if (response.ok) {
              return response.json();
          }
      }).then((json) => {
          console.log(json)
          this.setState({type:1})
      }).catch((error) => {
          console.error(error);
      });

    }
   
  
    componentWillMount(){
        
        AsyncStorage.getItem('user').then((item)=>{
       return JSON.parse(item)
         }).then((item)=>{ 
        
              this.setState({jtnc:item.nc}) 

              fetch('http://192.168.0.100:38571/api/plans/Plans?jtnc='+item.nc)
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

              fetch('http://192.168.0.100:38571/api/plans/xgPlans?jtnc='+item.nc)
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
                        this.props.navigator.push({
                          component:Main,
                          })
                          }
                          }>
                        <Image source={require('./imgs/back.png')}  
                        resizeMode='stretch' 
                         style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>明日计划</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
            
                        <TouchableOpacity  
                      style={{height:20,width:20}} 
                      onPress={()=>{ this.setState({type:6})}}>
                        <Image source={require('./imgs/add.png')}  
                        resizeMode='stretch'
                        style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                  </View>
                 
                  <ScrollView style={{backgroundColor:'#efefef'}}>
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
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                       <Text style={{   color:'#474747'}}>金豆:{rowData.jds}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                           <Image source={require('../shy/shyImage/delete.png')} resizeMode='stretch' style={{height:20,width:20}}></Image>
                                                      </View>
                                                    
                                            
                                         </View>
                              
                                         }
                                   />
                    
                            </ScrollView>
           </View>
            )
        }
        else {
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
                                            color:'#FFF',fontWeight:'bold'}}>计划库</Text>
                                      </View> 
                                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this._save.bind(this)}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                                  </View>
                        
                               <View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>
                               <ScrollView >
                               <ListView
                                  dataSource={this.state.datalist}
                                 
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
                                                       <Text style={{   color:'#474747'}}>{rowData.projectName}</Text>
                                                   </View>
                                                   <View style={{flex:2,
                                                     justifyContent:'center',
                                                     alignItems:'center'
                                                 }}>
                                                       <Text style={{   color:'#474747'}}>金豆:{rowData.jds}</Text>
                                                   </View>
                                                   <View style={{flex:1,
                                                     justifyContent:'center',
                                                     alignItems:'center'}}>

                                                       <Image source={require('../shy/shyImage/delete.png')} resizeMode='stretch' style={{height:20,width:20}}></Image>
                                                   </View>
                                                   <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>

                                                         <Checkbox styles={{height:20,width:20}}  selected={(isselected)=>{ 
                                                           if(!isselected){
                                                                this.setState({selectIds:this.state.selectIds+","+rowData.id})
                                                              }else{
                                                                this.setState({selectIds:this.state.selectIds.replace(","+rowData.id,"")})
                                                              }
                                                         }} ></Checkbox>
                                                      </View>
                                         
                                      </View>
                                         }
                                   />
                                              
                               </ScrollView>
               </View>
                            </View>
                            )
            }
         
   }
}