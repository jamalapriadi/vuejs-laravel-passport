<template>
  <div class='tesada'>
    <h1>This page is protected by auth</h1>
    <button @click="mulaibelajar">Lihat</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            token : localStorage.getItem('token')
        }
    },
    methods:{
        mulaibelajar(){
            axios.get('http://127.0.0.1:8000/api/academy')
                .then(response => {
                    console.log(response);
                })

            // axios({
            //     method: 'get', //you can set what request you want to be
            //     url: 'http://127.0.0.1:8000/api/academy',
            //     // data: {id: varID},
            //     headers: {
            //         Authorization: 'Bearer ' + this.token
            //     }
            // }).then(resp => {
            //     console.log(resp)
            // })
        }
    }
}
</script>