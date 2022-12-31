import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import ArticleScreen from "../screens/ArticleScreen"
import { RootStackParamList } from "../types/navigation/rootStackParamList"

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
