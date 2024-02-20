<template>
    <home>
        <f7-page>
            <template v-if="isLoading">
                <f7-block style="display: flex; align-content: center; justify-content: center;">
                    <f7-preloader />
                </f7-block>
            </template>

            <template v-else>
                <f7-block style="display: flex; flex-direction: column; gap: 2rem;">
                    <f7-block-title large style="color:#12372A; font-weight: bold;">Event - <span
                            style="text-transform: capitalize; ">{{ state.event?.name }}</span></f7-block-title>


                    <div :style="`background-image: url(${state.event?.image}); height: 10rem; background-size:cover;`">
                        <div
                            style="display: flex; justify-content: center; align-items: center; backdrop-filter: blur(2px);height: 100%; color:#12372A; text-transform: capitalize;">
                            <h1>{{ state.event?.name }}</h1>
                        </div>
                    </div>

                    <div class="card" style="padding: 1rem;">
                        <p style="font-size: small; color: #1c664c;">Event Information</p>
                        <p style="font-size: x-small; color: #1c664c;">name</p>
                        <div class="card-header">
                            <span
                                style="text-align: center; font-weight: bold; color: #12372A; text-transform: capitalize;">{{
                                    state.event?.name }}</span>
                        </div>
                        <div class="card-content" style="padding: 2px; display: flex; flex-direction: column;">
                            <p style="font-size: x-small; color: #1c664c;">Event Duration</p>
                            <div style="display: flex; justify-content: space-between;">
                                <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                    <span>{{ formatDate(state.event?.start_date) }}</span> -
                                    <span>{{ formatDate(state.event?.end_date) }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="card-content" style="padding: 2px; display: flex; flex-direction: column;">
                            <p style="font-size: x-small; color: #1c664c;">Time: </p>
                            <div style="display: flex; justify-content: space-between;">
                                <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                    <span>{{ formatTime(state.event?.start_time) }}</span> -
                                    <span>{{ formatTime(state.event?.end_time) }}</span>
                                </p>
                            </div>
                            <p style="font-size: x-small; color: #1c664c;">Description: </p>
                            <div>
                                <p v-html="state.event?.description"></p>
                            </div>
                            <p style="font-size: x-small; color: #1c664c;">Location: </p>
                            <mapRender :location="state.event?.location" ></mapRender>
                        </div>  
                        <p style="font-size: small; color: #1c664c;">Speaker/Host Information</p>
                        <div class="card-content" style="padding: 2px; display: flex; flex-direction: column;">
                          <div style="display: flex; align-content: center;gap : 5px">
                            <img :src="state.event?.speaker.image" alt="" srcset="" style="height: 5rem; object-position: center;">
                            <div style="display: flex; flex-direction : column;">
                                <p style="font-size: x-small; color: #1c664c;">fullName </p>
                                <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small; text-transform: capitalize;">
                                    <span>{{ state.event?.speaker.last_name}}</span>,
                                    <span>{{state.event?.speaker.first_name }}</span>
                                </p>
                            </div>
                          </div>
                        </div>  
                    </div>
                </f7-block>
            </template>
        </f7-page>

    </home>
</template>

<script setup>

import home from './home.vue';
import { f7 } from 'framework7-vue'
import { defineProps, ref, onMounted, defineAsyncComponent} from 'vue';
import { LandingStore } from '../js/state/LandingStore';
import formatDate from '@/helpers/dateFormat.js';
import formatTime from '@/helpers/timeFormat.js';
const { state } = LandingStore

const props = defineProps({
    f7route: Object,
})

const mapRender = defineAsyncComponent(() => import('@/components/mapRender.vue'))



const isLoading = ref(false)

const mapElement = ref(null);



const getEventData = async () => {


    isLoading.value = true;

    await LandingStore.dispatch('eventData')


    isLoading.value = false

}


// const mapRender = (lat, lng) => {
//     console.log(lat, lng);
// }




onMounted(() => {
    state.eventID = props.f7route.params.id

    getEventData()
})

</script>