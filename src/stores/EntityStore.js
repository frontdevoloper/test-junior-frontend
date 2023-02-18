import { defineStore } from "pinia";
import { ref } from "vue";
import { useAutorizationAmoCRM } from "./AuthorizationAmoCRM";
import { getApiPath } from "../utils/apiUtils";
import axios from "axios";

export const useEntityStore = defineStore('entityStore', () => {
  const authorizationAmoCRM = useAutorizationAmoCRM()

  //const getEntitieslead = getApi('leads', authorizationAmoCRM.base_domain, authorizationAmoCRM.access_token);
  
  const entities = ref([]);
  const entitySelect = ref('');
  const entitySelected = ref(false); 
  const isLoading = ref(false);

  const setSelectEntity = (entity) => {
    if (entity !== 'Не выбрано') { 
      entitySelected.value = true;
    } else {
      entitySelected.value = false;
    }

    entitySelect.value = entity; 
  };  

  const fetchData =  () => {
    const apiPath = getApiPath(entitySelect.value);

    const result = axios.post(`https://${authorizationAmoCRM.base_domain}${apiPath.path}`, 
      [
        {'name': entitySelect.value}
      ],
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authorizationAmoCRM.access_token}`
        }  
      })
      .then(res => {       
        return res.data._embedded[apiPath.entityName][0]        
      })
      .catch(err => {
        console.log(err)
      })

    return result;
  }

  // Get метод
  //--------------------------
  // const  getEntities = async () => {
  //   const apiPath = getApiPath(entitySelect.value);

  //   const result = await axios.get(`https://${authorizationAmoCRM.base_domain}${apiPath.path}`, 
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${authorizationAmoCRM.access_token}`
  //     },      
  //   })
  //   .then((res) => {
  //     return res.data._embedded[apiPath.entityName];        
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   return result;
  // };

  const setEntities = async (entityName) => {  
    isLoading.value = true;  
    const { id } = await fetchData();    
    entities.value.push({id: id, name: entityName});
    isLoading.value = false;
  }

  return {
    isLoading,
    entities,
    entitySelect,
    entitySelected,
    setSelectEntity, 
    setEntities
  }
});