<template>
    <!-- Geode Result Text -->
    <section id="resultPresentielDistanciel" class="h-auto bg-white">
        <div  class="relative overflow-hidden pb-10">
            <h4 class="kf-moveInDown text-4xl text-center tracking-tight font-extrabold text-gray-900 pt-10 pb-5 sm:text-3xl md:text-4xl">Résultats Présentiel et Distanciel</h4>
            <!-- <p class="text-center mt-10"> {{ geodeDataDistanciel }} </p>
            <p class="text-center mt-10"> {{ result }} </p> -->
            <p class="kf-appear-2 mx-auto md:w-7/12 w-10/12 text-base leading-8 text-justify">
                L'échelle d'évaluation se situe entre 0 et 100, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla convallis felis, eu pellentesque ligula commodo finibus. Nulla sed tortor ut augue gravida cursus eget vitae nulla. 
            </p>
            <!-- Radar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen mt-5">
                <radar-chart-result class="p-1 sm:p-4" :data="radarChartData" :options="radarChartOptions" :height="300"/>
            </div>
            <!-- Geode Result Text -->
            <div class="kf-appear2 mx-auto md:w-7/12 w-10/12">
                <h4 class="text-center mt-8 mb-5 text-3xl text-pink-900">Le degré d'ouverture de votre formation</h4>
                <p class="text-base leading-8 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla convallis felis, eu pellentesque ligula commodo finibus. Nulla sed tortor ut augue gravida cursus eget vitae nulla. Nulla pulvinar facilisis justo, eu auctor est fringilla ac. Nulla pulvinar mauris quis dolor accumsan, in eleifend risus posuere. Fusce eleifend consectetur erat, in volutpat est eleifend et. Proin ac orci sit amet sapien feugiat laoreet ut eu quam. Morbi mollis mauris et leo suscipit porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id varius metus, sed ultricies ipsum. Fusce blandit pulvinar laoreet. Donec eget dui nulla. Etiam in libero sapien. Nullam ut leo a nunc hendrerit efficitur. Vestibulum dolor elit, tincidunt dictum dignissim vel, venenatis sed magna. Curabitur finibus, nibh ac faucibus porta, odio nunc dignissim orci, at congue ex sapien non nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Cras condimentum posuere magna, eu tincidunt magna rhoncus eu. Sed mattis metus eu tortor feugiat, nec lobortis elit pulvinar. Nam laoreet ligula augue, id porttitor elit condimentum ut. Duis commodo laoreet tortor. Phasellus pharetra mi sapien, et luctus turpis ornare a. In a enim eget ante placerat efficitur eget a lacus. Nam eget lacus accumsan, pellentesque justo et, tempus sapien. Cras eget quam auctor, interdum nisi sit amet, congue orci. In sit amet nibh non magna rutrum condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mollis elit, vitae tempor erat. Phasellus mattis metus non lorem pellentesque, sit amet tempus mi fermentum.
                    Proin egestas metus in lectus lobortis ultricies. Duis non purus ac enim elementum ullamcorper eget sit amet dui. Nullam at sapien vitae purus mollis tristique nec in justo. Quisque porttitor ex efficitur risus iaculis, id commodo odio vestibulum. Vivamus fermentum neque vel nunc vulputate, et malesuada ligula cursus. Suspendisse elit erat, cursus vel ultrices nec, faucibus a lacus. Donec eu metus laoreet, auctor purus vitae, dictum diam. Integer vel nulla lorem. Nullam sollicitudin lobortis orci, at maximus justo bibendum nec. Duis bibendum enim at suscipit condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quis accumsan turpis. Aliquam ultricies quam non nibh euismod ultrices. Morbi porttitor vestibulum velit id malesuada. Phasellus fermentum ornare nibh, id feugiat eros aliquam vel.
                    Sed pulvinar commodo metus quis venenatis. In aliquam ante sit amet lacinia vulputate. Suspendisse nec elementum nulla. Phasellus rutrum gravida tempus. Fusce faucibus odio at faucibus feugiat. Donec fringilla lobortis malesuada. Etiam eget justo aliquam, egestas massa vitae, porta arcu. In vehicula id ipsum quis accumsan. Etiam eget ligula eget felis pulvinar mattis a sit amet lorem. Integer nisi odio, ultricies id dapibus quis, tincidunt consectetur ipsum. Phasellus ut dolor sed nisl scelerisque ullamcorper. Duis ac justo eget nisi egestas auctor. Morbi vulputate, lacus pellentesque fermentum placerat, purus mi blandit est, quis facilisis dolor nunc quis odio. Proin bibendum diam at est ultricies, a dapibus est faucibus.
                </p>
            </div>
            <!-- Bar Chart -->
            <div class="kf-appear-2 mx-auto md:w-1/2 w-screen mt-5">
                <bar-chart-result class="p-1 sm:p-4" :data="barChartData" :options="barChartOptions" :height="300"/>
            </div>
            <!-- Btn restart Geode test -->
            <div class="h-36 pt-16">
                <a href="/#geode" v-on:click="restart()" class="w-60 flex mx-auto items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700  bg-pink-100 hover:bg-pink-200 ">
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
    inject: ['geodeDataDistanciel'], 
    data() {
        return{
            // TEST RESULT
            modalite: {
                presentiel: 12,
                aDistance: 16,
                autre: 22,
            },
            result: {
                accesPresentiel: '',
                accesADistance:  '',
                accesAutre: '', 
                lieuPresentiel: '',
                lieuADistance: '',
                lieuAutre: '', 
                tempsPresentiel: '',
                tempsADistance: '',
                tempsAutre: '',  
                rythmePresentiel: '',
                rythmeADistance: '',
                rythmeAutre: '',          
            },
            // BAR CHARTS.JS
            barChartData: {
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
                    'Communication',
                    'Ressources'
                ],
                datasets: [
                    {
                        label: 'Présentiel',
                        data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 75, 11, 78, 45],
                        backgroundColor: '#1d4ed8'
                    },
                    {
                        label: 'A distance',
                        data: [30, 24, 57, 23, 68, 72, 25, 64, 100, 43, 65, 33, 56],
                        backgroundColor: '#6b7280'
                    },
                    {
                        label: 'Autre',
                        data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
                        backgroundColor: '#60a5fa'
                    }
                ]
            },
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
                    display: true,
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

            // RADAR CHART.JS
            radarChartData: {
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
                    'Communication',
                    'Ressources'
                ],
                datasets: [
                    {
                        label: 'Présentiel',
                        color: '#1d4ed8',
                        backgroundColor: 'rgba(29, 78, 216, 0.5)',
                        borderColor: '#1d4ed8',
                        pointBackgroundColor: '#173fab',
                        data: [30, 15, 20, 30, 40, 50, 60, 70, 34, 85, 39, 78, 69],
				    },
                    {
                        label: 'A distance',
                        color: '#6b7280',
                        backgroundColor: 'rgba(107, 114, 128, 0.5)',
                        borderColor: '#6b7280',
                        pointBackgroundColor: '#525967',
                        data: [78, 24, 57, 23, 68, 72, 25, 64, 100, 43, 65, 33, 56],
				    },
                    {
                        label: 'Autre',
                        color: '#60a5fa',
                        backgroundColor: 'rgba(92, 165, 255, 0.36)',
                        borderColor: '#60a5fa',
                        pointBackgroundColor: '#478CE1',
                        data: [45, 65, 30, 53, 34, 35, 26, 37, 54, 20, 67, 87, 98],
				    },
                ],
            },
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
                    display: true,
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
        }
    },

    methods: {
        restart() {
            this.$emit('restart-test');
        }
    },
    mounted() {
        // Calcul du résultat par catégorie et modalités

        // Acces
        this.result.accesPresentiel = this.modalite.presentiel * this.geodeDataDistanciel.acces;
        this.result.accesADistance = this.modalite.aDistance * this.geodeDataDistanciel.acces;
        this.result.accesAutre = this.modalite.autre * this.geodeDataDistanciel.acces;

        //Lieu
        this.result.lieuPresentiel = this.modalite.presentiel * this.geodeDataDistanciel.lieu;
        this.result.lieuADistance = this.modalite.aDistance * this.geodeDataDistanciel.lieu;
        this.result.lieuAutre = this.modalite.autre * this.geodeDataDistanciel.lieu;

        //Temps
        this.result.tempsPresentiel = this.modalite.presentiel * this.geodeDataDistanciel.temps;
        this.result.tempsADistance = this.modalite.aDistance * this.geodeDataDistanciel.temps;
        this.result.tempsAutre = this.modalite.autre * this.geodeDataDistanciel.temps;

        //Rythme
        this.result.rythmePresentiel = this.modalite.presentiel * this.geodeDataDistanciel.rythme;
        this.result.rythmeADistance = this.modalite.aDistance * this.geodeDataDistanciel.rythme;
        this.result.rythmeAutre = this.modalite.autre * this.geodeDataDistanciel.rythme;
        
         this.$router.push('/#resultPresentielDistanciel'); 
    }
}

</script>