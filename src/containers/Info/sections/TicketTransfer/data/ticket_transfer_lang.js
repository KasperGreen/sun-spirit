import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'

export default {
  how: {
    [LANG_RU]: <div>
      <h4>Для передачи билета другому лицу</h4>
      <p>Вам необходимо:</p>
      <p>Написать письмо на почту <a href={'mailto:info@sunspiritgroup.ru'}>info@sunspiritgroup.ru</a> с просьбой анулировать ваш билет и указать email получателя, на который будет выслано новое приглашение.</p>
    </div>,
    [LANG_EN]: <div>
      <h4>For transfer your ticket to another person</h4>
      <p>You need:</p>
      <p>Write to <a href={'mailto:info@sunspiritgroup.ru'}>info@sunspiritgroup.ru</a> for cancel your ticket and other email address for sending new ticket.</p>
    </div>
  }
}
