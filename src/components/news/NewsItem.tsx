import { FC } from "react"
import { StyleSheet, View, Image, Text } from "react-native"

type Props = {
  imageUrl: string
  description: string
  author: string
}

export const NewsItem: FC<Props> = (props) => {
  const { imageUrl, description, author } = props
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: imageUrl,
            }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {description}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row", //row = 横並び
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
})
