<template>
  <div>
    <label :for="uuid" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="input-container mt-1 relative rounded-md shadow-sm">
      <input
        :type="email ? 'email' : 'text'"
        :name="model"
        :id="uuid"
        :value="modelValue"
        class="shadow-sm block w-full pr-10 sm:text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
        @input="update($event.target.value)"
        @blur="onBlur"
        :aria-invalid="hasError"
        :aria-describedby="uuid + '-error'"
      />
      <div
        v-if="hasError"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>

    <span
      :id="uuid + '-error'"
      class="mt-2 text-sm text-red-600"
      v-if="validation.meta.touched"
      >{{ validation.errorMessage }}</span
    >
  </div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/outline"
import { computed } from "vue"

export default {
  components: {
    ExclamationCircleIcon,
  },
  props: {
    // other props
    modelValue: {},
    label: {
      type: String,
    },
    email: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
    },
    uuid: {
      type: Number,
      default: 0,
    },
    validation: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", [value, "foo"])
    },
    onBlur() {
      this.validation.setTouched(true)
    },
  },
  setup(props) {
    const hasError = computed(
      () => props.validation.meta.touched && props.validation.errorMessage
    )

    return { hasError }
  },
}
</script>

<style scoped>
.schema-col {
  @apply place-self-stretch;
  @apply self-stretch;
  @apply flex-1;
}

.input-container {
  @apply max-w-md;
}
</style>
