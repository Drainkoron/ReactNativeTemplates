import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Platform, Image } from 'react-native'
import { FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import { MainScreen } from '../screens/MainScreen'
import { TasksScreen } from '../screens/TasksScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { ProfileSetDataScreen} from '../screens/ProfileSetDataScreen'
import { MatchesScreen } from '../screens/MatchesScreen'
import { MessageScreen} from '../screens/MessageScreen'
import { THEME } from '../theme' 

const theme = Platform.OS == 'android' ? THEME.Android : THEME.Ios

const SearchNavigator = createStackNavigator(
    {
        Search: MainScreen,
        Profile: TasksScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: theme.MAIN_COLOR
            },
            headerTintColor: theme.FONT_COLOR
        }
    }
)

const ProfileNavigator = createStackNavigator(
    {
        Profile: ProfileScreen,
        SetData: ProfileSetDataScreen
    },
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: theme.MAIN_COLOR
            },
            headerTintColor: theme.FONT_COLOR
        }
    }
)

const MatchesNavigator = createStackNavigator(
    {
        Matches: MatchesScreen,
        Message: MessageScreen
    },
    {
        initialRouteName: 'Matches',
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: theme.MAIN_COLOR
            },
            headerTintColor: theme.FONT_COLOR
        }
    }
)

const BottomNavigator = createMaterialBottomTabNavigator(
    {
        Search:{ 
            screen: SearchNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <FontAwesome name="search" color={theme.FONT_COLOR} size={24} />
                )
            }
        },
        Matches:{ 
            screen: MatchesNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <AntDesign name="message1" color={theme.FONT_COLOR} size={24} />
                )
            }
        },
        Profile:{ 
            screen: ProfileNavigator,
            navigationOptions: {
                tabBarIcon: () => (
                    <FontAwesome name="user" color={theme.FONT_COLOR} size={24} />
                )
            }
        }
    }, 
    {
        barStyle: {
            backgroundColor: theme.MAIN_COLOR
        },
        activeColor: theme.FONT_COLOR,
    }
)

export const AppNavigation = createAppContainer(BottomNavigator)