import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import Place from 'containers/Info/sections/Place/Place'
import Map from 'containers/Info/sections/Map/Map'
import LifeAndFood from 'containers/Info/sections/LifeAndFood/LifeAndFood'
import InfoCenter from 'containers/Info/sections/InfoCenter/InfoCenter'
import ApplicationForParticipation
  from 'containers/Info/sections/ApplicationForParticipation/ApplicationForParticipation'
import ArtMarket from 'containers/Info/sections/ArtMarket/ArtMarket'
import CinemaAndTheatre from 'containers/Info/sections/CinemaAndTheatre/CinemaAndTheatre'
import InstallationsAndExhibitions
  from 'containers/Info/sections/InstallationsAndExhibitions/InstallationsAndExhibitions'
import KinderGarden from 'containers/Info/sections/KinderGarden/KinderGarden'
import Additionally from 'containers/Info/sections/Additionally/Additionally'

export default {
  place: {
    title: {
      [LANG_RU]: 'Место проведения',
      [LANG_EN]: 'Place'
    },
    component: <Place />
  },
  map: {
    title: {
      [LANG_RU]: 'Как добаться',
      [LANG_EN]: 'Map'
    },
    component: <Map />
  },
  life_and_food: {
    title: {
      [LANG_RU]: 'Проживание и питание',
      [LANG_EN]: 'Life and Food'
    },
    component: <LifeAndFood />
  },
  info_center: {
    title: {
      [LANG_RU]: 'Инфоцентр',
      [LANG_EN]: 'InfoCenter'
    },
    component: <InfoCenter />
  },
  application_for_participation: {
    title: {
      [LANG_RU]: 'Заявка на участие',
      [LANG_EN]: 'Application for participation'
    },
    component: <ApplicationForParticipation />
  },
  art_market: {
    title: {
      [LANG_RU]: 'Арт-Маркет',
      [LANG_EN]: 'Art-Market'
    },
    component: <ArtMarket />
  },
  cinema_and_theatre: {
    title: {
      [LANG_RU]: 'Кино и Театр',
      [LANG_EN]: 'Cinema and Theatre'
    },
    component: <CinemaAndTheatre />
  },
  installations_and_exhibitions: {
    title: {
      [LANG_RU]: 'Инсталяции и Выставки',
      [LANG_EN]: 'Installations and Exhibitions'
    },
    component: <InstallationsAndExhibitions />
  },
  kinder_garden: {
    title: {
      [LANG_RU]: 'Детский Сад',
      [LANG_EN]: 'Kinder Garden'
    },
    component: <KinderGarden />
  },
  additionally: {
    title: {
      [LANG_RU]: 'Дополнительно',
      [LANG_EN]: 'Additionally'
    },
    component: <Additionally />
  }
}
