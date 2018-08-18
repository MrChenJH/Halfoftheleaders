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
             dataSource: ds.cloneWithRows([
                {title:'8.13-8.19  张思成获得',content:'金豆:500     银豆:300     折合金:30元',xz:true},
                {title:'8.13-8.19  张思成获得',content:'金豆:500     银豆:300     折合金:30元',xz:false},
              ]),
              type:1,
              typetitle:'',
              typecontent:''
        }
    }

    render(){ 
        const {back}=this.props
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
            if(back){
                back()
            }
           }}>
         <Image source={require('./shyImage/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
         </Image>
       </TouchableOpacity> 
 </View> 
         <View style={{justifyContent:'center',alignItems:'center'}}>
           <Text 
                   style={{fontSize:16,
                           color:'#FFF',
                           fontWeight:'bold'}}>结算审核</Text>
           </View> 
           <View style={{marginRight:5,width:40}}> 
                
           </View> 
   </View>

<View style={{backgroundColor:'#F2F2F2',height:deviceheight}}>
<ScrollView >
<ListView
   dataSource={this.state.dataSource}
    renderRow={(rowData) => 
      <TouchableOpacity  
            onPress={()=>{this.setState({type:2})}}>
           <View 
               style={{flexDirection:'row',
                       borderTopColor:'#F0F0F0',
                       backgroundColor:'#fff',
                       borderTopWidth:1,
                       margin:5,
                       borderRadius:10,
                       height:40}}>
                       <View style={{flex:5,
                         justifyContent:'center',
                         alignItems:'flex-start',
                         marginLeft:10}}>
                           <Text style={{   color:'#474747'}}>{rowData.title}</Text>
                           <Text style={{   color:'#474747'}}>{rowData.content}</Text>
                       </View>
                       <View 
                       style={{flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        marginRight:10}}
                       >
                         <CheckBox styles={{height:20,width:20}} isChecked={rowData.xz}></CheckBox>   
                       </View>
         </View>
         </TouchableOpacity>
          }
    />
               
</ScrollView>
</View>
</View>)
}
}