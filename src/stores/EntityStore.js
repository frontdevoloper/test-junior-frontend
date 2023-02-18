import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntityStore = defineStore('entityStore', () => {

  const entities = ref([]);
  let id = 0;
  const entitySelect = ref('');
  const entitySelected = ref(false);

  const setSelectEntity = (entity) => {
    if (entity !== 'Не выбрано') { 
      entitySelected.value = true;
    } else {
      entitySelected.value = false;
    }

    entitySelect.value = entity;   
  };  

  const setEntityInEntities = (entityName) => {
    entities.value.push({id: id, entity: entityName});
    id++; 
  } 

  return {
    entities,
    entitySelect,
    entitySelected,
    setSelectEntity,   
    setEntityInEntities 
  }
});