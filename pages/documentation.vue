<template>
    <!-- Page Documentation -->
    <section id="topDocumentation" class="bg-white h-full overflow-hidden pb-10">
        <h1 class="kf-moveInDown text-3xl sm:text-4xl md:text-5xl text-center tracking-tight font-extrabold text-gray-900 pt-5 sm:pt-14 mb-8 lg:mb-0">Documentation</h1>
        <div class="min-w-11/12 mt-1 mb-10 mx-auto flex flex-wrap justify-center">
            <!-- Menu Documentation -->
            <div class="col-auto kf-moveInLeft mt-6">
                <div class="flex flex-row-reverse flex-wrap lg:flex-col justify-center"> 
                    <img src="~/assets/img/undraw_At_work_re_qotl.svg" class="kf-moveInUp w-40 h-40 ml-4 lg:ml-8 my-auto md:mr-6 lg:mr-0" width="160" height="160" alt="illustration de livres">
                    <div class="w-60 lg:w-60 h-60 ml-0 mt-1 mb-7 pr-10 rounded shadow-lg bg-gray-200 hover:bg-opacity-80">
                        <nav class="w-60 p-8 pt-5 h-60">
                                <h2 class="text-2xl font-medium">Sommaire</h2>
                                <hr class="hr-sommaire">
                            <ul>
                                <li><a class="hover:text-pink-800" href="#target1">Titre 1</a></li>
                                <li><a class="hover:text-pink-800" href="#target2">Titre 2</a></li>
                                <li><a class="hover:text-pink-800" href="#target3">Titre 3</a></li>
                                <li>Titre 4 - Aaaaa</li>
                                <li>Titre 4 - Aaaaa</li>
                                <li>Titre 4 - Aaaaa</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <NuxtLink to="/#geode" class="geode-link-desktop w-full sm:hidden lg:flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10">
                    Débutez le test
                </NuxtLink>
            </div>
            <!-- Text Documentation -->
            <article class="kf-appear-1 flex flex-col w-4/5 lg:w-2/3 items-left px-4 mt-5 lg:mt-10 md:ml-5 lg:ml-10 xl:ml-14 sm:ml-0">
                <h3 class="text-3xl text-center font-bold mt-6 md:mr-5 sm:mr-2 text-pink-900">
                    La grille d'évaluation GÉODE
                </h3>

                <h4 id="target1" class="text-2xl font-bold mt-6 md:mr-5 sm:mr-2 text-pink-800">Titre 1</h4>
                <hr class="hr-sommaire">
                <p class="mt-4 text-justify">
                    One of the biggest challenges when writing a JavaScript application is keeping multiple parts of the interface in sync. A user interaction in one part of the interface often affects data in another. If not managed well, this data can end up in multiple places, but with inconsistent values.
                </p>

                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>

                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>
                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>
                <h4 id="target2" class="text-2xl font-bold mt-6 md:mr-5 sm:mr-2 text-pink-800">Titre 2</h4>
                <hr class="hr-sommaire">
                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <h4 id="target3" class="text-2xl font-bold mt-6 md:mr-5 sm:mr-2 text-pink-800">Titre 3</h4>
                <hr class="hr-sommaire">
                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
                <p class="mt-4 text-justify">
                    In the past few years, the JavaScript community has learned a lot about how to deal with this problem. The solution involves the principle of the Lowest Common Ancestor. To explain this principle, let's look at some interface elements you might build while working on a real-world application.
                </p>

                <p class="mt-4 text-justify">
                    Let's say we're building an app with a collapsible panel. If the panel isOpen, we'll show the body. Clicking the title triggers the toggleIsOpen action.
                </p>

                <p class="mt-4 text-justify">
                    Currently, our application looks like this. isOpen is the only piece of state in our application that changes. Further, the collapsible panel is the only part of the interface that needs to know about it. Because of this, it makes sense for the panel itself to "own" this piece of application state. So, we'll leave isOpen right where it is - as a simple property on the component.
                </p>
            </article>
        </div>
        <NuxtLink to="/#geode" class="geode-link-mobile w-52 mx-auto hidden items-center justify-center mt-3 px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10">
                Débutez le test
        </NuxtLink>
        <!-- Scroll Top Call to action-->
        <a href="#topDocumentation" v-show="visibleArrow" class="bottom-left-arrow kf-moveInLeft flex items-center justify-center" v-scroll-to="{
            el: '#topDocumentation',
            container: 'body',
            duration: 400,
            lazy: false,
            easing: 'linear',
            offset: -200,
            force: true,
            cancelable: true,
            x: false,
            y: true
        }">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </a>
    </section>
</template>

<script>
export default {
    name: 'documentation',
    transition: 'page',
    head() {
        return {
            title: 'Documentation',
        }
    },
    data () {
    return {
      visibleArrow: false
    }
  },
  methods: {
    // Scroll Tops Methods  
    scrollListener() {
            this.visibleArrow = window.scrollY > 420
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollListener)
    }
}
</script>
