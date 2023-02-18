<script setup>
  import { ref } from 'vue'; 
  import { useEntityStore } from '../stores/EntityStore';

  const entityStore = useEntityStore();

  const entitiesNames = ref([
    'Не выбрано',
    'Сделка',
    'Контакт',
    'Компания',
  ])

  const isClickDropDown = ref(false);  

  defineProps({
    dataOptions: Array,
    required: true,
    default: () => [] 
  });
  

  const selectOption = (option) => {    
    entityStore.setSelectEntity(option);
    isClickDropDown.value = false;
   
  }

</script>

<template>
  <div class="dropdown">
    <a 
    @click="isClickDropDown = !isClickDropDown"
      class="dropdown__input"
    >
      <span class="dropdown__input-text">{{ entityStore.entitySelect || 'Не выбрано'}}</span>
      <img :class="{active: isClickDropDown}" class="dropdown__input-icon" src="..//assets/img/icon/dropdown-icon.svg" alt="">
  </a>
    <ul :class="{active: isClickDropDown}" class="dropdown__options">
      <li         
        v-for="entitiesName in entitiesNames"
        @click="selectOption(entitiesName)" 
        class="dropdown__option"
      >
        <img          
          class="dropdown__option-icon" 
          src="..//assets/img/icon/check-mark.svg" 
          alt="check-mark">          
        <p class="dropdown__option-text">{{ entitiesName }}</p>
      </li>      
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  cursor: pointer;
  position: relative;
  width: 300px;
}
.dropdown__input {
  display:  flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: #616060;
  border: 1px solid #d6d5d5;
  padding: .1em .6em;
}
.dropdown__input-text {
  font-size: 1rem;
}
.dropdown__input-icon {
  width: 20px;
  height: 20px;
  transition: all .6s ease;
}

.dropdown__input-icon.active {
  transform: rotate(180deg);
}

.dropdown__options { 
  opacity: 0;
  pointer-events: none;
  overflow: hidden; 
  border: 1px solid #d6d5d5;
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  background: #fff;
  transition: all .6s ease;
}

.dropdown__options.active {
  opacity: 1;
  pointer-events: visible;
}

.dropdown__option { 
  color: #616060;
  padding: .3em 0em .3em .6em; 
  display: flex;
  align-items: center;
  transition: all .5s ease;
  cursor: pointer;
}

.dropdown__option.active{
  background: #092cca;
}

.dropdown__option:hover {
  background: #d6d5d5;
}
.dropdown__option-icon {
  display: none;
  margin-right: .5em;
  width: 20px;
  height: 20px;
}

.dropdown__option-text {
  font-size: 1rem;

}
</style>