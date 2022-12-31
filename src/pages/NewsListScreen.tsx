import { useState, useEffect } from "react"
import {
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from "react-native"
import { NewsItem } from "../components/news/NewsItem"
import { article, articles } from "../types/article"
import Constants from "expo-constants"
import { NEWSURL } from "../constans/newsData"
import axios, { AxiosResponse } from "axios"
const NewsList = () => {
  const [articles, setArticles] = useState<article[]>([])

  const getArticles = async () => {
    const url = `${NEWSURL}&apiKey=${Constants.manifest.extra.NEWS_API_KEY}`
    try {
      const res: AxiosResponse<articles> = await axios.get(url)
      setArticles(res.data.articles)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getArticles()
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
