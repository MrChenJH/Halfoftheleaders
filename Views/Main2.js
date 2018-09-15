import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Wd from './cygl/wd'
import Xg from './page/xg'
import rwtj from './xg/rwtj'
import Wyhs from './xg/wyhs'
import XGWdys from './xg/wdys'

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
                        {this._renderTabarItems('首页', require('./img/1.png'), require('./main/souye.png'), Xg)}
                        {this._renderTabarItems('任务提交', require('./main/wdjhwxz.png'), require('./gcy/shyImage/wdjhxz.png'), rwtj)}
                        {this._renderTabarItems('预算提交', require('./img/3.png'), require('./main/wodeys.png'), XGWdys)}
                        {this._renderTabarItems('我有话说', require('./img/4.png'), require('./main/woyouhuashuo.png'), Wyhs)}
                        {this._renderTabarItems('我的', require('./gcy/shyImage/menu_wode.png'), require('./main/wdcdxz.png'), Wd)}
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
  
