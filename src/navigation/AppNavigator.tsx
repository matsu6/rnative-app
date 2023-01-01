import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RecoilRoot } from "recoil"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import ArticleScreen from "../screens/ArticleScreen"
import ClipScreen from "../screens/ClipScreen"
import { RootStackParamList } from "../types/navigation/rootStackParamList"
import { FontAwesome } from "@expo/vector-icons"

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Clip"
          component={ClipScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArticleClip"
          component={ArticleScreen}
          options={{ title: "Article" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName: "home" | "bookmark"

    if (route.name === "HomeStack") {
      iconName = "home"
    } else if (route.name === "ClipStack") {
      iconName = "bookmark"
    }
    return <FontAwesome name={iconName} size={size} color={color} />
  },
})

const AppNavigator = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false, tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="ClipStack"
            component={ClipStack}
            options={{ headerShown: false, tabBarLabel: "Clip" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default AppNavigator
