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

import Main from '../Main4'  
import DropdownAlert from 'react-native-dropdownalert';

const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
import CheckBox from '../component/xwCheckBox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class Jhsh extends Component {
    constructor(props) {
        super(props);
        this.state = {
              dataSource: ds.cloneWithRows([]),
              type:1,
              typetitle:'',
              typecontent:''
        }
    }
    
    zanzhu(ysType,xgzh,id,je){
       
        let url = "http://192.168.0.100:38571/api/sponsor/UpudateSponsor?ysType="+ysType+"&xgzh="+xgzh+"&id="+id+"&je="+je;  
     
       
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
         
            this.loginAlert.alertWithType('success', 'Success', '赞助成功');
        }).catch((error) => {
            console.error(error);
        });
   
    }

    componentWillMount(){
        AsyncStorage.getItem('user').then((item)=>{
         return JSON.parse(item)
           }).then((item)=>{ 
                this.setState({jtnc:item.nc}) 
                 fetch('http://192.168.0.100:38571/api/sponsor/SponsorS?jtnc='+item.nc)
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

    render(){ 
        const {back}=this.props
     return(
    <View>
             <DropdownAlert
                                ref={ref => this.loginAlert = ref}
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
            this.props.navigator.push({
                component:Main,
                })
           }}>
         <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
         </Image>
       </TouchableOpacity> 
 </View> 
         <View style={{justifyContent:'center',alignItems:'center'}}>
           <Text 
                   style={{fontSize:16,
                           color:'#FFF',
                           fontWeight:'bold'}}>我的赞助</Text>
           </View> 
           <View style={{marginRight:5,width:40}}> 
                
           </View> 
   </View>

<View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>

<ListView
   dataSource={this.state.dataSource}
    renderRow={(rowData) => 
      <TouchableOpacity  
            onPress={this.zanzhu.bind(this,rowData.ysType,rowData.xgzh,rowData.id,rowData.SponsorJe)}>
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
                    <Text style={{   color:'#474747',fontSize:12}}>{decodeURI(rowData.rq) +" "+decodeURI(rowData.realName)}发起申请</Text>
                    <View  style={{flexDirection:'row',
                                   justifyContent:'space-between',width:deviceWidth}}>
                    <Text style={{   color:'#474747',fontSize:12}}>{decodeURI(rowData.syMd)+" "+decodeURI(rowData.ysType)+"  还差"+decodeURI(rowData.SponsorJe)+"元"}</Text>
                    <Text style={{   color:'#474747',fontSize:12,marginRight:30}}>我要赞助</Text>
                    </View>
                                 </View>
                     
         </View>
         </TouchableOpacity>
          }
    />
               

</View>

</View>)
}
}