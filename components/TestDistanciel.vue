<template>
    <div>   
        <div class="pb-40 px-5 sm:px-6 h-full">
            <!--  Geode Forms -->
            <form id="geodeFormDistanciel" role="form" v-on:submit.prevent="onSubmit"> 
                <!--  Form header -->
                <div class="mx-auto container max-w-3xl md:w-3/4 shadow-lg">
                    <div class="bg-gray-100 px-2 py-3 sm:px-3 sm:py-5 border-t-2 border-pink-500 rounded-t relative">
                        <div class="max-w-2xl md:w-full md:mx-0">
                            <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-3 sm:mb-2">
                                <img
                                    class="w-9 h-9 sm:w-12 sm:h-12 mt-3 object-cover rounded"
                                    alt="Logo Geode"
                                    src="~/assets/img/logo-geode.png"
                                    width="48" 
                                    height="48"
                                />
                                <h3 class="text-xl sm:text-3xl text-pink-700 mt-5 sm:mt-6">GÉODE pour une formation en <span class="text-pink-600">distanciel</span></h3>
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
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-yellow-400">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-yellow-600">Questions liées aux composantes <span class="font-semibold">spatio-temporelles</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 pt-4 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre d’accéder à la formation au moment qui lui convient le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="acces">L'accès</label>
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="acces" id="acces" v-model.number="geodeDataDistanciel.acces" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="lieu" id="lieu" v-model.number="geodeDataDistanciel.lieu" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <label class="text-sm text-yellow-600 tracking-wide ml-1" for="temps">Le temps</label>    
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="temps" id="temps" v-model.number="geodeDataDistanciel.temps" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="rythme" id="rythme" v-model.number="geodeDataDistanciel.rythme" class="block w-full mt-0 rounded-md border-yellow-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 pr-8 mb-1">
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
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-indigo-300">
                            <div class="max-w-lg md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 text-indigo-700">Questions liées aux composantes <span class="font-semibold">pédagogiques</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les objectifs à atteindre au travers de sa formation et de ses apprentissages ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-indigo-600 tracking-wide ml-1" for="objectifs">Les objectifs</label>    
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="objectifs" id="objectifs" v-model.number="geodeDataDistanciel.objectifs" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="cheminement" id="cheminement" v-model.number="geodeDataDistanciel.cheminement" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="sequence" id="sequence" v-model.number="geodeDataDistanciel.sequence" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="methodes" id="methodes" v-model.number="geodeDataDistanciel.methodes" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="format" id="format" v-model.number="geodeDataDistanciel.format" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="contenus" id="contenus" v-model.number="geodeDataDistanciel.contenus" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="evaluation" id="evaluation" v-model.number="geodeDataDistanciel.evaluation" class="block w-full mt-0 rounded-md border-indigo-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-8 mb-1">
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
                        <div class="bg-gray-50 px-2 py-3 sm:px-3 sm:py-6 border-l-4 border-green-500">
                            <div class="max-w-3xl md:w-full md:mx-0">
                                <div class="inline-flex items-start space-x-1 sm:space-x-2 mb-2">
                                    <h3 class="text-lg lg:text-xl mt-2 ml-2 sm:ml-6 w-full text-green-700">Questions liées aux composantes de la <span class="font-semibold">communication éducative médiatisée</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 sm:p-2 text-gray-600 items-center">
                            <p class="w-11/12 ml-4 sm:ml-6 md:mx-8 text-lg">L’apprenant est-il libre de choisir les supports d’apprentissage qui lui conviennent le mieux  (ouvrages, textes numérisés, vidéo et/ou podcast en ligne ou non, etc.) ?</p>
                            <div class="md:w-5/12 max-w-sm mx-4 sm:mx-6">
                                <label class="text-sm text-green-600 tracking-wide ml-1" for="supports">Les supports</label>
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="supports" id="supports" v-model.number="geodeDataDistanciel.supports" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
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
                                <label class="text-sm text-green-600 tracking-wide ml-1" for="communication">les outils de communication</label>
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="communication" id="communication" v-model.number="geodeDataDistanciel.communication" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
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
                                <div class="w-full inline-flex mt-1">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geodeFormDistanciel" name="ressources" id="ressources" v-model.number="geodeDataDistanciel.ressources" class="block w-full mt-0 rounded-md border-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-100 focus:ring-opacity-50 pr-8 mb-1">
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
                <button v-if="!showResultDistanciel" type="submit" class="w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg">
                    Evaluez l'ouverture
                </button>
                <a v-if="showResultDistanciel" @click="restartTest" href="#startGeode" class="kf-appear-2 w-60 mx-auto mt-16 flex items-center justify-center px-5 py-4 border border-pink-600 text-base font-medium rounded-md text-pink-700 bg-white hover:bg-gray-100 hover:bg-opacity-60 md:py-4 md:text-lg">
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
                this.dataMissing = true;
                this.showResultDistanciel = false;
			} else {
                this.showResultDistanciel = true;
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