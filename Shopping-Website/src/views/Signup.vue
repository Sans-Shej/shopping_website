<template>
    
    <v-app>
        <v-container class="center-screen">
            <v-card width=400 height="auto" class="container-class" flat color="transparent">
                <h2> Signup </h2>
                <form @submit.prevent="submit">
                    <v-text-field v-model="name.value.value" :counter="30" :error-messages="name.errorMessage.value"
                        label="Name"></v-text-field>

                    <v-text-field v-model="phone.value.value" :counter="10" :error-messages="phone.errorMessage.value"
                        label="Username"></v-text-field>

                    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                        label="E-mail"></v-text-field>

                    <v-text-field type="password" v-model="password.value.value" :counter="32"
                        :error-messages="password.errorMessage.value" label="Password"></v-text-field>

                    <v-text-field type="password" v-model="confirmpassword.value.value"
                        :error-messages="confirmpassword.errorMessage.value" label="Confirm Password"></v-text-field>


                    <v-btn class="me-4" type="submit">
                        submit
                    </v-btn>

                    <v-btn @click="handleReset">
                        clear
                    </v-btn>

                </form>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

export default {
    setup() {
        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 2) return true

                    return 'Name needs to be at least 2 characters.'
                },


                phone(value) {
                    if (value?.length >= 2) return true

                    return 'Phone number needs to be at least 2 Characters.'
                },
                email(value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },
                password(value) {
                    if (value?.length >= 8) return true

                    return 'Must be a valid password.'
                },

                confirmpassword(value) {
                    if (password.value.value === value) return true
                    return "Passwords don't match."
                },

                select(value) {
                    if (value) return true

                    return 'Select an item.'
                },
                checkbox(value) {
                    if (value === '1') return true

                    return 'Must be checked.'
                },
            },
        })
        const name = useField('name')
        const username = useField('name')
        const phone = useField('phone')
        const email = useField('email')
        const password = useField('password')
        const confirmpassword = useField('confirmpassword')
        const select = useField('select')
        const checkbox = useField('checkbox')

        const items = ref([
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ])

        const submit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2))
        })


        return { name, phone, confirmpassword, password, username, email, select, checkbox, items, submit, handleReset }
    },

  
}

</script>

<style scoped>
.center-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}
</style>