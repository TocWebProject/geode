<template>
    <!-- Geode Result Text -->
    <section id="resultPresentiel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInDown w-3/4 lg:w-full mx-auto text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats GÉODE pour cette formation en présentiel</h3>
            <!-- Degré d’ouverture en % de chacune des 14 composantes -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-11/12 text-center mt-5 md:mt-10 mb-2 text-2xl text-pink-900 uppercase font-semibold">1 - Degré d’ouverture en % de chacune des 14 composantes</h4>
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
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.accesPresentiel}}% | {{this.degreOuvertureLitteral.accesPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Lieu</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.lieuPresentiel}}%  | {{this.degreOuvertureLitteral.lieuPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Horaires</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.tempsPresentiel}}% | {{this.degreOuvertureLitteral.tempsPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Rythme</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.rythmePresentiel}}% | {{this.degreOuvertureLitteral.rythmePresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Objectifs</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.objectifsPresentiel}}% | {{this.degreOuvertureLitteral.objectifsPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Cheminement</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.cheminementPresentiel}}% | {{this.degreOuvertureLitteral.cheminementPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Sequence</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.sequencePresentiel}}% | {{this.degreOuvertureLitteral.sequencePresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Méthodes</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.methodesPresentiel}}% | {{this.degreOuvertureLitteral.methodesPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Format</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.formatPresentiel}}% | {{this.degreOuvertureLitteral.formatPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Contenus</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.contenusPresentiel}}% | {{this.degreOuvertureLitteral.contenusPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Evaluation</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.evaluationPresentiel}}% | {{this.degreOuvertureLitteral.evaluationPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Supports</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.supportsPresentiel}}% | {{this.degreOuvertureLitteral.supportsPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Communication</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.communicationPresentiel}}% | {{this.degreOuvertureLitteral.communicationPresentiel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100 rounded-b-lg">
                        <th class="px-2 md:px-4 py-1">Ressources</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.ressourcesPresentiel}}% | {{this.degreOuvertureLitteral.ressourcesPresentiel}}</th>
                    </tr> 
                </table>        
            </div>
            <!-- Radar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl">
                <radar-chart-result v-if="radarChartData" class="p-1 sm:p-4" :data="radarChartData" :options="radarChartOptions" :height="300"/>
            </div>
            <!-- Degré d’ouverture en % de chacune des trois catégories de composantes  -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-11/12 text-center mt-20 mb-5 text-2xl text-pink-900 uppercase font-semibold">2 - Degré d’ouverture en % de chacune des trois catégories de composantes</h4>
            <!-- Pills Catégorie de composantes -->
            <div class="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-around mt-8">
                <div class="rounded-lg font-semibold text-center bg-yellow-200 hover:bg-yellow-300 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Spatio-temporelle :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-indigo-200 hover:bg-indigo-300 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Pédagogique :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesPedagogiquesPresentiel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-green-200 hover:bg-green-300 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Communication :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesCommunicationEducativePresentiel }}%</p>
                </div>
            </div>
            <!-- Bar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl mt-5">
                <bar-chart-result v-if="barChartDataCategorie" class="p-1 sm:p-4" :data="barChartDataCategorie" :options="barChartOptionsCategorie" :height="300"/>
            </div>
            <!-- Calcul du degré d’ouverture en % de l’environnement étudié  -->
            <h4 class="kf-appear-1 mx-auto md:w-9/12 w-11/12 text-center mt-20 mb-5 text-2xl text-pink-900 uppercase font-semibold">3 - Calcul du degré d’ouverture en % de l’environnement étudié</h4>
            <div class="mx-auto rounded-full bg-gray-200 hover:bg-gray-100 h-48 w-48 md:w-56 md:h-56 flex items-center justify-center border-pink-800 border-4 mt-10 shadow-md">
                <h4 class="text-5xl text-pink-900 font-semibold"> {{ this.degreOuvertureEnvironnementPresentiel }} %</h4>
            </div>
            <div class="kf-appear-2 mx-auto md:w-9/12 w-10/12 mt-4">
                <p class="text-2xl text-pink-800 leading-8 text-center">
                  L'environnement étudié est <span class="font-semibold">{{ this.degreOuvertureEnvironnementPresentielLitteral }}</span>
                </p>
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
    name: 'ResultPresentiel',
    layout: 'default',
    inject: ['geodeDataPresentiel'], 
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
                accesPresentiel: 14,
                lieuPresentiel: 13.6,
                tempsPresentiel: 12.8,
                rythmePresentiel: 12.8,
                objectifsPresentiel: 11.2,
                cheminementPresentiel: 12.8,
                sequencePresentiel: 8,
                methodesPresentiel: 11.2,
                formatPresentiel: 11.6,
                contenusPresentiel: 6.4,
                evaluationPresentiel: 7.2,
                supportsPresentiel: 12,
                communicationPresentiel: 11.2,
                ressourcesPresentiel: 12.8,
            },
            //Score GEODE de chacune des 14 composantes de l’environnement éducatif du test. Calculer en mounted().
            score: {
                accesPresentiel: null,
                lieuPresentiel: null,
                tempsPresentiel: null,
                rythmePresentiel: null,
                objectifsPresentiel: null,
                cheminementPresentiel: null,
                sequencePresentiel: null,
                methodesPresentiel: null,
                formatPresentiel: null,
                contenusPresentiel: null,
                evaluationPresentiel: null,
                supportsPresentiel: null,
                communicationPresentiel: null,
                ressourcesPresentiel: null,
            },
            // Degré d’ouverture en % de chacune des 14 composantes. Calculer en mounted().
            degreOuverture: {
                accesPresentiel: null,
                lieuPresentiel: null,
                tempsPresentiel: null,
                rythmePresentiel: null,
                objectifsPresentiel: null,
                cheminementPresentiel: null,
                sequencePresentiel: null,
                methodesPresentiel: null,
                formatPresentiel: null,
                contenusPresentiel: null,
                evaluationPresentiel: null,
                supportsPresentiel: null,
                communicationPresentiel: null,
                ressourcesPresentiel: null,
            },
            degreOuvertureLitteral: {
                accesPresentiel: null,
                lieuPresentiel: null,
                tempsPresentiel: null,
                rythmePresentiel: null,
                objectifsPresentiel: null,
                cheminementPresentiel: null,
                sequencePresentiel: null,
                methodesPresentiel: null,
                formatPresentiel: null,
                contenusPresentiel: null,
                evaluationPresentiel: null,
                supportsPresentiel: null,
                communicationPresentiel: null,
                ressourcesPresentiel: null,
            },
            //  Degré d’ouverture en % de chacune des trois catégories de composantes. Calculer en mounted().
            degreOuvertureCategories: {
                composantesSpatioTemporellesPresentiel: null,
                composantesPedagogiquesPresentiel: null,
                composantesCommunicationEducativePresentiel: null,
            },
            degreOuvertureCategoriesLitteral: {
                composantesSpatioTemporellesDistanciel: null,
                composantesPedagogiquesDistanciel: null,
                composantesCommunicationEducativeDistanciel: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementPresentiel: null,
            degreOuvertureEnvironnementPresentielLittral: null,
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
        }
    },

    methods: {
        restart() {
            this.$emit('restart-test');
        },

        scoreComposantesPresentiel() {
            // Calcul du score GEODE de chacune des 14 composantes de l’environnement éducatif arrondi au 0,1 supérieur

            // Acces
            this.score.accesPresentiel = Number(parseFloat((this.coefficientPonderation.acces * this.geodeDataPresentiel.acces)).toFixed(1));

            //Lieu
            this.score.lieuPresentiel = Number(parseFloat((this.coefficientPonderation.lieu * this.geodeDataPresentiel.lieu)).toFixed(1));

            //Temps
            this.score.tempsPresentiel = Number(parseFloat((this.coefficientPonderation.temps * this.geodeDataPresentiel.temps)).toFixed(1));
            
            //Rythme
            this.score.rythmePresentiel = Number(parseFloat((this.coefficientPonderation.rythme * this.geodeDataPresentiel.rythme)).toFixed(1));

            //Objectifs
            this.score.objectifsPresentiel = Number(parseFloat((this.coefficientPonderation.objectifs * this.geodeDataPresentiel.objectifs)).toFixed(1));
            
            //Cheminement
            this.score.cheminementPresentiel = Number(parseFloat((this.coefficientPonderation.cheminement * this.geodeDataPresentiel.cheminement)).toFixed(1));

            //Sequence
            this.score.sequencePresentiel = Number(parseFloat((this.coefficientPonderation.sequence * this.geodeDataPresentiel.sequence)).toFixed(1));

            //Methodes
            this.score.methodesPresentiel = Number(parseFloat((this.coefficientPonderation.methodes * this.geodeDataPresentiel.methodes)).toFixed(1));

            //Format
            this.score.formatPresentiel = Number(parseFloat((this.coefficientPonderation.format * this.geodeDataPresentiel.format)).toFixed(1));

            //Contenus
            this.score.contenusPresentiel = Number(parseFloat((this.coefficientPonderation.contenus * this.geodeDataPresentiel.contenus)).toFixed(1));

            //Evaluation
            this.score.evaluationPresentiel = Number(parseFloat((this.coefficientPonderation.evaluation * this.geodeDataPresentiel.evaluation)).toFixed(1));

            //Supports
            this.score.supportsPresentiel = Number(parseFloat((this.coefficientPonderation.supports * this.geodeDataPresentiel.supports)).toFixed(1));

            //Communication
            this.score.communicationPresentiel = Number(parseFloat((this.coefficientPonderation.communication * this.geodeDataPresentiel.communication)).toFixed(1));

            //Ressources
            this.score.ressourcesPresentiel = Number(parseFloat((this.coefficientPonderation.ressources * this.geodeDataPresentiel.ressources)).toFixed(1));
        },
        
        degreOuverturePresentiel(){
            // Calcul du degré d’ouverture en % de chacune des 14 composantes arrondi au 0,1 supérieur

            // Acces
            this.degreOuverture.accesPresentiel = Number(parseFloat(((this.score.accesPresentiel / this.scoreMax.accesPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Accès
            if (100 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 90 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 80 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 70 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 60 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 50 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 40 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 30 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 20 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.accesPresentiel && this.degreOuverture.accesPresentiel > 10 ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.accesPresentiel ) {
                this.degreOuvertureLitteral.accesPresentiel = 'Fermé';
            }

            //Lieu
            this.degreOuverture.lieuPresentiel = Number(parseFloat(((this.score.lieuPresentiel / this.scoreMax.lieuPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Lieu
            if (100 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 90 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 80 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 70 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 60 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 50 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 40 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 30 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 20 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.lieuPresentiel && this.degreOuverture.lieuPresentiel > 10 ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.lieuPresentiel ) {
                this.degreOuvertureLitteral.lieuPresentiel = 'Fermé';
            }

            //Temps
            this.degreOuverture.tempsPresentiel = Number(parseFloat(((this.score.tempsPresentiel / this.scoreMax.tempsPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Temps
            if (100 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 90 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 80 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 70 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 60 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 50 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 40 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 30 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 20 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.tempsPresentiel && this.degreOuverture.tempsPresentiel > 10 ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.tempsPresentiel ) {
                this.degreOuvertureLitteral.tempsPresentiel = 'Fermé';
            }

            //Rythme
            this.degreOuverture.rythmePresentiel = Number(parseFloat(((this.score.rythmePresentiel / this.scoreMax.rythmePresentiel ) * 100)).toFixed(1));
            // Réponse littéral Rythme
            if (100 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 90 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 80 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 70 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 60 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 50 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 40 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 30 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 20 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.rythmePresentiel && this.degreOuverture.rythmePresentiel > 10 ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.rythmePresentiel ) {
                this.degreOuvertureLitteral.rythmePresentiel = 'Fermé';
            }

            //Objectifs
            this.degreOuverture.objectifsPresentiel = Number(parseFloat(((this.score.objectifsPresentiel / this.scoreMax.objectifsPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Objectifs
            if (100 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 90 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 80 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 70 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 60 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 50 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 40 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 30 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 20 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.objectifsPresentiel && this.degreOuverture.objectifsPresentiel > 10 ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.objectifsPresentiel ) {
                this.degreOuvertureLitteral.objectifsPresentiel = 'Fermé';
            }

            //Cheminement
            this.degreOuverture.cheminementPresentiel = Number(parseFloat(((this.score.cheminementPresentiel / this.scoreMax.cheminementPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Cheminement
            if (100 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 90 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 80 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 70 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 60 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 50 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 40 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 30 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 20 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.cheminementPresentiel && this.degreOuverture.cheminementPresentiel > 10 ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.cheminementPresentiel ) {
                this.degreOuvertureLitteral.cheminementPresentiel = 'Fermé';
            }   
               
            //Sequence
            this.degreOuverture.sequencePresentiel = Number(parseFloat(((this.score.sequencePresentiel / this.scoreMax.sequencePresentiel ) * 100)).toFixed(1));
            // Réponse littéral Sequence
            if (100 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 90 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 80 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 70 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 60 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 50 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 40 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 30 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 20 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.sequencePresentiel && this.degreOuverture.sequencePresentiel > 10 ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.sequencePresentiel ) {
                this.degreOuvertureLitteral.sequencePresentiel = 'Fermé';
            }

            //Methodes
            this.degreOuverture.methodesPresentiel = Number(parseFloat(((this.score.methodesPresentiel / this.scoreMax.methodesPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Methodes
            if (100 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 90 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 80 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 70 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 60 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 50 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 40 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 30 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 20 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.methodesPresentiel && this.degreOuverture.methodesPresentiel > 10 ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.methodesPresentiel ) {
                this.degreOuvertureLitteral.methodesPresentiel = 'Fermé';
            }

            //Format
            this.degreOuverture.formatPresentiel = Number(parseFloat(((this.score.formatPresentiel / this.scoreMax.formatPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Format
            if (100 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 90 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 80 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 70 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 60 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 50 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 40 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 30 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 20 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.formatPresentiel && this.degreOuverture.formatPresentiel > 10 ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.formatPresentiel ) {
                this.degreOuvertureLitteral.formatPresentiel = 'Fermé';
            }

            //Contenus
            this.degreOuverture.contenusPresentiel = Number(parseFloat(((this.score.contenusPresentiel / this.scoreMax.contenusPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Contenus
            if (100 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 90 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 80 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 70 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 60 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 50 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 40 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 30 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 20 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.contenusPresentiel && this.degreOuverture.contenusPresentiel > 10 ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.contenusPresentiel ) {
                this.degreOuvertureLitteral.contenusPresentiel = 'Fermé';
            }

            //Evaluation
            this.degreOuverture.evaluationPresentiel  = Number(parseFloat(((this.score.evaluationPresentiel / this.scoreMax.evaluationPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Evaluation
            if (100 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 90 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 80 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 70 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 60 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 50 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 40 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 30 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 20 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.evaluationPresentiel && this.degreOuverture.evaluationPresentiel > 10 ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.evaluationPresentiel ) {
                this.degreOuvertureLitteral.evaluationPresentiel = 'Fermé';
            }

            //Supports
            this.degreOuverture.supportsPresentiel = Number(parseFloat(((this.score.supportsPresentiel / this.scoreMax.supportsPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Supports
            if (100 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 90 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 80 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 70 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 60 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 50 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 40 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 30 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 20 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.supportsPresentiel && this.degreOuverture.supportsPresentiel > 10 ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.supportsPresentiel ) {
                this.degreOuvertureLitteral.supportsPresentiel = 'Fermé';
            }
            
            //Communication
            this.degreOuverture.communicationPresentiel = Number(parseFloat(((this.score.communicationPresentiel / this.scoreMax.communicationPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Communications
            if (100 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 90 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 80 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 70 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 60 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 50 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 40 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 30 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 20 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.communicationPresentiel && this.degreOuverture.communicationPresentiel > 10 ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.communicationPresentiel ) {
                this.degreOuvertureLitteral.communicationPresentiel = 'Fermé';
            }

            //Ressources
            this.degreOuverture.ressourcesPresentiel = Number(parseFloat(((this.score.ressourcesPresentiel / this.scoreMax.ressourcesPresentiel ) * 100)).toFixed(1));
            // Réponse littéral Ressources
            if (100 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 90 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 80 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 70 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 60 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 50 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 40 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 30 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 20 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.ressourcesPresentiel && this.degreOuverture.ressourcesPresentiel > 10 ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.ressourcesPresentiel ) {
                this.degreOuvertureLitteral.ressourcesPresentiel = 'Fermé';
            }
        },

        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel = Number(parseFloat((((this.score.accesPresentiel + this.score.lieuPresentiel + this.score.tempsPresentiel + this.score.rythmePresentiel) / (this.scoreMax.accesPresentiel + this.scoreMax.lieuPresentiel + this.scoreMax.tempsPresentiel + this.scoreMax.rythmePresentiel)) * 100)).toFixed(1));
            // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel && this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesPresentiel = 'Fermée';
            }
            
            // Composantes Pédagogiques arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesPedagogiquesPresentiel = Number(parseFloat((((this.score.objectifsPresentiel + this.score.cheminementPresentiel + this.score.sequencePresentiel + this.score.methodesPresentiel + this.score.formatPresentiel + this.score.contenusPresentiel + this.score.evaluationPresentiel) / (this.scoreMax.objectifsPresentiel + this.scoreMax.cheminementPresentiel + this.scoreMax.sequencePresentiel + this.scoreMax.methodesPresentiel + this.scoreMax.formatPresentiel + this.scoreMax.contenusPresentiel + this.scoreMax.evaluationPresentiel)) * 100)).toFixed(1));
             // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel && this.degreOuvertureCategories.composantesPedagogiquesPresentiel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesPedagogiquesPresentiel ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesPresentiel = 'Fermée';
            }
            
            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativePresentiel = Number(parseFloat((((this.score.supportsPresentiel + this.score.communicationPresentiel + this.score.ressourcesPresentiel) / (this.scoreMax.supportsPresentiel + this.scoreMax.communicationPresentiel + this.scoreMax.ressourcesPresentiel)) * 100)).toFixed(1));
             // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel && this.degreOuvertureCategories.composantesCommunicationEducativePresentiel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesCommunicationEducativePresentiel ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativePresentiel = 'Fermée';
            }
        },
        degreOuvertureEnvironnementEtudie(){
            // Calcul du degré d’ouverture en % de l’environnement étudié arrondi à l'entier supérieur
            this.degreOuvertureEnvironnementPresentiel = Math.floor(((
                this.score.accesPresentiel +
                this.score.lieuPresentiel +
                this.score.tempsPresentiel +
                this.score.rythmePresentiel +
                this.score.objectifsPresentiel +
                this.score.cheminementPresentiel +
                this.score.sequencePresentiel +
                this.score.methodesPresentiel +
                this.score.formatPresentiel +
                this.score.contenusPresentiel +
                this.score.evaluationPresentiel +
                this.score.supportsPresentiel +
                this.score.communicationPresentiel +
                this.score.ressourcesPresentiel 
            ) / 157.6 ) * 100)

             if (100 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 90 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'hautement ouvert +';
            } else if ( 90 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 80 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'hautement ouvert';
            } else if ( 80 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 70 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'hautement ouvert -';
            } else if ( 70 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 60 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'moyennement ouvert +';
            } else if ( 60 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 50 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'moyennement ouvert';
            } else if ( 50 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 40 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'moyennement ouvert -';
            } else if ( 40 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 30 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'peu ouvert +';
            } else if ( 30 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 20 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'peu ouvert';
            } else if ( 20 >= this.degreOuvertureEnvironnementPresentiel && this.degreOuvertureEnvironnementPresentiel > 10 ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'peu ouvert -';
            } else if ( 10 >= this.degreOuvertureEnvironnementPresentiel ) {
                this.degreOuvertureEnvironnementPresentielLitteral = 'fermé';
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
                        label: 'Présentiel',
                        color: '#ad2472',
                        backgroundColor: 'rgba(102, 21, 67, 0.5)',
                        borderColor: 'rgba(102, 21, 67, 0.7)',
                        pointBackgroundColor: 'rgba(102, 21, 67, 0.9)',
                        data: [
                                this.degreOuverture.accesPresentiel,
                                this.degreOuverture.lieuPresentiel,
                                this.degreOuverture.tempsPresentiel,
                                this.degreOuverture.rythmePresentiel,
                                this.degreOuverture.objectifsPresentiel,
                                this.degreOuverture.cheminementPresentiel,
                                this.degreOuverture.sequencePresentiel,
                                this.degreOuverture.methodesPresentiel,
                                this.degreOuverture.formatPresentiel,
                                this.degreOuverture.contenusPresentiel,
                                this.degreOuverture.evaluationPresentiel,
                                this.degreOuverture.supportsPresentiel,
                                this.degreOuverture.communicationPresentiel,
                                this.degreOuverture.ressourcesPresentiel
                        ]
                    }
                ]
            },

            this.barChartDataCategorie = {
                labels: [
                    'Présentiel',
                ],
                datasets: [
                    {
                        label: 'Composantes Spatio-temporelles',
                        data: [this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel],
                        backgroundColor: '#fde68a'
                    },
                    {
                        label: 'Composantes Pédagogiques',
                        data: [this.degreOuvertureCategories.composantesPedagogiquesPresentiel],
                        backgroundColor: '#c7d2fe'
                    },
                    {
                        label: 'Composantes de la Communication éducative médiatisée',
                        data: [this.degreOuvertureCategories.composantesCommunicationEducativePresentiel],
                        backgroundColor: '#a7f3d0'
                    }
                ]
            }


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
                        label: 'Présentiel',
                        data: [
                            this.degreOuverture.accesPresentiel,
                                this.degreOuverture.lieuPresentiel,
                                this.degreOuverture.tempsPresentiel,
                                this.degreOuverture.rythmePresentiel,
                                this.degreOuverture.objectifsPresentiel,
                                this.degreOuverture.cheminementPresentiel,
                                this.degreOuverture.sequencePresentiel,
                                this.degreOuverture.methodesPresentiel,
                                this.degreOuverture.formatPresentiel,
                                this.degreOuverture.contenusPresentiel,
                                this.degreOuverture.evaluationPresentiel,
                                this.degreOuverture.supportsPresentiel,
                                this.degreOuverture.communicationPresentiel,
                                this.degreOuverture.ressourcesPresentiel
                        ],
                        backgroundColor: 'rgba(102, 21, 67, 0.9)'
                    },
                ]
            }
        }
    },

    mounted() {
        // Calcul de la grille géode.
        this.scoreComposantesPresentiel();
        this.degreOuverturePresentiel();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();
        // Passage des résultats de la grille dans les BarCharts et RadarCharts
        this.fillDataResult();
        // Redirection vers la section résultats
        this.$router.push('/#resultPresentiel'); 
    }
}

</script>