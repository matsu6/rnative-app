import { SafeAreaView, StyleSheet } from "react-native"
import { SampleBox } from "../components/sample/SamleBox"

const SamplePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SampleBox color="red" />
      <SampleBox color="blue" />
      <SampleBox color="green" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //flexDirection 子要素が縦か横に並ぶ デフォルトでcolumn
    // flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
})

export default SamplePage
