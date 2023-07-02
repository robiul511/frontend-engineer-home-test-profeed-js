<script setup>
  import { StyledSelect, StyledLabelSelect } from './Select.style';

  defineProps(['modelValue', 'label'])
  defineEmits(['update:modelValue'])
</script>

<template>
  <StyledLabelSelect>{{ label }}</StyledLabelSelect>
  <StyledSelect
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <slot></slot>
  </StyledSelect>
</template>