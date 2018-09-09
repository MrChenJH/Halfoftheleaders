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
    Dimensions,
    AsyncStorage
} from 'react-native';  


import app from '../../app.json'
import DropdownAlert from 'react-native-dropdownalert';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
import CheckBox from '../component/xwCheckBox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
                dataCySource: [], 
                dataList: ds.cloneWithRows([
                
                  ]),
            
              jtnc:'',
              txtContent:'',
               sysRole:'',
              userRole:'',
              xgzh:'',
              zjds:0,
              yhjds:0,
              whjds:0
          }
    }
    

     _showXgJH(xgzh){
        fetch(app.Host+'api/plans/tj?xgzh='+xgzh)
        .then((response) =>{
          if(response.ok){
            return response.json();
          }
        })
        .then((responseJson) => { 
          let data=responseJson.data;
   
          let data1=responseJson.data1;
          this.setState({dataList:ds.cloneWithRows(data),zjds:data1[0].zs,whjds:data1[0].w,yhjds:data1[0].y})
  
        })
        .catch((error) => {
          console.error(error); 
        });

     }
     Save(){
        
        if(!this.state.userRole){
            this.dropdown.alertWithType('error', 'Error', '请选择家人' )
            return
        }
        

        if(!this.state.txtContent){
            this.dropdown.alertWithType('error', 'Error', '请选择要说的话' )
            return
        }

        let url =app.Host+ "api/message/AddMessageS";  
        let params ={
            "jtnc":this.state.jtnc,
            "txtContent":this.state.txtContent,
            "type":this.state.type,
            "sysRole":this.state.sysRole,
            "userRole":decodeURI(this.state.userRole)
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
            this.dropdown.alertWithType('success', '发送成功', '发送成功' )
       
        }).catch((error) => {
            console.error(error);
        });
      
      }
  
  
  
    _rednerCy1(){
        return (this.state.dataCySource.map((t, i) =>this._rednerCy(t, i)))
  }


  _rednerCy(item,i){ 
      let role=decodeURI(item.userRole)
    return ( 
    
       <View  key = {i} 
       style={{width:80,alignItems:'center'}}> 
 
      <TouchableOpacity onPress={()=>{this._showXgJH.bind(this)(decodeURI(item.userName))}}>
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


    itemAction(item) {
        switch (item.type) {
          case 'close':
            this.closeAction();
            break;
          default:
            const random = Math.floor(Math.random() * 1000 + 1);
            const title = item.type + ' #' + random;
            this.dropdown.alertWithType(item.type, title, item.message);
        }
      }
      closeAction() {
        this.dropdown.close();
      }
      handleClose(data) {
        console.log(data);
      }
      handleCancel(data) {
        console.log(data);
      }


      componentWillMount(){

        AsyncStorage.getItem('user').then((item)=>{
            return JSON.parse(item)
              }).then((item)=>{ 
             
                   this.setState({jtnc:decodeURI(item.nc)}) 
                 fetch(app.Host+'api/plans/xgSearch?jtnc='+this.state.jtnc)
                   .then((response) =>{
                     if(response.ok){
                       return response.json();
                     }
                   })
                   .then((responseJson) => { 
                     let data=responseJson.data;
                     this.setState({dataCySource:data})
                    })
                   .catch((error) => {
                     console.error(error); 
                   });
              })
    }


    render(){ 
        const {back}=this.props
    
    return (
        <View >
      <DropdownAlert
          ref={ref => this.dropdown = ref}
          containerStyle={{height:100}}
          showCancel={true}
          closeInterval={3000}
          zIndex={1000000}
        />

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
                }}>
                  <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                  </Image>
                </TouchableOpacity> 
          </View> 
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text 
                    style={{fontSize:16,
                      color:'#FFF',fontWeight:'bold'}}>今日计划</Text>
                </View> 
                <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
            
                    
                      </View> 
            </View>
            <View
                                style={{
                                 height:100,
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
                             <View
                                style={{
                                 height:40,
                                justifyContent: 'flex-start',
                                alignContent:'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 5,
                                marginBottom: 5,
                                flexWrap:'wrap'
                            }}>
                             <Text  style={{flex:1}}>计划总金豆数{this.state.zjds}</Text> 
                             <Text   style={{flex:1}}>已经获得金豆数{this.state.yhjds}</Text>
                             <Text  style={{flex:1}}>未获得金豆数{this.state.whjds}</Text>
                             </View>
 
          
      
     
                  <ListView     style={{height:deviceWidth,
                                       width:deviceheight-80}
                                       }
                  
                                  dataSource={this.state.dataList}
                                   renderRow={(rowData) => 
                           
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   fontSize:12,color:'#474747'}}>{decodeURI(rowData.realName)+"   "+decodeURI(rowData.projectName)}</Text>
                                                      </View>

                                                         <View style={{flex:1,
                                                        justifyContent:'flex-start',
                                                        alignItems:'center',
                                                        flexDirection:'row'
                                                        }}>
                                                         <Text style={{  fontSize:12, color:'#474747',marginRight:20}}>金豆数{decodeURI(rowData.jds)}</Text>
                                                 
   
                                                      </View>
                                            </View>
                        
                                         }
                                   />
           
  
      </View>
            )
         
          
            
    }
}

