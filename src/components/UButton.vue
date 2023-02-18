<script setup>
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

  .button.selected {
    background: #092cca;
    color: #fff
  }

  .button.hoverBtn:hover {
    border: 1px solid #092cca;
    color: #092cca;
  }

  @keyframes spinner-border {
    100% {
      transform: rotate(360deg);
    }
  }

  .btn-spinner {
    display: inline-block;    
    vertical-align: -0.125em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: .75s linear infinite spinner-border;
    animation: .75s linear infinite spinner-border;
  }

  .btn-spinner_hide {
    display: none;
  }
</style>
