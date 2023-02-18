import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAutorizationAmoCRM = defineStore('authorizationAmoCRM', () => {
  const access_token = ref('');
  const base_domain = ref('');

  const url = 'https://test.gnzs.ru/oauth/get-token.php';
  const xClientID = '30878566';

  const getAccessToken = () => {
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': xClientID,     
      }
    })
    .then(res => {
      access_token.value = res.data.access_token; 
      base_domain.value = res.data.base_domain;
    })
    .catch(err => {
      console.log(err)
    })
    };

    return {
      access_token,
      base_domain,
      getAccessToken,
    }
})