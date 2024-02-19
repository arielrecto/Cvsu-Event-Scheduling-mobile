<template>
    <Home>
        <f7-page name="login">
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>

                <div class="item-content item-input">
                    
                    <div class="item-inner">
                        <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template>
                    
                        <div class="item-title item-label">E-mail</div>
                        <div class="item-input-wrap">
                            <input name="email" type="email" v-model="username" placeholder="Your e-mail" />
                            <template v-if="'email' in error">
                                <p class="error">{{ error.email[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <!-- <f7-list-input type="email" name="username" placeholder="Email"
                    v-model:value="username" required></f7-list-input> -->

                <div class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Password</div>
                        <div class="item-input-wrap">
                            <input name="password" type="password" v-model="password" placeholder="Password" />
                            <template v-if="'password' in error">
                                <p class="error">{{ error.password[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>

                <!-- <f7-list-input type="password" name="password" placeholder="Your password" v-model:value="password"
                    required></f7-list-input> -->
                <!-- <template v-if="'password' in error">
                    <p class="error">{{ error.password[0] }}</p>
                </template> -->

            </f7-list>
            <f7-list>
                <f7-list-button title="Sign In" @click="submit"></f7-list-button>
                <f7-block-footer>
                    Don't Have Account<br>Click <f7-link href="/register/">"create Account"</f7-link>
                </f7-block-footer>
            </f7-list>
        </f7-page>
    </Home>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import Home from './../home.vue';

import {f7} from 'framework7-vue'




import { authStore } from '@/js/state/AuthenticationStore.js'

const { state } = authStore;

const username = ref('')
const password = ref('')


const error = ref({});
const message = ref({})




const submit = async () => {


    state.username = username;
    state.password = password;

    error.value = {}

    state.message = null;


    await authStore.dispatch('login');


    if(state.message !== null){ 

        message.value = {
            ...state.message
        }
    
        f7.dialog.alert(message.value.message)

       f7.params.router.navigation('/home/')
    }

    if (authStore.state.error !== null) {
        error.value = {
            ...state.error
        }
    }


}


// onMounted(() => {
//     const appInstance = app._context.app;
//     console.log(appInstance.);
// })

</script>

<style>
.error {
    color: red;
    font-size: xx-small;
}
</style>