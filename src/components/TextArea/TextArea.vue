<script setup>
  import { StyledTextArea, StyledLabelTextArea } from './TextArea.style';

  defineProps(['modelValue', 'label'])
  defineEmits(['update:modelValue'])
</script>

<template>
  <StyledLabelTextArea>{{ label }}</StyledLabelTextArea>
  <StyledTextArea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>