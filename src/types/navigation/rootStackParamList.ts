import { article } from "../article"
export type RootStackParamList = {
  HomeStack: undefined
  Home: undefined
  Article: {
    article: article
  }
  Clip: undefined
  ClipStack: undefined
  ArticleClip: {
    article: article
  }
}
