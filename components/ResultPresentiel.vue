<template>
    <!-- Geode Result Text -->
    <section id="resultPresentiel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-32">
            <h3 class="kf-moveInDown text-3xl text-center tracking-tight font-extrabold text-gray-900 pt-20 md:pt-28 sm:text-4xl md:text-5xl">Résultats Géode en présentiel</h3>
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
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-indigo-200 hover:bg-indigo-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Pédagogiques:</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesPedagogiquesPresentiel }}%</p>
                </div>
                <div class="rounded-lg font-semibold text-center bg-green-200 hover:bg-green-300 py-1 px-7 my-2 shadow">
                    <p>Composantes Communication:</p>
                    <p class="text-xl">{{ this.degreOuvertureCategories.composantesCommunicationEducativePresentiel }}%</p>
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
                <h4 class="text-5xl text-pink-900 font-semibold"> {{ this.degreOuvertureEnvironnementPresentiel }} %</h4>
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
            //  Degré d’ouverture en % de chacune des trois catégories de composantes. Calculer en mounted().
            degreOuvertureCategories: {
                composantesSpatioTemporellesPresentiel: null,
                composantesPedagogiquesPresentiel: null,
                composantesCommunicationEducativePresentiel: null,
            },
            // Degré d’ouverture en % de l’environnement étudié
            degreOuvertureEnvironnementPresentiel: null,
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

            //Lieu
            this.degreOuverture.lieuPresentiel = Number(parseFloat(((this.score.lieuPresentiel / this.scoreMax.lieuPresentiel ) * 100)).toFixed(1));
        
            //Temps
            this.degreOuverture.tempsPresentiel = Number(parseFloat(((this.score.tempsPresentiel / this.scoreMax.tempsPresentiel ) * 100)).toFixed(1));
            
            //Rythme
            this.degreOuverture.rythmePresentiel = Number(parseFloat(((this.score.rythmePresentiel / this.scoreMax.rythmePresentiel ) * 100)).toFixed(1));

            //Objectifs
            this.degreOuverture.objectifsPresentiel = Number(parseFloat(((this.score.objectifsPresentiel / this.scoreMax.objectifsPresentiel ) * 100)).toFixed(1));
            
            //Cheminement
            this.degreOuverture.cheminementPresentiel = Number(parseFloat(((this.score.cheminementPresentiel / this.scoreMax.cheminementPresentiel ) * 100)).toFixed(1));

            //Sequence
            this.degreOuverture.sequencePresentiel = Number(parseFloat(((this.score.sequencePresentiel / this.scoreMax.sequencePresentiel ) * 100)).toFixed(1));

            //Methodes
            this.degreOuverture.methodesPresentiel = Number(parseFloat(((this.score.methodesPresentiel / this.scoreMax.methodesPresentiel ) * 100)).toFixed(1));

            //Format
            this.degreOuverture.formatPresentiel = Number(parseFloat(((this.score.formatPresentiel / this.scoreMax.formatPresentiel ) * 100)).toFixed(1));

            //Contenus
            this.degreOuverture.contenusPresentiel = Number(parseFloat(((this.score.contenusPresentiel / this.scoreMax.contenusPresentiel ) * 100)).toFixed(1));
            
            //Evaluation
            this.degreOuverture.evaluationPresentiel  = Number(parseFloat(((this.score.evaluationPresentiel / this.scoreMax.evaluationPresentiel ) * 100)).toFixed(1));

            //Supports
            this.degreOuverture.supportsPresentiel = Number(parseFloat(((this.score.supportsPresentiel / this.scoreMax.supportsPresentiel ) * 100)).toFixed(1));

            //Communication
            this.degreOuverture.communicationPresentiel = Number(parseFloat(((this.score.communicationPresentiel / this.scoreMax.communicationPresentiel ) * 100)).toFixed(1));

            //Ressources
            this.degreOuverture.ressourcesPresentiel = Number(parseFloat(((this.score.ressourcesPresentiel / this.scoreMax.ressourcesPresentiel ) * 100)).toFixed(1));
        },
        degreOuvertureParCategories() {
            // Calcul du degré d’ouverture en % de chacune des trois catégories de composantes: 
            // Composantes Saptio Temporelles arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel = Number(parseFloat((((this.score.accesPresentiel + this.score.lieuPresentiel + this.score.tempsPresentiel + this.score.rythmePresentiel) / (this.scoreMax.accesPresentiel + this.scoreMax.lieuPresentiel + this.scoreMax.tempsPresentiel + this.scoreMax.rythmePresentiel)) * 100)).toFixed(1));
            // Composantes Pédagogiques arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesPedagogiquesPresentiel = Number(parseFloat((((this.score.objectifsPresentiel + this.score.cheminementPresentiel + this.score.sequencePresentiel + this.score.methodesPresentiel + this.score.formatPresentiel + this.score.contenusPresentiel + this.score.evaluationPresentiel) / (this.scoreMax.objectifsPresentiel + this.scoreMax.cheminementPresentiel + this.scoreMax.sequencePresentiel + this.scoreMax.methodesPresentiel + this.scoreMax.formatPresentiel + this.scoreMax.contenusPresentiel + this.scoreMax.evaluationPresentiel)) * 100)).toFixed(1));
            // Composantes Communication éducative médiatisée arrondi au 0,1 supérieur
            this.degreOuvertureCategories.composantesCommunicationEducativePresentiel = Number(parseFloat((((this.score.supportsPresentiel + this.score.communicationPresentiel + this.score.ressourcesPresentiel) / (this.scoreMax.supportsPresentiel + this.scoreMax.communicationPresentiel + this.scoreMax.ressourcesPresentiel)) * 100)).toFixed(1));
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
                        color: '#1d4ed8',
                        backgroundColor: 'rgba(29, 78, 216, 0.5)',
                        borderColor: '#1d4ed8',
                        pointBackgroundColor: '#173fab',
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

            this.barChartData = {
                labels: [
                    'Présentiel',
                ],
                datasets: [
                    {
                        label: 'Composantes Saptio Temporelles',
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
        }
    },

    mounted() {
        this.scoreComposantesPresentiel();
        this.degreOuverturePresentiel();
        this.degreOuvertureParCategories();
        this.degreOuvertureEnvironnementEtudie();

        this.fillDataResult();
        
        this.$router.push('/#resultPresentiel'); 

        console.log(this.score.ressourcesPresentiel);
        console.log(this.degreOuverture.ressourcesPresentiel);
        console.log(this.degreOuvertureCategories.composantesSpatioTemporellesPresentiel);
        console.log(this.degreOuvertureCategories.composantesPedagogiquesPresentiel);
        console.log(this.degreOuvertureCategories.composantesCommunicationEducativePresentiel);
        console.log(this.degreOuvertureEnvironnementPresentiel);
    }
}

</script>