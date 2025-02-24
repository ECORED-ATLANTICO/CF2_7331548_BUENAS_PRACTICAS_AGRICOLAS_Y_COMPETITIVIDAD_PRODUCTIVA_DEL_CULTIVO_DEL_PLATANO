<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 Manejo del cultivo

      .bg_img_9
        .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-up")
          .col-lg-12.mb-4
            .bloque-texto-g.bloque-texto-g.bg-09.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.svg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 El cultivo de plátano requiere la implementación de diversas prácticas culturales para prevenir problemas fitosanitarios. Aplicarlas a tiempo mejora las condiciones de desarrollo del cultivo y facilita el control de plagas y enfermedades. Esto impacta directamente en el rendimiento, la calidad y el peso del racimo, favoreciendo una producción más saludable y sostenible.

      separador
      #t_1_1.titulo-segundo
        .h2(data-aos="fade-right") 1.1 Control de malezas
      .mb-3
        .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-down")
          .col-lg-4.p-2
            p.mb-5 El manejo adecuado de las malezas es esencial para garantizar el crecimiento saludable del plátano y prevenir la propagación de enfermedades. Estas plantas además de competir por nutrientes, agua y luz, también, pueden actuar como vectores de plagas y patógenos que afectan el cultivo.
          .col-lg-6
            figure
              img.mb-5(src="@/assets/curso/temas/tema1/img_2.svg", alt="Imagen de un suelo con césped" class="img-fluid")
        TabsB.color-acento-contenido.md-5
          .py-4.py-md-5(titulo="Malezas hospedantes de enfermedades" :icono="require('@/assets/curso/temas/tema1/img_3.svg')")
            .row
              .col-md-6.mb-4.mb-md-5
                p Algunas malezas representan un riesgo significativo, ya que albergan virus, bacterias e insectos perjudiciales. Entre las más problemáticas se encuentran la Siempre viva, transmisora de virus, así como la Emilia, el Cadillo y el Lulo de perro, que pueden hospedar bacterias como el Moko.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img_5.svg', alt='Imagen de unas manos sosteniendo un retoño')
          .py-4.py-md-5(titulo="Importancia del control temprano" :icono="require('@/assets/curso/temas/tema1/img_4.svg')")
            .row
              .col-md-6.mb-4.mb-md-5
                p Las plantas jóvenes de plátano son especialmente vulnerables, ya que las malezas pueden proliferar con facilidad en los espacios libres a su alrededor. Durante el primer año del cultivo, es fundamental mantener la zona despejada para evitar la competencia por recursos esenciales y promover un desarrollo vigoroso.
              .col-md-6
                figure
                    img(src='@/assets/curso/temas/tema1/img_6.svg', alt='Imagen de un suelo con césped')
                    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
        
        div.metodo
          img.fondo(src='@/assets/curso/fondo-platano.svg' alt='Fondo')
          img.icono(src='@/assets/curso/platano.svg' alt='Plátano')
          span.texto Métodos de control de arvenses


  

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass">
span.color-acento-darkgreen
  background-color: #33490B
  padding: 10px
  border-radius: 6px
  color: white
.container-orange
  background-color: #FB9231
.container-peach
  background-color: #FFE8D2
.boton.color-acento-darkgreen
  background-color: #33490B
.container-peach-2
  background-color: #FFF0D6
.acordion__activo
  background-color: #E6F1E8 !important
.acordion__accion__btn--a
  background-color: #F9A545
.acordion__activo .acordion__accion__btn--a
  background-color: #748578
thead
  background-color: #FFCE79
th
  background-color: #9EB682;

tr:nth-child(odd)
  background-color: #C7D5B6;

tr:nth-child(even)
  background-color: #E3EADA;
</style>
