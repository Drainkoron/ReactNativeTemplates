import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { TasksScreen } from '../screens/TasksScreen'

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Tasks: TasksScreen
    },
    {
        initialRouteName: 'Main'
    }
)

export const AppNavigation = createAppContainer(PostNavigator)