<script setup>
import { ref, computed } from 'vue';
import UButton from './UButton.vue';
import USelectList from './USelectList.vue';
import { useEntityStore } from '../stores/EntityStore';

const entityStore = useEntityStore();


const { modelValue } = defineProps({});


const submit = () => {
  if (entityStore.entitySelected) {
    const selectEntity = entityStore.entitySelect;
    entityStore.setEntityInEntities(selectEntity);
  }  
}
</script>

<template> 
  <form 
    class="form-creation-entity"
    @submit.prevent.stop="submit"
  >
    <div class="form-creation-entity__wrapper">
      <UButton type="submit" :class="{selected: entityStore.entitySelected}" class="form-creation-entity__button">Создать</UButton>
      <p>
        <label for="form-creation-entity__select">Выбирете сущность</label>
        <USelectList          
          :data-options="entityStore.entities"          
          class="form-creation-entity__list"
        />
      </p>
    </div>
  </form>
</template>

<style scoped>
  .form-creation-entity {  
    max-width: 100%;  
    display: flex;  
    justify-content: center;  
  }
  .form-creation-entity__wrapper {    
    display: flex;
    flex: 0 1 60%;
    justify-content: space-between;
    align-items: center;
  } 

  @media (max-width: 570px) {
    .form-creation-entity__wrapper {
      flex-wrap: wrap;
      flex-direction: column;
      flex-direction: column-reverse;
    }

    .form-creation-entity__button {
      margin-top: 1em;
    }
  }


</style>