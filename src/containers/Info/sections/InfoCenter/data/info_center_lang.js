import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import contract_offer from '../files/dogovor_oferta.pdf'

export default {
  left: {
    [LANG_RU]: <div>
      <h4>Парковка</h4>
      <p>
        В&nbsp;месте проведения фестиваля предусмотрена парковочная зона для порядка 1000 транспортных средств.
        Стоимость на&nbsp;все время фестиваля: 500&nbsp;₽&nbsp;/ авто, 700&nbsp;₽&nbsp;/ микроавтобус, 200&nbsp;₽&nbsp;/ мотоцикл.</p>
      <p></p>
      <h4>Медпункт</h4>
      <p>
        На&nbsp;территории фестиваля будут находиться дежурные специалисты и&nbsp;врачи,
        готовые 24&nbsp;часа в&nbsp;сутки прийти на&nbsp;помощь, они смогут оказать первую неотложную мед. помощь,
        при необходимости доставить в&nbsp;больницу.
      </p>
      <h4>Охрана</h4>
      <p>
        Территория фестиваля будет находиться под официальной фестивальной охраной 24&nbsp;часа все дни фестиваля,
        которая будет действовать строго в&nbsp;законных рамках и&nbsp;правилах фестиваля.
      </p>
    </div>,
    [LANG_EN]: <div>
      <h4>Parking </h4>
      <p>
        The parking zone of&nbsp;the festival will hold about 1000&nbsp;vehicles. The parking fee for the whole period of
        festival is&nbsp;500&nbsp;₽ per car, 700&nbsp;₽ per van, 200&nbsp;₽ per motorbike.
      </p>
      <p></p>
      <h4>Medical centre</h4>
      <p>
        On&nbsp;the territory of&nbsp;the festival there will be&nbsp;specialists and doctors ready to&nbsp;help you 24&nbsp;hours a&nbsp;day, for
        emergency or&nbsp;taking to&nbsp;hospital if&nbsp;needed.
      </p>
      <h4>Security</h4>
      <p>
        The territory of&nbsp;the festival will be&nbsp;24&nbsp;hour under official guard of&nbsp;the festival, who operate under the law
        and terms of&nbsp;the festival.
      </p>
    </div>
  },
  right: {
    [LANG_RU]: <div>
      <h4>Участникам следует взять с&nbsp;собой следующий набор необходимых вещей, предметов:</h4>
      <ul>
        <li>Палатка, спальный мешок;</li>
        <li>Тёплые вещи;</li>
        <li>Средство от&nbsp;комаров;</li>
        <li>Солнцезащитный крем;</li>
        <li>Сменная одежда на&nbsp;случай дождя;</li>
        <li>Фляжка, ёмкость для воды;</li>
        <li>Фонарик;</li>
        <li>Индивидуальная аптечка;</li>
        <li>Документы, удостоверяющие личность: паспорт или водительские права, документы на&nbsp;ребенка.</li>
      </ul>
      <a href={contract_offer} target={'_blank'}>Подробнее</a>
    </div>,
    [LANG_EN]: <div>
      <h4>Please take the following necessary items:</h4>
      <ul>
        <li>A&nbsp;tent, a&nbsp;sleeping bag;</li>
        <li>Warm clothes;</li>
        <li>Anti reppelent;</li>
        <li>Sunscreen;</li>
        <li>Change of&nbsp;clothes in&nbsp;case of&nbsp;a&nbsp;rain;</li>
        <li>Water bottle or&nbsp;flask;</li>
        <li>Flashlight;</li>
        <li>Individual medical kit;</li>
        <li>ID: passport or&nbsp;driver&rsquo;s license, documents of&nbsp;children.</li>
      </ul>
    </div>
  }
}
