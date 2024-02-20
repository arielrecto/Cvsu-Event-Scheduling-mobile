<template>
    <div ref="mapElement" style="height: 10rem;">

    </div>
</template>


<script setup>

import { defineProps, onMounted, ref, watch } from 'vue';


const props = defineProps({
   location : null
})

const mapElement = ref(null)

const coordinates = JSON.parse(props.location)


//


// console.log(coordinates);

onMounted(() => {
  const map = L.map(mapElement.value).setView([coordinates.lat, coordinates.lng], 16);


    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);


        const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map);
})

</script>