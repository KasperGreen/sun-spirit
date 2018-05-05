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
      [LANG_RU]: <div><b>«АТМОСФЕРА»</b> - это сцена электронной музыки. Артисты сцены легко и непринужденно погрузят
        гостей в
        вибрации динамичного и атмосферного звучания от Electronic и Breaks до IDM и Downtempo</div>,
      [LANG_EN]: <div>Without English Text</div>
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
      [LANG_EN]: <div>Without English Text</div>
    }
  },
  silent: {
    title: {
      [LANG_RU]: 'Тишина',
      [LANG_EN]: 'Silent'
    },
    image_url: silent_image,
    description: {
      [LANG_RU]: <div><b>«ТИШИНА»</b> - локация визуального и слухового, слияние зримого и незримого. Включает в себя
        направления Cinema - площадка кинопоказов, видео перфомансов и Ambient - малая звуковая сцена безбитовой музыки.
        В
        рамках локации гости смогут насладиться кинотеатром под открытым небом, совместно с режиссерами обсудить
        представленные картины, принять участие в чаепитиях в баре, выполненном в японском стиле, под невероятные
        музыкальные произведения.</div>,
      [LANG_EN]: <div>Without English Text</div>
    }
  },
}
