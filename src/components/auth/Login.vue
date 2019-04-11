<template>
 <div>
    <v-layout justify-center>
        <v-flex xs10 sm10 md8 lg6>
            <form class="login" @submit.prevent="login">
                    <h1>Sign in</h1>
                    
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Email"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>
                    
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 6 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-btn block color="secondary" dark @click="login">Login</v-btn>
            </form>
        </v-flex>
    </v-layout>
 </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'
    export default {
        mixins: [validationMixin],
        validations: {
            email: { required, email }
        },
        data(){
        return {
                show1: false,
                email : "",
                password : "",
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 6 || 'Min 6 characters',
                    emailMatch: () => ('The email and password you entered don\'t match')
                }
            }
        },
        computed:{
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },
        methods: {
            login: function () {
                let username = this.email 
                let grant_type = 'password'
                let password = this.password
                let client_id = 2
                let client_secret = 'TxFiTnUOB5Fo53Ppsd5wB8ue28iQS2n8XGOB3jyW'
                let scope = ''
                // Client ID: 2
                // Client secret: TxFiTnUOB5Fo53Ppsd5wB8ue28iQS2n8XGOB3jyW
                this.$store.dispatch('login', { username, password, client_id, client_secret, scope, grant_type })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>