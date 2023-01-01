import { FC, useCallback } from "react"
import { StyleSheet, SafeAreaView, Text, View } from "react-native"
// import { WebView } from "react-native-webview"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation/rootStackParamList"
import { useSetRecoilState, useRecoilValue } from "recoil"
import clipStateAtom from "../globalStates/atoms/clipStateAtom"
import clipIdSelector from "../globalStates/selectors/clipIdSelector"
import { article } from "../types/article"
import { ClipButton } from "../components/Button/ClipButton"
type ArticleNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Article"
>

const ArticleScreen: FC<ArticleNavigationProps> = (props) => {
  const setClip = useSetRecoilState(clipStateAtom)
  const selectorIdClip = useRecoilValue(clipIdSelector)

  const clip = useRecoilValue(clipStateAtom)

  const { route } = props
  const { article } = route.params

  const isCliped = () => selectorIdClip.some((id) => id === article.source.id)

  const toggleClip = useCallback(() => {
    const isClip = isCliped()
    if (isClip) {
      const setValueClip: article[] = clip.filter(
        (c) => c.source.id !== article.source.id
      )
      setClip(() => [...setValueClip])
    } else {
      setClip((oldClip) => [...oldClip, article])
    }
  }, [clip])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <ClipButton onPress={toggleClip} enabled={isCliped()} />
      </View>
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
