<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo:
        '¿Qué tanto sabes sobre las generalidades, ingredientes y aspectos higiénicos en la preparación de conservas?',
      introduccion:
        '<b> Objetivo:</b> Apropiar los conceptos básicos <b>en la preparación de conservas.</b>',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones NO es una ventaja de elaborar conservas de frutas y verduras??',
          imagen: require('@//assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite tener alimentos disponibles todo el año.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se pueden evitar las pérdidas de frutas y verduras en época de abundancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los alimentos en conserva siempre son más nutritivos que los frescos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permite tener alimentos de uso inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué es el almíbar?',
          imagen: require('@//assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un líquido que se utiliza para freír las frutas y verduras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una mezcla de agua y azúcar que se utiliza para conservar los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un producto químico que se añade a las conservas para evitar que se deterioren.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un tipo de vinagre que se utiliza para encurtir los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes NO es un conservante comúnmente utilizado en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bióxido de azufre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ácido benzoico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ácido cítrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vinagre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un ejemplo de un antioxidante presente en las frutas y verduras?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pectina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carotenoides.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almidón',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se entiende por "cambios fisiológicos" en las frutas y verduras?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los cambios en la composición química del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los cambios en la forma y textura del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los cambios en el sabor y aroma del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los cambios en la cantidad de nutrientes del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es la clorofila?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un pigmento que le da color rojo a las frutas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un pigmento que le da color azul a las frutas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un pigmento que le da color verde a las frutas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un pigmento que le da color amarillo a las frutas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un ejemplo de un fruto climatérico?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manzana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Piña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes es una función de la fibra soluble presente en las frutas y verduras?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acelerar el tránsito intestinal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los niveles de colesterol en sangre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el peso de la materia fecal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir el cáncer.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es la "inocuidad alimentaria"?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de un alimento para ser almacenado por largos periodos de tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La garantía de que un alimento no causará enfermedades ni daños a la salud cuando se consume.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La capacidad de un alimento para ser transportado sin deteriorarse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La capacidad de un alimento para ser procesado sin perder sus propiedades nutricionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes NO es un requisito importante para los envases que se utilizan en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que sean de vidrio o metal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que sean de un material que no sea corrosivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que sean fáciles de limpiar y desinfectar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que sean de un material transparente para poder ver el producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicidades! Has superado el 70% de las respuestas correctas en este cuestionario.  Demuestras un gran conocimiento sobre la preparación de conservas de frutas y verduras. Has comprendido los aspectos importantes relacionados con la higiene, los ingredientes, los métodos de conservación y la seguridad alimentaria. ¡Sigue aprendiendo y compartiendo tus conocimientos!',
      mensaje_final_reprobado:
        '¡Buen trabajo por completar el cuestionario! Recuerda que la preparación de conservas requiere atención a los detalles para garantizar la calidad y la seguridad alimentaria. Te recomendamos que revises nuevamente el material de estudio para fortalecer tus conocimientos. No dudes en consultar con tu instructor si tienes alguna duda. ¡Sigue practicando y pronto lograrás excelentes resultados!',
    },
  }),
}
</script>
