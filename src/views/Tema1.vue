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
            .bloque-texto-g.bloque-texto-g--inverso.bg-09.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.svg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 El cultivo de plátano requiere la implementación de diversas prácticas culturales para prevenir problemas fitosanitarios. Aplicarlas a tiempo mejora las condiciones de desarrollo del cultivo y facilita el control de plagas y enfermedades. Esto impacta directamente en el rendimiento, la calidad y el peso del racimo, favoreciendo una producción más saludable y sostenible.

      separador

      #t_1_1.titulo-segundo
        .h2(data-aos="fade-right") 1.1 Control de malezas
      .mb-3
        .row.justify-content-center.align-items-center.mb-0
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
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9.position-relative
            .avatar
              figure
                img.img250(src="@/assets/curso/temas/tema1/img_7.svg", alt="alt")
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.img100(src="@/assets/curso/temas/tema1/img_8.svg", alt="alt")
                .col
                  h5 Control químico
                  p Se utiliza de manera selectiva en plantaciones comerciales. En monocultivos, se aplican herbicidas emergentes en la base de la planta durante los primeros cinco meses del cultivo, periodo crítico en el que la competencia con las malezas es más intensa.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.img100(src="@/assets/curso/temas/tema1/img_9.svg", alt="alt")
                .col
                  h5 Control mecánico	
                  p Consiste en el uso de guadañas para eliminar las malezas, contribuyendo además a la conservación de la cobertura del suelo.
            .crd.crd--avatarHorizontal.crd--middle.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.img100(src="@/assets/curso/temas/tema1/img_10.svg", alt="alt")
                .col
                  h5 Control manual	
                  p Se realiza mediante el plateo con machete o manualmente. Este último es el método más recomendado para evitar daños a la planta.
            .crd.crd--avatarHorizontal.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.img100(src="@/assets/curso/temas/tema1/img_11.svg", alt="alt")
                .col
                  h5 Control biológico	
                  p Emplea organismos como insectos, hongos y bacterias para regular poblaciones de plagas y enfermedades, reduciendo la necesidad de agroquímicos.
                  span Conservar del recurso anterior
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img.img100(src="@/assets/curso/temas/tema1/img_12.svg", alt="alt")
                .col
                  h5 Control manual	
                  p Se realiza mediante el plateo con machete o manualmente. Este último es el método más recomendado para evitar daños a la planta.
        
        div.metodo.mb-4.mb-md-5
          span.texto Plateo

        p.mb-5 El plateo es una técnica esencial en el cultivo de plátano que consiste en mantener libre de malezas la base de la planta. Su correcta aplicación facilita la fertilización y el manejo de plagas y enfermedades, favoreciendo así un desarrollo óptimo del cultivo y aumentando su productividad. Se recomienda realizar esta labor de forma manual para evitar daños a la planta y mejorar la eficacia del control de arvenses.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.mb-2
            .titulo-sexto.bg-11.mb-2
              h5 Figura 3: 
              span.text-dark Plateo
          .col-lg-10.mt-3
            .plateo-container
              .plateo-card.plateo-left
                .plateo-title Plateo manual
                  figure
                    img(src="@/assets/curso/temas/tema1/img_13.svg", alt="Plateo manual")
              .plateo-card.plateo-right
                .plateo-title Después del plateo
                  figure
                    img(src="@/assets/curso/temas/tema1/img_14.svg", alt="Después del plateo")
            figcaption Nota.  SENA

        div.metodo.mb-4.mb-md-5
          span.texto Desmanche o regulación de la población

        p.mb-3 El desmanche es una técnica fundamental en el cultivo de plátano, cuyo propósito es eliminar los colinos que emergen alrededor de la planta madre. Estos brotes generan competencia por luz, agua y nutrientes, afectando el desarrollo del cultivo. La aplicación adecuada de esta práctica permite establecer una descendencia equilibrada, compuesta por madre, hijo y nieto, optimizando la producción y garantizando una densidad adecuada de plantas por hectárea.
        p.mb-5 A continuación, se describen algunos métodos de eliminación de colinos:
        
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10.mb-5
            .row.justify-content-center.mb-3
              .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/tema1/img_15.svg", alt="alt")
                  .crd_hover_txt--body
                    h4.mb-3 Terpenos
                    p.mb-0 Cumplen una función antioxidante, en este grupo están los pigmentos carotenoides. 
  
              .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/tema1/img_16.svg", alt="alt")
                  .crd_hover_txt--body
                    h4.mb-3 Fenoles
                    p.mb-0 Desempeñan una función antioxidante, entre estos se encuentran a los pigmentos flavonoides presentes en los frutos azulados. 
  
              .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/tema1/img_17.svg", alt="alt")
                  .crd_hover_txt--body
                    h4.mb-3 Tioles y lignanos
                    p.mb-0 Efectúan una función antioxidante y se pueden encontrarse en alimentos como el brócoli, el repollo, la cebolla, el trigo y la cebada.
        
              div.metodo.mb-4.mb-md-5
                span.texto Desguasque
              .row 
                .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img_18.svg", alt="Imagen de unos platanos" class="img-fluid")
                .col-lg-8
                  p.mb-0 El desguasque se encuentra dentro de las prácticas culturales recomendadas para favorecer la sanidad y vigor de las plantas. Esta labor consiste en eliminar la guasca seca que hay en el pseudotallo, se puede realizar cada vez que lo requiera el cultivo, procurando no hacer daño a la planta; el no realizar esta labor en la platanera puede generar plagas como el Picudo, el Rayado, la Palomilla y algunas enfermedades como el virus en el pseudotallo.

              div.metodo.mb-4.mb-md-5
                span.texto Deshoje

              .row.d-flex.align-items-center.mb-5
                .col-lg-7
                  p.mb-3 Implica la eliminación de hojas secas, dobladas o ubicadas en la parte inferior de la planta, con el propósito de mejorar la circulación del aire y la penetración de la luz solar, reduciendo así el riesgo de plagas y enfermedades. Se recomienda retirar también hojas con manchas o con tejidos verdes afectados, siempre asegurando que al menos el 50% del área foliar permanezca intacta para no comprometer la fotosíntesis. Esta práctica es clave en el manejo de la Sigatoca negra.
                  p.mb-0 El corte de las hojas debe realizarse a una altura de 20 a 30 cm del pecíolo y puede efectuarse en cualquier momento del día, según lo requiera el cultivo.
                .col-lg-3
                  img(src="@/assets/curso/temas/tema1/img_19.svg", alt="Imagen de unas ondas o olas" class="img-fluid")
        
        div.metodo.mb-4.mb-md-5
          span.texto Amarre
        
        p.mb-3 El amarre es una práctica fundamental para garantizar la estabilidad de las plantas durante su etapa de reproducción. Su propósito es prevenir la caída de los pseudotallos debido a factores como la acción del viento, deficiencias en el sistema radicular, embalconamiento o el peso del racimo.
        p.mb-5 Para obtener mejores resultados, esta labor debe realizarse con una frecuencia semanal, utilizando cabuya biodegradable, lo que contribuye a la sostenibilidad del cultivo y reduce el impacto ambiental.
        
        .row.d-flex.align-items-center.mb-5
          .col-lg-5
              img(src="@/assets/curso/temas/tema1/img_20.svg", alt="Imagen de unas ondas o olas" class="img-fluid")
          .col-lg-7
            .tarjeta.fondo_1_2.p-4.slyder_1.bg-01
                SlyderA(tipo="b")
                  .tarjeta.bg-01.p-2
                    .row.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 01
                        p Que las semillas sean jóvenes, vigorosas y su procedencia y características fenotípicas sean óptimas.

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_21.svg', alt='Texto que describa la imagen').mx-auto

                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 02
                        p Determinar la dirección de inclinación para orientar correctamente las líneas o cuerdas.

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_22.svg', alt='Texto que describa la imagen').mx-auto
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 03
                        p Calcular la longitud de cuerda necesaria para el amarre.

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_23.svg', alt='Texto que describa la imagen').mx-auto
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 04
                        p Asegurar la escalera en una posición firme para facilitar la labor.	

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_24.svg', alt='Texto que describa la imagen').mx-auto
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 05
                        p Amarrar en sentido contrario a la inclinación con un nudo holgado, firme y fácil de soltar.

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_25.svg', alt='Texto que describa la imagen').mx-auto
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 06
                        p Seleccionar las plantas de anclaje en este orden: paridas, bien desarrolladas sin parir y pseudotallos recién cosechados (menos de una semana).	

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_26.svg', alt='Texto que describa la imagen').mx-auto
                  .tarjeta.bg-01.p-2
                    .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                      .col-md-12.col-xl-7.mb-4
                        h3.mb-2 07
                        p Seleccionar las plantas de anclaje en este orden: paridas, bien desarrolladas sin parir y pseudotallos recién cosechados (menos de una semana).	

                      .col-md-8.col-xl-5.mb-3
                        figure
                          img(src='@/assets/curso/temas/tema1/img_27.svg', alt='Texto que describa la imagen').mx-auto
               
        div.metodo.mb-4.mb-md-5
          span.texto Embolse y encinte
        
        .row.d-flex.align-items-center.mb-5
          .col-lg-4
              img(src="@/assets/curso/temas/tema1/img_28.svg", alt="Imagen de unas ondas o olas" class="img-fluid")
          .col-lg-7
            p.mb-3 El embolse y el encinte son prácticas esenciales para garantizar la calidad del fruto en el cultivo de plátano. El embolse favorece el crecimiento de los racimos al reducir el tiempo entre su aparición y la cosecha, además de mantener una temperatura adecuada que optimiza su desarrollo. También protege los frutos contra plagas y daños durante su crecimiento y recolección, mejorando su presentación y calidad.
            p.mb-3 Por su parte, el encinte complementa el embolse y permite identificar la edad de los racimos, facilitando el control de la cosecha y el registro de la producción disponible.

            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Tratamiento de bolsas")
                .row
                  .col-xl-7
                    p Las bolsas utilizadas deben estar impregnadas con agroquímicos permitidos para garantizar su efectividad.
                  .col-xl-5
                    figure
                      img(src='@/assets/curso/temas/tema1/img_29.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Procedimiento de embolse")
                .row
                  .col-xl-7
                    p Se debe realizar con la indumentaria y vestuario de trabajo adecuado, y la protección necesaria.
                  .col-xl-5
                    figure
                      img(src='@/assets/curso/temas/tema1/img_30.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de residuos")
                .row
                  .col-xl-7
                    p Se recomienda el uso de bolsas lechosas tratadas con clorpirifós al 1%. En condiciones de alta radiación solar, este tipo de bolsa ofrece protección adicional contra plagas.
                  .col-xl-5
                    figure
                      img(src='@/assets/curso/temas/tema1/img_31.svg', alt='Texto que describa la imagen')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Selección de bolsa")
                .row
                  .col-xl-7
                    p Es fundamental recoger y gestionar correctamente las bolsas utilizadas para evitar impactos ambientales negativos.
                  .col-xl-5
                    figure
                      img(src='@/assets/curso/temas/tema1/img_32.svg', alt='Texto que describa la imagen')
        div.metodo.mb-4.mb-md-5
          span.texto Desflore, desdede y desbacote
          
        p.mb-5 Estas prácticas agrícolas en el cultivo de plátano, contribuyen a optimizar el desarrollo del racimo, favoreciendo su crecimiento y calidad. Su aplicación adecuada permite una mejor distribución de nutrientes y reduce la incidencia de plagas y enfermedades.

        .row.justify-content-center.mb-3
          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-terciario-claro.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img_33.svg', alt='Texto que describa la imagen')
              h3.text-center Desflore
              p.text-small Consiste en la eliminación de las flores de los racimos para mejorar la calidad del fruto y reducir el riesgo de enfermedades que pueden afectar su desarrollo.
          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-terciario-claro.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img_34.svg', alt='Texto que describa la imagen')
              h3.text-center Desdede
              p.text-small Se eliminan dos o más dedos de la última mano del racimo para garantizar una mejor distribución de nutrientes, lo que favorece el crecimiento y el peso del resto del fruto.
          .col-lg-4.mb-4.mb-sm-0
            .tarjeta--boton.color-terciario-claro.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img_35.svg', alt='Texto que describa la imagen')
              h3.text-center Desbacote
              p.text-small  Se retira la bacota con el objetivo de potenciar el crecimiento de los dedos y aumentar el peso de los racimos, además de disminuir la incidencia de plagas y enfermedades.
        
        separador

        #t_1_2.titulo-segundo
          .h2(data-aos="fade-right") 1.2 Plagas y enfermedades
        .mb-3
        .row 
          .col-lg-8
            p.mb-3 El cultivo de plátano, fundamental para la economía de muchas regiones, enfrenta múltiples desafíos fitosanitarios que pueden comprometer su productividad y calidad. Entre estos, las enfermedades y plagas representan una amenaza constante, cuyo impacto se ve agravado por factores ambientales como el clima y las prácticas agrícolas. En particular, los periodos de alta pluviosidad, como los registrados durante las olas invernales, favorecen la proliferación de estos problemas, incrementando las pérdidas en el sector.
            p.mb-5 A continuación, se presentan las principales enfermedades y plagas que afectan los cultivos de plátano, sus síntomas característicos y las estrategias de manejo integrado recomendadas para su control. Comprender estos aspectos, permite tomar de decisiones efectivas que garanticen cosechas sanas y rentables.
          .col-lg-4
              figure
                img.mb-5(src="@/assets/curso/temas/tema1/img_36.svg", alt="Imagen de un suelo con césped" class="img-fluid")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.mb-4
            .titulo-sexto.bg-11.mb-4
              h5 Tabla 1: 
              span.text-dark Enfermedades del Plátano

            .tabla-a.mb-3
              table
                caption Nota.  SENA (2024).
                thead
                  tr
                    th Enfermedad
                    th Agente Causa
                    th Síntomas Principales
                    th Manejo Integrado
                tbody
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
          .col-lg-10.mb-3
            .titulo-sexto.bg-11.mb-4
              h5 Tabla 2: 
              span.text-dark Principales plagas del plátano

            .tabla-a.mb-5 
              table
                caption Nota.  SENA (2024).
                thead
                  tr
                    th Plaga
                    th Agente causal
                    th Síntomas Principales
                    th Manejo Integrado
                tbody
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
                  tr
                    td Celda 1
                    td Celda 2
                    td Celda 3
                    td Celda 4
          .col-lg-11.p-4.ps-5.color-acento-contenido
            .cajon.bg-1.g_18.mb-3
              .row.mb-4
                .col-lg-12.p-4.ps-5 
                  p El manejo integrado de plagas y enfermedades combina estrategias que minimizan su impacto en los cultivos, priorizando métodos sostenibles y amigables con el medio ambiente. Incluye el uso de variedades resistentes, control biológico, monitoreo constante y prácticas agrícolas como la rotación de cultivos y el manejo eficiente del suelo y la humedad, reduciendo así la dependencia de productos químicos y fomentando la sanidad vegetal.
                
        
        div.metodo.mb-4.mb-md-5
          span.texto Manejo fitosanitario
        
        p.mb-5 La implementación de estrategias de control biológico y mecánico contribuye a la prevención de plagas y reduce la necesidad de plaguicidas químicos, minimizando así el impacto ambiental y los riesgos para la salud humana. A continuación, se presentan las principales prácticas recomendadas:
        
        .row 
          LineaTiempoD.color-terciario.col-lg-9
            .row(numero="1" titulo="Control de plagas y malezas")
              .col-md-9.mb-4.mb-md-0
                p.text-small La correcta ejecución de prácticas como el control de malezas, deshoje, destronque y fertilización es esencial en el manejo integrado de plagas. El uso adecuado de trampas y la recolección manual de plagas caídas ayuda a disminuir la aplicación de plaguicidas y a mantener un equilibrio natural en el cultivo.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_37.svg', alt='Texto que describa la imagen')
            .row(numero="2" titulo="Protección del producto")
              .col-md-9.mb-4.mb-md-0
                p.text-small Es recomendable utilizar mallas protectoras para evitar el ataque de pájaros y murciélagos, ya que estos pueden ser vectores de microorganismos que afectan la calidad del fruto y representan un riesgo para el consumidor final.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_38.svg', alt='Texto que describa la imagen')
            .row(numero="3" titulo="Uso responsable de plaguicidas")
              .col-md-9.mb-4.mb-md-0
                p.text-small La aplicación de plaguicidas debe realizarse en las cantidades estrictamente necesarias, asegurando un manejo adecuado para evitar contaminación ambiental y toxicidad. Además, necesario considerar las condiciones climáticas, como la velocidad del viento y la temperatura, para evitar riesgos tanto para el cultivo como para los trabajadores.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_39.svg', alt='Texto que describa la imagen')
            .row(numero="4" titulo="Calibración de equipos")
              .col-md-9.mb-4.mb-md-0
                p.text-small Los equipos de aplicación deben estar correctamente calibrados para garantizar una dosificación precisa y evitar el uso excesivo de productos químicos. Asimismo, se debe evitar la reutilización de envases de plaguicidas para almacenar alimentos u otros insumos.
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_40.svg', alt='Texto que describa la imagen')
            .row(numero="5" titulo="Capacitación del personal	")
              .col-md-9.mb-4.mb-md-0
                p.text-small Brindar formación continua a los trabajadores sobre el manejo de plagas, enfermedades y la correcta aplicación de plaguicidas y abonos orgánicos contribuye a reducir los riesgos de contaminación e intoxicación, mejorando la eficiencia de las prácticas agrícolas.	 
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_41.svg', alt='Texto que describa la imagen')
            .row(numero="6" titulo="Supervisión y cumplimiento normativo")
              .col-md-9.mb-4.mb-md-0
                p.text-small Es necesario revisar periódicamente que los productos utilizados para el control de plagas y enfermedades cumplan con las normativas nacionales e internacionales, garantizando así su eficacia y seguridad.	 
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_42.svg', alt='Texto que describa la imagen')
            .row(numero="7" titulo="Sistema de rotación de plaguicidas")
              .col-md-9.mb-4.mb-md-0
                p.text-small Implementar un sistema de rotación de plaguicidas en la finca permite evitar la resistencia de las plagas y asegurar la efectividad de los tratamientos aplicados. Además, se debe verificar que los productos estén en buen estado y se utilicen conforme a las regulaciones vigentes.	 
              .col-md-3
                figure
                  img(src='@/assets/curso/temas/tema1/img_43.svg', alt='Texto que describa la imagen')
          .col-lg-3
            figure
              img.mb-5(src="@/assets/curso/temas/tema1/img_44.svg", alt="Imagen de un suelo con césped" class="img-fluid")
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
