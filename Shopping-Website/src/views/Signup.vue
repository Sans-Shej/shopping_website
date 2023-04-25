<template>
  <v-app>
      <section>
          <v-container class="center-screen">
              <v-card class="container-class">

                  <form @submit.prevent="submit">
                      <h2> Signup </h2>
                      <v-text-field v-model="name.value.value" :counter="30" :error-messages="name.errorMessage.value"
                          label="Name" class="textfield"></v-text-field>

                      <v-text-field v-model="phone.value.value" :counter="10" :error-messages="phone.errorMessage.value"
                          label="Username"></v-text-field>

                      <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                          label="E-mail" ></v-text-field>

                      <v-text-field type="password" v-model="password.value.value" :counter="32"
                          :error-messages="password.errorMessage.value" label="Password"></v-text-field>

                      <v-text-field type="password" v-model="confirmpassword.value.value"
                          :error-messages="confirmpassword.errorMessage.value" label="Confirm Password"></v-text-field>


                      <v-btn class="me-10" type="submit">
                          submit
                      </v-btn>

                      <v-btn @click="handleReset">
                          clear
                      </v-btn>

                  </form>
              </v-card>
          </v-container>
      </section>
  </v-app>
</template>

<script>

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'

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



      const submit = handleSubmit(values => {
          alert(JSON.stringify(values, null, 2))
      })


      return { name, phone, confirmpassword, password, username, email, select, checkbox, submit, handleReset }
  },
  methods: {
      async init() {
          this.signup = await axios.get('http://localhost:5000/api/users/register')
      },

      submit() {
          router.post('/register', (req, res) => {
              let {
                  name,
                  username,
                  email,
                  password,
                  confirm_password
              } = req.body
              if (password !== confirm_password) {
                  return res.status(400).json({
                      msg: "Passwords do not match."
                  });
              }

              // Check for unique username
              User.findOne({
                  username: username
              }).then(user => {
                  if (user) {
                      return res.status(400).json({
                          msg: "Username is already taken."
                      });
                  }
              })

              // Check for unique email
              User.findOne({ email: email }).then(user => {
                  if (user) {
                      return res.status(400).json({
                          msg: "Email is already registered. Did you forget your password?"
                      });
                  }
              });

              // If no error, then data is valid and we can register the user
              let newUser = new User({
                  name,
                  username,
                  password,
                  email
              });

              // Hash the password
              bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser.save().then(user => {
                          return res.status(201).json({
                              msg: "User is now registered!!!"
                          });
                      });
                  });
              });
          });
      }
  }


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

section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  min-height: 100vh;
  width: 100%;
  background-image: url("@/assets/img/wardrobe.png");
  background-position: center;
  background-size: cover;

}

.container-class {
  position: relative;
  width: 500px;
  height: 500px;
  background: transparent;
  border: 2px solid rgba(255, 253, 253, 0.753);
  border-radius: 20px;
  backdrop-filter: blur(60px);
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 2em;
  color: #ffffff;
  text-align: center;
  font-weight:bold;
}

form {
  color: white;
  width: 60%;

}
</style>