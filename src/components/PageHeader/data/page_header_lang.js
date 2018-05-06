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
      to: '/music'
    },
    {
      title: {[LANG_RU]: 'знания', [LANG_EN]: 'Knowledge'},
      to: '/noosphere'
    },
    {
      title: {[LANG_RU]: 'О фестивале', [LANG_EN]: 'About Festival'},
      to: '/about_festival'
    },
    {
      title: {[LANG_RU]: 'Информация', [LANG_EN]: 'Information'},
      to: '/info'
    },
  ]

}
