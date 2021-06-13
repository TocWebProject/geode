<template>
    <transition name="fade" mode="out-in">
        <div v-if="isOpen" class="kf-moveInUp fixed bottom-0 left-0 lg:flex items-center p-2 bg-gray-100 shadow-sm justify-center w-full">
            <div class="mx-auto text-center lg:mx-2">
                <p class="text-xs lg:text-base leading-loose">
                    <span class="mx-2 pb-2 text-lg md:text-xl">🍪</span>Autoriser les cookies afin d'étudier la fréquentation et améliorer l'application ? Liser les
                    <NuxtLink to="/mentionslegales" class="hover:text-gray-700">mentions légales</NuxtLink>
                    pour plus d'informations
                </p>
            </div>
            <div class="flex justify-center mt-2 lg:mt-0 space-x-3 lg:space-x-2">
                <div class="text-xs lg:text-base border border-1 border-black px-2 py-1 rounded-md cursor-pointer hover:bg-white" @click="deny">Refuser</div>
                <div class="text-xs lg:text-base border border-1 border-black px-2 py-1 rounded-md cursor-pointer hover:bg-white" @click="accept">Accepter</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    }, 
    created() {
        if (!this.getGDPR() === true) {
            this.isOpen = true;
        }
    },
    methods: {
        getGDPR() {
            if (process.browser) {
                return localStorage.getItem('GDPR:accepted', true);
            }
        },
        accept() {
            if (process.browser) {

                localStorage.setItem('GDPR:accepted', true);
                this.isOpen = false;

                // Google Analytics Boostraping 
                // bootstrap().then(gtag => {
                //     // this.isOpen = false;
                //     // localStorage.setItem('GDPR:accepted', true);
                // })
            }
        },
        deny() {
            if (process.browser) {
                this.isOpen = false;
                localStorage.setItem('GDPR:accepted', false);
            }
        } 
    }
}
</script>

<style scoped>
/* Css transition for cookies popup*/
.fade-enter {
    opacity: 0;
}

.fade-enter-active{
    transition: opacity 350ms ease;
}

.fade-leave-active {
    transition: opacity 350ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>