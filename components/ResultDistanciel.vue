<template>
    <!-- Geode Result Text -->
    <section id="resultDistanciel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInDown text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats Géode en distanciel</h3>
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
                    <p class="">Composantes Saptio Temporelles:</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-indigo-200 hover:bg-indigo-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Pédagogiques:</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesPedagogiquesDistanciel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-green-200 hover:bg-green-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Communication:</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel }}%</p>
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
                <h4 class="text-5xl text-pink-900 font-semibold"> {{ this.degreOuvertureEnvironnementDistanciel }} %</h4>
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
            //  Degré d’ouverture en % de chacune des trois catégories de composantes. Calculer en mounted().
            degreOuvertureCategories: {
                composantesSpatioTemporellesDistanciel: null,
                composantesPedagogiquesDistanciel: null,
                composantesCommunicationEducativeDistanciel: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementDistanciel: null,
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

            //Lieu
            this.degreOuverture.lieuDistanciel = Number(parseFloat(((this.score.lieuDistanciel / this.scoreMax.lieuDistanciel ) * 100)).toFixed(1));
        
            //Temps
            this.degreOuverture.tempsDistanciel = Number(parseFloat(((this.score.tempsDistanciel / this.scoreMax.tempsDistanciel ) * 100)).toFixed(1));
            
            //Rythme
            this.degreOuverture.rythmeDistanciel = Number(parseFloat(((this.score.rythmeDistanciel / this.scoreMax.rythmeDistanciel ) * 100)).toFixed(1));

            //Objectifs
            this.degreOuverture.objectifsDistanciel = Number(parseFloat(((this.score.objectifsDistanciel / this.scoreMax.objectifsDistanciel ) * 100)).toFixed(1));
            
            //Cheminement
            this.degreOuverture.cheminementDistanciel = Number(parseFloat(((this.score.cheminementDistanciel / this.scoreMax.cheminementDistanciel ) * 100)).toFixed(1));

            //Sequence
            this.degreOuverture.sequenceDistanciel = Number(parseFloat(((this.score.sequenceDistanciel / this.scoreMax.sequenceDistanciel ) * 100)).toFixed(1));

            //Methodes
            this.degreOuverture.methodesDistanciel = Number(parseFloat(((this.score.methodesDistanciel / this.scoreMax.methodesDistanciel ) * 100)).toFixed(1));

            //Format
            this.degreOuverture.formatDistanciel = Number(parseFloat(((this.score.formatDistanciel / this.scoreMax.formatDistanciel ) * 100)).toFixed(1));

            //Contenus
            this.degreOuverture.contenusDistanciel = Number(parseFloat(((this.score.contenusDistanciel / this.scoreMax.contenusDistanciel ) * 100)).toFixed(1));
            
            //Evaluation
            this.degreOuverture.evaluationDistanciel  = Number(parseFloat(((this.score.evaluationDistanciel / this.scoreMax.evaluationDistanciel ) * 100)).toFixed(1));

            //Supports
            this.degreOuverture.supportsDistanciel = Number(parseFloat(((this.score.supportsDistanciel / this.scoreMax.supportsDistanciel ) * 100)).toFixed(1));

            //Communication
            this.degreOuverture.communicationDistanciel = Number(parseFloat(((this.score.communicationDistanciel / this.scoreMax.communicationDistanciel ) * 100)).toFixed(1));

            //Ressources
            this.degreOuverture.ressourcesDistanciel = Number(parseFloat(((this.score.ressourcesDistanciel / this.scoreMax.ressourcesDistanciel ) * 100)).toFixed(1));
        },
        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel = Number(parseFloat((((this.score.accesDistanciel + this.score.lieuDistanciel + this.score.tempsDistanciel + this.score.rythmeDistanciel) / (this.scoreMax.accesDistanciel + this.scoreMax.lieuDistanciel + this.scoreMax.tempsDistanciel + this.scoreMax.rythmeDistanciel)) * 100)).toFixed(1));
            // Composantes Pédagogiques arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesPedagogiquesDistanciel = Number(parseFloat((((this.score.objectifsDistanciel + this.score.cheminementDistanciel + this.score.sequenceDistanciel + this.score.methodesDistanciel + this.score.formatDistanciel + this.score.contenusDistanciel + this.score.evaluationDistanciel) / (this.scoreMax.objectifsDistanciel + this.scoreMax.cheminementDistanciel + this.scoreMax.sequenceDistanciel + this.scoreMax.methodesDistanciel + this.scoreMax.formatDistanciel + this.scoreMax.contenusDistanciel + this.scoreMax.evaluationDistanciel)) * 100)).toFixed(1));
            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel = Number(parseFloat((((this.score.supportsDistanciel + this.score.communicationDistanciel + this.score.ressourcesDistanciel) / (this.scoreMax.supportsDistanciel + this.scoreMax.communicationDistanciel + this.scoreMax.ressourcesDistanciel)) * 100)).toFixed(1));
        },
        degreOuvertureEnvironnementEtudie(){
            // Calcul du degré d’ouverture en % de l’environnement étudié arrondi à l'entier supérieur
            this.degreOuvertureEnvironnementDistanciel = Math.ceil(((
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
                        color: '#1d4ed8',
                        backgroundColor: 'rgba(29, 78, 216, 0.5)',
                        borderColor: '#1d4ed8',
                        pointBackgroundColor: '#173fab',
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

            this.barChartData = {
                labels: [
                    'Distanciel',
                ],
                datasets: [
                    {
                        label: 'Composantes Saptio Temporelles',
                        data: [this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel],
                        backgroundColor: '#fde68a'
                    },
                    {
                        label: 'Composantes Pédagogiques',
                        data: [this.degreOuvertureCategories.composantesPedagogiquesDistanciel],
                        backgroundColor: '#c7d2fe'
                    },
                    {
                        label: 'Composantes de la Communication éducative médiatisée',
                        data: [this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel],
                        backgroundColor: '#a7f3d0'
                    }
                ]
            }
        }
    },

    mounted() {
        this.scoreComposantesDistanciel();
        this.degreOuvertureDistanciel();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();

        this.fillDataResult();
        
        this.$router.push('/#resultDistanciel'); 

        console.log(this.score.ressourcesDistanciel);
        console.log(this.degreOuverture.ressourcesDistanciel);
        console.log(this.degreOuvertureCategories.composantesSpatioTemporellesDistanciel);
        console.log(this.degreOuvertureCategories.composantesPedagogiquesDistanciel);
        console.log(this.degreOuvertureCategories.composantesCommunicationEducativeDistanciel);
        console.log(this.degreOuvertureEnvironnementDistanciel);
    }
}

</script>