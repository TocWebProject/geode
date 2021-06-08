<template>
    <div>
        <!-- Page Documentation -->
        <section id="topDocumentation" class="bg-white h-full overflow-hidden pb-16">
            <h1 class="kf-moveInDown text-3xl sm:text-4xl md:text-5xl text-center tracking-tight font-extrabold text-gray-900 pt-5 sm:pt-14 mb-2 sm:mb-6 lg:mb-0">Pour en savoir plus sur GÉODE</h1>
            <div class="min-w-11/12 mt-1 mb-10 mx-auto flex flex-wrap justify-center">
                <!-- Menu Documentation -->
                <div class="col-auto kf-moveInLeft mt-6">
                    <div class="flex flex-row-reverse flex-wrap lg:flex-col justify-center"> 
                        <img src="~/assets/img/undraw_At_work_re_qotl.svg" class="kf-moveInUp w-40 h-40 ml-4 lg:ml-8 my-auto md:mr-6 lg:mr-0" width="160" height="160" alt="illustration de livres">
                        <div class="w-60 lg:w-60 h-60 ml-0 mb-7 pr-10 rounded shadow-lg bg-gray-200 hover:bg-opacity-80">
                            <nav class="w-60 p-6 pt-5 h-60">
                                    <h2 class="text-2xl font-medium">Sommaire</h2>
                                    <hr class="hr-sommaire">
                                <ul class="space-y-3">
                                    <li><a class="tracking-wide font-semibold text-pink-900 hover:text-pink-800" href="#environnementeducatif">L’ouverture d’un environnement éducatif</a></li>
                                    <li><a class="tracking-wide font-semibold text-pink-900 hover:text-pink-800" href="#presentation">Qu’est-ce que GÉODE ?</a></li>
                                    <li><a class="tracking-wide font-semibold text-pink-900 hover:text-pink-800" href="#references">Références bibliographiques </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <NuxtLink to="/#geode" class="geode-link-desktop w-full sm:hidden lg:flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10">
                        Débutez le test
                    </NuxtLink>
                </div>
                <!-- Text Documentation -->
                <article class="kf-appear-1 flex flex-col w-full sm:w-11/12 lg:w-2/3 items-left px-4 mt-5 lg:mt-10 sm:ml-0 md:ml-5 lg:ml-10 xl:ml-14">
                    <h4 id="environnementeducatif" class="text-xl md:text-2xl font-bold tracking-tight mt-6 md:mr-5 sm:mr-2 text-pink-800">L’ouverture d’un environnement éducatif : de quoi parle-t-on ?</h4>
                    <p class="text-justify mt-3">
                        <span class="font-semibold italic tracking-tight sm:tracking-normal"> « L’ouverture en formation renvoie à un ensemble de dispositifs flexibles et autonomisants
                        dont la principale propriété est d’ouvrir à l’apprenant des libertés de choix, afin qu’il puisse
                        exercer un contrôle sur sa formation et sur ses apprentissages »</span> (Jézégou, 2005, p. 103).
                    </p>
                    <p class="mt-2 text-justify tracking-tight sm:tracking-normal">
                        Jusqu’aux années 2000, l’acronyme FOAD (Formations Ouvertes et À Distance) renvoyait à
                        un ensemble d’environnements éducatifs tels que : les centres de ressources multimédia, les
                        espaces d’autoformation, les ateliers pédagogiques personnalisés, les universités et campus
                        dits « virtuels ». Depuis le début des années 2010, notamment sous l’impulsion du recours aux
                        anglicismes dans le domaine de la formation, l’usage du terme « ouvert » (open) s’est
                        banalisé, tout en devenant clairement explicite. On parle alors de massive open online course,
                        small private online course ou encore de corporate online open course. Communément, on
                        attribue à ces environnements une certaine ouverture par le fait de permettre aux personnes
                        d’accéder à la formation en fonction de leurs disponibilités, de se former à distance
                        notamment grâce aux facilités de communication offertes par les Technologies Numériques
                        de l’Information et de la Communication (TNIC), tout en garantissant une gratuité d’accès.
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2"> 
                        Ici, l’ouverture en formation est souvent avancée dans les discours politiques et socio-
                        économiques comme une évidence, un allant de soi. Cette notion d’ouverture a longtemps
                        souffert d’un faible ancrage théorique, ce qui peut notamment expliquer les multiples
                        interprétations qui en ont été faites.
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2"> 
                        Un premier jalon pour une définition a été posé en 2001 lors d’une conférence de consensus
                        sur « l’accompagnement des formations ouvertes » (Collectif de Chasseneuil, 2001). Par
                        "formation ouverte", ce collectif d'experts proposait d’entendre :
                    
                        <span class="block pl-7 md:pl-16 mt-2 mb-1 tracking-tight sm:tracking-normal">
                            un dispositif organisé, finalisé, reconnu comme tel par les acteurs, qui prend en compte
                            la singularité des personnes dans leurs dimensions individuelle et collective et repose
                            sur des situations d’apprentissage complémentaire en termes de temps, de lieux, de
                            médiations pédagogiques, humaines et technologiques, et de ressources (Collectif de
                            Chasseneuil, 2001, p. 177).
                        </span>
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2"> 
                        Ici, la volonté de ce collectif était de dépasser la référence trop floue à l’éclatement des unités
                        d’espace, de temps et d’action, encore aujourd’hui dominante dans les représentations sociales
                        sur les formations ouvertes. Il voulait aussi et surtout inciter à penser l’ingénierie des
                        formations ouvertes en tant que combinatoires de différents modes, lieux, supports, moyens
                        de communication, personnes - ressources, etc. Par ailleurs, l’ouvrage résultant de cette
                        conférence de consensus posait également, sans pour autant la développer outre mesure, la
                        question des conditions à créer ici pour favoriser l’apprentissage autodirigé.
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2"> 
                        C’est en travaillant plus particulièrement sur cette question que Jézégou (2005) a reconstitué
                        une partie du rationnel qui permet de donner une signification à l’ouverture en formation. Un
                        second jalon de caractérisation de l’ouverture a ainsi été posé : « l’ouverture en formation
                        renvoie à un ensemble de dispositifs flexibles et autonomisants dont la principale propriété est
                        d’ouvrir à l’apprenant des libertés de choix, afin qu’il puisse exercer un contrôle sur sa
                        formation et sur ses apprentissages » (Jézégou, 2005, p.103). Par conséquent, l’ouverture
                        constitue une condition organisationnelle et pédagogique indispensable pour favoriser
                        l’exercice de l’autodirection de l’apprenant.
                    </p>
                    

                    <h4 id="presentation" class="text-xl md:text-2xl font-bold mt-6 md:mr-5 sm:mr-2 text-pink-800">Qu’est-ce que GÉODE ?</h4>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-3">
                        GÉODE est l’acronyme de « Grille d’Évaluation de l’Ouverture D’un Environnement
                        éducatif ». Il s’agit d’un instrument à la fois au service de l’ingénierie et de la recherche. Il
                        permet de déterminer le degré d’ouverture d’un environnement éducatif qu’il soit en
                        présentiel, en distanciel, ou alliant les deux modalités.
                        GÉODE propose une liste de 14 composantes susceptibles d’ouvrir à l’apprenant des libertés
                        de choix et d’action. Son utilisation s’appuie sur un ensemble de directives, d’étapes et de
                        bases de calcul (Jézégou, 2010). La mise en œuvre d’un tel protocole permet également
                        d’évaluer le degré d’ouverture de chaque composante - et catégorie de composantes - et donc
                        de caractériser l’ouverture de l’environnement étudié.
                    </p>    
                        
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2"> 
                        La première catégorie intègre les composantes qui définissent ensemble les conditions spatio-
                        temporelles des apprentissages. Il s’agit du lieu, du temps vu sous l’angle des horaires, de
                        l’accès et du rythme de la formation. La deuxième catégorie intègre les aspects purement
                        pédagogiques : les objectifs, le cheminement, la séquence, les méthodes, le format, les
                        contenus et l’évaluation. Enfin, la troisième catégorie de composantes est plus spécifiquement
                        liée à la communication éducative médiatisée : d’une part, il s’agit des médiations humaines
                        identifiées sous les termes de « personnes-ressources » et, d’autre part, des médiations
                        technico-pédagogiques ; c'est-à-dire des supports d’apprentissage et des outils de
                        communication.
                    </p>
                    
                    <table class="rounded-lg text-left w-full mt-5 mb-1 bg-gray-100 text-gray-800 shadow">
             
                        <tr class="border-b-2 border-gray-300">
                            <td class="text-base font-semibold px-1 md:px-2 lg:px-5 py-4">Les trois catégories</td>
                            <td class="text-base font-semibold px-1 md:px-2 lg:px-5 py-4">Composantes associées</td>
                        </tr>
            
                        
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">composantes spatio-temporelles</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">accès, lieu, temps, rythme</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">composantes pédagogiques</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">objectifs, cheminement, séquence, méthodes, format, contenus, évaluation</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">composantes de la communication éducative médiatisée</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">supports d’apprentissage, outils de communication, personnes-ressources</th>
                        </tr> 
                    </table>  
                    <p class="mb-4 ml-1">Tableau 1. <span class="italic">Les trois catégories de composantes GEODE d’un environnement éducatif</span> (Jézégou, 2005, p. 123)</p>   
                    <p class="text-justify tracking-tight sm:tracking-normal">
                        La première étape du protocole d’évaluation consiste à renseigner un questionnaire dont la
                        validité de contenu a été confirmée. Ce questionnaire peut être renseigné seul ou à plusieurs
                        sur la base d’un consensus collectif quant à la réponse à donner pour chacune des questions
                        posées.
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2">
                        Une fois le questionnaire rempli, a contrario de la version manuelle, cette application Web
                        réalise automatiquement toutes les étapes suivantes du protocole. Ces étapes mettent en œuvre
                        des bases spécifiques de calcul telles que décrites dans Jézégou (2010).
                        Au final, l’application délivre et illustre le score GÉODE obtenu pour chacune 14
                        composantes, pour chacune des trois catégories de composantes et, plus globalement, pour
                        l’environnement éducatif étudié. Ce score est exprimé en pourcentage d’ouverture et renvoie à
                        la typologie ci-dessous, allant de « fermé » (aucune liberté de choix offerte à l’apprenant) à
                        « hautement ouvert + »  (totale liberté de choix) :
                    </p>
                    <table class="rounded-lg text-center w-full mt-5 mb-4 bg-gray-100 text-gray-800 shadow">
                        <tr class="border-b-2 border-gray-300">
                            <td class="text-base font-semibold px-1 md:px-2 lg:px-5 py-4">Degré d’ouverture en %</td>
                            <td class="text-base font-semibold px-1 md:px-2 lg:px-5 py-4">Typologie</td>
                        </tr>
            
                        
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">100 ≥ score > 90</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">hautement ouvert +</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">90 ≥ score > 80</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">hautement ouvert</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">80 ≥ score > 70</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">hautement ouvert -</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">70 ≥ score > 60</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">moyennement ouvert +</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">60 ≥ score > 50</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">moyennement ouvert </th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">50 ≥ score > 40</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">moyennement ouvert -</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">40 ≥ score > 30</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">peu ouvert +</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">30 ≥ score > 20</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">peu ouvert</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">20 ≥ score > 10</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">peu ouvert -</th>
                        </tr> 
                        <tr class="bg-gray-50 border-b border-gray-100">
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">10 ≥ score</th>
                            <th class="font-semibold px-1 md:px-2 lg:px-5 py-2">fermée</th>
                        </tr> 
                    </table> 
                    <p class="text-justify tracking-tight sm:tracking-normal">
                        GEODE est un instrument utile aux praticiens pour l’ingénierie et l’audit d’un environnement
                        éducatif institué que ce dernier soit en présentiel, en distanciel ou alliant les deux modalités.
                        GÉODE est aussi un instrument de recherche qui peut-être mis en œuvre dès lors que la
                        question de l’ouverture - et donc du degré de liberté de choix et d’action offert à l’apprenant -
                        se pose au plan scientifique.
                    </p>
                    <p class="text-justify tracking-tight sm:tracking-normal mt-2">
                        <span class="font-bold text-lg">Précision :</span><br>
                        Les scores GEODE obtenus sont calculés automatiquement par cette application à partir des réponses données par <span class="font-semibold">une personne</span> ayant répondu au questionnaire et pour un environnement éducatif précis.<br>
                        Si pour <span class="font-semibold">ce même environnement, plusieurs personnes</span> répondent à ce questionnaire alors il s'agit de calculer la moyenne des scores individuels pour obtenir les scores GEODE. L'application n'intégre pas cette fonction.<br>
                        Point de vigilance : lorsque le formation se déroule "en présentiel et en distanciel" (les deux) et toujours pour le même environnement, tous les répondants doivent préciser <span class="font-semibold">le même volume horaire pour chacune</span> des deux modalités et tel que déclaré par l'organisme de formation.<br>
                    </p>
                    <h4 id="references" class="text-xl md:text-2xl font-bold mt-6 md:mr-5 sm:mr-2 text-pink-800">Références bibliographiques</h4>
                    <p class="mt-2 text-justify">
                        Collectif de Chasseneuil, (2001). <span class="italic">Accompagner les formations ouvertes.</span> L’Harmattan.
                        Jézégou, A. (2005). <span class="italic">Formations ouvertes : libertés de choix et autodirection de l’apprenant.</span>
                        L’Harmatttan.<br>
                    </p>
                    <p class="mt-1 text-justify">
                        Jézégou, A. (2010). Le dispositif GÉODE pour évaluer le degré d’ouverture d’un
                        environnement éducatif. <span class="italic">Revue de l’Éducation à Distance/Journal of Distance Education</span>, 83-
                        108.
                    </p>
                </article>
            </div>
            <NuxtLink to="/#geode" class="geode-link-mobile w-52 mx-auto hidden items-center justify-center mt-3 px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-pink-900 hover:bg-opacity-80 md:py-4 md:text-lg md:px-10">
                    Débutez le test
            </NuxtLink>
            <!-- Scroll Top Call to action-->
            <a href="#topDocumentation" v-show="visibleArrow" class="bottom-left-arrow kf-moveInLeft flex items-center justify-center" v-scroll-to="{
                el: '#topDocumentation',
                container: 'body',
                duration: 400,
                lazy: false,
                easing: 'linear',
                offset: -200,
                force: true,
                cancelable: true,
                x: false,
                y: true
            }">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </a>
        </section>
        <!-- BottomNav -->
        <BottomNav></BottomNav>
    </div>
</template>

<script>
export default {
    name: 'documentation',
    transition: 'page',
    head() {
        return {
            title: 'Documentation',
        }
    },
    data () {
    return {
      visibleArrow: false
    }
  },
  methods: {
    // Scroll Tops Methods  
    scrollListener() {
            this.visibleArrow = window.scrollY > 420
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollListener)
    }
}
</script>
