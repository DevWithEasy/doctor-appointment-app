import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home"
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from "react-redux"
import Doctors from "../pages/Doctors"
import FindAppointment from "../pages/FindAppointment"
import More from "../pages/More"
import Hospitals from "../pages/Hospitals"
import Profile from "../pages/Profile"
import Login from "../pages/Login"
import BottomTabNavigator from "./BottomTabNavigator"

const Tab = createBottomTabNavigator()

export default function HomeNavigator() {
    const {isAuth} = useSelector(state => state.auth)

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
                let iconName
                if (route.name === "Home") {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === "Doctors") {
                    iconName = focused ? 'people' : 'people-outline'
                } else if (route.name === "Profile") {
                    iconName = focused ? 'person-circle' : 'person-circle-outline'
                } else if (route.name === "Find") {
                    iconName = focused ? 'search' : 'search-outline'
                } else if (route.name === "Hospitals") {
                    iconName = focused ? 'business' : 'business-outline'
                } else if (route.name === "Hospitals") {
                    iconName = focused ? 'bussiness' : 'bussiness-outline'
                } else if (route.name === "Profile") {
                    iconName = focused ? 'profile-circle' : 'profile-circle-outline'
                } else if (route.name === "More") {
                    iconName = focused ? 'grid' : 'grid-outline'
                } 

                return <Icon name={iconName} size={22} color={color} />
            }
        })}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Doctors' component={Doctors} />
            <Tab.Screen name='Find' component={FindAppointment} />
            <Tab.Screen name='Hospitals' component={Hospitals} />
            <Tab.Screen name='More' component={More} />

        </Tab.Navigator>
    )
}