import { View, StyleSheet } from "react-native"
import { FC } from "react"

type Props = {
  color: string
}

export const SampleBox: FC<Props> = (props) => {
  const { color } = props
  return <View style={[styles.box, { backgroundColor: color }]} />
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
})
