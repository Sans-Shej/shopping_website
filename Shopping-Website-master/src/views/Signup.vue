<template>
    <section>
      <div class="form">
        <h1>{{ title }}</h1>
        <form>
          <input type="text" placeholder="NAME" v-model="name"><br>
          <input type="text" placeholder="USERNAME" v-model="username"><br>
          <input type="text" placeholder="EMAIL" v-model="email"><br>
          <input type="password" placeholder="PASSWORD" v-model="password"><br>
          <input type="password" placeholder="CONFIRM PASSWORD" v-model="confirmPassword"><br>
          <input type="submit" value="SIGN UP" @click.prevent="submitForm">
        </form>
      </div>
    </section>
  </template>

  <script>
  export default {
    name: "SignUpForm",
    props: {
      title: {
        type: String,
        default: "Sign up",
      },
    },
    data() {
      return {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      submitForm() {
        const formData = {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        console.log(formData);
        // Here you can send the form data to the server
      },
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
      color: rgb(254, 254, 254);
      text-transform: uppercase;
    }
  
    .form {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      border: 2px solid #ffffff;
      background: transparent;
      backdrop-filter: blur(60px);
      width: 400px;
      height: 500px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 0 20px;
    }
  
    input {
      margin-top: 20px;
      padding: 3px;
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