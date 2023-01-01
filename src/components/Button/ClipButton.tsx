import { FC } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
type Props = {
  onPress: () => void
  enabled?: boolean
}

export const ClipButton: FC<Props> = (props) => {
  const { onPress, enabled } = props
  const name = enabled ? "bookmark" : "bookmark-o"
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={name} size={40} color="orange" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
})
