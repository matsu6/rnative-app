import { FC } from "react"
import { StyleSheet, SafeAreaView, Text } from "react-native"
// import { WebView } from "react-native-webview"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation/rootStackParamList"

type ArticleNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Article"
>

const ArticleScreen: FC<ArticleNavigationProps> = (props) => {
  const { route } = props
  const { article } = route.params
  //   const { article } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Text>{article.title}</Text>
      {/* <WebView source={{ uri: article.url }} /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default ArticleScreen
