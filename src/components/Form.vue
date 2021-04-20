<template>
  <div class="flex flex-col h-full justify-around">
    <div class="flex-1 overflow-y-auto">
      <div class="space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200">
        <SchemaFormWithValidation
          ref="form"
          :schema="randomSchema"
          @submit="onSubmit"
          class="mx-6 space-y-4"
          schemaRowClasses="flex flex-row space-x-4 justify-self-stretch justify-between"
        >
          <!-- <template v-slot:afterForm>AfterForm</template> -->
        </SchemaFormWithValidation>
      </div>
      <pre>{{ formModel }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { SchemaFormFactory, useSchemaForm } from "formvuelate"
import VeeValidatePlugin from "@formvuelate/plugin-vee-validate"
import { randomSchema } from "@/formSchema"

const SchemaFormWithValidation = SchemaFormFactory([
  VeeValidatePlugin({
    // plugin configuration here
  }),
])

export default defineComponent({
  emits: ["cancel"],
  components: {
    SchemaFormWithValidation,
  },
  setup() {
    const formModel = ref({})

    useSchemaForm(formModel)

    const form = ref()

    const onSubmit = () => console.log("form was submitted")

    return {
      randomSchema,
      onSubmit,
      formModel,
      form,
    }
  },
})
</script>
