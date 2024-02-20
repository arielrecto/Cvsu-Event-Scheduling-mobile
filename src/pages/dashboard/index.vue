<template>
    <Home>
        <f7-page>

            <template v-if="isLoading">
                <div style="display: flex; align-items: center; justify-content: center;">
                    <f7-preloader/>
                </div>
            </template>

            <template v-else>
                <f7-block>
                <f7-block-title large>
                    Dashboard
                </f7-block-title>
                <div class="grid grid-cols-2 grid-gap">
                    <div style="background-color: #12372A; height: auto; padding: 5px; border-radius: 10%;">
                        <h1 style="font-size: small; font-weight: bold; color: #FBFADA; letter-spacing: 0.25em;">
                            Events
                        </h1>
                        <h1 style="text-align: center; width: 100%; color: #FBFADA; font-size: xx-large;">
                           {{ state.total_event }}
                        </h1>
                    </div>
                    <div style="background-color: #436850; height: auto; padding: 5px; border-radius: 10%;">
                        <h1 style="font-size: small; font-weight: bold; color: #FBFADA; letter-spacing: 0.25em;">
                            Announcement
                        </h1>
                        <h1 style="text-align: center; width: 100%; color: #FBFADA; font-size: xx-large;">
                            {{ state.total_announcement }}
                        </h1>
                    </div>
                </div>
            </f7-block>
            <f7-block>
                <f7-block-title>Events</f7-block-title>
                <f7-list media-list dividers-ios strong-ios outline-ios>
                    <template v-for="event in state.events" :key="event.id">
                        <f7-list-item :link="`/dashboard/events/${event.id}`" :title="event.name"  :subtitle="`Hosted by: ${event.speaker.last_name}, ${event.speaker.first_name}`">
                        <template #media>
                            <img style="border-radius: 8px" :src="event.image"
                                width="80" />
                        </template>
                    </f7-list-item>
                    </template>
                </f7-list>
            </f7-block>
            </template>           
        </f7-page>
    </Home>
</template>

<script setup>
import Home from '@/pages/home.vue'
import {onMounted, ref} from 'vue'
import {dashboardStore} from '@/js/state/dashboardStore.js'
import formatDate from '@/helpers/dateFormat.js';

const {state} = dashboardStore;


const isLoading = ref(false);


const getDashboardData = async () => {

    isLoading.value = true;

    await dashboardStore.dispatch('getDashboardData');

    isLoading.value = false

}

onMounted(() => {
    getDashboardData()
})


</script>


<style scoped>
.header {
    grid-template-columns: repeat(2, minmax(0, 1fr))
}
</style>