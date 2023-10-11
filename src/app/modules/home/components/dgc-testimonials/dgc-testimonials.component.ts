import { Component } from '@angular/core';

@Component({
  selector: 'dgc-testimonials',
  templateUrl: './dgc-testimonials.component.html',
  styleUrls: ['./dgc-testimonials.component.scss']
})
export class DgcTestimonialsComponent {

  slides: any[] = [
    {
     text: 'Extiendo mi sincero agradecimiento a Data Growth Community y a los destacados mentores del Bootcamp. Su orientación me ha permitido transformar un cúmulo de datos en un camino de conocimientos valiosos y convertir desafíos...',
     name: 'Telma Ramos',
     job: 'Bootcamp Data Analytics with Python',
     pais: 'Perú',
     imagePais: '/assets/images/Bandera_Peru.png',
     link: 'https://www.linkedin.com/posts/telma-ramos-thompson-10835b132_datascience-anaerlisisdedatos-activity-7091978337962577920-qkRw?utm_source=share&utm_medium=member_desktop',
     photo: '/assets/images/Testimonio_Telma_Ramos.jpg'
    },
    {
      text: 'La ciencia de datos es un campo que me apasiona mucho por el valor que genera su correcta aplicación. Estoy muy agradecido con la dedicación y compromiso puesto en este Bootcamp Data Analytics with Python impartido por Data Growth.',
      name: 'Pedro Baca',
      job: 'Bootcamp Data Analytics with Python',
      pais: 'Bolivia',
      imagePais: '/assets/images/Bandera_Bolivia.png',
      link: 'https://www.linkedin.com/posts/pedrosebastianbacacisneros_bootcamp-data-analytics-with-python-activity-7092573605368078336-8iwM?utm_source=share&utm_medium=member_desktop',
      photo: '/assets/images/Testimonio_Pedro_Baca.jpg'
    },
    {
      text: 'Quiero agradecer al grupo de estudios Data Growth Community por la constancia recibida y también agradezco el esfuerzo de lo mentores que estan ahí preparándonos material y cosas nuevas para aprender del mundo de los Datos.',
      name: 'Luis Bonifas',
      job: 'Grupo de Estudio Big Data y Analytics',
      pais: 'Perú',
      imagePais: '/assets/images/Bandera_Peru.png',
      link: 'https://www.linkedin.com/posts/gregoribonifas_datagrowth-activity-7077427182091812864-50tu?utm_source=share&utm_medium=member_desktop',
      photo: '/assets/images/Testimonio_Luis_Bonifas.jpg'
    },
    {
      text: 'Les comparto mi certificación del Bootcamp de Data Analytics con DGC, gracias a esta comunidad por brindarme la oportunidad de aprender y compartir mis conocimientos, de dar un paso más hacia este proyecto de ser Analista de datos.',
      name: 'Jhonatan Duran',
      job: 'Bootcamp Data Analytics with Python',
      pais: 'Perú',
      imagePais: '/assets/images/Bandera_Peru.png',
      link: 'https://www.linkedin.com/company/datagrowthcommunity/',
      photo: '/assets/images/Testimonio_Jhonatan_Duran.jpg'
    },
    {
      text: 'Quiero agradecer a Data Growth Community por brindarme esta oportunidad de aprendizaje y desarrollo. Su compromiso con la educación en ciencia de datos y big data ha sido invaluable...',
      name: 'Jesus Acuña',
      job: 'Grupo de Estudio Big Data y Analytics',
      pais: 'Colombia',
      imagePais: '/assets/images/Bandera_Colombia.png',
      link: 'https://www.linkedin.com/company/datagrowthcommunity/',
      photo: '/assets/images/Testimonio_Jesus_Acuña.jpg'
    },
    {
      text: 'Estoy agradecida por la oportunidad de aprender de personas tan talentosas y comprometidas. Su enseñanza ha preparado el terreno para enfrentar nuevos desafíos en mi carrera profesional. 🚀',
      name: 'Edith Canelo',
      job: 'Bootcamp Data Analytics with Python',
      pais: 'Perú',
      imagePais: '/assets/images/Bandera_Peru.png',
      link: 'https://www.linkedin.com/posts/edith-canelo_data-analytics-with-python-activity-7092286127570567168-P2a8?utm_source=share&utm_medium=member_desktop',
      photo: '/assets/images/Testimonio_Edith_Canelo.jpg'
    },
    {
      text: 'Como miembro de esta comunidad apasionada, estoy orgullosa de formar parte de una red de profesionales que están transformando la industria. Continuaré aprendiendo y creciendo en el campo de la ciencia de datos.',
      name: 'Carmen Cornejo',
      job: 'Grupo de Estudio Big Data y Analytics',
      pais: 'Perú',
      imagePais: '/assets/images/Bandera_Peru.png',
      link: 'https://www.linkedin.com/posts/carmen-victoria-cornejo-huatuco-50a91b205_data-analyst-activity-7077462190722568192-nRfP?utm_source=share&utm_medium=member_desktop',
      photo: '/assets/images/Testimonio_Carmen_Cornejo.jpg'
    },
  ]

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    "responsive": [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        }
      ]
  };

}
