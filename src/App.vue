<script setup>
  import FormCreationEntity from './components/FormCreationEntity.vue';
  import Table from './components/Table/Table.vue';
  import { useEntityStore } from './stores/EntityStore';

  const entityStore = useEntityStore();
</script>

<template>
  <div class="container">
    <div class="area-display-id-entity">
      <Table
      caption="Ваши сущности"
      :dataArray="entityStore.entities"
      />
    </div>
    <FormCreationEntity/>
  </div>  
</template>

<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .area-display-id-entity {
    margin-bottom: 4em;
  }

  @media (max-width: 810px) {
    .container {
      max-width: 650px;
      margin: 0 auto;
    }
  }

  @media (max-width: 650px) {
    .container {
      max-width: 100%;
      margin: 0 auto;
      padding: 0 1em;
    }
  }

  
  @media (max-width: 570px) {
    .area-display-id-entity {
      margin-bottom: 3em;
    }
  }

</style>
