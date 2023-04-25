<template>
  <div>
    <section>
      <div class="form-box">
        <div class="form-value">
          <form @click.prevent="loginUser">
            <h2>Login</h2>
            <div class="inputbox">
              <input id="email" type="#" name="email" v-model="email" required>
              <label for="">Email</label>
            </div>
            <div class="inputbox">
            
              <input id="password" type="password" name="password" v-model="password" required>
              <label for="">Password</label>
            </div>
            <br />
            <button id>Log in</button>
            <div class="register">
              <br /> 
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


  export default {
    name: 'LoginPage',
    components: {},
    data() {
      return {
        username : "",
        password : ""
      };
    },
    methods: {
      loginUser(){
        console.log(this.username, this.password);
      }
    },
 
    
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  *{
      margin: 0;
      padding: 0;
      font-family: 'poppins',sans-serif;
  }
  section{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      background-image: url("@/assets/img/heroAbout.jpg");
      background-position: center;
      background-size: cover;
      
  }
  .form-box{
      position: relative;
      width: 400px;
      height: 450px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      backdrop-filter:blur(60px);
      display: flex;
      justify-content: center;
      align-items: center;

  }
  h2{
      font-size: 2em;
      color: #ffffff;
      text-align: center;
  }
  .inputbox{
      position: relative;
      margin: 30px 0;
      width: 310px;
      border-bottom: 2px solid #000000;
  }
  .inputbox label{
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      color: #ffffff;
      font-size: 1em;
      pointer-events: none;
      transition: .4s;
  }
  input:focus ~ label,
  input:valid ~ label{
  top: -5px;
  }
  .inputbox input {
      width: 100%;
      height: 50px;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      padding:0 35px 0 5px;
      color: #ffffff;
  }
  .inputbox ion-icon{
      position: absolute;
      right: 8px;
      color: #f7f7f7;
      font-size: 1.2em;
      top: 20px;
  }
  .forget{
      margin: -15px 0 15px ;
      font-size: .9em;
      color: #f2f2f4;
      display: flex;
      justify-content: space-between;  
  }

  .forget label input{
      margin-right: 3px;
      
  }
  .forget label a{
      color: #0015fd;
      text-decoration: none;
      
  }
  .forget label a:hover{
      text-decoration: underline;
  }
  button{
      width: 100%;
      height: 40px;
      border-radius: 40px;
      background: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
  }
  .register{
      font-size: .9em;
      color: #ffffff;
      text-align: center;
      margin: 25px 0 10px;
  }
  .register p a{
      text-decoration: none;
      color: #0026e1;
  }
  .register p a:hover{
      text-decoration: underline;
  }
</style>