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

componentWillMount(){

      AsyncStorage.getItem('user').then((item)=>{
          return JSON.parse(item)
            }).then((item)=>{  
                this.setState({jtnc:decodeURI(item.nc),xgzh:decodeURI(item.userName)})
                this. _showDeatil.bind(this)()
            }) 

          
  }

 render() { 
 
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
                          return item.id=="Main2"
                        })
                         this.props.navigator.popToRoute(destRoute);
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
                            color:'#FFF',fontWeight:'bold'}}>昨日行为</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
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
                                        
                                            <Image source={decodeURI(rowData.ydType)=="优"?require('../gcy/shyImage/you.png'):decodeURI(rowData.ydType)=="良"?require('../shy/shyImage/lian.png'):require('../shy/shyImage/chai.png')} resizeMode='stretch' style={{height:20,width:20,marginLeft:10,marginRight:10}}></Image>
                                 
                                            </View>
                                       
                                  
                               </View>
                                
                                         }
                                   />
                    
                 
           </View>
            )
       
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
     
    },
  });