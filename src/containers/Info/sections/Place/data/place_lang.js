import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'

export default {
  left: {
    [LANG_RU]: <div>
      <p>Фестиваль пройдет в районе живописных территорий Республики Крым.</p>
      <p>Бахчисарайский район, с. Холмовка Красномакского сельского поселения, ущелье «Черкез-Кермен».</p>
      <p>Это соседняя долина от долины древнего пещерного города «Эски-Кермен».</p>
    </div>,
    [LANG_EN]: <div>
      <p>The festival will take place on one of picturesque territories of the Republic of Crimea.</p>
      <p>The Bakhchisaray region, Kholmovka village, Krasnomaksky settlement area, valley Cherchez-Kermen.</p>
      <p>It’s the next valley to the ancient cave town, Eski-Kermen</p>
    </div>,
  },
  right: {
    [LANG_RU]: <div>
      <p>ГЕОЛОКАЦИЯ: 44.620921, 33.737229</p>
      <p><b>Ближайшие города:&nbsp;</b></p>
      <ul>
        <li>Севастополь, 33 км;</li>
        <li>Симферополь, 56км;</li>
        <li>Бахчисарай, 16км.</li>
      </ul>
    </div>,
    [LANG_EN]: <div>
      <p>Geolocation: 44.620921, 33.737229</p>
      <p><b>Nearest cities:&nbsp;</b></p>
      <ul>
        <li>Sevastopol, 33 km;</li>
        <li>Simferopol, 56 km;</li>
        <li>Bakhchisaray, 16 rm;</li>
      </ul>
    </div>,
  }
}
