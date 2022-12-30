import { FC } from "react"
import { Text, StyleSheet } from "react-native"

type Props = {
  message: string
}

export const HelloWorld: FC<Props> = (props) => {
  const { message } = props
  return <Text style={styles.text}>{message}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
})
