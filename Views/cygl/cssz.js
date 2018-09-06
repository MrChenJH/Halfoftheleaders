import React, {Component} from 'react';
import {
 StyleSheet,
 Button,
 Text,
 View,
 TouchableOpacity,
 TextInput,
 Dimensions,
 Image,
 ListView,
 ScrollView,
 AsyncStorage
} from 'react-native'; 
import Main from '../Main1'


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class canshu extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource: ds.cloneWithRows([
               
            ]), 
            Proportion:'',
            ProjectName:'',
            jtnc:'',
            type:1
        }
    } 


    //添加成员
  AddFund(){
    let url = "http://117.50.46.40:8003/api/FundSetting/addFundSetting";  
    let params ={
        "jtnc":this.state.jtnc,
        "Proportion":this.state.Proportion,
        "ProjectName":this.state.ProjectName
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
          fetch('http://117.50.46.40:8003/api/FundSetting/FundSetting?jtnc='+this.state.jtnc)
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
                  this.setState({jtnc:decodeURI(item.nc)}) 
                  fetch('http://117.50.46.40:8003/api/FundSetting/FundSetting?jtnc='+decodeURI(item.nc))
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

        if(this.state.type==1){
   
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
                         onPress={()=>{
                         
                         let  destRoute=this.props.navigator.getCurrentRoutes().find((item)=>{
                            return item.id=="Main1"
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
                               color:'#FFF',fontWeight:'bold'}}>参数列表</Text>
                         </View> 
                         <View style={{marginRight:5}}> 
                         <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                           <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                           </Image>
                         </TouchableOpacity> 
                         </View> 
                     </View>
                
                
          
                  <ListView
                                     dataSource={this.state.dataSource}
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
                                                       <Text style={{color:'#474747'}}>{decodeURI(rowData.ProjectName)}</Text>
                                                   </View>
                                                   <View style={{flex:2,
                                                     justifyContent:'center',
                                                     alignItems:'center'
                                                 }}>
                                                       <Text style={{color:'#474747'}}>设置比例:{rowData.Proportion}</Text>
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
                 )}else{
      return (<View>
              
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
                        this.setState({type:1})
                      }}>
                        <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                        </Image>
                      </TouchableOpacity> 
                </View> 
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Text 
                          style={{fontSize:16,
                            color:'#FFF',fontWeight:'bold'}}>参数设置</Text>
                      </View> 
                      <View style={{marginRight:5,width:40}}> 
                     <TouchableOpacity onPress={this.AddFund.bind(this)}>
                       <Text style={{color:'#FFFF00',fontSize:16}}>保存</Text>
                     </TouchableOpacity>
                      </View> 
                  </View>
             
                <ScrollView>

                <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
                             <Text style={{fontSize:14,
                
                color:'#6E6E6E',
                flex:3}}>基金兑换比例:</Text>
                         <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                               placeholder='成长基金兑换比例'
                               placeholderTextColor='#BDBDBD' 
                               onChangeText={(v)=>{
                                this.setState({Proportion:v})
                               }}
                              ></TextInput>
                 </View>

   <View style={{flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#F0F0F0',
                        height:60,
                        alignItems:'center',
                        justifyContent:'space-between',
                        paddingLeft:20}}>
                                     <Text style={{fontSize:14,
                
                color:'#6E6E6E',
                flex:3}}>基金项目配置:</Text>
                             <TextInput 
                                 style={{flex:5}}
                              underlineColorAndroid='transparent'
                              placeholderTextColor='#BDBDBD'
                               placeholder='设置内容：名称、比例' 
                               onChangeText={(v)=>{
                                    this.setState({ProjectName:v})
                               }}
                              ></TextInput>
                                    </View>
             
                </ScrollView>
            </View>)}

    }
}