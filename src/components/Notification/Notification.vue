<script setup>
  import { StyledNotification } from './Notification.style';

  defineProps({
    message: String,
    color: String,
  })
</script>

<template>
  <StyledNotification :color="color">
    {{ message }}
  </StyledNotification>
</template>