<template>
    <section>
      <div class="form"><br>
        <h1>{{ title }}</h1><br>
        <form >
          <input type="text" id="name" placeholder="NAME" v-model="name" required><br><br>
          <input type="text" id="email" placeholder="EMAIL" v-model="email" required><br><br>
          <input type="password" id="password" placeholder="PASSWORD" v-model="password" required><br><br><br>
          <input type="submit" value="SIGN UP" @click="registerUser">
        </form>
      </div>
    </section>
  </template>

  <script>
  export default {
    // name: "SignUpForm",
    props: {
      title: {
        type: String,
        default: "Sign up",
      },
    },
    data() {
      return {
        register: {
          name: "",
          email: "",
          password: ""
      }
      };
    },
    methods: {
      async registerUser() {
        try {
        let response = await this.$http.post("/user/Signup", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/login");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
      }
    },
  };
  </script>
  
  <style scoped>
    section {
      background: url("@/assets/backIcon.png") no-repeat;
      background-position: center;
      background-size: cover;
      height: 100vh;
      width: 100%;
      display: flex;
    }
  
    /* section {
      display: flex;
    } */
  
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