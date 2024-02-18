<template>
    <Home>
        <f7-block>
            <f7-block-title large>Announcement</f7-block-title>
            <f7-card title="hello world">
                <f7-card-content>Hello world</f7-card-content>
            </f7-card>
        </f7-block>
        <f7-block>
            <f7-block-title large>
                Events
            </f7-block-title>
            <f7-list>

                <f7-card title="hello world">
                    <f7-card-content>Hello world</f7-card-content>
                </f7-card>

            </f7-list>
        </f7-block>
    </Home>
</template>


<script>
import Home from './../components/layouts/base.vue';
export default {
    components: {
        Home
    }
}
</script>