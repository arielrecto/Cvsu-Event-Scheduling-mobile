<template>
    <Home>
        <f7-page>
            <f7-block>

                <template v-if="isLoading">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <f7-preloader />
                    </div>
                </template>
                <template v-else>
                    <f7-block-title large>
                        Profile
                    </f7-block-title>
                    <div class="card card-outline-md demo-card-header-pic">
                        <div :style="`background-image:url(${state.user?.profile.image}); height: 15rem; background-size : cover;`"
                            valign="bottom" class="card-header">
                            <h1 style="text-transform: capitalize; font-size: larger; color: rgb(49, 49, 49);">
                                {{ state.user?.profile.last_name }}, {{ state.user?.profile.first_name }}</h1>
                        </div>
                        <div class="card-content card-content-padding">
                            <p class="date">Joined At: {{ formatDate(state.user?.created_at) }}</p>
                            <div class="grid grid-cols-3 gap">
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Last Name</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.last_name }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">First Name</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.first_name }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Middle Name</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.middle_name }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Gender</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.gender }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Age</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.age }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Section</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.section }}
                                        </p>
                                    </div>
                                </div>
                                <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                    <p style="font-size: x-small; color: #1c664c;">Course</p>
                                    <div style="display: flex; justify-content: space-between;">
                                        <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                            {{ state.user?.profile.course }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                <p style="font-size: x-small; color: #1c664c;">Address</p>
                                <div style="display: flex; justify-content: space-between;">
                                    <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                        {{ state.user?.profile.address }}
                                    </p>
                                </div>
                            </div>
                            <div style="display :flex; flex-direction: column; text-transform: capitalize;">
                                <p style="font-size: x-small; color: #1c664c;">Valid Documents</p>
                                <div style="display: flex; justify-content: space-between;">
                                    <img :src="state.user?.profile.valid_documents" style="height: 4rem; width: auto; object-position: center;"/>
                                    <!-- <p style="display: flex;align-items: center; gap: 2px; font-size: xx-small;">
                                        {{ state.user?.profile.address }}
                                    </p> -->
                                </div>
                            </div>
                        </div>
                       <div class="card-footer"><a class="link"></a><f7-link href="/dashboard/profile/edit" class="link">Edit</f7-link></div> 
                    </div>
                </template>
            </f7-block>
        </f7-page>
    </Home>
</template>


<script setup>

import Home from '@/pages/home.vue';
import { profileStore } from '@/js/state/ProfileStore.js'
import { onMounted, ref } from 'vue';
import formatDate from '@/helpers/dateFormat.js'
const { state } = profileStore;



const isLoading = ref(false)



const getProfileData = async () => {


    isLoading.value = true

    await profileStore.dispatch('getProfileData');





    isLoading.value = false

    console.log(state.user);

}



onMounted(() => {
    getProfileData()
})





</script>