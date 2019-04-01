<template>
  <div
    class="s-radio"
    :class="{'s-radio--disabled': isDisabled}"
    @click="$emit('click')"
  >
    <span class="s-radio__input">
      <input
        type="radio"
        :value="name"
        v-model="currentValue"
        class="s-radio__control"
        :disabled="isDisabled"
      >
      <span
        class="s-radio__icon"
        :class="currentValue === name ? 's-radio__icon--checked' : ''"
      >
        <s-icon :name="currentValue === name ? 'check' : ''"></s-icon>
      </span>
    </span>
    <span
      class="s-radio__label"
      @click="onClickLabel"
    >
      <slot /></span>
  </div>
</template>

<script>
export default {
  name: 's-radio',

  props: {
    value: {},
    disabled: Boolean,
    name: [String, Number]
  },

  computed: {
    isGroup() {
      return !!this.findParentGroup('s-radio-group');
    },

    currentValue: {
      get() {
        return this.isGroup && this.parentGroup
          ? this.parentGroup.value
          : this.value;
      },

      set(val) {
        if (this.isGroup && this.parentGroup) {
          this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    },

    isDisabled() {
      return this.isGroup && this.parentGroup
        ? this.parentGroup.disabled || this.disabled
        : this.disabled;
    }
  },

  methods: {
    findParentGroup(name) {
      if (!this.parentGroup) {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name === name) {
            this.parentGroup = parent;
            break;
          }
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    },

    onClickLabel() {
      if (this.isDisabled) {
        return;
      }
      this.currentValue = this.name;
    }
  }
};
</script>
