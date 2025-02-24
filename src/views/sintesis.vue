<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La cosecha del plátano se refiere al proceso de recolección de los racimos de plátanos de la planta, que ocurre cuando los frutos alcanzan un tamaño adecuado y su color comienza a cambiar, indicando que están listos para ser recogidos. Este momento varía según la variedad y las condiciones climáticas, pero generalmente se realiza cuando los plátanos están en una fase de maduración óptima, aún verdes. La cosecha debe llevarse a cabo con cuidado para evitar daños en los frutos y en la planta. La poscosecha del plátano implica todas las etapas que siguen a la recolección de los frutos, enfocándose en su manejo, almacenamiento, transporte y comercialización. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Sintesis")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
