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
import app from '../../app.json';
import ModalDropdown from 'react-native-modal-dropdown'


const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class xwpj extends Component {
    constructor(props) {
        super(props);
     this.state = {
            dataSource:ds.cloneWithRows([]),
            dataCySource:[],
            userName:"",
            type:1,
            jtnc:"",
            xgzh:"",
            xwMc:"",
            ydTpe:"",
            xwSocre:0,
            realName:''
           
        }
    }
    

 


  _rednerCy1()
  {
      return (this.state.dataCySource.map((t, i) =>this._rednerCy(t, i)))
}


_rednerCy(item,i){ 
    let role=decodeURI(item.userRole)
  return ( 
  
     <View  key = {i} 
     style={{width:80,alignItems:'center'}}> 

    <TouchableOpacity onPress={()=>{
     this.setState({xgzh:decodeURI(item.userName),realName:decodeURI(item.realName)})
    this._showDeatil()
    }}>
     <Image
         source={role=="儿子"?require('../cygl/imgs/tx/boy.png'):require('../cygl/imgs/tx/girl.png')}
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
         }} >{ decodeURI(item.realName)}</Text>
     </TouchableOpacity>
 </View>
  )
}


_showDeatil(){
  fetch(app.Host+'api/behavior/behaviorS?jtnc='+this.state.jtnc+"&gcy="+this.state.userName+"&xg="+this.state.xgzh)
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


_remove(id){
  fetch(app.Host+'api/behavior/Deletebehavior?id='+id)
  .then((response) =>{
    if(response.ok){
      this._showDeatil.bind(this)()
    }
  }).catch((error) => {
    console.error(error); 
  });
}




_save(){

let url = app.Host+"api/behavior/addBehavior";  
let params ={
    "jtnc":this.state.jtnc,
    "xgzh":this.state.xgzh,
    "xwMc":this.state.xwMc,
    "ydType":this.state.ydType,
    "yd":this.state.xwSocre,
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
      this.setState({type:1})
      this._showDeatil.bind(this)()
      
    }
}).catch((error) => {
    console.error(error);
});
}

 componentWillMount(){

      AsyncStorage.getItem('user').then((item)=>{
          return JSON.parse(item)
            }).then((item)=>{ 
              
              fetch(app.Host+'api/plans/xgSearch?jtnc='+decodeURI(item.nc))
                 .then((response) =>{
                   if(response.ok){
                     return response.json();
                   }
                 })
                 .then((responseJson) => { 
                   let data=responseJson.data;
                   this.setState({dataCySource:data,jtnc:decodeURI(item.nc),userName:decodeURI(item.userName)})
                   this. _showDeatil.bind(this)()
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
                        let  destRoute=this.props.navigator.getCurrentRoutes().find((item)=>{
                          return item.id=="Main3"
                        })
                         this.props.navigator.popToRoute(destRoute);
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
                 
                  <View
                                style={{
                                 height:100,
                                justifyContent: 'flex-start',
                                alignContent:'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                                marginTop: 10,
                                flexWrap:'wrap'
                            }}>
                             {this._rednerCy1()}
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
                                            height:50}}>
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
                                            <View style={{flex:1,
                                              justifyContent:'center',
                                              alignItems:'center'
                                          }}>
                                        
                                            <Image source={decodeURI(rowData.ydType)=="优"?require('./shyImage/you.png'):decodeURI(rowData.ydType)=="良"?require('../shy/shyImage/lian.png'):require('../shy/shyImage/chai.png')} resizeMode='stretch' style={{height:20,width:20,marginLeft:10,marginRight:10}}></Image>
                                 
                                            </View>
                                            <View style={{flex:1,
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
                            color:'#FFF',fontWeight:'bold'}}>{this.state.realName}行为添加</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this._save.bind(this)}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                  </View>

                           <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:40,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>      
                            

                    <Text style={{flex:1}}>评价</Text>
                    <ModalDropdown options={["优","良","差"]}
                                  onSelect={(i,v)=>{
                                       if(v=="优")
                                        this.setState({ydType:v,xwSocre:100})
                                        else if(v=="良")
                                        this.setState({ydType:v,xwSocre:80})
                                        else if(v=="差")
                                        this.setState({ydType:v,xwSocre:60})
                                   }}
                                   defaultValue={'请选择'}
                                   dropdownStyle={{width:150,fontSize:12}}
                                   dropdownTextStyle={{fontSize:12}}
                                   textStyle={{fontSize:12,justifyContent:'center'}}
                                   style={{flex:2,justifyContent:'center',height:40}}/>
                  
                   </View>
                          <View style={{height:100,
                              borderBottomWidth:1,
                              borderBottomColor:'#F0F0F0',
                        alignContent:'flex-start',
                        justifyContent:'flex-start',
                        marginLeft:20}}>
               <TextInput 
                multiline={true}
                numberOfLines={5}  
                style={{width:deviceWidth*0.98,height:100,textAlignVertical:'top',textAlign:'left'}}  
                underlineColorAndroid='transparent'
                placeholder={"请填写不少于10个字描述"}
                onChangeText={(v)=>{
                      this.setState({xwMc:v})
                }}
                ></TextInput>
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