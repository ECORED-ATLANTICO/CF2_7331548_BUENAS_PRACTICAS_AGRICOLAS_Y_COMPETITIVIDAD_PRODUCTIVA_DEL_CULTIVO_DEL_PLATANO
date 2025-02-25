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
        
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Malezas hospedantes de enfermedades" :icono="require('@/assets/curso/temas/tema1/img_3.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                p Algunas malezas representan un riesgo significativo, ya que albergan virus, bacterias e insectos perjudiciales. Entre las más problemáticas se encuentran la Siempre viva, transmisora de virus, así como la Emilia, el Cadillo y el Lulo de perro, que pueden hospedar bacterias como el Moko.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img_4.svg', alt='Imagen de unas manos sosteniendo un retoño')
          .py-4.py-md-5(titulo="Importancia del control temprano" :icono="require('@/assets/curso/temas/tema1/img_5.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                  p Las plantas jóvenes de plátano son especialmente vulnerables, ya que las malezas pueden proliferar con facilidad en los espacios libres a su alrededor. Durante el primer año del cultivo, es fundamental mantener la zona despejada para evitar la competencia por recursos esenciales y promover un desarrollo vigoroso.
              .col-md-6
                figure
                    img(src='@/assets/curso/temas/tema1/img_6.svg', alt='Imagen de un suelo con césped')
                
        div.metodo.mb-4.mb-md-5
          span.texto Métodos de control de arvenses
        
        p.mb-5 Existen diferentes métodos de control que pueden aplicarse según las condiciones del cultivo y los recursos disponibles.
        
        div.metodo.mb-4.mb-md-5
          span.texto Plateo

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
