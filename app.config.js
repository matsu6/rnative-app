import * as dotenv from "dotenv"
dotenv.config()

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      NEWS_API_KEY: process.env.NEWS_API_KEY,
    },
  }
}
