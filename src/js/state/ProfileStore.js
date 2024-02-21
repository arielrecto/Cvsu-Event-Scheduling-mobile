import Api from "@/js/server/api.js";
import { createStore } from "framework7/types";

export const profileStore = createStore({
  state: {
    user: null,
    profile: null,
    message :  null,
    error : null,
  },
  getters: {},
  actions: {
    async getProfileData({ state }) {
      try {
        const user_id = localStorage.user_id;

        const response = await Api().get(`/mobile/student/${user_id}`);

        state.user = {
          ...response.data.user,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfile({state}){
        try {

            const user_id = localStorage.user_id;


            const data = {...state.profile}

            console.log(data, 'profile store');

            const response = await Api().put(`/mobile/student/${user_id}`, data);

            state.message = response.data


            console.log(response.data);

           
            
        } catch (error) {
            const status = error.response.status;

            if(status !== 403){
                state.error = {
                    ...error.response.data.error
                }
            }
            console.log(error);
        }
    }
  },
});
