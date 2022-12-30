import { StyleSheet, View, Image, Text } from "react-native"
import { LOREMIPSUM } from "../../constans/sampleData"
export const NewsItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: "https://picsum.photos/seed/picsum/200/300",
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {LOREMIPSUM}
        </Text>
        <Text style={styles.subText}>ReactNews</Text>
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
    // marginTop: 3,
  },
})
