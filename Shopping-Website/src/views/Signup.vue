<template>
    <section>
      <div class="form"><br>
        <h1>{{ title }}</h1><br>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="name" placeholder="NAME"  required><br><br>
          <input type="text" v-model="email" placeholder="EMAIL"  required><br><br>
          <input type="password" v-model="password" placeholder="PASSWORD"  required><br><br><br>
          <button  value="SIGN UP" >Sign Up</button>
          <!-- <input type="submit" value="SIGN UP" @submit.prevent="registerUser"> -->
        </form>
      </div>
    </section>
  </template>

  <script>
  import axios from 'axios'
  export default {
    // name: "Register",
    props: {
      title: {
        type: String,
        default: "Sign up",
      },
    },
    data() {
      return {
        // register: {
          name: "",
          email: "",
          password: ""
      // }
      };
    },
    methods: {
      handleSubmit(){
        const data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        axios.post('http://localhost:8080/Shopping-Website/Signup', data)
          .then(
            res => {
              console.log(res)
            }
          ).catch(
            err => {
              console.log(err)
            }
          )
        
      },
      async registerUser() {
        
      }
    },
  };
  </script>
  
  <style scoped>
    section {
      background: url("@/assets/img/heroAbout.jpg") no-repeat;
      background-position: center;
      background-size: cover;
      height: 100vh;
      width: 100%;
      display: flex;
    }
  
    section {
      display: flex;
    }
  
    h1 {
      font-family: sans-serif;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      color: rgb(254, 254, 254);
      text-transform: uppercase;
    }
  
    .form {
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%,-50%);
      border: 2px solid #ffffff;
      background: transparent;
      backdrop-filter: blur(60px);
      width: 400px;
      height: 450px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 0 20px;
    }
  
    input {
      margin-top: 20px;
      padding: 15px;
      height: 35px;
      width: 330px;
      font-size: 14px;
      border-radius: 6px;
      outline: none;
      border: none;
      position: relative;
    }
  
    input[type="submit"] {
      font-weight: bold;
      background: deepskyblue;
      color: #fff;
      letter-spacing: 2px;
      height: 45px;
      cursor: pointer;
    }
  </style>