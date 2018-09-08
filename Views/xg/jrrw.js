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
    TextInput,
    Dimensions
} from 'react-native';  
import Main from '../Main2'  
import app from '../../app.json';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
import CheckBox from '../component/xwCheckBox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});





export default class jrrw extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource: ds.cloneWithRows([
                {title:'数学作业',content:'金豆:500',xz:true},
                {title:'数学作业',content:'金豆:500',xz:false}
              ]),
              dataSource1: ds.cloneWithRows([
                {title:'按时睡觉',content:'银豆:500',xz:true},
                {title:'按时睡觉',content:'银豆:500',xz:false}
              ]),
              type:1,
              typetitle:'',
              typecontent:'',
              jtnc:"",
              xgzh:"",
              realname:""
        }
    }

    componentWillMount(){
        
        AsyncStorage.getItem('user').then((item)=>{
                  return JSON.parse(item)
         }).then((item)=>{ 
             this.setState({jtnc:item.nc,xgzh:decodeURI(item.userName),realname:decodeURI(item.realName)}) 
              fetch(app.Host+'api/plans/xgPlans?jtnc='+this.state.jtnc)
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

    render(){ 
        const {back}=this.props
     
        
    return (
        <View style={{
            backgroundColor: '#F7F7F7'
        }}>
           <View style={{
                       height :200
                    }}>
                             <ImageBackground
                               
                         resizeMode='stretch'
                            source={ require('../shy/shyImage/banner.png')
                        }
                          
                            style={{
                             height:200,
                             width:deviceWidth
                        }}>
          
             
             <TouchableOpacity
                   style={{height:40,
                    marginLeft:10,
                    width:40,
                     alignItems:'flex-start',
                     justifyContent:'center'}} 
             onPress={()=>{
                let  destRoute=this.props.navigator.getCurrentRoutes().find((item)=>{
                    return item.id=="Main2"
                  })
                
                  this.props.navigator.popToRoute(destRoute);
               }}>
                  <Image source={require('../shy/shyImage/close.png')}
              
                   style={{height:20,
                           width:20}} 
                           resizeMode='stretch' ></Image>
                           </TouchableOpacity>
             

                              
                        </ImageBackground>
                
                    </View>
                     <ScrollView 
                     style={{backgroundColor:'#efefef',height:deviceheight}}>
                     <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:40,
             margin:5,
             alignItems:'center',
             justifyContent:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
        
         <View 
         style={{flexDirection:'row'}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>今日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                borderBottomColor:'#FFBF00',
                borderBottomWidth:2,
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>计划</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>任务</Text>
         </View>
       
      
        </View>


                     <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:40,
             margin:5,
             alignItems:'center',
             justifyContent:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
        
         <View 
         style={{flexDirection:'row'}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>今日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                borderBottomColor:'#FFBF00',
                borderBottomWidth:2,
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>计划</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:40,
                textAlign:'center',
                textAlignVertical:'center'}}>任务</Text>
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
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{decodeURI(rowData.projectName)}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                       <Text style={{   color:'#474747'}}>金豆:{rowData.jds}</Text>
                                                      </View>
                              
                                                    
                                            
                                         </View>
                              
                                         }
                                   />
                    
                            </ScrollView>
               
     </View>
            )
          
            
          
            
    }
}

