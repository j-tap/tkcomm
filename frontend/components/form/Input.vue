<template>
  <FieldWrap>
    <input class="form-field" v-model="$value" :placeholder="label" :type="type" />
  </FieldWrap>
</template>

<script>
import FieldWrap from '~/components/form/FieldWrap';

export default {
  components: {
    FieldWrap,
  },

  props: {
    value: {
      type: [String, Number, null],
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  computed: {
    $value: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
}
</script>

<style>

</style>