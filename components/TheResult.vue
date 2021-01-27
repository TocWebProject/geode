<template>
    <section class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-10">
            <h3 id="result" class="text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-10 sm:text-3xl md:text-4xl">Résultats</h3>
            <p> {{ geodeData }} </p>
        </div>
        <div class="h-36">
            <a href="/#geode" v-on:click="restart()" class="w-60 flex mx-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700  bg-blue-100 hover:bg-blue-200 ">
                  Refaire le test
            </a>         
        </div>
    </section>
</template> 

<script>

export default {
    name: 'TheResult',
    layout: 'default',
    inject: ['geodeData'], 
    methods: {
        restart() {
            console.log('restart')
            this.$emit('restart-test')
        }
    }
}

</script>