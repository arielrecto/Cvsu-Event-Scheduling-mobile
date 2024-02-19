<template>
    <Home>
        <f7-page>
            <template v-if="isLoading">
                <div class="loader">
                    <f7-preloader />
                </div>

            </template>

            <template v-else>
                <f7-block>
                    <f7-block-title large>Announcement</f7-block-title>
                    <div class="card">
                        <div class="card-header">
                            <span>{{ state.announcement?.title }}</span>
                        </div>
                        <div class="card-content p">
                            <span v-html="state.announcement?.description"></span>
                        </div>
                        <div class="card-footer">
                            <span>Posted at : {{ formatDate(state.announcement?.created_at) }} </span>
                        </div>
                    </div>
                </f7-block>
                <f7-block>
                    <f7-block-title large>
                        Events
                    </f7-block-title>
                    <f7-list>

                        <template v-for="event in state.events" :key="event.id">
                            <f7-card class="demo-card-header-pic">
                            <f7-card-header valign="bottom"
                                :style="`background-image: url(${event.image}); height : 10rem; background-position: top;
                                background-repeat : no-repeat; background-size: cover; font-weight:bold; text-transform:capitalize`">
                                {{ event.name }}</f7-card-header>
                            <f7-card-content>
                                <p class="date">Posted on {{ formatDate(event.created_at) }}</p>
                                <p>
                                    <span v-html="event.description"></span>
                                </p>
                                <p style="font-size:x-small; font-weight: bold;">Event Duration</p>
                                <p style="display: flex; align-items: center; gap: 2px; font-size: xx-small;">
                                    <span>
                                        {{ formatDate(event.start_date) }} - 
                                    </span>
                                    <span>
                                        {{ formatDate(event.end_date) }}
                                    </span>
                                </p>
                            </f7-card-content>
                            <f7-card-footer>
                                <f7-link>Like</f7-link>
                                <f7-link>Read more</f7-link>
                            </f7-card-footer>
                        </f7-card>

                        </template>

                      

                    </f7-list>
                </f7-block>
            </template>
        </f7-page>
    </Home>
</template>


<script setup>
import Home from './../components/layouts/base.vue';
import { onMounted, ref } from 'vue';
import { f7 } from 'framework7-vue';
import { LandingStore } from '../js/state/LandingStore';
import formatDate from '@/helpers/dateFormat.js'


const { state } = LandingStore

const isLoading = ref(false)

const getData = async () => {

    isLoading.value = true;

    await LandingStore.dispatch('getData');

    isLoading.value = false

}

onMounted(() => {

    getData()


})

</script>

<style>
.loader {
    display: flex;
    justify-content: center;
    align-content: center;
}

.p {
    padding: 5px;
}

h-50{
    height: 50%;
}

pos-center {
    object-position: center;
}
</style>