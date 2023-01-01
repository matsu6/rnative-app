import { useState, useEffect, FC, ReactNode } from "react"
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
import news_dummy from "../constans/news.json"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation/rootStackParamList"
import { Loading } from "../components/Loading"
type HomeNavigationProps = NativeStackScreenProps<RootStackParamList, "Home">

const HomeScreen: FC<HomeNavigationProps> = (props) => {
  const [loading, setIsLoading] = useState(false)
  const { navigation } = props
  const [articles, setArticles] = useState<article[]>([])

  const getArticles = async () => {
    const url = `${NEWSURL}&apiKey=${Constants.manifest.extra.NEWS_API_KEY}`
    try {
      setIsLoading(true)
      const res: AxiosResponse<articles> = await axios.get(url)
      setArticles(res.data.articles)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // getArticles() //URLリクエスト 上限あり
    try {
      setIsLoading(true)
      setArticles(news_dummy[0].articles) //ダミーデータ
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const renderItem = (ListRenderItemInfo: ListRenderItemInfo<article>) => {
    const onPress = () => {
      navigation.navigate("Article", { article: ListRenderItemInfo.item })
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
      <FlatList data={articles} renderItem={renderItem} />
      {loading && <Loading />}
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

export default HomeScreen
