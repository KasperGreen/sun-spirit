import { LANG_EN, LANG_RU } from 'constants/LANG'

export default {
  buy_ticket_button: {
    [LANG_RU]: 'Купить билет',
    [LANG_EN]: 'Buy ticket'
  },
  menu_links: [
    {
      title: {[LANG_RU]: 'Хедлайнеры', [LANG_EN]: 'Headliners'},
      to: '/headliners'
    },
    {
      title: {[LANG_RU]: 'музыка', [LANG_EN]: 'Music'},
      submenu: [
        {
          title: {[LANG_RU]: 'атмосфера', [LANG_EN]: 'Atmosphere'},
          to: '/music/atmosphere'
        },
        {
          title: {[LANG_RU]: 'биосфера', [LANG_EN]: 'Biosphere'},
          to: '/music/biosphere'
        },
        {
          title: {[LANG_RU]: 'тишина', [LANG_EN]: 'Silent'},
          to: '/music/silent'
        }
      ]
    },
    {
      title: {[LANG_RU]: 'знания', [LANG_EN]: 'Knowledge'},
      submenu: [
        {
          title: {[LANG_RU]: 'ноосфера', [LANG_EN]: 'Noosphere '},
          to: '/noosphere'
        },
        {
          title: {[LANG_RU]: 'тишина', [LANG_EN]: 'Silent'},
          to: '/tishina'
        }
      ]
    },
    {
      title: {[LANG_RU]: 'О фестивале', [LANG_EN]: 'About Festival'},
      to: '/about_festival'
    },
    {
      title: {[LANG_RU]: 'жизнь фестиваля', [LANG_EN]: 'Life Festival'},
      to: '/life_festival'
    },
  ]

}
