<template>
    <Home>
        <f7-page name="login">
            <f7-login-screen-title>Profile Edit</f7-login-screen-title>
            <f7-list form id="registerForm">
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">username</div>
                        <div class="item-input-wrap">
                            <input type="email" placeholder="username" name="name" v-model="data.name" />
                            <template v-if="'name' in error">
                                <p class="error">{{ error.name[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">E-mail</div>
                        <div class="item-input-wrap">
                            <input type="email" placeholder="Your e-mail" name="email" v-model="data.email" />
                            <template v-if="'email' in error">
                                <p class="error">{{ error.email[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Password</div>
                        <div class="item-input-wrap">
                            <input type="password" placeholder="Password" name="password" v-model="data.password" />
                            <template v-if="'password' in error">
                                <p class="error">{{ error.password[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Confirm Password</div>
                        <div class="item-input-wrap">
                            <input type="password" placeholder="Confirm Password" name="password_confirmation"
                                v-model="data.password_confirmation" />
                            <!-- <template v-if="'email' in error">
                                <p class="error">{{ error.email[0] }}</p>
                            </template> -->
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Last Name</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="Last Name" v-model="data.last_name" />
                            <template v-if="'last_name' in error">
                                <p class="error">{{ error.last_name[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">First Name</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="First Name" v-model="data.first_name" />
                            <template v-if="'first_name' in error">
                                <p class="error">{{ error.first_name[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Middle Name(optional)</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="Middle Name" v-model="data.middle_name" />
                            <!-- <template v-if="'email' in error">
                                <p class="error">{{ error.email[0] }}</p>
                            </template> -->
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Student ID</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="Ex: 20-12-1243" v-model="data.student_id" />
                            <template v-if="'student_id' in error">
                                <p class="error">{{ error.student_id[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Age</div>
                        <div class="item-input-wrap">
                            <input type="number" placeholder="Age" v-model="data.age" />
                            <template v-if="'age' in error">
                                <p class="error">{{ error.age[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Gender</div>
                        <div class="item-input-wrap">
                            <select v-model="data.gender">
                                <option value="male" selected>Male</option>
                                <option value="female">female</option>
                                <!-- <option value="pear">Pear</option>
                                <option value="orange">Orange</option>
                                <option value="melon">Melon</option>
                                <option value="peach">Peach</option>
                                <option value="banana">Banana</option> -->
                            </select>
                            <!-- <input type="number" placeholder="gender" /> -->
                            <template v-if="'gender' in error">
                                <p class="error">{{ error.gender[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Section</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="section" v-model="data.section" />
                            <template v-if="'section' in error">
                                <p class="error">{{ error.section[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">Course</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="course" v-model="data.course" />
                            <template v-if="'section' in error">
                                <p class="error">{{ error.course[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>

                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">address</div>
                        <div class="item-input-wrap">
                            <input type="text" placeholder="address" v-model="data.address" />
                            <template v-if="'address' in error">
                                <p class="error">{{ error.address[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">image (JPG, JPEG)</div>
                        <div class="item-input-wrap">
                            <input type="file" placeholder="address" @change="imageUploadHandler($event)" />
                            <template v-if="'image' in error">
                                <p class="error">{{ error.image[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <div class="item-content item-input">
                    <div class="item-inner">
                        <!-- <template v-if="'credentials' in error">
                        <p class="error">{{ error.credentials }}</p>
                    </template> -->
                        <div class="item-title item-label">valid Documents(JPG, JPEG)</div>
                        <div class="item-input-wrap">
                            <input type="file" placeholder="address" @change="validDocumentsHandler($event)" />
                            <template v-if="'valid_documents' in error">
                                <p class="error">{{ error.valid_documents[0] }}</p>
                            </template>
                            <!-- <span class="input-clear-button"></span> -->

                        </div>
                    </div>
                </div>
                <!-- <f7-list-input type="email" name="username" placeholder="Your username"></f7-list-input>
                <f7-list-input type="password" name="password" placeholder="Your password"></f7-list-input> -->
            </f7-list>
            <f7-list>
                <f7-list-button @click="submit" title="Update"></f7-list-button>
                <!-- <f7-block-footer>
                    Already Have Account<br>
                    " <f7-link href="/login/">
                        Login
                    </f7-link>"
                </f7-block-footer> -->
            </f7-list>
        </f7-page>
    </Home>
</template>


<script setup>
import { ref } from 'vue'
import Home from '@/components/layouts/base.vue';
import { profileStore } from '@/js/state/ProfileStore.js';
import { f7 } from 'framework7-vue';

const { state } = profileStore

const data = ref({
    email: '',
    password: '',
    password_confirmation: null,
    name: '',
    last_name: '',
    first_name: '',
    middle_name: '',
    age: '',
    gender: '',
    section: '',
    course: '',
    address: '',
    image: null,
    valid_documents: null,
    student_id: ''
})


const error = ref({});
const message = ref({});



const imageUploadHandler = (e) => {
    const { files } = e.target;


    const reader = new FileReader();

    reader.onload = function () {
        data.value.image = reader.result
    }

    reader.readAsDataURL(files[0])
}

const validDocumentsHandler = (e) => {
    const { files } = e.target;


    const reader = new FileReader();

    reader.onload = function () {
        data.value.valid_documents = reader.result
    }

    reader.readAsDataURL(files[0])

}



const submit = async () => {

    console.log(data.value);
    state.profile = {
        ...data.value
    }

    error.value = {}

    await profileStore.dispatch('updateProfile');



    if (state.message !== null) {
        message.value = { ...state.message }


        f7.dialog.alert(message.value.message);

        data.value = {
            email: '',
            password: '',
            password_confirmation: null,
            name: '',
            last_name: '',
            first_name: '',
            middle_name: '',
            age: '',
            gender: '',
            section: '',
            course: '',
            address: '',
            image: null,
            valid_documents: null,
            student_id: ''
        }
    }


    if (state.error !== null) {
        error.value = {
            ...state.error
        }
    }
}



</script>