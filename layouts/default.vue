<template>
  <div>
    <SocialHead 
      :title="'GÉODE | Évaluez l’ouverture d’un environnement éducatif'"
      :description="'GÉODE : Grille d’Évaluation de l’Ouverture D’un Environnement éducatif, un instrument au service de l\'ingénierie et de la recherche dont l\'auteur est Annie Jezegou. Outil développé par la Fabrique des Formations - Université de Lille'"
    />
    <TheNavBar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* // Disable android highlight taps */
  -webkit-tap-highlight-color: transparent;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
