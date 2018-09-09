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
import app from '../../app.json';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

export default class canshu extends Component {
    constructor(props) {
        super(props);
    
    } 
     render() {
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{
                 let  destRoute=this.props.navigator.getCurrentRoutes().find((item)=>{
                    return item.id=="Main1"
                  })
                
                  this.props.navigator.popToRoute(destRoute);
            }}
            >
                <Text>敬请期待</Text>
            </TouchableOpacity>
        </View>
    )
      
    }
}