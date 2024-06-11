// stores/counter.js
import { defineStore } from 'pinia';
import {ref} from "vue"
export const useTokenStore = defineStore('counter',()=>{
  const token = ref ("")
  function setToken(data){
    token.value = data
  }
  return {
    token,
    setToken
  }
}
});
