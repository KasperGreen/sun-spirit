import { LANG_EN, LANG_RU } from 'constants/LANG'
import atmosphere_image from '../images/atmosphere.jpg'
import biosphere_image from '../images/biosphere.jpg'
import silent_image from '../images/silent.jpg'
import React from 'react'

export default {
  atmosphere: {
    title: {
      [LANG_RU]: 'Атмосфера',
      [LANG_EN]: 'Atmosphere'
    },
    image_url: atmosphere_image,
    description: {
      [LANG_RU]: <div><b>«АТМОСФЕРА»</b>&nbsp;&mdash; это сцена электронной музыки. Артисты сцены легко и
        непринужденно погрузят гостей в
        вибрации динамичного и&nbsp;атмосферного звучания от&nbsp;Electronic и&nbsp;Breaks до&nbsp;IDM и&nbsp;Downtempo;
      </div>,
      [LANG_EN]: <div>
        &laquo;<strong>Atmosphere</strong>&raquo; is&nbsp;an&nbsp;electronic music stage. The artists will easily immerse
        you into dynamic and atmospheric
        sound vibrations of&nbsp;styles varying from electronic and breaks to&nbsp;IDM and downtempo.

      </div>
    }
  },
  biosphere: {
    title: {
      [LANG_RU]: 'Биосфера',
      [LANG_EN]: 'Biosphere'
    },
    image_url: biosphere_image,
    description: {
      [LANG_RU]: <div><b>«БИОСФЕРА»</b> - это сцена живой музыки. Пересечение чистой импровизации и живого процесса
        музицирования. Вибрации разножанровой смеси от Ethno-Electronic / Nujazz до народной World музыки.</div>,
      [LANG_EN]: <div>
       &laquo;<strong>Biosphere</strong>&raquo; is&nbsp;a&nbsp;life music stage. Combination of&nbsp;pure improvisation and
        live process of&nbsp;music playing.
        Vibrations of&nbsp;mixed genre combination from ethno-electronic/nujazz to&nbsp;folk music.
      </div>
    }
  },
  silent: {
    title: {
      [LANG_RU]: 'Тишина',
      [LANG_EN]: 'Silent'
    },
    image_url: silent_image,
    description: {
      [LANG_RU]: <div>
        <p>
          <b>&laquo;ТИШИНА&raquo;</b>&nbsp;&mdash; локация визуального и&nbsp;слухового, слияние зримого и&nbsp;незримого. Включает в&nbsp;себя
          направления
          Cinema&nbsp;&mdash; площадка кинопоказов, видео перфомансов и&nbsp;Ambient&nbsp;&mdash; малая звуковая сцена
          безбитовой музыки. В
          рамках локации гости смогут насладиться кинотеатром под открытым небом, совместно с&nbsp;режиссерами обсудить
          представленные картины, насладится чаепитиями в&nbsp;чайном баре, выполненном в&nbsp;японском стиле под невероятные
          музыкальные произведения.</p>
      </div>,
      [LANG_EN]: <div>

        &laquo;<strong>Silence</strong>&raquo; is&nbsp;a&nbsp;location of&nbsp;visual and aсoustic, fusion of&nbsp;visible and invisible.
        It&nbsp;incorporates &laquo;Cinema&raquo; direction, the space with film shows, video performances
        and &laquo;Ambient&raquo;, a&nbsp;small sound
        stage of&nbsp;non-beat music. In&nbsp;the framework of&nbsp;the location visitors can enjoy the open air cinema, discuss the
        represented films with the directors, take part in&nbsp;tea ceremonies in&nbsp;a&nbsp;Japanese style bar listening to
        incredible pieces of&nbsp;music.

      </div>
    }
  },
}
