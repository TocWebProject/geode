<template>
    <div>   
        <div class="pb-28 px-10 bg-gray-100 bg-opacity-50 h-full">
            <!--  Geode Forms -->
            <form id="geodeFormDistanciel" role="form" v-on:submit.prevent="onSubmit"> 
                <!--  Form header -->
                <div class="mx-auto container max-w-3xl md:w-3/4 shadow-lg">
                    <div class="bg-gray-50 px-2 py-1 sm:px-3 sm:py-2 border-t-2 bg-opacity-5 border-blue-400 rounded-t relative">
                        <div class="max-w-md mx-auto md:w-full md:mx-0">
                            <div class="inline-flex items-start space-x-4 mb-2 mt-2">
                                <img
                                    class="w-8 h-8 sm:w-10 sm:h-10 mt-2 object-cover rounded"
                                    alt="Logo Geode"
                                    src="~/assets/img/bar-chart.png"
                                />
                                <h3 class="text-xl sm:text-3xl text-blue-700">Le questionnaire Géode en <span class="text-blue-600">distanciel</span></h3>
                            </div>
                            <button @click="restartTest" aria-label="retour à la première étape" class="absolute top-0 right-0 mt-1 mr-1 sm:mt-2 sm:mr-2">
                                <svg 
                                class="w-4 h-4 sm:w-6 sm:h-6"
                                fill="none" stroke-linecap="round" 
                                stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" stroke="#1e40af">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="bg-white space-y-6">
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 pt-10 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre d’accéder à la formation au moment qui lui convient le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="acces">L'accès</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="acces" id="acces" v-model.number="geodeDataDistanciel.acces" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingAcces">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le (les) lieu(x) les plus adaptés à ses possibilités pour se former ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="lieu">Le lieu</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="lieu" id="lieu" v-model.number="geodeDataDistanciel.lieu" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingLieu">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir ses horaires en fonction de ses disponibilités ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="temps">Le temps</label>    
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="temps" id="temps" v-model.number="geodeDataDistanciel.temps" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingTemps">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le rythme qui lui convient le mieux pour se former ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="rythme">Le rythme</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="rythme" id="rythme" v-model.number="geodeDataDistanciel.rythme" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingRythme">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les objectifs à atteindre au travers de sa formation et de ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="objectifs">Les objectifs</label>    
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="objectifs" id="objectifs" v-model.number="geodeDataDistanciel.objectifs" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingObjectifs">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le cheminement d’apprentissage qui lui convient le mieux ? </p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="cheminement">Le cheminement</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="cheminement" id="cheminement" v-model.number="geodeDataDistanciel.cheminement" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingCheminement">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le séquencement ou l’ordre de succession des activités pédagogiques ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="sequence">La séquence</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="sequence" id="sequence" v-model.number="geodeDataDistanciel.sequence" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingSequence">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les méthodes pédagogiques qui lui conviennent le mieux  (conventionnelles, actives, etc.) ? </p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="methodes">Les méthodes</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="methodes" id="methodes" v-model.number="geodeDataDistanciel.methodes" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingMethodes">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir de travailler seul,  à deux ou en groupe ?  </p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="format">Le format</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="format" id="format" v-model.number="geodeDataDistanciel.format" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingFormat">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les contenus théoriques et/ou pratiques qui lui conviennent le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="contenus">Les contenus</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="contenus" id="contenus" v-model.number="geodeDataDistanciel.contenus" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingContenus">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les supports d’apprentissage qui lui conviennent le mieux  (polycopiés, ouvrages, textes numérisés, vidéo et/ou audio en ligne ou non, etc.) ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="supports">Les supports</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="supports" id="supports" v-model.number="geodeDataDistanciel.supports" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingSupports">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les modalités d’évaluation de sa formation et de ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="evaluation">L'évaluation</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="evaluation" id="evaluation" v-model.number="geodeDataDistanciel.evaluation" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingEvaluation">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les outils qui lui conviennent le mieux pour, si besoin, communiquer et interagir avec les formateurs et les autres apprenants (téléphone, messagerie, forum, chat, wiki, etc.) ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="communication">Outils de communication</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="communication" id="communication" v-model.number="geodeDataDistanciel.communication" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingCommunication">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les personnes-ressources qui lui conviennent le mieux pour l’aider dans sa formation et dans ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="ressources">Les personnes ressources</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="ressources" id="ressources" v-model.number="geodeDataDistanciel.ressources" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
                                            <option value="">Votre Choix</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-900" v-if="attemptSubmit && missingRessources">Veuillez choisir une réponse</p>
                                        <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <p class="kf-appear-1 max-w-3xl md:w-3/4 text-xl text-center text-red-900 red-alert-error-pattern mx-auto p-5 border-red-400 rounded-b-lg shadow-md" v-if="dataMissing">Veuillez remplir tous les champs du formulaire</p>
                <button v-if="!showResultDistanciel" type="submit" class="w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                    Evaluez l'ouverture
                </button>
                <a v-if="showResultDistanciel" @click="restartTest" href="#geode" class="kf-appear-2 w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                    Refaire le test
                </a>
            </form>
        </div>
        <!--  Result Section -->
        <ResultDistanciel v-if="showResultDistanciel" v-on:restart-test="restartTest"/>
    </div>   
</template>

<script>
export default {
    name: 'TestDistanciel',
    layout: 'default',
    provide() {
        return { geodeDataDistanciel: this.geodeDataDistanciel}
    },
    data() {
        return {
            geodeDataDistanciel: {
                acces: '',
                lieu: '',
                temps: '',
                rythme: '',
                objectifs: '',
                cheminement: '',
                sequence: '',
                methodes: '',
                format: '',
                contenus: '',
                supports: '',
                evaluation: '',
                communication: '',
                ressources:'',
            },
            attemptSubmit: false,
            dataMissing: false,
            showResultDistanciel: false,
        }
    },
    computed: {
		missingAcces: function () {
			return this.geodeDataDistanciel.acces === '';
		},
		missingLieu: function () {
			return this.geodeDataDistanciel.lieu === '';
		},
		missingTemps: function () {
			return this.geodeDataDistanciel.temps === '';
		},
		missingRythme: function () {
			return this.geodeDataDistanciel.rythme === '';
        },
        missingObjectifs: function () {
			return this.geodeDataDistanciel.objectifs === '';
		},
		missingCheminement: function () {
			return this.geodeDataDistanciel.cheminement === '';
		},
		missingSequence: function () {
			return this.geodeDataDistanciel.sequence === '';
		},
		missingMethodes: function () {
			return this.geodeDataDistanciel.methodes === '';
        },
		missingFormat: function () {
			return this.geodeDataDistanciel.format === '';
        },
        missingContenus: function () {
			return this.geodeDataDistanciel.contenus === '';
		},
		missingSupports: function () {
			return this.geodeDataDistanciel.supports === '';
		},
		missingEvaluation: function () {
			return this.geodeDataDistanciel.evaluation === '';
		},
		missingCommunication: function () {
			return this.geodeDataDistanciel.communication === '';
		},
		missingRessources: function () {
			return this.geodeDataDistanciel.ressources === '';
		},
	},
    methods: {
        onSubmit() {
            
			this.attemptSubmit = true;
			if (
				this.missingAcces||
				this.missingLieu ||
                this.missingTemps ||
                this.missingObjectifs ||
				this.missingCheminement ||
                this.missingSequence ||
                this.missingMethodes ||
				this.missingFormat ||
                this.missingContenus ||
                this.missingSupports ||
				this.missingEvaluation ||
				this.missingCommunication ||
				this.missingRessources
			) {
                this.dataMissing = true,
                this.showResultDistanciel = false,
				console.log("Data missing");
			} else {
                this.showResultDistanciel = true,
                this.dataMissing = false,
                console.log("There is some data !");
                console.log(this.geodeDataDistanciel)
                
            } 

            if (this.dataMissing === false && this.showResultDistanciel === true) {

                this.redirect();
            }

        },
        
        redirect(){
            this.$router.push('/#resultDistanciel'); 
        },

        restartTest() {   
            console.log('starting restart')
            this.geodeDataDistanciel.acces === '';
            this.geodeDataDistanciel.lieu === '';
            this.geodeDataDistanciel.temps === '';
            this.geodeDataDistanciel.rythme === '';
            this.geodeDataDistanciel.objectifs === '';
            this.geodeDataDistanciel.cheminement === '';
            this.geodeDataDistanciel.sequence === '';
            this.geodeDataDistanciel.methodes === '';
            this.geodeDataDistanciel.format === '';
            this.geodeDataDistanciel.contenus === '';
            this.geodeDataDistanciel.supports === '';
            this.geodeDataDistanciel.evaluation === '';
            this.geodeDataDistanciel.communication === '';
            this.geodeDataDistanciel.ressources === '';
            
            this.attemptSubmit = false;
            this.dataMissing = false;
            this.showResultDistanciel = false;
            // Emit to display the first step and hide Form in TheTest.vue
            this.$emit('back-to-first-step');
        },
    }   
}
</script>