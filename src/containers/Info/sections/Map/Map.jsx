import React, { Component } from 'react'
import './Map.css'
import { Map as YaMap, Marker, MarkerLayout } from 'yandex-map-react'
import AppContext from 'context/AppContext'
import { LANG_EN } from 'constants/LANG'

export default class Map extends Component {
  render () {
    return (
      <AppContext>
        {({lang}) => {
          return (

            <div className='Map'>
              <YaMap
                center={[44.62914887213827, 33.74338119029765]}
                state={{controls: ['default']}}
                zoom={12} height={'50vh'} width={'100%'}
                loadOptions={{
                  lang: lang === LANG_EN ? 'en_US' : 'ru_RU',
                  coordorder: 'latlong',
                  load: 'package.full',
                  mode: 'release'
                }}
              >
                <Marker lon={33.73717846797119} lat={44.62087964393528}>
                  <MarkerLayout>
                    <div style={{filter: 'invert(100%)', width: '10vw', overflow: 'hidden'}}>
                      <img
                        style={{maxWidth: '100%'}}
                        src="https://www.sunspiritgroup.ru/img/SSG_logo.svg"
                        alt={'Logo'}
                      />
                    </div>
                  </MarkerLayout>
                </Marker>
              </YaMap>
            </div>
          )
        }}
      </AppContext>
    )
  }
}
