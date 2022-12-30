import { StyleSheet, View } from "react-native"
import { ReactNode, FC } from "react"

type Props = {
  children: ReactNode
}

const NewsList: FC<Props> = (props) => {
  const { children } = props
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default NewsList
