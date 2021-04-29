<template>
    <!-- Geode Result Text -->
    <section id="resultDistanciel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInUp w-3/4 lg:w-full mx-auto text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-10 sm:pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats GÉODE pour cette formation en distanciel</h3>
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
                    L'environnement étudié est <span class="font-semibold">{{ this.degreOuvertureEnvironnementDistancielLitteral }}</span>.
                </p>
            </div>    
            <!-- Degré d’ouverture en % de chacune des trois catégories de composantes  -->
            <h4 class="kf-appear-2 mx-auto md:w-9/12 w-11/12 text-center mt-10 md:mt-20 mb-5 text-2xl text-pink-900 uppercase font-semibold">2 - Degré d’ouverture en % de chacune des trois catégories de composantes</h4>
            <!-- Pills Catégorie de composantes -->
            <div class="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-around mt-8">
                <div class="rounded-lg border-2 border-yellow-400 font-semibold text-center bg-yellow-100 hover:bg-yellow-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Spatio-temporelle :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel }}%</p>
                </div>
                <div class="rounded-lg border-2 border-indigo-400 font-semibold text-center bg-indigo-100 hover:bg-indigo-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Pédagogique :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesPedagogiquesDistanciel }}%</p>
                </div>
                <div class="rounded-lg border-2 border-green-500 font-semibold text-center bg-green-100 hover:bg-green-200 py-1 px-7 my-2 shadow">
                    <p class="text-lg underline">Catégorie Communication :</p>
                    <p class="text-lg">{{ this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel }}</p>
                    <p class="text-lg">{{ this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel }}%</p>
                </div>
            </div>
            <!-- Bar Chart Catégorie -->
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
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.accesDistanciel}}% | {{this.degreOuvertureLitteral.accesDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Lieu</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.lieuDistanciel}}%  | {{this.degreOuvertureLitteral.lieuDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Horaires</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.tempsDistanciel}}% | {{this.degreOuvertureLitteral.tempsDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Rythme</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.rythmeDistanciel}}% | {{this.degreOuvertureLitteral.rythmeDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Objectifs</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.objectifsDistanciel}}% | {{this.degreOuvertureLitteral.objectifsDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Cheminement</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.cheminementDistanciel}}% | {{this.degreOuvertureLitteral.cheminementDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Sequence</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.sequenceDistanciel}}% | {{this.degreOuvertureLitteral.sequenceDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Méthodes</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.methodesDistanciel}}% | {{this.degreOuvertureLitteral.methodesDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Format</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.formatDistanciel}}% | {{this.degreOuvertureLitteral.formatDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Contenus</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.contenusDistanciel}}% | {{this.degreOuvertureLitteral.contenusDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Evaluation</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.evaluationDistanciel}}% | {{this.degreOuvertureLitteral.evaluationDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Supports</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.supportsDistanciel}}% | {{this.degreOuvertureLitteral.supportsDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="px-2 md:px-4 py-1">Communication</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.communicationDistanciel}}% | {{this.degreOuvertureLitteral.communicationDistanciel}}</th>
                    </tr> 
                    <tr class="bg-gray-50 border-b border-gray-100 rounded-b-lg">
                        <th class="px-2 md:px-4 py-1">Ressources</th>
                        <th class="px-2 md:px-4 py-1">{{this.degreOuverture.ressourcesDistanciel}}% | {{this.degreOuvertureLitteral.ressourcesDistanciel}}</th>
                    </tr> 
                </table>        
            </div>
            <!-- Radar Chart Composantes-->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen max-w-2xl">
                <radar-chart-result v-if="radarChartData" class="p-1 sm:p-4" :data="radarChartData" :options="radarChartOptions" :height="300"/>
            </div>         
            <!-- Btn restart Geode test -->
            <div class="h-36 pt-20">
                <a href="/#startGeode" v-on:click="restart()" class="w-60 flex mx-auto items-center justify-center px-8 py-3 border border-pink-600 text-base font-medium rounded-md text-pink-800 bg-gray-50 hover:bg-gray-100">
                    Refaire le test
                </a>         
            </div>
        </div>
    </section>
</template> 

<script>

export default {
    name: 'ResultDistanciel',
    layout: 'default',
    inject: ['geodeDataDistanciel'], 
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
                accesDistanciel: 14,
                lieuDistanciel: 13.6,
                tempsDistanciel: 12.8,
                rythmeDistanciel: 12.8,
                objectifsDistanciel: 11.2,
                cheminementDistanciel: 12.8,
                sequenceDistanciel: 8,
                methodesDistanciel: 11.2,
                formatDistanciel: 11.6,
                contenusDistanciel: 6.4,
                evaluationDistanciel: 7.2,
                supportsDistanciel: 12,
                communicationDistanciel: 11.2,
                ressourcesDistanciel: 12.8,
            },
            //Score GEODE de chacune des 14 composantes de l’environnement éducatif du test. Calculer en mounted().
            score: {
                accesDistanciel: null,
                lieuDistanciel: null,
                tempsDistanciel: null,
                rythmeDistanciel: null,
                objectifsDistanciel: null,
                cheminementDistanciel: null,
                sequenceDistanciel: null,
                methodesDistanciel: null,
                formatDistanciel: null,
                contenusDistanciel: null,
                evaluationDistanciel: null,
                supportsDistanciel: null,
                communicationDistanciel: null,
                ressourcesDistanciel: null,
            },
            // Degré d’ouverture en % de chacune des 14 composantes. Calculer en mounted().
            degreOuverture: {
                accesDistanciel: null,
                lieuDistanciel: null,
                tempsDistanciel: null,
                rythmeDistanciel: null,
                objectifsDistanciel: null,
                cheminementDistanciel: null,
                sequenceDistanciel: null,
                methodesDistanciel: null,
                formatDistanciel: null,
                contenusDistanciel: null,
                evaluationDistanciel: null,
                supportsDistanciel: null,
                communicationDistanciel: null,
                ressourcesDistanciel: null,
            },
            degreOuvertureLitteral: {
                accesDistanciel: null,
                lieuDistanciel: null,
                tempsDistanciel: null,
                rythmeDistanciel: null,
                objectifsDistanciel: null,
                cheminementDistanciel: null,
                sequenceDistanciel: null,
                methodesDistanciel: null,
                formatDistanciel: null,
                contenusDistanciel: null,
                evaluationDistanciel: null,
                supportsDistanciel: null,
                communicationDistanciel: null,
                ressourcesDistanciel: null,
            },
            //  Degré d’ouverture en % de chacune des trois catégories de composantes et le résultat littéral. Calculer en mounted().
            degreOuvertureCategories: {
                composantesSpatioTemporellesDistanciel: null,
                composantesPedagogiquesDistanciel: null,
                composantesCommunicationEducativeDistanciel: null,
            },
            degreOuvertureCategoriesLitteral: {
                composantesSpatioTemporellesDistanciel: null,
                composantesPedagogiquesDistanciel: null,
                composantesCommunicationEducativeDistanciel: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementDistanciel: null,
            degreOuvertureEnvironnementDistancielLitteral: null,
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

        scoreComposantesDistanciel() {
            // Calcul du score GEODE de chacune des 14 composantes de l’environnement éducatif arrondi au 0,1 supérieur

            // Acces
            this.score.accesDistanciel = Number(parseFloat((this.coefficientPonderation.acces * this.geodeDataDistanciel.acces)).toFixed(1));

            //Lieu
            this.score.lieuDistanciel = Number(parseFloat((this.coefficientPonderation.lieu * this.geodeDataDistanciel.lieu)).toFixed(1));

            //Temps
            this.score.tempsDistanciel = Number(parseFloat((this.coefficientPonderation.temps * this.geodeDataDistanciel.temps)).toFixed(1));
            
            //Rythme
            this.score.rythmeDistanciel = Number(parseFloat((this.coefficientPonderation.rythme * this.geodeDataDistanciel.rythme)).toFixed(1));

            //Objectifs
            this.score.objectifsDistanciel = Number(parseFloat((this.coefficientPonderation.objectifs * this.geodeDataDistanciel.objectifs)).toFixed(1));
            
            //Cheminement
            this.score.cheminementDistanciel = Number(parseFloat((this.coefficientPonderation.cheminement * this.geodeDataDistanciel.cheminement)).toFixed(1));

            //Sequence
            this.score.sequenceDistanciel = Number(parseFloat((this.coefficientPonderation.sequence * this.geodeDataDistanciel.sequence)).toFixed(1));

            //Methodes
            this.score.methodesDistanciel = Number(parseFloat((this.coefficientPonderation.methodes * this.geodeDataDistanciel.methodes)).toFixed(1));

            //Format
            this.score.formatDistanciel = Number(parseFloat((this.coefficientPonderation.format * this.geodeDataDistanciel.format)).toFixed(1));

            //Contenus
            this.score.contenusDistanciel = Number(parseFloat((this.coefficientPonderation.contenus * this.geodeDataDistanciel.contenus)).toFixed(1));

            //Evaluation
            this.score.evaluationDistanciel = Number(parseFloat((this.coefficientPonderation.evaluation * this.geodeDataDistanciel.evaluation)).toFixed(1));

            //Supports
            this.score.supportsDistanciel = Number(parseFloat((this.coefficientPonderation.supports * this.geodeDataDistanciel.supports)).toFixed(1));

            //Communication
            this.score.communicationDistanciel = Number(parseFloat((this.coefficientPonderation.communication * this.geodeDataDistanciel.communication)).toFixed(1));

            //Ressources
            this.score.ressourcesDistanciel = Number(parseFloat((this.coefficientPonderation.ressources * this.geodeDataDistanciel.ressources)).toFixed(1));
        },
        
        degreOuvertureDistanciel(){
            // Calcul du degré d’ouverture en % de chacune des 14 composantes arrondi au 0,1 supérieur

            // Acces
            this.degreOuverture.accesDistanciel = Number(parseFloat(((this.score.accesDistanciel / this.scoreMax.accesDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Accès
            if (100 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 90 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 80 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 70 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 60 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 50 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 40 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 30 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 20 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.accesDistanciel && this.degreOuverture.accesDistanciel > 10 ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.accesDistanciel ) {
                this.degreOuvertureLitteral.accesDistanciel = 'Fermé';
            }
        
            //Lieu
            this.degreOuverture.lieuDistanciel = Number(parseFloat(((this.score.lieuDistanciel / this.scoreMax.lieuDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Lieu
            if (100 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 90 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 80 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 70 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 60 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 50 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 40 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 30 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 20 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.lieuDistanciel && this.degreOuverture.lieuDistanciel > 10 ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.lieuDistanciel ) {
                this.degreOuvertureLitteral.lieuDistanciel = 'Fermé';
            }
        
            //Temps
            this.degreOuverture.tempsDistanciel = Number(parseFloat(((this.score.tempsDistanciel / this.scoreMax.tempsDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Temps
            if (100 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 90 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 80 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 70 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 60 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 50 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 40 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 30 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 20 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.tempsDistanciel && this.degreOuverture.tempsDistanciel > 10 ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.tempsDistanciel ) {
                this.degreOuvertureLitteral.tempsDistanciel = 'Fermé';
            }
            
            //Rythme
            this.degreOuverture.rythmeDistanciel = Number(parseFloat(((this.score.rythmeDistanciel / this.scoreMax.rythmeDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Rythme
            if (100 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 90 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 80 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 70 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 60 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 50 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 40 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 30 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 20 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.rythmeDistanciel && this.degreOuverture.rythmeDistanciel > 10 ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.rythmeDistanciel ) {
                this.degreOuvertureLitteral.rythmeDistanciel = 'Fermé';
            }

            //Objectifs
            this.degreOuverture.objectifsDistanciel = Number(parseFloat(((this.score.objectifsDistanciel / this.scoreMax.objectifsDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Objectifs
            if (100 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 90 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 80 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 70 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 60 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 50 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 40 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 30 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 20 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.objectifsDistanciel && this.degreOuverture.objectifsDistanciel > 10 ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.objectifsDistanciel ) {
                this.degreOuvertureLitteral.objectifsDistanciel = 'Fermé';
            }
            
            //Cheminement
            this.degreOuverture.cheminementDistanciel = Number(parseFloat(((this.score.cheminementDistanciel / this.scoreMax.cheminementDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Cheminement
            if (100 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 90 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 80 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 70 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 60 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 50 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 40 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 30 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 20 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.cheminementDistanciel && this.degreOuverture.cheminementDistanciel > 10 ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.cheminementDistanciel ) {
                this.degreOuvertureLitteral.cheminementDistanciel = 'Fermé';
            }

            //Sequence
            this.degreOuverture.sequenceDistanciel = Number(parseFloat(((this.score.sequenceDistanciel / this.scoreMax.sequenceDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Sequence
            if (100 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 90 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 80 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 70 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 60 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 50 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 40 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 30 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 20 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.sequenceDistanciel && this.degreOuverture.sequenceDistanciel > 10 ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.sequenceDistanciel ) {
                this.degreOuvertureLitteral.sequenceDistanciel = 'Fermé';
            }

            //Methodes
            this.degreOuverture.methodesDistanciel = Number(parseFloat(((this.score.methodesDistanciel / this.scoreMax.methodesDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Methodes
            if (100 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 90 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 80 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 70 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 60 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 50 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 40 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 30 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 20 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.methodesDistanciel && this.degreOuverture.methodesDistanciel > 10 ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.methodesDistanciel ) {
                this.degreOuvertureLitteral.methodesDistanciel = 'Fermé';
            }

            //Format
            this.degreOuverture.formatDistanciel = Number(parseFloat(((this.score.formatDistanciel / this.scoreMax.formatDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Format
            if (100 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 90 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 80 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 70 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 60 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 50 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 40 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 30 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 20 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.formatDistanciel && this.degreOuverture.formatDistanciel > 10 ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.formatDistanciel ) {
                this.degreOuvertureLitteral.formatDistanciel = 'Fermé';
            }

            //Contenus
            this.degreOuverture.contenusDistanciel = Number(parseFloat(((this.score.contenusDistanciel / this.scoreMax.contenusDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Contenus
            if (100 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 90 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 80 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 70 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 60 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 50 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 40 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 30 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 20 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.contenusDistanciel && this.degreOuverture.contenusDistanciel > 10 ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.contenusDistanciel ) {
                this.degreOuvertureLitteral.contenusDistanciel = 'Fermé';
            }
            
            //Evaluation
            this.degreOuverture.evaluationDistanciel  = Number(parseFloat(((this.score.evaluationDistanciel / this.scoreMax.evaluationDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Evaluation
            if (100 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 90 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 80 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 70 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 60 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 50 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 40 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 30 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 20 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.evaluationDistanciel && this.degreOuverture.evaluationDistanciel > 10 ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.evaluationDistanciel ) {
                this.degreOuvertureLitteral.evaluationDistanciel = 'Fermé';
            }

            //Supports
            this.degreOuverture.supportsDistanciel = Number(parseFloat(((this.score.supportsDistanciel / this.scoreMax.supportsDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Supports
            if (100 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 90 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 80 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 70 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 60 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 50 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 40 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 30 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 20 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.supportsDistanciel && this.degreOuverture.supportsDistanciel > 10 ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.supportsDistanciel ) {
                this.degreOuvertureLitteral.supportsDistanciel = 'Fermé';
            }

            //Communication
            this.degreOuverture.communicationDistanciel = Number(parseFloat(((this.score.communicationDistanciel / this.scoreMax.communicationDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Communications
            if (100 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 90 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 80 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 70 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 60 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 50 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 40 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 30 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 20 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.communicationDistanciel && this.degreOuverture.communicationDistanciel > 10 ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.communicationDistanciel ) {
                this.degreOuvertureLitteral.communicationDistanciel = 'Fermé';
            }

            //Ressources
            this.degreOuverture.ressourcesDistanciel = Number(parseFloat(((this.score.ressourcesDistanciel / this.scoreMax.ressourcesDistanciel ) * 100)).toFixed(1));
            // Réponse littéral Ressources
            if (100 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 90 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Hautement ouvert +';
            } else if ( 90 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 80 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Hautement ouvert';
            } else if ( 80 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 70 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Hautement ouvert -';
            } else if ( 70 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 60 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Moyennement ouvert +';
            } else if ( 60 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 50 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Moyennement ouvert';
            } else if ( 50 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 40 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Moyennement ouvert -';
            } else if ( 40 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 30 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Peu ouvert +';
            } else if ( 30 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 20 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Peu ouvert';
            } else if ( 20 >= this.degreOuverture.ressourcesDistanciel && this.degreOuverture.ressourcesDistanciel > 10 ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Peu ouvert -';
            } else if ( 10 >= this.degreOuverture.ressourcesDistanciel ) {
                this.degreOuvertureLitteral.ressourcesDistanciel = 'Fermé';
            }
        },
        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel = Number(parseFloat((((this.score.accesDistanciel + this.score.lieuDistanciel + this.score.tempsDistanciel + this.score.rythmeDistanciel) / (this.scoreMax.accesDistanciel + this.scoreMax.lieuDistanciel + this.scoreMax.tempsDistanciel + this.scoreMax.rythmeDistanciel)) * 100)).toFixed(1));
            // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel && this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel ) {
                this.degreOuvertureCategoriesLitteral.composantesSpatioTemporellesDistanciel = 'Fermée';
            }
           
            // Composantes Pédagogiques arrondi au 0,1 supérieur    
            this.degreOuvertureCategories.composantesPedagogiquesDistanciel = Number(parseFloat((((this.score.objectifsDistanciel + this.score.cheminementDistanciel + this.score.sequenceDistanciel + this.score.methodesDistanciel + this.score.formatDistanciel + this.score.contenusDistanciel + this.score.evaluationDistanciel) / (this.scoreMax.objectifsDistanciel + this.scoreMax.cheminementDistanciel + this.scoreMax.sequenceDistanciel + this.scoreMax.methodesDistanciel + this.scoreMax.formatDistanciel + this.scoreMax.contenusDistanciel + this.scoreMax.evaluationDistanciel)) * 100)).toFixed(1));
             // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel && this.degreOuvertureCategories.composantesPedagogiquesDistanciel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesPedagogiquesDistanciel ) {
                this.degreOuvertureCategoriesLitteral.composantesPedagogiquesDistanciel = 'Fermée';
            }
           
            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel = Number(parseFloat((((this.score.supportsDistanciel + this.score.communicationDistanciel + this.score.ressourcesDistanciel) / (this.scoreMax.supportsDistanciel + this.scoreMax.communicationDistanciel + this.scoreMax.ressourcesDistanciel)) * 100)).toFixed(1));
             // Réponse littéral
            if (100 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 90 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Hautement ouverte +';
            } else if ( 90 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 80 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Hautement ouverte';
            } else if ( 80 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 70 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Hautement ouverte -';
            } else if ( 70 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 60 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Moyennement ouverte +';
            } else if ( 60 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 50 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Moyennement ouverte';
            } else if ( 50 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 40 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Moyennement ouverte -';
            } else if ( 40 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 30 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Peu ouverte +';
            } else if ( 30 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 20 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Peu ouverte';
            } else if ( 20 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel && this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel > 10 ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Peu ouverte -';
            } else if ( 10 >= this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel ) {
                this.degreOuvertureCategoriesLitteral.composantesCommunicationEducativeDistanciel = 'Fermée';
            }
        },
        degreOuvertureEnvironnementEtudie(){
            // Calcul du degré d’ouverture en % de l’environnement étudié arrondi à l'entier supérieur
            this.degreOuvertureEnvironnementDistanciel = Math.floor(((
                this.score.accesDistanciel +
                this.score.lieuDistanciel +
                this.score.tempsDistanciel +
                this.score.rythmeDistanciel +
                this.score.objectifsDistanciel +
                this.score.cheminementDistanciel +
                this.score.sequenceDistanciel +
                this.score.methodesDistanciel +
                this.score.formatDistanciel +
                this.score.contenusDistanciel +
                this.score.evaluationDistanciel +
                this.score.supportsDistanciel +
                this.score.communicationDistanciel +
                this.score.ressourcesDistanciel 
            ) / 157.6 ) * 100)

            if (100 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 90 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'hautement ouvert +';
            } else if ( 90 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 80 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'hautement ouvert';
            } else if ( 80 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 70 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'hautement ouvert -';
            } else if ( 70 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 60 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'moyennement ouvert +';
            } else if ( 60 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 50 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'moyennement ouvert';
            } else if ( 50 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 40 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'moyennement ouvert -';
            } else if ( 40 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 30 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'peu ouvert +';
            } else if ( 30 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 20 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'peu ouvert';
            } else if ( 20 >= this.degreOuvertureEnvironnementDistanciel && this.degreOuvertureEnvironnementDistanciel > 10 ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'peu ouvert -';
            } else if ( 10 >= this.degreOuvertureEnvironnementDistanciel ) {
                this.degreOuvertureEnvironnementDistancielLitteral = 'fermé';
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
                        label: 'Distanciel',
                        color: '#ad2472',
                        backgroundColor: 'rgba(102, 21, 67, 0.5)',
                        borderColor: 'rgba(102, 21, 67, 0.7)',
                        pointBackgroundColor: 'rgba(102, 21, 67, 0.9)',
                        data: [
                                this.degreOuverture.accesDistanciel,
                                this.degreOuverture.lieuDistanciel,
                                this.degreOuverture.tempsDistanciel,
                                this.degreOuverture.rythmeDistanciel,
                                this.degreOuverture.objectifsDistanciel,
                                this.degreOuverture.cheminementDistanciel,
                                this.degreOuverture.sequenceDistanciel,
                                this.degreOuverture.methodesDistanciel,
                                this.degreOuverture.formatDistanciel,
                                this.degreOuverture.contenusDistanciel,
                                this.degreOuverture.evaluationDistanciel,
                                this.degreOuverture.supportsDistanciel,
                                this.degreOuverture.communicationDistanciel,
                                this.degreOuverture.ressourcesDistanciel
                        ]
                    }
                ]
            },

            this.barChartDataCategorie = {
                labels: [
                    'Distanciel',
                ],
                datasets: [
                    {
                        label: 'Composantes Spatio-temporelles',
                        data: [this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel],
                        backgroundColor: '#fde68a'
                    },
                    {
                        label: 'Composantes Pédagogiques',
                        data: [this.degreOuvertureCategories.composantesPedagogiquesDistanciel],
                        backgroundColor: '#a5b4fc'
                    },
                    {
                        label: 'Composantes de la Communication éducative médiatisée',
                        data: [this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel],
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
                        label: 'Distanciel',
                        data: [
                            this.degreOuverture.accesDistanciel,
                                this.degreOuverture.lieuDistanciel,
                                this.degreOuverture.tempsDistanciel,
                                this.degreOuverture.rythmeDistanciel,
                                this.degreOuverture.objectifsDistanciel,
                                this.degreOuverture.cheminementDistanciel,
                                this.degreOuverture.sequenceDistanciel,
                                this.degreOuverture.methodesDistanciel,
                                this.degreOuverture.formatDistanciel,
                                this.degreOuverture.contenusDistanciel,
                                this.degreOuverture.evaluationDistanciel,
                                this.degreOuverture.supportsDistanciel,
                                this.degreOuverture.communicationDistanciel,
                                this.degreOuverture.ressourcesDistanciel
                        ],
                        backgroundColor: 'rgba(102, 21, 67, 0.9)'
                    },
                ]
            },
            this.progressEllipse = this.degreOuvertureEnvironnementDistanciel
        }
    },

    mounted() {
        // Calcul de la grille géode.
        this.scoreComposantesDistanciel();
        this.degreOuvertureDistanciel();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();
        // Passage des résultats de la grille dans les BarCharts et RadarCharts
        this.fillDataResult();
        // Redirection vers la section résultats
        this.$router.push('/#resultDistanciel'); 
        // Delay du loading pour vue-ellipse-progress -> l'animation est plus dynamique 
        setTimeout(() => this.loadingEllipse = false, 900);      
    }
}

</script>