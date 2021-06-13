<template>
    <div>   
        <div class="pb-40 px-5 sm:px-6 h-full">
            <!--  Geode Forms -->
            <form id="geodeFormDistancielPresentiel" role="form" v-on:submit.prevent="onSubmit"> 
                <!--  Form header -->
                <div class="mx-auto container max-w-3xl md:w-3/4 shadow-lg">
                    <div class="bg-gray-100 px-2 py-3 sm:px-3 sm:py-6 border-t-2 border-pink-500 rounded-t relative">
                        <div class="max-w-lg md:w-full md:mx-0">
                            <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                <img
                                    class="w-9 h-9 sm:w-11 sm:h-11 mt-4 sm:mt-3 object-cover rounded"
                                    alt="Logo Geode"
                                    src="~/assets/img/logo-geode.png"
                                    width="48" 
                                    height="48"
                                />
                                <h3 class="text-2xl sm:text-3xl text-pink-700 mt-5">GÉODE pour une formation à la fois en <span class="text-pink-600">présentiel</span> et en <span class="text-pink-600">distanciel</span></h3>
                            </div>
                            <button @click="restartTest" aria-label="retour à la première étape" class="absolute top-0 right-0 mt-1 mr-1 sm:mt-2 sm:mr-2">
                                <svg 
                                class="w-4 h-4 sm:w-6 sm:h-6"
                                fill="none" stroke-linecap="round" 
                                stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" stroke="#831843">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="bg-white space-y-5">
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-blue-400">
                            <div class="max-w-xl md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-blue-700">Questions concernant la <span class="font-semibold">répartition horaire</span> de la formation</h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 md:w-8/12 ml-4 sm:ml-6 md:mx-8 text-lg">Nombre d'heures en présentiel déclaré par l'organisme de formation :</p>
                            <div class="w-10/12 md:w-5/12 mx-4 sm:mx-6">
                            <label class="text-sm text-blue-800 tracking-wide" for="heuresPresentiel">Heures en présentiel</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 md:ml-0 mb-1">
                                        <input form="geodeFormDistancielPresentiel" type="number" min="0" placeholder="ex : 60" name="heuresPresentiel" id="heuresPresentiel" v-model.number="geodeDataDP.heuresPresentiel" @keypress.enter.prevent class="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    </div>
                                </div>
                                <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingHeuresPresentiel">Veuillez donner une réponse valide</p>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 md:w-8/12 ml-4 sm:ml-6 md:mx-8 text-lg">Nombre d'heures en distanciel déclaré par l'organisme de formation :</p>
                            <div class="w-10/12 md:w-5/12 mx-4 sm:mx-6">
                            <label class="text-sm text-blue-800 tracking-wide" for="heuresDistanciel">Heures en distanciel</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 md:ml-0 mb-1">
                                        <input form="geodeFormDistancielPresentiel" placeholder="ex : 140" type="number" min="0" name="heuresDistanciel" id="heuresDistanciel" v-model.number="geodeDataDP.heuresDistanciel" @keypress.enter.prevent class="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    </div>
                                </div>
                                <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingHeuresDistanciel">Veuillez donner une réponse valide</p>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-yellow-400">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-yellow-600">Questions liées aux composantes <span class="font-semibold">spatio-temporelles</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 sm:items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre d’accéder à la formation au moment qui lui convient le mieux ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-5 sm:mx-auto mb-3">
                                        <label class="text-sm text-yellow-600 mb-1" for="accesPresentiel">L'accès en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="accesPresentiel" id="accesPresentiel" v-model.number="geodeDataDP.accesPresentiel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingAccesPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-5 sm:mx-auto">
                                        <label class="text-sm text-yellow-600 mb-1" for="accesDistanciel">L'accès en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="accesDistanciel" id="accesDistanciel" v-model.number="geodeDataDP.accesDistanciel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingAccesDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le (les) lieu(x) les plus adaptés à ses possibilités pour se former ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-yellow-600 mb-1" for="lieuPresentiel">Le lieu en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="lieuPresentiel" id="lieuPresentiel" v-model.number="geodeDataDP.lieuPresentiel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingLieuPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-yellow-600 mb-1" for="lieuDistanciel">Le lieu en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="lieuDistanciel" id="lieuDistanciel" v-model.number="geodeDataDP.lieuDistanciel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingLieuDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir ses horaires en fonction de ses disponibilités ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-yellow-600 mb-1" for="tempsPresentiel">Le temps en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="tempsPresentiel" id="tempsPresentiel" v-model.number="geodeDataDP.tempsPresentiel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingTempsPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-yellow-600 mb-1" for="tempsDistanciel">Le temps en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="tempsDistanciel" id="tempsDistanciel" v-model.number="geodeDataDP.tempsDistanciel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingTempsDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le rythme qui lui convient le mieux pour se former ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-yellow-600 mb-1" for="rythmePresentiel">Le rythme en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="rythmePresentiel" id="rythmePresentiel" v-model.number="geodeDataDP.rythmePresentiel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRythmePresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-yellow-600 mb-1" for="rythmeDistanciel">Le rythme en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="rythmeDistanciel" id="rythmeDistanciel" v-model.number="geodeDataDP.rythmeDistanciel" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRythmeDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-indigo-300">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-indigo-700">Questions liées aux composantes <span class="font-semibold">pédagogiques</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les objectifs à atteindre au travers de sa formation et de ses apprentissages ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="objectifsPresentiel">Les objectifs en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="objectifsPresentiel" id="objectifsPresentiel" v-model.number="geodeDataDP.objectifsPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingObjectifsPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="objectifsDistanciel">Les objectifs en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="objectifsDistanciel" id="objectifsDistanciel" v-model.number="geodeDataDP.objectifsDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingObjectifsDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le cheminement d’apprentissage qui lui convient le mieux ? </p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="cheminementPresentiel">Le cheminement en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="cheminementPresentiel" id="cheminementPresentiel" v-model.number="geodeDataDP.cheminementPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCheminementPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="cheminementDistanciel">Le cheminement en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="cheminementDistanciel" id="cheminementDistanciel" v-model.number="geodeDataDP.cheminementDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCheminementDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le séquencement ou l’ordre de succession des activités pédagogiques ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="sequencePresentiel">La séquence en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="sequencePresentiel" id="sequencePresentiel" v-model.number="geodeDataDP.sequencePresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSequencePresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="sequenceDistanciel">La séquence en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="sequenceDistanciel" id="sequenceDistanciel" v-model.number="geodeDataDP.sequenceDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSequenceDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les méthodes pédagogiques qui lui conviennent le mieux  (conventionnelles, actives, etc.) ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="methodesPresentiel">Les méthodes en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="methodesPresentiel" id="methodesPresentiel" v-model.number="geodeDataDP.methodesPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingMethodesPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="methodesDistanciel">Les méthodes en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="methodesDistanciel" id="methodesDistanciel" v-model.number="geodeDataDP.methodesDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingMethodesDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir de travailler seul, à deux ou en groupe ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="formatPresentiel">Le format en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="formatPresentiel" id="formatPresentiel" v-model.number="geodeDataDP.formatPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingFormatPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="formatDistanciel">Le format en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="formatDistanciel" id="formatDistanciel" v-model.number="geodeDataDP.formatDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingFormatDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les contenus théoriques et/ou pratiques qui lui conviennent le mieux ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="contenusPresentiel">Les contenus en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="contenusPresentiel" id="contenusPresentiel" v-model.number="geodeDataDP.contenusPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingContenusPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="contenusDistanciel">Les contenus en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="contenusDistanciel" id="contenusDistanciel" v-model.number="geodeDataDP.contenusDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingContenusDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les modalités d’évaluation de sa formation et de ses apprentissages ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-indigo-600 mb-1" for="evaluationPresentiel">L'évaluation en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="evaluationPresentiel" id="evaluationPresentiel" v-model.number="geodeDataDP.evaluationPresentiel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingEvaluationPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-indigo-600 mb-1" for="evaluationDistanciel">L'évaluation en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="evaluationDistanciel" id="evaluationDistanciel" v-model.number="geodeDataDP.evaluationDistanciel" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingEvaluationDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-green-500">
                            <div class="max-w-4xl md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-green-700">Questions liées aux composantes de la <span class="font-semibold">communication éducative médiatisée</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les supports d’apprentissage qui lui conviennent le mieux  (ouvrages, textes numérisés, vidéo et/ou podcast en ligne ou non, etc.) ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-green-600 mb-1" for="supportsPresentiel">Les supports en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="supportsPresentiel" id="supportsPresentiel" v-model.number="geodeDataDP.supportsPresentiel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSupportsPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-56 mx-3 sm:mx-auto">
                                        <label class="text-sm text-green-600 mb-1" for="supportsDistanciel">Les supports en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="supportsDistanciel" id="supportsDistanciel" v-model.number="geodeDataDP.supportsDistanciel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSupportsDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les outils qui lui conviennent le mieux pour, si besoin, communiquer et interagir avec les formateurs et les autres apprenants (documents partagés, visio-conférence, téléphone, messagerie, forum, chat, etc.) ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-wrap flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-64 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-green-600 mb-1" for="communicationPresentiel">Les outils de communication en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="communicationPresentiel" id="communicationPresentiel" v-model.number="geodeDataDP.communicationPresentiel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCommunicationPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-64 mx-3 sm:mx-auto">
                                        <label class="text-sm  text-green-600 mb-1" for="communicationDistanciel">Les outils de communication en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="communicationDistanciel" id="communicationDistanciel" v-model.number="geodeDataDP.communicationDistanciel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCommunicationDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="flex flex-col space-y-4 space-y-0 w-full p-4 pt-5 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les personnes-ressources qui lui conviennent le mieux pour l’aider dans sa formation et dans ses apprentissages ?</p>
                            <div class="w-11/12">
                                <div class="flex flex-wrap flex-col sm:flex-row justify-around mt-4">
                                    <div class="flex flex-col w-64 mx-3 sm:mx-auto mb-3">
                                        <label class="text-sm text-green-600 mb-1" for="ressourcesPresentiel">Les personnes-ressources en <span class="font-bold">présentiel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="ressourcesPresentiel" id="ressourcesPresentiel" v-model.number="geodeDataDP.ressourcesPresentiel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRessourcesPresentiel">Veuillez choisir une réponse</p>
                                    </div>
                                    <div class="flex flex-col w-64 mx-3 sm:mx-auto">
                                        <label class="text-sm text-green-600 mb-1" for="ressourcesDistanciel">Les personnes-ressources en <span class="font-bold">distanciel</span></label>
                                        <select form="geodeFormDistancielPresentiel" name="ressourcesDistanciel" id="ressourcesDistanciel" v-model.number="geodeDataDP.ressourcesDistanciel" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRessourcesDistanciel">Veuillez choisir une réponse</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <p class="kf-appear-1 max-w-3xl md:w-3/4 text-xl text-center text-red-900 red-alert-error-pattern mx-auto p-5 border-red-400 rounded-b-lg shadow-md" v-if="dataMissing">Veuillez remplir tous les champs du formulaire</p>
                <button v-if="!showResultPresentielDistanciel" type="submit" class="w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg">
                    Evaluez l'ouverture
                </button>
                <a v-if="showResultPresentielDistanciel" @click="restartTest" href="#startGeode" class="kf-appear-2 w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-pink-600 text-base font-medium rounded-md text-pink-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg">
                    Refaire le test
                </a>
            </form>
        </div>
        <!--  Result Section -->
        <ResultPresentielDistanciel v-if="showResultPresentielDistanciel" v-on:restart-test="restartTest"/>
    </div>   
</template>

<script>
export default {
    name: 'TestPresentielDistanciel',
    layout: 'default',
    provide() {
        return { geodeDataDP: this.geodeDataDP}
    },
    data() {
        return {
            // DP équivaut à Distanciel + Presentiel
            geodeDataDP: {
                heuresPresentiel: '',
                heuresDistanciel: '',
                accesPresentiel: '',
                accesDistanciel: '',
                lieuPresentiel: '',
                lieuDistanciel: '',
                tempsPresentiel: '',
                tempsDistanciel: '',
                rythmePresentiel: '',
                rythmeDistanciel: '',
                objectifsPresentiel: '',
                objectifsDistanciel: '',
                cheminementPresentiel: '',
                cheminementDistanciel: '',
                sequencePresentiel: '',
                sequenceDistanciel: '',
                methodesPresentiel: '',
                methodesDistanciel: '',
                formatPresentiel: '',
                formatDistanciel: '',
                contenusPresentiel: '',
                contenusDistanciel: '',
                supportsPresentiel: '',
                supportsDistanciel: '',
                evaluationPresentiel: '',
                evaluationDistanciel: '',
                communicationPresentiel: '',
                communicationDistanciel: '',
                ressourcesPresentiel:'',
                ressourcesDistanciel:'',
            },
            attemptSubmit: false,
            dataMissing: false,
            showResultPresentielDistanciel: false,
        }
    },
    computed: {
        missingHeuresPresentiel: function () {
			return this.geodeDataDP.heuresPresentiel === '';
		},
        missingHeuresDistanciel: function () {
			return this.geodeDataDP.heuresDistanciel === '';
		},
		missingAccesPresentiel: function () {
			return this.geodeDataDP.accesPresentiel === '';
		},
        missingAccesDistanciel: function () {
			return this.geodeDataDP.accesDistanciel === '';
		},
		missingLieuPresentiel: function () {
			return this.geodeDataDP.lieuPresentiel === '';
		},
        missingLieuDistanciel: function () {
			return this.geodeDataDP.lieuDistanciel === '';
		},
		missingTempsPresentiel: function () {
			return this.geodeDataDP.tempsPresentiel === '';
		},
        missingTempsDistanciel: function () {
			return this.geodeDataDP.tempsDistanciel === '';
		},
		missingRythmePresentiel: function () {
			return this.geodeDataDP.rythmePresentiel === '';
        },
        missingRythmeDistanciel: function () {
			return this.geodeDataDP.rythmeDistanciel === '';
        },
        missingObjectifsPresentiel: function () {
			return this.geodeDataDP.objectifsPresentiel === '';
		},
         missingObjectifsDistanciel: function () {
			return this.geodeDataDP.objectifsDistanciel === '';
		},
		missingCheminementPresentiel: function () {
			return this.geodeDataDP.cheminementPresentiel === '';
		},
        missingCheminementDistanciel: function () {
			return this.geodeDataDP.cheminementDistanciel === '';
		},
		missingSequencePresentiel: function () {
			return this.geodeDataDP.sequencePresentiel === '';
		},
        missingSequenceDistanciel: function () {
			return this.geodeDataDP.sequenceDistanciel === '';
		},
		missingMethodesPresentiel: function () {
			return this.geodeDataDP.methodesPresentiel === '';
        },
        missingMethodesDistanciel: function () {
			return this.geodeDataDP.methodesDistanciel === '';
        },
		missingFormatPresentiel: function () {
			return this.geodeDataDP.formatPresentiel === '';
        },
        missingFormatDistanciel: function () {
			return this.geodeDataDP.formatDistanciel === '';
        },
        missingContenusPresentiel: function () {
			return this.geodeDataDP.contenusPresentiel === '';
		},
        missingContenusDistanciel: function () {
			return this.geodeDataDP.contenusDistanciel === '';
		},
		missingSupportsPresentiel: function () {
			return this.geodeDataDP.supportsPresentiel === '';
		},
        missingSupportsDistanciel: function () {
			return this.geodeDataDP.supportsDistanciel === '';
		},
		missingEvaluationPresentiel: function () {
			return this.geodeDataDP.evaluationPresentiel === '';
		},
        missingEvaluationDistanciel: function () {
			return this.geodeDataDP.evaluationDistanciel === '';
		},
		missingCommunicationPresentiel: function () {
			return this.geodeDataDP.communicationPresentiel === '';
		},
        missingCommunicationDistanciel: function () {
			return this.geodeDataDP.communicationDistanciel === '';
		},
		missingRessourcesPresentiel: function () {
			return this.geodeDataDP.ressourcesPresentiel === '';
		},
        missingRessourcesDistanciel: function () {
			return this.geodeDataDP.ressourcesDistanciel === '';
		},
	},
    methods: {
        onSubmit() {
            
			this.attemptSubmit = true;
			if (
                this.missingHeuresPresentiel ||
                this.missingHeuresDistanciel ||
				this.missingAccesPresentiel ||
                this.missingAccesDistanciel ||
				this.missingLieuPresentiel ||
                this.missingLieuDistanciel ||
                this.missingTempsPresentiel ||
                this.missingTempsDistanciel ||
                this.missingObjectifsPresentiel ||
                this.missingObjectifsDistanciel ||
				this.missingCheminementPresentiel ||
                this.missingCheminementDistanciel ||
                this.missingSequencePresentiel ||
                this.missingSequenceDistanciel ||
                this.missingMethodesPresentiel ||
                this.missingMethodesDistanciel ||
				this.missingFormatPresentiel ||
                this.missingFormatDistanciel ||
                this.missingContenusPresentiel ||
                this.missingContenusDistanciel ||
                this.missingSupportsPresentiel ||
                this.missingSupportsDistanciel ||
				this.missingEvaluationPresentiel ||
                this.missingEvaluationDistanciel ||
				this.missingCommunicationPresentiel ||
                this.missingCommunicationDistanciel ||
				this.missingRessourcesPresentiel ||
                this.missingRessourcesDistanciel
			) {
                this.dataMissing = true,
                this.showResultPresentielDistanciel = false,
				console.log("Data missing");
			} else {
                this.showResultPresentielDistanciel = true,
                this.dataMissing = false,
                console.log("There is some data !");
                console.log(this.geodeDataDP)
                
            } 
        },
        
        restartTest() {   
            // Emit to display the first step and hide Form in TheTest.vue
            this.$emit('back-to-first-step');
        },
    }   
}
</script>

