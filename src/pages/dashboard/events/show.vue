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

                            <div class="grid grid-cols-2 grid-gap">
                                <div style="background-color: #12372A; height: auto; padding: 5px; border-radius: 10%;">
                                    <h1
                                        style="font-size: xx-small; font-weight: bold; color: #FBFADA; letter-spacing: 0.025em;">
                                        Evaluation Average
                                    </h1>
                                    <h1 style="text-align: center; width: 100%; color: #FBFADA; font-size: large;">
                                        {{ state.event_evaluation_average }}
                                    </h1>
                                </div>
                                <div style="background-color: #436850; height: auto; padding: 5px; border-radius: 10%;">
                                    <h1
                                        style="font-size: xx-small; font-weight: bold; color: #FBFADA; letter-spacing: 0.025em;">
                                        Evaluation Result
                                    </h1>
                                    <h1 style="text-align: center; width: 100%; color: #FBFADA; font-size: large;">
                                        {{ state.event_evaluation_result }}
                                    </h1>
                                </div>
                            </div>
                            <p style="font-size: x-small; color: #1c664c;">Location: </p>
                            <mapRender :location="state.event?.location"></mapRender>
                        </div>
                        <p style="font-size: small; color: #1c664c;">Speaker/Host Information</p>
                        <div class="card-content" style="padding: 2px; display: flex; flex-direction: column;">
                            <div style="display: flex; align-content: center;gap : 5px">
                                <img :src="state.event?.speaker.image" alt="" srcset=""
                                    style="height: 5rem; object-position: center;">
                                <div style="display: flex; flex-direction : column;">
                                    <p style="font-size: x-small; color: #1c664c;">fullName </p>
                                    <p
                                        style="display: flex;align-items: center; gap: 2px; font-size: xx-small; text-transform: capitalize;">
                                        <span>{{ state.event?.speaker.last_name }}</span>,
                                        <span>{{ state.event?.speaker.first_name }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <template v-if="evaluation_form !== null">

                            <p>
                                <f7-button fill popup-open=".demo-popup" small style="background-color: #12372A;">Open
                                    Evaluation Form</f7-button>
                            </p>
                            <p style="font-size: x-small; color: #1c664c;">
                                Click the link below for attendance
                            </p>
                            <p>
                                <f7-link :href="state.attendance_link" external>Attendance</f7-link>
                            </p>
                            <f7-popup v-model:opened="popupOpened" class="demo-popup">
                                <f7-page>
                                    <f7-navbar :title="`Evaluation (${state.event?.name})`">
                                        <f7-nav-right>
                                            <f7-link popup-close>Close</f7-link>
                                        </f7-nav-right>
                                    </f7-navbar>

                                    <template v-if="!state.user_has_evaluation">
                                        <f7-block>
                                        <f7-block-title>
                                            {{ evaluation_form?.form?.title }}
                                        </f7-block-title>
                                        <p>
                                            <template v-for="field in evaluation_form?.form?.fields" :key="field.localId">
                                                <template v-if="field.input_type !== 'radio'">

                                                    <div class="form">
                                                        <p>{{ field.question }}</p>
                                                        <input class="input" :type="field.input_type" placeholder="text"
                                                            v-model="field.data" />
                                                        <span class="input-border"></span>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <p>{{ field.question }}</p>

                                                    <div class="radio-container">
                                                        <template v-for="i in parseInt(field.radio_max)">
                                                            <div class="radio-wrapper">
                                                                <label class="radio-button">
                                                                    <input id="option" :name="`radio-group${field.localId}`"
                                                                        type="radio" v-model="field.data" :value="i">
                                                                    <p class="radio-checkmark"></p>
                                                                    <p class="radio-label">{{ i }}</p>
                                                                </label>
                                                            </div>
                                                        </template>
                                                    </div>
                                                </template>
                                            </template>
                                        </p>
                                        <p>
                                            <f7-button fill small style="background-color: #12372A;"
                                                @click="submit">Submit</f7-button>
                                        </p>
                                        <!-- <p>
                                        Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit
                                        nisl
                                        ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
                                        quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
                                        est in
                                        eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
                                        Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
                                        pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc
                                        eros,
                                        convallis blandit dui sit amet, gravida adipiscing libero.
                                    </p> -->
                                    </f7-block>
                                    </template>

                                    <template v-else>
                                        <f7-block>
                                            <div style="height: 10rem; widows: 100%; display: flex; justify-content: center;
                                             align-items: center; backgrrgb(226, 226, 226)lor: #b3b3b3; border-radius: 10%; padding: 2rem;">
                                                <h1 style="font-size: medium;">Already Response</h1>
                                            </div>
                                        </f7-block>
                                    </template>
                                </f7-page>
                            </f7-popup>

                        </template>

                    </div>
                </f7-block>
            </template>
        </f7-page>

    </home>
</template>

<script setup>

import home from '@/pages/home.vue';
import { f7 } from 'framework7-vue'
import { defineProps, ref, onMounted, defineAsyncComponent } from 'vue';
import { dashboardStore } from '@/js/state/dashboardStore.js';
import formatDate from '@/helpers/dateFormat.js';
import formatTime from '@/helpers/timeFormat.js';
const { state } = dashboardStore

const props = defineProps({
    f7route: Object,
})

const mapRender = defineAsyncComponent(() => import('@/components/mapRender.vue'))



const isLoading = ref(false)

const mapElement = ref(null);
const popupOpened = ref(false)
const evaluation_form = ref(null);
const message = ref(null);



const getEventData = async () => {


    isLoading.value = true;

    await dashboardStore.dispatch('getEventData')


    isLoading.value = false


    if (state.event?.evaluation_form !== null) {

        const form = {
            ...JSON.parse(state.event?.evaluation_form?.form)
        }

        evaluation_form.value = {
            ...state.event?.evaluation_form,
            form: form
        }

    }





    console.log(evaluation_form.value);

}


const submit = async () => {



    const average = calculateAverage();


    state.message = null

    console.log(average);

    const data = {
        form: {
            ...evaluation_form.value
        },
        average: average,
        result: 'result',
        event_id: state.event.id
    }

    state.evaluation_response = data;

    await dashboardStore.dispatch('submitEvaluation')

    popupOpened.value = false

    if (state.message !== null) {


        console.log(state.message);

        message.value = {
            ...state.message
        }

        f7.dialog.alert(message.value.message)

    }

}


const calculateAverage = () => {

    const totalData = evaluation_form.value.form.fields.reduce((sum, field) => {
        if (field.input_type !== 'text') {
            const numericValue = parseFloat(field.data);
            if (!isNaN(numericValue)) {
                return sum + numericValue;
            }
        }
        return sum;
    }, 0);

    const average = totalData / evaluation_form.value.form.fields.length;
    return average;
    // Default value if there is no form data
}


// const mapRender = (lat, lng) => {
//     console.log(lat, lng);
// }




onMounted(() => {
    state.eventID = props.f7route.params.id

    getEventData()
})

</script>


<style>
.radio-container {
    margin: 0 auto;
    max-width: 300px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 5px;
}

.radio-wrapper {
    margin-bottom: 20px;
}

.radio-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.radio-button:hover {
    transform: translateY(-2px);
}

.radio-button input[type="radio"] {
    display: none;
}

.radio-checkmark {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 2px solid #333;
    border-radius: 50%;
}

.radio-checkmark:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
}

.radio-button input[type="radio"]:checked~.radio-checkmark:before {
    transform: translate(-50%, -50%) scale(1);
}

.radio-label {
    font-size: 16px;
    font-weight: 600;
}



.form {
    --width-of-input: 200px;
    --border-height: 1px;
    --border-before-color: rgba(221, 221, 221, 0.39);
    --border-after-color: #5891ff;
    --input-hovered-color: #4985e01f;
    position: relative;
    width: var(--width-of-input);
}

/* styling of Input */
.input {
    color: #333;
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);
}

/* styling of animated border */
.input-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 0.3s;
}

/* Hover on Input */
input:hover {
    background: var(--input-hovered-color);
}

input:focus {
    outline: none;
}

/* here is code of animated border */
input:focus~.input-border {
    width: 100%;
}

/* === if you want to do animated border on typing === */
/* remove input:focus code and uncomment below code */
/* input:valid ~ .input-border{
  width: 100%;
} */
</style>