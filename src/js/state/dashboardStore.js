import { createStore } from "framework7/types";
import Api from "@/js/server/api.js";

export const dashboardStore = createStore({
  state: {
    total_event: null,
    total_announcement: null,
    latest_announcement: null,
    announcements: [],
    events: [],
    event: null,
    eventID: null,
    event_evaluation_average: 0,
    event_evaluation_result: '',
    eventRef : null,
    evaluation_response : null,
    user_has_evaluation : false,
    total_attendees: 0,
    attendance_link : null,
    message : null
  },
  getters: {},
  actions: {
    async getDashboardData({ state }) {
      try {
        const response = await Api().get("/mobile/dashboard");

        state.total_event = response.data.total_event;
        state.total_announcement = response.data.total_announcement;
        state.events = [...response.data.events];
        state.latest_announcement = response.data.latest_mannouncement;
        state.announcements = [...response.data.announcements];
      } catch (error) {
        console.log(error);
      }
    },
    async getEventData({ state }) {
      try {
        const response = await Api().get(`/mobile/event/${state.eventID}`);

        const data = {
          ...response.data.event,
        };
        state.event_evaluation_average = response.data.event_evaluation_average
        state.event_evaluation_result = response.data.event_evaluation_result
        state.total_attendees = response.data.total_attendees
        state.user_has_evaluation = response.data.user_has_evaluation
        state.attendance_link = response.data.attendance_link
        state.event = data;

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async submitEvaluation({state}){
      try {




        console.log(state.evaluation_response, 'dashboard store');

        const response = await Api().post(`/mobile/event/rf=${state.event.ref}/evaluation`, state.evaluation_response);

        state.user_has_evaluation = true;

        state.message = response.data


        
      } catch (error) {

        if(error.state == 400){
          state.message = error.response.data
        }

        console.log(error);
      }
    }
  },
});
