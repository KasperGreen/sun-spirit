import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import contract_offer from '../files/dogovor_oferta.pdf'

export default {
  left: {
    [LANG_RU]: <div>
      <h4>Парковка</h4>
      <p>
        В месте проведения фестиваля предусмотрена парковочная зона для порядка 1000 транспортных средств.
        Стоимость на все время фестиваля: 500 ₽ / авто, 700 ₽ / микроавтобус, 200 ₽ / мотоцикл.</p>
      <p></p>
      <h4>Медпункт</h4>
      <p>
        На территории фестиваля будут находиться дежурные специалисты и врачи,
        готовые 24 часа в сутки прийти на помощь, они смогут оказать первую неотложную мед. помощь,
        при необходимости доставить в больницу.
      </p>
      <h4>Охрана</h4>
      <p>
        Территория фестиваля будет находиться под официальной фестивальной охраной 24 часа все дни фестиваля,
        которая будет действовать строго в законных рамках и правилах фестиваля.
      </p>

    </div>,
    [LANG_EN]: <div>
      <h4>Parking </h4>
      <p>
        The parking zone of the festival will hold about 1000 vehicles. The parking fee for the whole period of
        festival is 500 ₽ per car, 700 ₽ per van, 200 ₽ per motorbike.
      </p>
      <p></p>
      <h4>Medical centre</h4>
      <p>
        On the territory of the festival there will be specialists and doctors ready to help you 24 hours a day, for
        emergency or taking to hospital if needed.
      </p>
      <h4>Security</h4>
      <p>
        The territory of the festival will be 24 hour under official guard of the festival, who operate under the law
        and terms of the festival.
      </p>


    </div>
  },
  right: {
    [LANG_RU]: <div>
      <h4>Участникам следует взять с собой следующий набор необходимых вещей, предметов:</h4>
      <ul>
        <li>Палатка, спальный мешок;</li>
        <li>Тёплые вещи;</li>
        <li>Средство от комаров;</li>
        <li>Солнцезащитный крем;</li>
        <li>Сменная одежда на случай дождя;</li>
        <li>Фляжка, ёмкость для воды;</li>
        <li>Фонарик;</li>
        <li>Индивидуальная аптечка;</li>
        <li>Документы, удостоверяющие личность: паспорт или водительские права, документы на ребенка.</li>
      </ul>
      <a href={contract_offer} target={'_blank'}>Подробнее</a>
    </div>,
    [LANG_EN]: <div>
      <h4>Please take the following necessary items:</h4>
      <ul>
        <li>A tent, a sleeping bag;</li>
        <li>Warm clothes;</li>
        <li>Anti reppelent;</li>
        <li>Sunscreen;</li>
        <li>Change of clothes in case of a rain;</li>
        <li>Water bottle or flask;</li>
        <li>Flashlight;</li>
        <li>Individual medical kit;</li>
        <li>ID: passport or driver's license, documents of children.</li>
      </ul>
    </div>
  }
}
