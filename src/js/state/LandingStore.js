import { createStore } from "framework7/lite";
import Api from '@/js/server/api.js';

export const LandingStore = createStore({
    state : {
        announcement : null,
        events : [],
        isLoading : false
    },
    getters : {},
    actions : {
        async getData({state}) {
            try {

                state.isLoading = true
                const response = await Api().get('/mobile/landing');
                state.announcement = response.data.announcements
                state.events = [
                    ...response.data.events
                ]
                state.isLoading = false


            
            } catch (error) {
                console.log(error);
            }
        }
    }
})