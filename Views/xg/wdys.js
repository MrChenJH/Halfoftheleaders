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

import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation
  } from 'react-native-popup-dialog';
  
  const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
  const scaleAnimation = new ScaleAnimation();
  const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

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
              yslx:[],
              xmjelb:[],
              zjye:0,
              type:1,
              dialogShow: false,
              ysType:'',
              syMd:'',
              zhSy:0,
              zzysid:0,
              SponsorJe:0,
        }
    }

    //发起赞助
    sendZz(){
      
      let url = "http://192.168.0.100:38571/api/sponsor/addSponsor";  
      let params ={
          "ysId":this.state.zzysid,
          "jtnc":this.state.jtnc,
          "SponsorJe":this.state.SponsorJe,
          "isSponsor":0
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
       
          this.scaleAnimationDialog.dismiss();
      }).catch((error) => {
          console.error(error);
      });
    
    }

      //添加成员
      AddYs(){
    let url = "http://192.168.0.100:38571/api/ys/addYs";  
    let params ={
        "ysType":this.state.ysType,
        "Jtnc":this.state.jtnc,
        "syMd":this.state.syMd,
        "zhSy":this.state.zhSy
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
        this.setState({type:1})
    }).catch((error) => {
        console.error(error);
    });
 
  }


    showFadeAnimationDialog = () => {
        this.fadeAnimationDialog.show();
      }
    
    componentWillMount(){
       AsyncStorage.getItem('user').then((item)=>{
        return JSON.parse(item)
          }).then((item)=>{ 
               this.setState({jtnc:item.nc}) 
               fetch('http://192.168.0.100:38571/api/FundSetting/gFundSetting?jtnc='+item.nc+'&userName='+item.userName)
               .then((response) =>{
                 if(response.ok){
                   return response.json();
                 }
               })
               .then((responseJson) => { 
                 let data=responseJson.data; 
                 data.forEach(element => {
                  this.state.yslx.push(decodeURI(element.ProjectName))
                  this.state.xmjelb.push({key:element.ProjectName,value:element.je})
                 });
            
                 this.setState({yslx:   this.state.yslx})
                 this.setState({xmjelb:   this.state.xmjelb})
               })
               .catch((error) => {
                 console.error(error); 
               }); 



               fetch('http://192.168.0.100:38571/api/ys/YsS?jtnc='+item.nc+'&xgzh='+item.userName)
               .then((response) =>{
                 if(response.ok){
                   return response.json();
                 }
               })
               .then((responseJson) => { 
                 let data=responseJson.data; 
              
                this.setState({
                  dataSource: ds.cloneWithRows(data),
                })
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
                        <Image source={require('./imgs/back.png')}  
                        resizeMode='stretch' 
                         style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>我的预算</Text>
                      </View> 
                      <View style={{marginRight:5,
                    flexDirection:'row'}}> 
                  
            
                        <TouchableOpacity  
                      style={{height:20,width:20}} 
                      onPress={()=>{ this.setState({type:7})}}>
                        <Image source={require('./imgs/add.png')}  
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
                                                      backgroundColor:rowData.xz?'#FB9401':'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   color:'#474747'}}>{rowData.syMd}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{   color:'#474747'}}>{rowData.ysType}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{ color:'#474747'}}>{rowData.zhSy}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                    
                                                        flexDirection:'row',
                                                        alignItems:'center',
                                                      marginRight:10,
                                                      justifyContent:'flex-end'}}>
                                                           <Checkbox styles={{width:20,height:20}}
                                                           selected={(isChecked)=>{ 
                                                             if(!isChecked)
                                                             {       
                                                                        if(rowData.zhSy>rowData.je){ 
                                                                          this.setState({SponsorJe:(rowData.zhSy-rowData.je),zzysid:rowData.id})
                                                                          this.scaleAnimationDialog.show(); 
                                                                        }
                                                                   }
                                                           }}
                                                           ></Checkbox>
                                                          <Image source={require('../shy/shyImage/delete.png')} resizeMode='stretch' style={{height:20,width:20,marginLeft:10,marginRight:10}}></Image>
                                                      </View>
                                            </View>
                                
                                         }
                                   />
                    
                    <PopupDialog
          ref={(popupDialog) => {
            this.scaleAnimationDialog = popupDialog;
          }}
          dialogAnimation={scaleAnimation}
          dialogTitle={<DialogTitle title="提示" />}
          actions={[
            <DialogButton
              text="忽略"
              onPress={() => {
                this.scaleAnimationDialog.dismiss();
              }}
              key="button-1"
            />,
          ]}
        >
          <View style={styles.dialogContentView}> 
          <View>
         <Text>你的学习基金余额不足，是否请求赞助？</Text>

          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <DialogButton
              text="是"
              onPress={this.sendZz.bind(this)}
            />
                <DialogButton
              text="否"
              onPress={() => {
                this.scaleAnimationDialog.dismiss();
              }}
            /></View>
          </View>
        </PopupDialog>
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
                      onPress={()=>{this.setState({type:1})}}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                      </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>预算添加</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.AddYs.bind(this)}>
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

                                <Text style={{flex:1}}>预算类型</Text>
                        
                                <ModalDropdown options={this.state.yslx}
                                        defaultValue={'请选择预算类型'}
                                        onSelect={(i,v)=>{
                                        let u=  this.state.xmjelb.find((item)=>{
                                              return item.key==v
                                        }) 
                                        
                                          this.setState({zjye:u.value,ysType:v})
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
                          <Text style={{flex:1}}>使用目的</Text>
                        
                        <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入使用目的'
                           placeholderTextColor='black'
                            onChangeText={(v)=>{

                              this.setState({syMd:v})
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
                            

                                           <Text style={{flex:1}}>需要费用</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           placeholder='请输入需要费用'
                           placeholderTextColor='black'
                           onChangeText={(v)=>{
                              this.setState({zhSy:v})
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
                            

                            
                            <Text style={{flex:1}}>账户余额</Text>
                              <TextInput 
                           style={{flex:2}}
                           underlineColorAndroid='transparent'
                           
                           placeholderTextColor='black'
                           
                           value={this.state.zjye}>
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