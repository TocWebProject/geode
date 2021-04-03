<template>
<div class="px-7 pb-20">
    <!-- Title -->
    <div class="container flex justify-center mx-auto max-w-3xl md:w-3/4 px-10 sm:px-6 md:px-8 lg:px-0 border-t-2 border-pink-600 rounded-t shadow-md">
        <div class="bg-gray-50 py-2 border-t-2 bg-opacity-5">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
                <div class="inline-flex space-x-4 mb-2">
                    <h3 class="text-xl sm:text-3xl pt-4 text-pink-700">La formation se déroule:</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- Call to action button for choice -->
    <div class="container flex justify-center mx-auto max-w-3xl md:w-3/4 px-10 sm:px-6 md:px-7 lg:px-0 bg-white shadow-md">
        <div class="flex flex-col sm:flex-row flex-wrap py-5">
            <button v-on:click="choixPresentiel" class="w-auto xl:w-52 m-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-6 outline-none">
                        En présentiel
            </button>
            <button v-on:click="choixDistanciel" class="w-auto xl:w-52 m-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-6">
                        En distanciel
            </button>
            <button v-on:click="choixPresentielDistanciel" class="w-auto xl:w-52 m-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-6">
                        Les deux
            </button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'TestChoixDistancielPresentiel',
    layout: 'default',
    methods: {
        choixPresentiel(){
            this.$emit('choix-presentiel');
        },
        choixDistanciel(){
            this.$emit('choix-distanciel');
        },
        choixPresentielDistanciel(){
            this.$emit('choix-presentiel-distanciel');
        }
    },
}
</script>

    