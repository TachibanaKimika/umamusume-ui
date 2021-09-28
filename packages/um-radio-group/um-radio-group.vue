<!--
 * @Author: Akarichan
 * @LastEditors: Akarichan
-->
<template>
  <div class="um-component um-radio-group">
      <slot>

      </slot>
  </div>
</template>

<script>
export default {
    name: 'um-radio-group',
    props: {
        value: null,
    },
    provide() {
        return {
            RadioGroup: this
        }
    }
}
</script>