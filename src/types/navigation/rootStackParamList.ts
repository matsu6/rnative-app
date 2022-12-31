import { article } from "../article"
export type RootStackParamList = {
  Home: undefined
  Article: {
    article: article
  }
}
