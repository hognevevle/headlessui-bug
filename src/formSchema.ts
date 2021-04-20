import { string, array } from "yup"
import FormText from "@/components/FormText.vue"
import { markRaw } from "vue"

markRaw(FormText)

export const randomSchema = [
  [
    {
      component: FormText,
      label: "First name",
      model: "firstName",
      style: "margin-right: 10px",
    },
    {
      component: FormText,
      label: "Last Name",
      model: "lastName",
    },
  ],
]
