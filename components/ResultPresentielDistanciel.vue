<template>
    <!-- Geode Result Text -->
    <section id="resultPresentielDistanciel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInDown w-3/4 xl:w-1/2 mx-auto text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats GÉODE pour cette formation <br class="">à la fois en présentiel et en distanciel</h3>
            <!-- Degré d’ouverture en % de chacune des 14 composantes -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-10/12 text-center mt-20 mb-2 text-2xl text-pink-900">1 - Degré d’ouverture en % de chacune des 14 composantes</h4>
            <div class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-4">
                <p class="text-base leading-8 text-justify">
                   L'échelle d'évaluation se situe entre 0 et 100, Lorem ipsum dolor sit amet,s ac justo eget nisi egestas auctor. Morbi vulputate, lacus pellentesque fermentum placerat, purus mi blandit est, quis facilisis dolor nunc quis odio. Proin bibendum diam at est ultricies, a dapibus est faucibus.
                </p>
            </div>
            <!-- Radar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl">
                <radar-chart-result v-if="radarChartData" class="p-1 sm:p-4" :data="radarChartData" :options="radarChartOptions" :height="300"/>
            </div>   
            <p class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-3 text-base leading-8 text-justify">
                L'échelle d'évaluation se situe entre 0 et 100, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla convallis felis, eu pellentesque ligula commodo finibus. Nulla sed tortor ut augue gravida cursus eget vitae nulla.  consectetur adipiscing elit. Cras fringilla convallis felis, eu pellentesque ligula commodo finibus. Nulla sed tortor ut augue gravida cursus eget vitae nulla.  consectetur adipiscing elit. Cras fringilla convallis felis, eu pellentesque ligula commodo finibus. Nulla sed tortor ut augue gravida cursus eget vitae nulla. 
            </p>
            <!-- Tableau des degrés d'ourverture -->
            <div class="kf-appear-2 mx-auto w-screen mt-4 md:px-14 xl:px-20 m-6">
                <table class="rounded-lg m-5 w-5/6 lg:w-3/5 mx-auto bg-gray-100 text-gray-800 shadow">
                    <tr class="text-center border-b-2 border-gray-300">
                        <td class="px-4 py-2">Composantes</td>
                        <td class="px-4 py-2">Degré d’ouverture</td>
                    </tr>
                    
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Accès</th>
                        <th class="px-4 py-1">{{this.degreOuverture.accesDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Lieu</th>
                        <th class="px-4 py-1">{{this.degreOuverture.lieuDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Temps</th>
                        <th class="px-4 py-1">{{this.degreOuverture.tempsDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Rythme</th>
                        <th class="px-4 py-1">{{this.degreOuverture.rythmeDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Objectifs</th>
                        <th class="px-4 py-1">{{this.degreOuverture.objectifsDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Cheminement</th>
                        <th class="px-4 py-1">{{this.degreOuverture.cheminementDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Sequence</th>
                        <th class="px-4 py-1">{{this.degreOuverture.sequenceDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Méthodes</th>
                        <th class="px-4 py-1">{{this.degreOuverture.methodesDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Format</th>
                        <th class="px-4 py-1">{{this.degreOuverture.formatDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Contenus</th>
                        <th class="px-4 py-1">{{this.degreOuverture.contenusDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Evaluation</th>
                        <th class="px-4 py-1">{{this.degreOuverture.evaluationDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Supports</th>
                        <th class="px-4 py-1">{{this.degreOuverture.supportsDP}}%</th>
                    </tr> 
                    <tr class="text-center bg-gray-50 border-b border-gray-100">
                        <th class="px-4 py-1">Communication</th>
                        <th class="px-4 py-1">{{this.degreOuverture.communicationDP}}%</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100 rounded-b-lg">
                        <th class="px-4 py-1">Ressources</th>
                        <th class="px-4 py-1">{{this.degreOuverture.ressourcesDP}}%</th>
                    </tr> 
                </table>        
            </div>
            <!-- Degré d’ouverture en % de chacune des trois catégories de composantes  -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-10/12 text-center mt-20 mb-5 text-2xl text-pink-900">2 - Degré d’ouverture en % de chacune des trois catégories de composantes</h4>
            <div class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-4">
                <p class="text-base leading-8 text-justify">
                   L'échelle d'évaluation se situe entre 0 et 100, Lorem ipsum dolor sit amet,s ac justo eget nisi egestas auctor. Morbi vulputate, lacus pellentesque fermentum placerat, purus mi blandit est, quis facilisis dolor nunc quis odio. Proin bibendum diam at est ultricies, a dapibus est faucibus.
                </p>
            </div>
            <!-- Pills Composantes -->
            <div class="mx-auto max-w-4xl flex flex-col lg:flex-row  items-center justify-around mt-5">
                <div class="rounded-lg font-semibold text-center bg-yellow-200 hover:bg-yellow-300 py-1 px-7 my-2 shadow">
                    <p class="">Composantes Spatio-temporelles :</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesSpatioTemporellesDP }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-indigo-200 hover:bg-indigo-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Pédagogiques :</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesPedagogiquesDP }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-green-200 hover:bg-green-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Communication :</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesCommunicationEducativeDP }}%</p>
                </div>
            </div>
            <!-- Bar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl mt-5">
                <bar-chart-result v-if="barChartData" class="p-1 sm:p-4" :data="barChartData" :options="barChartOptions" :height="300"/>
            </div>
            <!-- Calcul du degré d’ouverture en % de l’environnement étudié  -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-10/12 text-center mt-20 mb-5 text-2xl text-pink-900">3 - Calcul du degré d’ouverture en % de l’environnement étudié</h4>
            <div class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-4">
                <p class="text-base leading-8 text-justify">
                   L'échelle d'évaluation se situe entre 0 et 100, Lorem ipsum dolor sit amet,s ac justo eget nisi egestas auctor. Morbi vulputate, lacus pellentesque fermentum placerat, purus mi blandit est, quis facilisis dolor nunc quis odio. Proin bibendum diam at est ultricies, a dapibus est faucibus.
                </p>
            </div>
            <div class="mx-auto rounded-full bg-gray-100 h-48 w-48 md:w-56 md:h-56 flex items-center justify-center border-pink-800 border-4 mt-10 shadow-md">
                <h4 class="text-5xl text-pink-900 font-semibold"> {{ this.degreOuvertureEnvironnementDP }} %</h4>
            </div>
            <!-- Btn restart Geode test -->
            <div class="h-36 pt-16">
                <a href="/#startGeode" v-on:click="restart()" class="w-60 flex mx-auto items-center justify-center px-8 py-3 border border-pink-600 text-base font-medium rounded-md text-pink-800 bg-gray-50 hover:bg-gray-100">
                    Refaire le test
                </a>         
            </div>
        </div>
    </section>
</template> 

<script>

export default {
    name: 'ResultPresentielDistanciel',
    layout: 'default',
    inject: ['geodeDataDP'], 
    data() {
        return{
            // Coefficient de pondération 
            coefficientPonderation: {
                acces: 3.5,
                lieu: 3.4,
                temps: 3.2,
                rythme: 3.2,
                objectifs: 2.8,
                cheminement: 3.2,
                sequence: 2,
                methodes: 2.8,
                format: 2.9,
                contenus: 1.6,
                evaluation: 1.8,
                supports: 3,
                communication: 2.8,
                ressources: 3.2
            },
            // Score Maximum possible pour chacune des 14 composantes. (Coef Pondération * 4)
            scoreMax: {
                accesDP: 14,
                lieuDP: 13.6,
                tempsDP: 12.8,
                rythmeDP: 12.8,
                objectifsDP: 11.2,
                cheminementDP: 12.8,
                sequenceDP: 8,
                methodesDP: 11.2,
                formatDP: 11.6,
                contenusDP: 6.4,
                evaluationDP: 7.2,
                supportsDP: 12,
                communicationDP: 11.2,
                ressourcesDP: 12.8,
            },
            //Proportion des différences modalités à exprimer en centième en fonction du pourcentage de volume horaire obtenu. Calculer en mounted().
            proportionDistanciel: null,
            proportionPresentiel: null,
            //Score GEODE de chacune des 14 composantes de l’environnement éducatif du test. Calculer en mounted().
            score: {
                accesDP: null,
                lieuDP: null,
                tempsDP: null,
                rythmeDP: null,
                objectifsDP: null,
                cheminementDP: null,
                sequenceDP: null,
                methodesDP: null,
                formatDP: null,
                contenusDP: null,
                evaluationDP: null,
                supportsDP: null,
                communicationDP: null,
                ressourcesDP: null,
            },
            // Degré d’ouverture en % de chacune des 14 composantes. Calculer en mounted().
            degreOuverture: {
                accesDP: null,
                lieuDP: null,
                tempsDP: null,
                rythmeDP: null,
                objectifsDP: null,
                cheminementDP: null,
                sequenceDP: null,
                methodesDP: null,
                formatDP: null,
                contenusDP: null,
                evaluationDP: null,
                supportsDP: null,
                communicationDP: null,
                ressourcesDP: null,
            },
            //  Degré d’ouverture en % de chacune des trois catégories de composantes. Calculer en mounted().
            degreOuvertureCategories: {
                composantesSpatioTemporellesDP: null,
                composantesPedagogiquesDP: null,
                composantesCommunicationEducativeDP: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementDP: null,
            // RADAR CHARTS.JS -> radarChartData renvoyé en mounted() par fillData() passé en props à <radar-chart-result>
            radarChartData: null,
            radarChartOptions: {
                responsive: true,
                responsiveAnimationDuration: 500,                
                animation : {
                    duration: 2200,
                    easing: 'easeInOutExpo',
                },
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,
                    text: 'Résultat Géode Radar',
                    fontSize: 24,
                    fontColor: '#6b7280'
                },
                tooltips: {
                    backgroundColor: '#1f2911'
                },
                scale: {
                    ticks: {
                        beginAtZero: true,
                        max: 100,
					}
				}
            },
            // BAR CHARTS.JS -> barChartData passé en props à <bar-chart-result>
            barChartData: null,
            barChartOptions: {
                responsive: true,
                responsiveAnimationDuration: 500,                
                animation : {
                    duration: 2200,
                    easing: 'easeInOutExpo',
                },
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,
                    text: 'Résultat Geode Bar',
                    fontSize: 24,
                    fontColor: '#6b7280'
                },
                tooltips: {
                    backgroundColor: '#1f2937'

                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                            display: false
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                max: 100,
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                }
            },
        }
    },

    methods: {
        restart() {
            this.$emit('restart-test');
        },

        proportionModalites() {
            // Calcul des proportion des différences modalités à exprimer en centième en fonction du pourcentage de volume horaire obtenu.
            //Presentiel
            this.proportionPresentiel = Number(parseFloat((this.geodeDataDP.heuresPresentiel) / (this.geodeDataDP.heuresPresentiel + this.geodeDataDP.heuresDistanciel)).toFixed(3))
            //Distanciel
            this.proportionDistanciel = Number(parseFloat((this.geodeDataDP.heuresDistanciel) / (this.geodeDataDP.heuresPresentiel + this.geodeDataDP.heuresDistanciel)).toFixed(3))
        },

        scoreComposantesDP() {
            // Calcul du score GEODE de chacune des 14 composantes de l’environnement éducatif arrondi au 0,1 supérieur

            // Acces
            this.score.accesDP = Number(parseFloat((this.coefficientPonderation.acces * ((this.geodeDataDP.accesPresentiel * this.proportionPresentiel) + (this.geodeDataDP.accesDistanciel * this.proportionDistanciel)))).toFixed(1));
            console.log(this.score.accesDP);
            //Lieu
            this.score.lieuDP = Number(parseFloat((this.coefficientPonderation.lieu * ((this.geodeDataDP.lieuPresentiel * this.proportionPresentiel) + (this.geodeDataDP.lieuDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Temps
            this.score.tempsDP = Number(parseFloat((this.coefficientPonderation.temps * ((this.geodeDataDP.tempsPresentiel * this.proportionPresentiel) + (this.geodeDataDP.tempsDistanciel * this.proportionDistanciel)))).toFixed(1));
            
            //Rythme
            this.score.rythmeDP = Number(parseFloat((this.coefficientPonderation.rythme * ((this.geodeDataDP.rythmePresentiel * this.proportionPresentiel) + (this.geodeDataDP.rythmeDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Objectifs
            this.score.objectifsDP = Number(parseFloat((this.coefficientPonderation.objectifs * ((this.geodeDataDP.objectifsPresentiel * this.proportionPresentiel) + (this.geodeDataDP.objectifsDistanciel * this.proportionDistanciel)))).toFixed(1));
            
            //Cheminement
            this.score.cheminementDP = Number(parseFloat((this.coefficientPonderation.cheminement * ((this.geodeDataDP.cheminementPresentiel * this.proportionPresentiel) + (this.geodeDataDP.cheminementDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Sequence
            this.score.sequenceDP = Number(parseFloat((this.coefficientPonderation.sequence * ((this.geodeDataDP.sequencePresentiel * this.proportionPresentiel) + (this.geodeDataDP.sequenceDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Methodes
            this.score.methodesDP = Number(parseFloat((this.coefficientPonderation.methodes * ((this.geodeDataDP.methodesPresentiel * this.proportionPresentiel) + (this.geodeDataDP.methodesDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Format
            this.score.formatDP = Number(parseFloat((this.coefficientPonderation.format * ((this.geodeDataDP.formatPresentiel * this.proportionPresentiel) + (this.geodeDataDP.formatDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Contenus
            this.score.contenusDP = Number(parseFloat((this.coefficientPonderation.contenus * ((this.geodeDataDP.contenusPresentiel * this.proportionPresentiel) + (this.geodeDataDP.contenusDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Evaluation
            this.score.evaluationDP = Number(parseFloat((this.coefficientPonderation.evaluation * ((this.geodeDataDP.evaluationPresentiel * this.proportionPresentiel) + (this.geodeDataDP.evaluationDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Supports
            this.score.supportsDP = Number(parseFloat((this.coefficientPonderation.supports * ((this.geodeDataDP.supportsPresentiel * this.proportionPresentiel) + (this.geodeDataDP.supportsDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Communication
            this.score.communicationDP = Number(parseFloat((this.coefficientPonderation.communication * ((this.geodeDataDP.communicationPresentiel * this.proportionPresentiel) + (this.geodeDataDP.communicationDistanciel * this.proportionDistanciel)))).toFixed(1));

            //Ressources
            this.score.ressourcesDP = Number(parseFloat((this.coefficientPonderation.ressources * ((this.geodeDataDP.ressourcesPresentiel * this.proportionPresentiel) + (this.geodeDataDP.ressourcesDistanciel * this.proportionDistanciel)))).toFixed(1));
        },

        degreOuvertureDP(){
            // Calcul du degré d’ouverture en % de chacune des 14 composantes arrondi au 0,1 supérieur

            // Acces
            this.degreOuverture.accesDP = Number(parseFloat(((this.score.accesDP / this.scoreMax.accesDP ) * 100)).toFixed(1));

            //Lieu
            this.degreOuverture.lieuDP = Number(parseFloat(((this.score.lieuDP / this.scoreMax.lieuDP ) * 100)).toFixed(1));
        
            //Temps
            this.degreOuverture.tempsDP = Number(parseFloat(((this.score.tempsDP / this.scoreMax.tempsDP ) * 100)).toFixed(1));
            
            //Rythme
            this.degreOuverture.rythmeDP = Number(parseFloat(((this.score.rythmeDP / this.scoreMax.rythmeDP ) * 100)).toFixed(1));

            //Objectifs
            this.degreOuverture.objectifsDP = Number(parseFloat(((this.score.objectifsDP / this.scoreMax.objectifsDP ) * 100)).toFixed(1));
            
            //Cheminement
            this.degreOuverture.cheminementDP = Number(parseFloat(((this.score.cheminementDP / this.scoreMax.cheminementDP ) * 100)).toFixed(1));

            //Sequence
            this.degreOuverture.sequenceDP = Number(parseFloat(((this.score.sequenceDP / this.scoreMax.sequenceDP ) * 100)).toFixed(1));

            //Methodes
            this.degreOuverture.methodesDP = Number(parseFloat(((this.score.methodesDP / this.scoreMax.methodesDP ) * 100)).toFixed(1));

            //Format
            this.degreOuverture.formatDP = Number(parseFloat(((this.score.formatDP / this.scoreMax.formatDP ) * 100)).toFixed(1));

            //Contenus
            this.degreOuverture.contenusDP = Number(parseFloat(((this.score.contenusDP / this.scoreMax.contenusDP ) * 100)).toFixed(1));
            
            //Evaluation
            this.degreOuverture.evaluationDP  = Number(parseFloat(((this.score.evaluationDP / this.scoreMax.evaluationDP ) * 100)).toFixed(1));

            //Supports
            this.degreOuverture.supportsDP = Number(parseFloat(((this.score.supportsDP / this.scoreMax.supportsDP ) * 100)).toFixed(1));

            //Communication
            this.degreOuverture.communicationDP = Number(parseFloat(((this.score.communicationDP / this.scoreMax.communicationDP ) * 100)).toFixed(1));

            //Ressources
            this.degreOuverture.ressourcesDP = Number(parseFloat(((this.score.ressourcesDP / this.scoreMax.ressourcesDP ) * 100)).toFixed(1));
        },

        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesDP = Number(parseFloat((((this.score.accesDP + this.score.lieuDP + this.score.tempsDP + this.score.rythmeDP) / (this.scoreMax.accesDP + this.scoreMax.lieuDP + this.scoreMax.tempsDP + this.scoreMax.rythmeDP)) * 100)).toFixed(1));
            // Composantes Pédagogiques arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesPedagogiquesDP = Number(parseFloat((((this.score.objectifsDP + this.score.cheminementDP + this.score.sequenceDP + this.score.methodesDP + this.score.formatDP + this.score.contenusDP + this.score.evaluationDP) / (this.scoreMax.objectifsDP + this.scoreMax.cheminementDP + this.scoreMax.sequenceDP + this.scoreMax.methodesDP + this.scoreMax.formatDP + this.scoreMax.contenusDP + this.scoreMax.evaluationDP)) * 100)).toFixed(1));
            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativeDP = Number(parseFloat((((this.score.supportsDP + this.score.communicationDP + this.score.ressourcesDP) / (this.scoreMax.supportsDP + this.scoreMax.communicationDP + this.scoreMax.ressourcesDP)) * 100)).toFixed(1));
        },

        degreOuvertureEnvironnementEtudie(){
            // Calcul du degré d’ouverture en % de l’environnement étudié arrondi à l'entier supérieur
            this.degreOuvertureEnvironnementDP = Math.floor(((
                this.score.accesDP +
                this.score.lieuDP +
                this.score.tempsDP +
                this.score.rythmeDP +
                this.score.objectifsDP +
                this.score.cheminementDP +
                this.score.sequenceDP +
                this.score.methodesDP +
                this.score.formatDP +
                this.score.contenusDP +
                this.score.evaluationDP +
                this.score.supportsDP +
                this.score.communicationDP +
                this.score.ressourcesDP 
            ) / 157.6 ) * 100)
        },

        fillDataResult() {
            this.radarChartData = {
                labels: [
                    'Acces',
                    'Lieu',
                    'Temps',
                    'Rythme',
                    'Objectifs',
                    'Cheminement',
                    'Sequence',
                    'Méthodes',
                    'Format',
                    'Contenus',
                    'Evaluation',
                    'Supports',
                    'Communication',
                    'Ressources',
                ],
                datasets: [
                    {
                        label: 'Présentiel et Distanciel',
                        color: '#1d4ed8',
                        backgroundColor: 'rgba(29, 78, 216, 0.5)',
                        borderColor: '#1d4ed8',
                        pointBackgroundColor: '#173fab',
                        data: [
                                this.degreOuverture.accesDP,
                                this.degreOuverture.lieuDP,
                                this.degreOuverture.tempsDP,
                                this.degreOuverture.rythmeDP,
                                this.degreOuverture.objectifsDP,
                                this.degreOuverture.cheminementDP,
                                this.degreOuverture.sequenceDP,
                                this.degreOuverture.methodesDP,
                                this.degreOuverture.formatDP,
                                this.degreOuverture.contenusDP,
                                this.degreOuverture.evaluationDP,
                                this.degreOuverture.supportsDP,
                                this.degreOuverture.communicationDP,
                                this.degreOuverture.ressourcesDP
                        ]
                    }
                ]
            },

            this.barChartData = {
                labels: [
                    'Présentiel et Distanciel',
                ],
                datasets: [
                    {
                        label: 'Composantes Spatio-temporelles',
                        data: [this.degreOuvertureCategories.composantesSpatioTemporellesDP],
                        backgroundColor: '#fde68a'
                    },
                    {
                        label: 'Composantes Pédagogiques',
                        data: [this.degreOuvertureCategories.composantesPedagogiquesDP],
                        backgroundColor: '#c7d2fe'
                    },
                    {
                        label: 'Composantes de la Communication éducative médiatisée',
                        data: [this.degreOuvertureCategories.composantesCommunicationEducativeDP],
                        backgroundColor: '#a7f3d0'
                    }
                ]
            }
        }
    },
        
    mounted() {
        this.proportionModalites();
        this.scoreComposantesDP();
        this.degreOuvertureDP();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();
        this.fillDataResult();
        
         this.$router.push('/#resultPresentielDistanciel'); 
    }
}

</script>