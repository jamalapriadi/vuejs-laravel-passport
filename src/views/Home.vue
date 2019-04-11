<template>
  <div>
    <h1>Belajar Vuejs Auth with Laravel Passport</h1>
    
    <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
    <span v-if="isLoggedIn==false">
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>
