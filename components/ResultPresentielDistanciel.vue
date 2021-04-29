<template>
    <!-- Geode Result Text -->
    <section id="resultPresentielDistanciel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInUp w-3/4 lg:w-full mx-auto text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-10 sm:pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats GÉODE pour cette formation <br class="">à la fois en présentiel et en distanciel</h3>
            <!-- Calcul du degré d’ouverture en % de l’environnement étudié  -->
            <h4 class="kf-appear-2 mx-auto w-full md:w-9/12 text-center mt-10 sm:mt-16 mb-5 text-2xl text-pink-900 uppercase font-semibold">1 - Calcul du degré d’ouverture en % de l’environnement étudié</h4>
            <!-- Ellipse Résultat environnement étudié -->
            <div class="flex my-5 md:my-8">
                <vue-ellipse-progress 
                    :progress="progressEllipse"
                    :size="250"
                    thickness="6"
                    lineMode="in 10"
                    emptyThickness="7"
                    :color="gradientEllipse"
                    emptyColor="#661543"  
                    colorFill="#f9fafb"
                    emptyColorFill="#e5e7eb"                      
                    animation="rs 1300 400"
                    :noData="false"
                    :loading="loadingEllipse"                      
                    fontColor="#661543"
                    :gap="10"
                    dot="10 #661543"  
                    fontSize="3.5rem">
                    <span slot="legend-value">%</span>
                </vue-ellipse-progress>
            </div>
            <div v-if="!loadingEllipse" class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-4">
                <p class="text-2xl text-pink-800 leading-8 text-center">
                    L'environnement étudié est <span class="font-semibold">{{ this.degreOuvertureEnvironnementDPLitteral }}</span>.
                </p>
            </div>   
            <!-- Degré d’ouverture en % de chacune des trois catégories de composantes  -->
            <h4 class="kf-appear-2 mx-auto md:w-9/12 w-11/12 text-center mt-10 md:mt-20 mb-5 text-2xl text-pink-900 uppercase font-semibold">2 - Degré d’ouverture en % de chacune des trois catégories de composantes</h4>
            <!-- Pills Catégorie de composantes -->
            <div class="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-around mt-8">
                <div class="rounded-lg border-2 border-yellow-400 font-semibold text-center bg-yellow-100 hover:bg-yellow-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Spatio-temporelle :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesSpatioTemporellesDP }}%</p>
                </div>
                <div class="rounded-lg border-2 border-indigo-400 font-semibold text-center bg-indigo-100 hover:bg-indigo-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Pédagogique :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesPedagogiquesDP }}%</p>
                </div>
                <div class="rounded-lg border-2 border-green-500 font-semibold text-center bg-green-100 hover:bg-green-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Communication :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesCommunicationEducativeDP }}%</p>
                </div>
            </div>
            <!-- Bar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl mt-5">
                <bar-chart-result v-if="barChartDataCategorie" class="p-1 sm:p-4" :data="barChartDataCategorie" :options="barChartOptionsCategorie" :height="300"/>
            </div>
            <!-- Degré d’ouverture en % de chacune des 14 composantes -->
            <h4 class="kf-appear-2 mx-auto md:w-9/12 w-11/12 text-center mt-10 md:mt-20 mb-2 text-2xl text-pink-900 uppercase font-semibold">3 - Degré d’ouverture en % de chacune des 14 composantes</h4>
            <!-- Bar Chart Composantes -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl mt-5">
                <bar-chart-result v-if="barChartDataComposantes" class="p-1 sm:p-4" :data="barChartDataComposantes" :options="barChartOptionsComposantes" :height="300"/>
            </div>
            <!-- Tableau des degrés d'ourverture -->
            <div class="kf-appear-2 mx-auto w-screen mt-4 md:px-14 xl:px-20 m-8">
                <table class="rounded-lg m-5 w-full sm:w-5/6 lg:w-3/5 mx-auto bg-gray-100 text-gray-800 shadow">
                    <tr class="text-center border-b-2 border-gray-300">
                        <td class="px-2 md:px-4 py-2">Composantes</td>
                        <td class="px-2 md:px-4 py-2">Degré d’ouverture</td>
                    </tr>
                    
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Accès</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.accesDP}}% | {{this.degreOuvertureLitteral.accesDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Lieu</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.lieuDP}}%  | {{this.degreOuvertureLitteral.lieuDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Horaires</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.tempsDP}}% | {{this.degreOuvertureLitteral.tempsDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Rythme</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.rythmeDP}}% | {{this.degreOuvertureLitteral.rythmeDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Objectifs</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.objectifsDP}}% | {{this.degreOuvertureLitteral.objectifsDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Cheminement</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.cheminementDP}}% | {{this.degreOuvertureLitteral.cheminementDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Sequence</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.sequenceDP}}% | {{this.degreOuvertureLitteral.sequenceDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Méthodes</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.methodesDP}}% | {{this.degreOuvertureLitteral.methodesDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Format</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.formatDP}}% | {{this.degreOuvertureLitteral.formatDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Contenus</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.contenusDP}}% | {{this.degreOuvertureLitteral.contenusDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Evaluation</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.evaluationDP}}% | {{this.degreOuvertureLitteral.evaluationDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Supports</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.supportsDP}}% | {{this.degreOuvertureLitteral.supportsDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Communication</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.communicationDP}}% | {{this.degreOuvertureLitteral.communicationDP}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100 rounded-b-lg">
                        <th class="px-2 md:px-4 py-1">Ressources</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.ressourcesDP}}% | {{this.degreOuvertureLitteral.ressourcesDP}}</th>
                    </tr> 
                </table>        
            </div>            
            <!-- Radar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl">
                <radar-chart-result v-if="radarChartData" class="p-1 sm:p-4" :data="radarChartData" :options="radarChartOptions" :height="300"/>
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
            degreOuvertureLitteral: {
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
            degreOuvertureCategoriesLitteral: {
                composantesSpatioTemporellesDP: null,
                composantesPedagogiquesDP: null,
                composantesCommunicationEducativeDP: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementDP: null,
            degreOuvertureEnvironnementDPLitteral: null,
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
            // BAR CHARTS.JS -> barChartDataCategorie passé en props à <bar-chart-result>
            barChartDataCategorie: null,
            barChartOptionsCategorie: {
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

            // BAR CHARTS.JS -> barChartDataComposantes passé en props à <bar-chart-result>
            barChartDataComposantes: null,
            barChartOptionsComposantes: {
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
            // Data Ellipse Résultat degré ouverture de l'environnement étudié
            gradientEllipse: {
                radial: false,
                colors: [
                {
                    color: '#f472b6', 
                    offset: "0",
                    opacity: '0.5',
                },
                {
                    color: '#661543',
                    offset: "100",
                    opacity: '1',
                },
                ]
            },
            loadingEllipse: true,
            progressEllipse: null,
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
            // Réponse littéral Accès
            if (100 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 90 ) {
                this.degreOuvertureLitteral.accesDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 80 ) {
                this.degreOuvertureLitteral.accesDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 70 ) {
                this.degreOuvertureLitteral.accesDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 60 ) {
                this.degreOuvertureLitteral.accesDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 50 ) {
                this.degreOuvertureLitteral.accesDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 40 ) {
                this.degreOuvertureLitteral.accesDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 30 ) {
                this.degreOuvertureLitteral.accesDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 20 ) {
                this.degreOuvertureLitteral.accesDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.accesDP && this.degreOuverture.accesDP > 10 ) {
                this.degreOuvertureLitteral.accesDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.accesDP ) {
                this.degreOuvertureLitteral.accesDP = 'Fermé';
            }

            //Lieu
            this.degreOuverture.lieuDP = Number(parseFloat(((this.score.lieuDP / this.scoreMax.lieuDP ) * 100)).toFixed(1));
            // Réponse littéral Lieu
            if (100 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 90 ) {
                this.degreOuvertureLitteral.lieuDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 80 ) {
                this.degreOuvertureLitteral.lieuDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 70 ) {
                this.degreOuvertureLitteral.lieuDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 60 ) {
                this.degreOuvertureLitteral.lieuDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 50 ) {
                this.degreOuvertureLitteral.lieuDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 40 ) {
                this.degreOuvertureLitteral.lieuDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 30 ) {
                this.degreOuvertureLitteral.lieuDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 20 ) {
                this.degreOuvertureLitteral.lieuDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.lieuDP && this.degreOuverture.lieuDP > 10 ) {
                this.degreOuvertureLitteral.lieuDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.lieuDP ) {
                this.degreOuvertureLitteral.lieuDP = 'Fermé';
            }

            //Temps
            this.degreOuverture.tempsDP = Number(parseFloat(((this.score.tempsDP / this.scoreMax.tempsDP ) * 100)).toFixed(1));
            // Réponse littéral Temps
            if (100 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 90 ) {
                this.degreOuvertureLitteral.tempsDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 80 ) {
                this.degreOuvertureLitteral.tempsDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 70 ) {
                this.degreOuvertureLitteral.tempsDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 60 ) {
                this.degreOuvertureLitteral.tempsDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 50 ) {
                this.degreOuvertureLitteral.tempsDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 40 ) {
                this.degreOuvertureLitteral.tempsDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 30 ) {
                this.degreOuvertureLitteral.tempsDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 20 ) {
                this.degreOuvertureLitteral.tempsDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.tempsDP && this.degreOuverture.tempsDP > 10 ) {
                this.degreOuvertureLitteral.tempsDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.tempsDP ) {
                this.degreOuvertureLitteral.tempsDP = 'Fermé';
            }

            //Rythme
            this.degreOuverture.rythmeDP = Number(parseFloat(((this.score.rythmeDP / this.scoreMax.rythmeDP ) * 100)).toFixed(1));
            // Réponse littéral Rythme
            if (100 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 90 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 80 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 70 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 60 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 50 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 40 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 30 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 20 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.rythmeDP && this.degreOuverture.rythmeDP > 10 ) {
                this.degreOuvertureLitteral.rythmeDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.rythmeDP ) {
                this.degreOuvertureLitteral.rythmeDP = 'Fermé';
            }

            //Objectifs
            this.degreOuverture.objectifsDP = Number(parseFloat(((this.score.objectifsDP / this.scoreMax.objectifsDP ) * 100)).toFixed(1));
            // Réponse littéral Objectifs
            if (100 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 90 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 80 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 70 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 60 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 50 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 40 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 30 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 20 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.objectifsDP && this.degreOuverture.objectifsDP > 10 ) {
                this.degreOuvertureLitteral.objectifsDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.objectifsDP ) {
                this.degreOuvertureLitteral.objectifsDP = 'Fermé';
            }

            //Cheminement
            this.degreOuverture.cheminementDP = Number(parseFloat(((this.score.cheminementDP / this.scoreMax.cheminementDP ) * 100)).toFixed(1));
            // Réponse littéral Cheminement
            if (100 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 90 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 80 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 70 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 60 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 50 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 40 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 30 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 20 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.cheminementDP && this.degreOuverture.cheminementDP > 10 ) {
                this.degreOuvertureLitteral.cheminementDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.cheminementDP ) {
                this.degreOuvertureLitteral.cheminementDP = 'Fermé';
            }  

            //Sequence
            this.degreOuverture.sequenceDP = Number(parseFloat(((this.score.sequenceDP / this.scoreMax.sequenceDP ) * 100)).toFixed(1));
            // Réponse littéral Sequence
            if (100 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 90 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 80 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 70 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 60 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 50 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 40 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 30 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 20 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.sequenceDP && this.degreOuverture.sequenceDP > 10 ) {
                this.degreOuvertureLitteral.sequenceDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.sequenceDP ) {
                this.degreOuvertureLitteral.sequenceDP = 'Fermé';
            }

            //Methodes
            this.degreOuverture.methodesDP = Number(parseFloat(((this.score.methodesDP / this.scoreMax.methodesDP ) * 100)).toFixed(1));
            // Réponse littéral Methodes
            if (100 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 90 ) {
                this.degreOuvertureLitteral.methodesDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 80 ) {
                this.degreOuvertureLitteral.methodesDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 70 ) {
                this.degreOuvertureLitteral.methodesDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 60 ) {
                this.degreOuvertureLitteral.methodesDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 50 ) {
                this.degreOuvertureLitteral.methodesDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 40 ) {
                this.degreOuvertureLitteral.methodesDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 30 ) {
                this.degreOuvertureLitteral.methodesDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 20 ) {
                this.degreOuvertureLitteral.methodesDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.methodesDP && this.degreOuverture.methodesDP > 10 ) {
                this.degreOuvertureLitteral.methodesDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.methodesDP ) {
                this.degreOuvertureLitteral.methodesDP = 'Fermé';
            }

            //Format
            this.degreOuverture.formatDP = Number(parseFloat(((this.score.formatDP / this.scoreMax.formatDP ) * 100)).toFixed(1));
            // Réponse littéral Format
            if (100 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 90 ) {
                this.degreOuvertureLitteral.formatDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 80 ) {
                this.degreOuvertureLitteral.formatDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 70 ) {
                this.degreOuvertureLitteral.formatDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 60 ) {
                this.degreOuvertureLitteral.formatDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 50 ) {
                this.degreOuvertureLitteral.formatDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 40 ) {
                this.degreOuvertureLitteral.formatDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 30 ) {
                this.degreOuvertureLitteral.formatDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 20 ) {
                this.degreOuvertureLitteral.formatDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.formatDP && this.degreOuverture.formatDP > 10 ) {
                this.degreOuvertureLitteral.formatDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.formatDP ) {
                this.degreOuvertureLitteral.formatDP = 'Fermé';
            }

            //Contenus
            this.degreOuverture.contenusDP = Number(parseFloat(((this.score.contenusDP / this.scoreMax.contenusDP ) * 100)).toFixed(1));
            // Réponse littéral Contenus
            if (100 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 90 ) {
                this.degreOuvertureLitteral.contenusDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 80 ) {
                this.degreOuvertureLitteral.contenusDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 70 ) {
                this.degreOuvertureLitteral.contenusDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 60 ) {
                this.degreOuvertureLitteral.contenusDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 50 ) {
                this.degreOuvertureLitteral.contenusDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 40 ) {
                this.degreOuvertureLitteral.contenusDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 30 ) {
                this.degreOuvertureLitteral.contenusDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 20 ) {
                this.degreOuvertureLitteral.contenusDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.contenusDP && this.degreOuverture.contenusDP > 10 ) {
                this.degreOuvertureLitteral.contenusDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.contenusDP ) {
                this.degreOuvertureLitteral.contenusDP = 'Fermé';
            }

            //Evaluation
            this.degreOuverture.evaluationDP  = Number(parseFloat(((this.score.evaluationDP / this.scoreMax.evaluationDP ) * 100)).toFixed(1));
             // Réponse littéral Evaluation
            if (100 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 90 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 80 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 70 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 60 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 50 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 40 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 30 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 20 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.evaluationDP && this.degreOuverture.evaluationDP > 10 ) {
                this.degreOuvertureLitteral.evaluationDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.evaluationDP ) {
                this.degreOuvertureLitteral.evaluationDP = 'Fermé';
            }

            //Supports
            this.degreOuverture.supportsDP = Number(parseFloat(((this.score.supportsDP / this.scoreMax.supportsDP ) * 100)).toFixed(1));
            // Réponse littéral Supports
            if (100 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 90 ) {
                this.degreOuvertureLitteral.supportsDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 80 ) {
                this.degreOuvertureLitteral.supportsDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 70 ) {
                this.degreOuvertureLitteral.supportsDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 60 ) {
                this.degreOuvertureLitteral.supportsDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 50 ) {
                this.degreOuvertureLitteral.supportsDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 40 ) {
                this.degreOuvertureLitteral.supportsDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 30 ) {
                this.degreOuvertureLitteral.supportsDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 20 ) {
                this.degreOuvertureLitteral.supportsDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.supportsDP && this.degreOuverture.supportsDP > 10 ) {
                this.degreOuvertureLitteral.supportsDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.supportsDP ) {
                this.degreOuvertureLitteral.supportsDP = 'Fermé';
            }

            //Communication
            this.degreOuverture.communicationDP = Number(parseFloat(((this.score.communicationDP / this.scoreMax.communicationDP ) * 100)).toFixed(1));
            // Réponse littéral Communications
            if (100 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 90 ) {
                this.degreOuvertureLitteral.communicationDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 80 ) {
                this.degreOuvertureLitteral.communicationDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 70 ) {
                this.degreOuvertureLitteral.communicationDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 60 ) {
                this.degreOuvertureLitteral.communicationDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 50 ) {
                this.degreOuvertureLitteral.communicationDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 40 ) {
                this.degreOuvertureLitteral.communicationDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 30 ) {
                this.degreOuvertureLitteral.communicationDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 20 ) {
                this.degreOuvertureLitteral.communicationDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.communicationDP && this.degreOuverture.communicationDP > 10 ) {
                this.degreOuvertureLitteral.communicationDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.communicationDP ) {
                this.degreOuvertureLitteral.communicationDP = 'Fermé';
            }

            //Ressources
            this.degreOuverture.ressourcesDP = Number(parseFloat(((this.score.ressourcesDP / this.scoreMax.ressourcesDP ) * 100)).toFixed(1));
            // Réponse littéral Ressources
            if (100 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 90 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 80 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 70 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 60 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 50 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 40 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 30 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 20 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.ressourcesDP && this.degreOuverture.ressourcesDP > 10 ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.ressourcesDP ) {
                this.degreOuvertureLitteral.ressourcesDP = 'Fermé';
            }   
        },

        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesDP = Number(parseFloat((((this.score.accesDP + this.score.lieuDP + this.score.tempsDP + this.score.rythmeDP) / (this.scoreMax.accesDP + this.scoreMax.lieuDP + this.scoreMax.tempsDP + this.scoreMax.rythmeDP)) * 100)).toFixed(1));
            // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP && this.degreOuvertureCategories.composantesSpatioTemporellesDP > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesSpatioTemporellesDP ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDP = 'Fermée';
            }


            // Composantes Pédagogiques arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesPedagogiquesDP = Number(parseFloat((((this.score.objectifsDP + this.score.cheminementDP + this.score.sequenceDP + this.score.methodesDP + this.score.formatDP + this.score.contenusDP + this.score.evaluationDP) / (this.scoreMax.objectifsDP + this.scoreMax.cheminementDP + this.scoreMax.sequenceDP + this.scoreMax.methodesDP + this.scoreMax.formatDP + this.scoreMax.contenusDP + this.scoreMax.evaluationDP)) * 100)).toFixed(1));
            if (100 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesPedagogiquesDP && this.degreOuvertureCategories.composantesPedagogiquesDP > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesPedagogiquesDP ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDP = 'Fermée';
            }

            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativeDP = Number(parseFloat((((this.score.supportsDP + this.score.communicationDP + this.score.ressourcesDP) / (this.scoreMax.supportsDP + this.scoreMax.communicationDP + this.scoreMax.ressourcesDP)) * 100)).toFixed(1));
            if (100 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP && this.degreOuvertureCategories.composantesCommunicationEducativeDP > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesCommunicationEducativeDP ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDP = 'Fermée';
            }
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

             if (100 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 90 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'hautement ouvert +';
            } else if ( 90 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 80 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'hautement ouvert';
            } else if ( 80 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 70 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'hautement ouvert -';
            } else if ( 70 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 60 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'moyennement ouvert +';
            } else if ( 60 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 50 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'moyennement ouvert';
            } else if ( 50 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 40 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'moyennement ouvert -';
            } else if ( 40 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 30 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'peu ouvert +';
            } else if ( 30 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 20 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'peu ouvert';
            } else if ( 20 >= this.degreOuvertureEnvironnementDP && this.degreOuvertureEnvironnementDP > 10 ) {
                this.degreOuvertureEnvironnementDPLitteral = 'peu ouvert -';
            } else if ( 10 >= this.degreOuvertureEnvironnementDP ) {
                this.degreOuvertureEnvironnementDPLitteral = 'fermé';
            }
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
                        color: '#ad2472',
                        backgroundColor: 'rgba(102, 21, 67, 0.5)',
                        borderColor: 'rgba(102, 21, 67, 0.7)',
                        pointBackgroundColor: 'rgba(102, 21, 67, 0.9)',
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

            this.barChartDataCategorie = {
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
                        backgroundColor: '#a5b4fc'
                    },
                    {
                        label: 'Composantes de la Communication éducative médiatisée',
                        data: [this.degreOuvertureCategories.composantesCommunicationEducativeDP],
                        backgroundColor: '#047857'
                    }
                ]
            },

            this.barChartDataComposantes = {
                labels: [
                    'Acces',
                    'Lieu',
                    'Horaires',
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
                    'Ressources'
                ],
                datasets: [
                    {
                        label: 'Présentiel et Distanciel',
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
                        ],
                        backgroundColor: 'rgba(102, 21, 67, 0.9)'
                    },
                ]
            },
            this.progressEllipse = this.degreOuvertureEnvironnementDP
        }
    },
        
    mounted() {
        // Calcul de la grille géode. 
        this.proportionModalites();
        this.scoreComposantesDP();
        this.degreOuvertureDP();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();
        // Passage des résultats de la grille dans les BarCharts et RadarCharts
        this.fillDataResult();
        // Redirection vers la section résultats
        this.$router.push('/#resultPresentielDistanciel'); 
        // Delay du loading pour vue-ellipse-progress -> l'animation est plus dynamique 
        setTimeout(() => this.loadingEllipse = false, 900);      
    }
}

</script>