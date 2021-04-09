<template>
    <div>   
        <div class="pb-40 px-5 sm:px-6 h-full">
            <!--  Geode Forms -->
            <form id="geodeFormPresentiel" role="form" v-on:submit.prevent="onSubmit"> 
                <!--  Form header -->
                <div class="mx-auto container max-w-3xl md:w-3/4 shadow-lg">
                    <div class="bg-gray-100 px-2 py-3 sm:px-3 sm:py-5 border-t-2 border-pink-500 rounded-t relative">
                        <div class="max-w-2xl md:w-full md:mx-0">
                            <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-3 sm:mb-2">
                                <img
                                    class="w-9 h-9 sm:w-12 sm:h-12 mt-3 object-cover rounded"
                                    alt="Logo Geode"
                                    src="~/assets/img/logo-geode.png"
                                />
                                <h3 class="text-xl sm:text-3xl text-pink-700 mt-5 sm:mt-6">GÉODE pour une formation en <span class="text-pink-600">présentiel</span></h3>
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
                        <div class="bg-gray-50 px-2 py-1 sm:px-3 sm:py-5 border-l-4 border-yellow-400">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg mt-2 ml-2 sm:ml-6 text-yellow-600">Questions liées aux composantes <span class="font-semibold">spatio-temporelles</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 pt-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre d’accéder à la formation au moment qui lui convient le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="acces">L'accès</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="acces" id="acces" v-model.number="geodeDataPresentiel.acces" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingAcces">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le (les) lieu(x) les plus adaptés à ses possibilités pour se former ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="lieu">Le lieu</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="lieu" id="lieu" v-model.number="geodeDataPresentiel.lieu" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingLieu">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir ses horaires en fonction de ses disponibilités ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="temps">Les horaires</label>    
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="temps" id="temps" v-model.number="geodeDataPresentiel.temps" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingTemps">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le rythme qui lui convient le mieux pour se former ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="rythme">Le rythme</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="rythme" id="rythme" v-model.number="geodeDataPresentiel.rythme" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRythme">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-2 py-1 sm:px-3 sm:py-5 border-l-4 border-indigo-300">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg mt-2 ml-2 sm:ml-6 text-indigo-700">Questions liées aux composantes <span class="font-semibold">pédagogiques</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les objectifs à atteindre au travers de sa formation et de ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="objectifs">Les objectifs</label>    
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="objectifs" id="objectifs" v-model.number="geodeDataPresentiel.objectifs" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingObjectifs">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le cheminement d’apprentissage qui lui convient le mieux ? </p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="cheminement">Le cheminement</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="cheminement" id="cheminement" v-model.number="geodeDataPresentiel.cheminement" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCheminement">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir le séquencement ou l’ordre de succession des activités pédagogiques ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="sequence">La séquence</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="sequence" id="sequence" v-model.number="geodeDataPresentiel.sequence" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSequence">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les méthodes pédagogiques qui lui conviennent le mieux  (conventionnelles, actives, etc.) ? </p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="methodes">Les méthodes</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="methodes" id="methodes" v-model.number="geodeDataPresentiel.methodes" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingMethodes">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir de travailler seul,  à deux ou en groupe ?  </p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="format">Le format</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="format" id="format" v-model.number="geodeDataPresentiel.format" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingFormat">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les contenus théoriques et/ou pratiques qui lui conviennent le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="contenus">Les contenus</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="contenus" id="contenus" v-model.number="geodeDataPresentiel.contenus" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingContenus">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les modalités d’évaluation de sa formation et de ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="evaluation">L'évaluation</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="evaluation" id="evaluation" v-model.number="geodeDataPresentiel.evaluation" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingEvaluation">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-2 py-1 sm:px-3 sm:py-5 border-l-4 border-green-500">
                            <div class="max-w-2xl md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg mt-2 ml-2 sm:ml-6 text-green-700">Questions liées aux composantes de la <span class="font-semibold">communication éducative médiatisée</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les supports d’apprentissage qui lui conviennent le mieux  (ouvrages, textes numérisés, vidéo et/ou podcast en ligne ou non, etc.) ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-green-600 tracking-wide ml-1" for="supports">Les supports</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="supports" id="supports" v-model.number="geodeDataPresentiel.supports" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingSupports">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les outils qui lui conviennent le mieux pour, si besoin, communiquer et interagir avec les formateurs et les autres apprenants (visio-conférence, téléphone, messagerie, forum, chat, etc.) ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-green-600 tracking-wide ml-1" for="communication">Les outils de communication</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="communication" id="communication" v-model.number="geodeDataPresentiel.communication" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingCommunication">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les personnes-ressources qui lui conviennent le mieux pour l’aider dans sa formation et dans ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-green-600 tracking-wide ml-1" for="ressources">Les personnes-ressources</label>
                                <div class="w-full inline-flex mt-2">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormPresentiel" name="ressources" id="ressources" v-model.number="geodeDataPresentiel.ressources" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-3">
                                            <option value="">Votre réponse</option>
                                            <option value="0">Pas du tout libre</option>
                                            <option value="1">Pas vraiment libre</option>
                                            <option value="2">Moyennement libre</option>
                                            <option value="3">Plutôt libre</option>
                                            <option value="4">Tout à fait libre</option>
                                        </select>
                                        <p class="kf-appear-1 text-sm ml-1 text-red-700 font-semibold" v-if="attemptSubmit && missingRessources">Veuillez choisir une réponse</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <p class="kf-appear-1 max-w-3xl md:w-3/4 text-xl text-center text-red-900 red-alert-error-pattern mx-auto p-5 border-red-400 rounded-b-lg shadow-md" v-if="dataMissing">Veuillez remplir tous les champs du formulaire</p>
                <button v-if="!showResultPresentiel" type="submit" class="w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg">
                    Evaluez l'ouverture
                </button>
                <a v-if="showResultPresentiel" @click="restartTest" href="#startGeode" class="kf-appear-2 w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-pink-600 text-base font-medium rounded-md text-pink-700 bg-white hover:bg-gray-100 hover:bg-opacity-60 md:py-4 md:text-lg">
                    Refaire le test
                </a>
            </form>
        </div>
        <!--  Result Section -->
        <ResultPresentiel v-if="showResultPresentiel" v-on:restart-test="restartTest"/>
    </div>   
</template>

<script>
export default {
    name: 'TestPresentiel',
    layout: 'default',
    provide() {
        return { geodeDataPresentiel: this.geodeDataPresentiel}
    },
    data() {
        return {
            geodeDataPresentiel: {
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
            showResultPresentiel: false,
        }
    },
    computed: {
		missingAcces: function () {
			return this.geodeDataPresentiel.acces === '';
		},
		missingLieu: function () {
			return this.geodeDataPresentiel.lieu === '';
		},
		missingTemps: function () {
			return this.geodeDataPresentiel.temps === '';
		},
		missingRythme: function () {
			return this.geodeDataPresentiel.rythme === '';
        },
        missingObjectifs: function () {
			return this.geodeDataPresentiel.objectifs === '';
		},
		missingCheminement: function () {
			return this.geodeDataPresentiel.cheminement === '';
		},
		missingSequence: function () {
			return this.geodeDataPresentiel.sequence === '';
		},
		missingMethodes: function () {
			return this.geodeDataPresentiel.methodes === '';
        },
		missingFormat: function () {
			return this.geodeDataPresentiel.format === '';
        },
        missingContenus: function () {
			return this.geodeDataPresentiel.contenus === '';
		},
		missingSupports: function () {
			return this.geodeDataPresentiel.supports === '';
		},
		missingEvaluation: function () {
			return this.geodeDataPresentiel.evaluation === '';
		},
		missingCommunication: function () {
			return this.geodeDataPresentiel.communication === '';
		},
		missingRessources: function () {
			return this.geodeDataPresentiel.ressources === '';
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
                this.dataMissing = true;
                this.showResultPresentiel = false;
			} else {
                this.showResultPresentiel = true;
                this.dataMissing = false;      
            } 
        },
        
        restartTest() {   
            // Emit to display the first step and hide Form in TheTest.vue
            this.$emit('back-to-first-step');
        },
    }   
}
</script>