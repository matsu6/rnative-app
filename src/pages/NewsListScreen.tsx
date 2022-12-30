import { useState, useEffect } from "react"
import {
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from "react-native"
import { NewsItem } from "../components/news/NewsItem"
import articles_dummy from "../constans/articles.json"
import { article } from "../types/article"
import Constants from "expo-constants"

const NewsList = () => {
  const [articles, setArticles] = useState<article[]>([])

  useEffect(() => {
    alert(Constants.manifest.extra.NEWS_API_KEY)

    setArticles(articles_dummy)
  }, [articles])

  const renderItem = (ListRenderItemInfo: ListRenderItemInfo<article>) => {
    return (
      <NewsItem
        imageUrl={ListRenderItemInfo.item.urlToImage}
        description={ListRenderItemInfo.item.title}
        author={ListRenderItemInfo.item.author}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={articles} renderItem={renderItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
})

export default NewsList
