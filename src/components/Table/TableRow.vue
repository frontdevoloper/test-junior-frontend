<script setup>

  defineProps({
    data: {
      type: Object,
      default: {}
    }
  });
</script>

<template>
  <tr class="table__row row">
    <td 
      v-for="item of data"      
      class="table__data"
    >
      {{ item }}
    </td>    
  </tr>
</template>

<style scoped>
  .table__row {    
    border: 1px solid #8D8D8D;
    letter-spacing: 2px;
    padding: 20px;     
    text-align: right;  
    transition: all .5s ease; 
  }

  .table__data {
    border: 1px solid #8D8D8D;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 20px;
    text-align: center;
  }
</style>