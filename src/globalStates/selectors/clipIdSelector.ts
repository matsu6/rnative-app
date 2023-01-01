import { selector } from "recoil"
import clipStateAtom from "../atoms/clipStateAtom"
import { article } from "../../types/article"
const clipIdSelector = selector({
  key: "clipIdSelector",
  get: ({ get }) => {
    const clip: article[] = get(clipStateAtom)
    const result = clip.map((c) => c.source.id)
    return result
  },
})

export default clipIdSelector
