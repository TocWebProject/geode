<template>
    <section class="h-auto bg-blue-50">
        <h2 id="geode" class="text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-5xl md:text-6xl">Débutez le test</h2>
        <div class="pt-20 pb-32 px-10 bg-gray-100 bg-opacity-50 h-full">
            <form id="geodeForm" role="form" v-on:submit.prevent="onSubmit"> 
                <div class="mx-auto container max-w-3xl md:w-3/4 shadow-md">
                    <div class="bg-gray-50 p-4 border-t-2 bg-opacity-5 border-blue-400 rounded-t">
                        <div class="max-w-sm mx-auto md:w-full md:mx-0">
                            <div class="inline-flex items-center space-x-4 mb-2">
                                <img
                                    class="w-10 h-10 object-cover rounded"
                                    alt="Logo Geode"
                                    src="~/assets/img/bar-chart.png"
                                />
                                <h3 class="text-3xl pt-4 text-blue-700">La Grille Géode</h3>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white space-y-6">
                        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 pt-10 text-gray-600 items-center">
                            <p class="w-11/12 ml-6 md:mx-8 text-lg">L’apprenant est-il libre d’accéder à la formation au moment qui lui convient le mieux ?</p>
                            <div class="md:w-5/12 max-w-sm mx-6">
                                <label class="text-sm text-blue-600" for="acces">L'accès</label>
                                <div class="w-full inline-flex">
                                    <div class="flex-shrink w-48 inline-block relative">
                                        <select form="geode" name="acces" id="acces" v-model.number="geodeData.acces" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="lieu" id="lieu" v-model.number="geodeData.lieu" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="temps" id="temps" v-model.number="geodeData.temps" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="rythme" id="rythme" v-model.number="geodeData.rythme" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="objectifs" id="objectifs" v-model.number="geodeData.objectifs" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="cheminement" id="cheminement" v-model.number="geodeData.cheminement" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="sequence" id="sequence" v-model.number="geodeData.sequence" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="methodes" id="methodes" v-model.number="geodeData.methodes" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="format" id="format" v-model.number="geodeData.format" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="contenus" id="contenus" v-model.number="geodeData.contenus" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="supports" id="supports" v-model.number="geodeData.supports" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="evaluation" id="evaluation" v-model.number="geodeData.evaluation" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="communication" id="communication" v-model.number="geodeData.communication" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                                        <select form="geode" name="ressources" id="ressources" v-model.number="geodeData.ressources" class="block appearance-none w-full bg-grey-lighter hover:bg-blue-50 focus:ring-2 focus:ring-blue-100 border border-grey-lighter text-grey-darker py-2 px-2 pr-8 mb-3">
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
                <button v-if="!showResult" type="submit" class="w-60 mx-auto mt-10 flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                    Evaluez l'ouverture
                </button>
            </form>
        </div>
        <TheResult v-if="showResult" v-on:restart-test="restartTest" />
    </section>  
</template>

<script>

export default {
    name: 'TheTest',
    layout: 'default',
    provide() {
        return { geodeData: this.geodeData}
    },
    data() {
        return {
            geodeData: {
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
            showResult: false,
        }
    },
    computed: {
		missingAcces: function () {
			return this.geodeData.acces === '';
		},
		missingLieu: function () {
			return this.geodeData.lieu === '';
		},
		missingTemps: function () {
			return this.geodeData.temps === '';
		},
		missingRythme: function () {
			return this.geodeData.rythme === '';
        },
        missingObjectifs: function () {
			return this.geodeData.objectifs === '';
		},
		missingCheminement: function () {
			return this.geodeData.cheminement === '';
		},
		missingSequence: function () {
			return this.geodeData.sequence === '';
		},
		missingMethodes: function () {
			return this.geodeData.methodes === '';
        },
		missingFormat: function () {
			return this.geodeData.format === '';
        },
        missingContenus: function () {
			return this.geodeData.contenus === '';
		},
		missingSupports: function () {
			return this.geodeData.supports === '';
		},
		missingEvaluation: function () {
			return this.geodeData.evaluation === '';
		},
		missingCommunication: function () {
			return this.geodeData.communication === '';
		},
		missingRessources: function () {
			return this.geodeData.ressources === '';
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
                this.showResult = false,
				console.log("Data missing");
			} else {
                this.showResult = true,
                this.dataMissing = false,
                console.log("There is some data !");
                console.log(this.geodeData)
                
            } 

            if (this.dataMissing === false && this.showResult === true) {
                this.redirect();
            }

            // e.preventDefault();
        },
        
        redirect(){
            this.$router.push('/#result');
        },

        restartTest() {   
            console.log('starting restart')
            this.geodeData.acces === '';
            this.geodeData.lieu === '';
            this.geodeData.temps === '';
            this.geodeData.rythme === '';
            this.geodeData.objectifs === '';
            this.geodeData.cheminement === '';
            this.geodeData.sequence === '';
            this.geodeData.methodes === '';
            this.geodeData.format === '';
            this.geodeData.contenus === '';
            this.geodeData.supports === '';
            this.geodeData.evaluation === '';
            this.geodeData.communication === '';
            this.geodeData.ressources === '';
            
            this.attemptSubmit = false;
            this.dataMissing = false;
            this.showResult = false;
        },
    }   
}
</script>

