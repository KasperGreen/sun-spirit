import React from 'react'
import { LANG_RU } from 'constants/LANG'

export default React.createContext(
  {
    lang: LANG_RU,
    setLang: () => {}
  })
