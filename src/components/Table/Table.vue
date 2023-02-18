<script setup>

  import { computed, ref } from 'vue';
  import UButton from '../UButton.vue';
  import TableRow from './TableRow.vue';

  const pageNumber = ref(0);
  

  const { dataArray, sizeElements } = defineProps({  
    dataArray: {
      type: Array,
      required: true,
      default: () => []
    },  
    caption: {
      type: String,
      default: () => ''
    },
    sizeElements: {
      type: Number,
      required: false,
      default: () => 4
    }
  });

  const keys = computed(() => {
    if(dataArray.length) return Object.keys(dataArray[0]);
  }); 

  const paginatedData = computed(() => {
    const start = pageNumber.value * sizeElements;
    const end = start + sizeElements;

    return dataArray.slice(start, end);
  })

  const pageCount = computed(() => {
    return Math.ceil(dataArray.length / sizeElements);
  });

  const nextPage = () => {
    pageNumber.value++;
  }

  const prevPage = () => {
    pageNumber.value--;
  }


</script>

<template>
  <div v-if="dataArray.length" class="wrapepr">
    <table  class="table" >
    <caption class="table__title">
      {{ caption }}
    </caption>                
    <thead class="table__header" >
        <th 
          v-for="key in keys"
          class="table__header-col" 
          scope="col"
        >
            <span class="table__header-title">{{ key }}</span>                                         
        </th>            
      </thead>
      <tbody class="table__body">
        <table-row
        v-for="data in paginatedData"
        :key="data.id"
        :data="data"
        />        
      </tbody>
    </table>
    <div class="buttons-paginations">
      <UButton 
        :class="{hoverBtn: pageNumber !== 0}"
        :disabled="pageNumber === 0" 
        @click="prevPage()" 
        class="buttons-paginations__prev" 
        type="button">
          Preview
      </UButton>
      <UButton 
        :class="{hoverBtn: pageNumber !== pageCount - 1  }"
        :disabled="pageNumber >= pageCount -1" 
        @click="nextPage()" 
        class="buttons-paginations__next" 
        type="button"
        >
          Next
      </UButton>
    </div>
  </div>
  
  <h2 class="title" v-else>Вы ничего не добавили</h2>
</template>

<style scoped>
  .table {    
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #8D8D8D;
  }

  .title {
    text-align: center;
  }
  .table__title {
    font-size: 1.25rem;
    padding: 20px 0;
  }

  .table__header-col {
    border: 1px solid #8D8D8D;
    padding: 20px;
  }

  .table__header-title {
    margin: 0 0.5rem 0 0; 
  }

  .buttons-paginations {
    display: flex;
    margin-top: 1em;
    justify-content: space-between;
  }
  
</style>