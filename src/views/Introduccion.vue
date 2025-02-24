<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.d-flex.align-items-center.mb-5         
      .col-lg-2
        img(src="../assets/curso/introduccion/img_1.svg", alt="Imagen de unos platanos" class="img-fluid")
      .col-lg-8
        p.mb-0 El componente formativo buenas prácticas agrícolas y competitividad productiva del cultivo del plátano, se enfoca en orientar al aprendiz en el cultivo y las labores culturales como control de malezas, platero, deshoje, desdede y amarre; además se habla de la cosecha, la poscosecha en el cultivo de plátano y bienestar laboral. Bienvenido a este componente formativo:
      .col-lg-2
        img(src="../assets/curso/introduccion/img_2.svg", alt="Imagen de unas ondas o olas" class="img-fluid")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
