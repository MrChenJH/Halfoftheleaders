import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Wd from './cygl/wd'
import Gcy from './page/gcy'
import Wdqb from './xg/wdqb'
import Xwpj from './shy/xwpj'
import Wdzz from './gcy/wdzz'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页',
            type: this.props.type ? this.props.type : 1
        }
    }
    _renderTabarItems(selectedTab, icon, selectedIcon, Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={selectedTab}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
            >
                <Component navigator={this.props.navigator} tc={() => {
                    this.setState({type: 5})
                }}/>
            </TabNavigator.Item>
        )

    }


    render() {
        if (this.state.type === 1) {
            return (
                <View style={styles.container}>
                    <TabNavigator>
                        {this._renderTabarItems('首页', require('./img/1.png'), require('./main/souye.png'), Gcy)}
                        {this._renderTabarItems('行为评价', require('./img/2.png'), require('./main/jhgl.png'), Xwpj)}
                        {this._renderTabarItems('预算赞助', require('./img/3.png'), require('./main/wodeys.png'), Wdzz)}
                        {this._renderTabarItems('家庭钻豆', require('./img/4.png'), require('./main/woyouhuashuo.png'), Wdqb)}
                        {this._renderTabarItems('我的', require('./img/2.png'), require('./main/wodecaidan.png'), Wd)}
                    </TabNavigator>
                </View>)
        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    tabText: {
        color: '#000000',
        fontSize: 10
    },
    selectedTabText: {
        color: '#D81E06'
    },
    icon: {
        width: 20,
        height: 20
    }
});
  
