<template>
    <home>
        <h1>Event Show</h1>
    </home>
</template>

<script setup>

import home from './home.vue';
import {f7} from 'framework7-vue'
import {defineProps, ref, onMounted} from 'vue';
import { LandingStore } from '../js/state/LandingStore';
const {state} = LandingStore
 
const props = defineProps({
    f7route : Object,
})

const isLoading = ref(false)


const getEventData = async () =>{


    isLoading.value = true;

    await LandingStore.dispatch('eventData')


    isLoading.value = false

}



onMounted(() => {
    state.eventID = props.f7route.params.id


    getEventData()
})

</script>