import { FC } from "react"
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from "react-native"
import { useRecoilValue } from "recoil"
import clipStateAtom from "../globalStates/atoms/clipStateAtom"
import { NewsItem } from "../components/news/NewsItem"
import { article } from "../types/article"
import { RootStackParamList } from "../types/navigation/rootStackParamList"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type ClipNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "ClipStack"
>

const ClipScreen: FC<ClipNavigationProps> = (props) => {
  const { navigation } = props
  const clip = useRecoilValue(clipStateAtom)
  const renderItem = (ListRenderItemInfo: ListRenderItemInfo<article>) => {
    const onPress = () => {
      navigation.navigate("ArticleClip", { article: ListRenderItemInfo.item })
    }
    return (
      <NewsItem
        imageUrl={ListRenderItemInfo.item.urlToImage}
        description={ListRenderItemInfo.item.title}
        author={ListRenderItemInfo.item.author}
        onPress={onPress}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={clip} renderItem={renderItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
})

export default ClipScreen
