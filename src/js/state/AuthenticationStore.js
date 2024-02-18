import { createStore } from "framework7/lite";
import Api from "@/js/server/api.js";

export const authStore = createStore({
  state: {
    username: "",
    password: "",
    error : null,
    status : null,
    registerData : {
      email : '',
      password : '',
      password_confirmation : null,
      name : '',
      last_name : '',
      first_name : '',
      middle_name : '',
      age : '',
      gender : '',
      section : '',
      course : '',
      address : '',
      image : null,
      valid_documents : null,
      student_id : ''
    },
    message : null
  },
  getters: {},
  actions: {
    async login({ state }) {
      try {
        const data = {
          email: state.username.value,
          password: state.password.value,
        };
        const response = await Api().post("/mobile/login", data);

        localStorage.setItem('token', response.data.token);


        state.status = response.status

        state.message = response.data;


        console.log(response.data);
      } catch (error) {
        const status = error.response.status;

        if(status !== 403){
            state.error = {
                ...error.response.data.error
            }
        }
      }
    },
    async logout({state}){
        try {
            
            const response = await Api().post('mobile/logout');

            state.message = response.data;

        } catch (error) {
            console.log(error);
        }
    },
    async register({state}){
      try {

        state.message = null;

        const response = await Api().post('mobile/student', state.registerData)

        state.message = response.data;
        
      } catch (error) {
        const status = error.response.status;
        if(status !== 403){
            state.error = {
                ...error.response.data.error
            }
        }
      }
    }
  },
});
