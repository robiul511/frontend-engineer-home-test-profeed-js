<script setup>
  import { StyledInput, StyledLabelInput } from './Input.style';
  
  defineProps(['modelValue', 'label'])
  defineEmits(['update:modelValue'])
</script>

<template>
  <StyledLabelInput>{{ label }}</StyledLabelInput>
  <StyledInput
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>