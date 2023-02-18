<script setup>

  // defineProps({
  //   type: String
  // });

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    background-color: #fff;
    width: 140px;
    height: 30px;
    font-weight: 700;    
    font-size: 1rem;    
    color: #353535;
    border: 1px solid #8D8D8D;
    border-radius: 5px;
    transition: all .6s ease;
  }

  .button.hoverBtn:hover {
    border: 1px solid #092cca;
    color: #092cca;
  }

  .button.selected {
    background: #092cca;
    color: #fff
  }
</style>
