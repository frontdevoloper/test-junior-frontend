<script setup>
import UButton from './UButton.vue';
import USelectList from './USelectList.vue';
import { useEntityStore } from '../stores/EntityStore';
import { useAutorizationAmoCRM } from '../stores/AuthorizationAmoCRM';


const entityStore = useEntityStore();

const { modelValue } = defineProps({});

const  submit = () => {  
  if (entityStore.entitySelected) {
    entityStore.setEntities(entityStore.entitySelect);
  }  
} 

</script>

<template> 
  <form 
    class="form-creation-entity"
    @submit.prevent.stop="submit"
  >
    <div class="form-creation-entity__wrapper">
      <UButton 
      v-if="!entityStore.isLoading"
      type="submit" 
      :class="{selected: entityStore.entitySelected}" 
      class="form-creation-entity__button"
      >
        Создать
      </UButton>
      <UButton v-else class="btn-loader selected">
        <svg version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
	      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	      viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
          <g>
            <g>
              <g>
                <path d="M12,5c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v3C13,4.6,12.6,5,12,5z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M12,24c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C13,23.6,12.6,24,12,24z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M4,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S4.6,13,4,13z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M23,13h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h3c0.6,0,1,0.4,1,1S23.6,13,23,13z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M18.9,9c-0.3,0-0.7-0.2-0.9-0.5c-0.3-0.5-0.1-1.1,0.4-1.4L21,5.6c0.5-0.3,1.1-0.1,1.4,0.4c0.3,0.5,0.1,1.1-0.4,1.4
                  l-2.6,1.5C19.3,9,19.1,9,18.9,9z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M2.5,18.5c-0.3,0-0.7-0.2-0.9-0.5c-0.3-0.5-0.1-1.1,0.4-1.4l2.6-1.5c0.5-0.3,1.1-0.1,1.4,0.4c0.3,0.5,0.1,1.1-0.4,1.4
                  L3,18.4C2.8,18.5,2.6,18.5,2.5,18.5z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M16,6.1c-0.2,0-0.3,0-0.5-0.1c-0.5-0.3-0.6-0.9-0.4-1.4L16.6,2c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4
                  l-1.5,2.6C16.7,5.9,16.3,6.1,16,6.1z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M6.5,22.5c-0.2,0-0.3,0-0.5-0.1c-0.5-0.3-0.6-0.9-0.4-1.4l1.5-2.6C7.4,18,8,17.8,8.5,18.1c0.5,0.3,0.6,0.9,0.4,1.4
                  L7.4,22C7.2,22.3,6.8,22.5,6.5,22.5z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M5.1,9C4.9,9,4.7,9,4.6,8.9L2,7.4C1.5,7.1,1.3,6.5,1.6,6C1.9,5.5,2.5,5.4,3,5.6l2.6,1.5C6.1,7.4,6.2,8,5.9,8.5
                  C5.8,8.8,5.4,9,5.1,9z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M21.5,18.5c-0.2,0-0.3,0-0.5-0.1l-2.6-1.5c-0.5-0.3-0.6-0.9-0.4-1.4c0.3-0.5,0.9-0.6,1.4-0.4l2.6,1.5
                  c0.5,0.3,0.6,0.9,0.4,1.4C22.2,18.3,21.9,18.5,21.5,18.5z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M8,6.1c-0.3,0-0.7-0.2-0.9-0.5L5.6,3C5.4,2.5,5.5,1.9,6,1.6C6.5,1.3,7.1,1.5,7.4,2l1.5,2.6C9.1,5.1,9,5.7,8.5,5.9
                  C8.3,6,8.2,6.1,8,6.1z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M17.5,22.5c-0.3,0-0.7-0.2-0.9-0.5l-1.5-2.6c-0.3-0.5-0.1-1.1,0.4-1.4c0.5-0.3,1.1-0.1,1.4,0.4l1.5,2.6
                  c0.3,0.5,0.1,1.1-0.4,1.4C17.8,22.5,17.7,22.5,17.5,22.5z"/>
              </g>
            </g>
          </g>
        </svg>
      </UButton>      
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

  @keyframes spinner-icon {
    100% {
      transform: rotate(360deg);
    }
  } 

  .btn-loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-loader svg {
    animation: 1.5s linear infinite spinner-icon;
    fill: #fff;
  }
  
</style>