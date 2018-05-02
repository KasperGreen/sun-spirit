import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'

export atmosphere from './atmosphere_lineup'
export biosphere from './biosphere_lineup'
export silent from './silent_lineup'
export const info = {
  silent: {
    [LANG_RU]: <div><b>«ТИШИНА»</b> - локация визуального и слухового, слияние зримого и незримого. Включает в себя
      направления Cinema - площадка кинопоказов, видео перфомансов и Ambient - малая звуковая сцена безбитовой музыки. В
      рамках локации гости смогут насладиться кинотеатром под открытым небом, совместно с режиссерами обсудить
      представленные картины, принять участие в чаепитиях в баре, выполненном в японском стиле, под невероятные
      музыкальные произведения.</div>,
    [LANG_EN]: <div>Without English Text</div>
  },
  atmosphere: {
    [LANG_RU]: <div><b>«АТМОСФЕРА»</b> - это сцена электронной музыки. Артисты сцены легко и непринужденно погрузят гостей в
      вибрации динамичного и атмосферного звучания от Electronic и Breaks до IDM и Downtempo</div>,
    [LANG_EN]: <div>Without English Text</div>
  },
  biosphere: {
    [LANG_RU]: <div><b>«БИОСФЕРА»</b> - это сцена живой музыки. Пересечение чистой импровизации и живого процесса
      музицирования. Вибрации разножанровой смеси от Ethno-Electronic / Nujazz до народной World музыки.</div>,
    [LANG_EN]: <div>Without English Text</div>
  }
}
