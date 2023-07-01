<script setup>
  import { StyledNavbarItems } from './NavbarItems.style' 

  defineProps({
    isSelected: Boolean,
  })
</script>

<template>
  <StyledNavbarItems :isSelected="isSelected">
    <slot></slot>
  </StyledNavbarItems>
</template>