import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../pages/Home/index'
import Favorites from '../pages/Favorites/index'
import Profile from '../pages/Profile/index'
import Search from '../pages/Search/index'

function Routes() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="Favoritos"
                    component={Favorites}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;