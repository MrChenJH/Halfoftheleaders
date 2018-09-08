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

import Main from '../Main2'  
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
             dataSource: ds.cloneWithRows([
                {title:'不要一直不理我',content:'家风豆:500',xz:true},
                {title:'在家不能抽烟',content:'家风豆:500',xz:false}
              ]),
              dataCySource: [],
              jtnc:'',
              txtContent:'',
              type:'我有话说',
              sysRole:'',
              userRole:''
          }
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
 
      <TouchableOpacity onPress={()=>{
          this.setState({userRole:item.userRole})
      }}>
       <Image
           source={ role=="爸爸"? require('../cygl/imgs/tx/bb.png'):(role=="妈妈"?require('../cygl/imgs/tx/mm.png'):role=="叔叔"?require('../cygl/imgs/tx/uncle.png'):role=="爷爷"?require('../cygl/imgs/tx/yeye.png'):require('../cygl/imgs/tx/nainai.png'))}
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
           }} >{  
               decodeURI(item.userRole)}</Text>
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
             
                   this.setState({jtnc:item.nc}) 
     
                   fetch(app.Host+'api/family/Members?jtnc='+item.nc)
                   .then((response) =>{
                     if(response.ok){
                       return response.json();
                     }
                   })
                   .then((responseJson) => { 
                     let data=JSON.parse(responseJson).data;
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
                        return item.id=="Main2"
                      })
                    
                      this.props.navigator.popToRoute(destRoute);
                }}>
                  <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                  </Image>
                </TouchableOpacity> 
          </View> 
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text 
                    style={{fontSize:16,
                      color:'#FFF',fontWeight:'bold'}}>我有话说</Text>
                </View> 
                <View style={{width:100,marginRight:5}}> 
             
                </View> 
            </View>
       
         

         <View
                                style={{
                                  height:30,
            
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>我的家人</Text>
                            </View>
                      
                            <View
                                style={{
                                flex: 1,
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
 
    
         <ScrollView style={{backgroundColor:'#efefef',height:deviceheight}}>
         <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:30,
             marginBottom:5,
             marginTop:5,
             alignItems:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
             <Text style={{fontSize:13,fontWeight:'bold'}}>我想对{decodeURI(this.state.userRole)}说:</Text> 
             <TouchableOpacity onPress={this.Save.bind(this)}>
             <Text style={{fontSize:13,fontWeight:'bold'}}>发送</Text>
             </TouchableOpacity>
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
                                                          <Text style={{   fontSize:12,color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{  fontSize:12, color:'#474747'}}>{rowData.content}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                         <CheckBox   styles={{height:20,width:20}}
                                                         selected={(isS)=>{
                                                                if(!isS){
                                                                  this.setState({txtContent:rowData.title})
                                                                }                             
                                                         }}
                                                         ></CheckBox>
   
                                                      </View>
                                                    
                                            
                                         </View>
                        
                                         }
                                   />
                   </ScrollView>
  
      </View>
            )
         
          
            
    }
}

