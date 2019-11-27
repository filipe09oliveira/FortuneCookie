import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FirstPage from '../pages/cookie';
import SecontPage from '../pages/receipe';
import ThirtPage from '../pages/story';
import FourthPage from '../pages/aboutus'


const main = createBottomTabNavigator(
    {
        Cookie:{
            screen: FirstPage,
            navigationOptions: () => ({
		title:'Biscoito',
              tabBarIcon:({ focused }) =>(
                <Icon name = 'cookie' size={focused ? 25:20} color={focused ? '#fff':'#c0392b'}/>
              ),
            }) ,
        },
        Receita:{
          screen: SecontPage,
          navigationOptions: () => ({
            tabBarIcon:({ focused }) =>(
              <Icon name = 'food' size={focused ? 25:20} color={focused ? '#fff':'#c0392b'}/>
            ),
          }) ,
      },
      História:{
        screen: ThirtPage,
        navigationOptions: () => ({
          tabBarIcon:({ focused }) =>(
            <Icon name = 'book' size={focused ? 25:20} color={focused ? '#fff':'#c0392b'}/>
          ),
        }) ,
    },
     About:{
      screen: FourthPage, 
      navigationOptions: () => ({
        title:'About Us',
        tabBarIcon:({ focused }) =>(
          <Icon name = 'information' size={focused ? 25:20} color={focused ? '#fff':'#c0392b'}/>
        ),
      }) ,
  }


},{
  tabBarOptions: {
  activeTintColor: '#ffffff',
  inactiveTintColor:'#ddd',
  showIcon:true,
  labelStyle: {
    fontSize: 15,
  },
  style: {
    backgroundColor: '#EE5659',
  },
}
} );




export default createAppContainer(main)