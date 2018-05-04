import { LANG_EN, LANG_RU } from 'constants/LANG'
import atmosphere_image from '../images/atmosphere.jpg'
import biosphere_image from '../images/biosphere.jpg'
import silent_image from '../images/silent.jpg'

export default {
  atmosphere: {
    title: {
      [LANG_RU]: 'Атмосфера',
      [LANG_EN]: 'Atmosphere'
    },
    image_url: atmosphere_image
  },
  biosphere: {
    title: {
      [LANG_RU]: 'Биосфера',
      [LANG_EN]: 'Biosphere'
    },
    image_url: biosphere_image
  },
  silent: {
    title: {
      [LANG_RU]: 'Тишина',
      [LANG_EN]: 'Silent'
    },
    image_url: silent_image
  },
}
