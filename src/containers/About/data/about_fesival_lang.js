import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import { Link } from 'react-router-dom'

export default {
  title: {
    [LANG_RU]: 'О фестивале Sun Spirit',
    [LANG_EN]: 'About Festival Sun Spirit',
  },
  about_festival: {
    [LANG_RU]: <div>
      <p><b>Sun Spirit Festival 2018</b>&nbsp;&mdash; это единое творческое пространство, наполненное гармонией и
        спокойствием, создающее уникальные возможности для самовыражения каждого гостя и&nbsp;каждого участника
        феерического действа. </p> <p>
      <b>Основа нашего Фестиваля это люди:</b> музыканты, художники, перформеры, актеры, мастера йоги, научные
      преподаватели, ремесленники и&nbsp;инженеры. Люди, которые посвятили годы любимому делу, оттачивая свое
      мастерство для того чтобы стать одними из&nbsp;самых лучших в&nbsp;выбранных ими направлениях.</p> <p>
      <b>Концепция</b> второго интеллектуально-музыкального Фестиваля Sun Spirit&nbsp;&mdash; это расширение и&nbsp;углубление
      образовательных и&nbsp;развлекательных программ для гостей, повышение разнообразия музыкальных направлений и
      стилей.</p> <p>
      Фестиваль включает в&nbsp;себя <b>четыре основных направления</b>, каждое из&nbsp;которых имеет свое уникальное
      наполнение:</p> <p>
      <Link to={'/music/atmosphere'}><b>&laquo;АТМОСФЕРА&raquo;</b>&nbsp;&mdash; это сцена электронной музыки.</Link> Артисты сцены легко и
      непринужденно погрузят гостей в
      вибрации динамичного и&nbsp;атмосферного звучания от&nbsp;Electronic и&nbsp;Breaks до&nbsp;IDM и&nbsp;Downtempo;</p> <p>
      <Link to={'/music/biosphere'}><b>&laquo;БИОСФЕРА&raquo;</b>&nbsp;&mdash; это сцена живой музыки.</Link> Пересечение чистой импровизации и
      живого процесса
      музицирования.
      Вибрации разножанровой смеси от&nbsp;Ethno-Electronic&nbsp;/ Nujazz до&nbsp;народной World музыки.</p> <p>
      <Link to={'/noosphere'}><b>&laquo;НООСФЕРА&raquo;</b></Link>&nbsp;&mdash; это познавательное и&nbsp;оздоровительное направление
      Фестиваля. В&nbsp;его рамках гости смогут
      познакомиться с&nbsp;современными достижениями точных наук, встретиться с&nbsp;представителями различных областей
      знаний, посетить уникальные творческие мастерские и&nbsp;мастер&nbsp;&mdash; классы, принять участие в&nbsp;оздоровительных
      практиках и&nbsp;глубже погрузиться в&nbsp;историю Крымского полуострова.</p> <p>
      <b>&laquo;ТИШИНА&raquo;</b>&nbsp;&mdash; локация визуального и&nbsp;слухового, слияние зримого и&nbsp;незримого. Включает в&nbsp;себя
      направления
      Cinema&nbsp;&mdash; площадка кинопоказов, видео перфомансов и&nbsp;<Link to={'/music/silent'}>Ambient&nbsp;&mdash; малая звуковая сцена
      безбитовой музыки</Link>. В
      рамках локации гости смогут насладиться кинотеатром под открытым небом, совместно с&nbsp;режиссерами обсудить
      представленные картины, насладится чаепитиями в&nbsp;чайном баре, выполненном в&nbsp;японском стиле под невероятные
      музыкальные произведения.</p>
      <p>
      Мы&nbsp;приглашаем Вас стать нашим единомышленником, вместе с&nbsp;нами открыть новые грани познания и&nbsp;раствориться
      в
      бесконечном музыкальном космосе. Поверьте, это небольшое, но&nbsp;очень яркое и&nbsp;насыщенное путешествие&nbsp;Вы не
      сможете забыть никогда. </p>
    </div>,
    [LANG_EN]: <div>
      <p>
        <strong>Sun Spirit Festival 2018</strong>&nbsp;is a&nbsp;united artistic space filled with harmony and peace, creating
        unique opportunities
        for self realization of&nbsp;every single visitor and participant of&nbsp;this fairy festival.
      </p>
      <p>
        <strong>The backbone of&nbsp;our festival is&nbsp;people</strong>. That is&nbsp;musicians, artists, performers, actors, yoga
        teachers, science
        teachers, craftsmen and engineers. People who devoted years to&nbsp;their labour of&nbsp;love, mastering their skills to
        become one of&nbsp;the best in&nbsp;their business.
      </p>
      <p>
        <strong>The concept</strong> of&nbsp;the second intellectualy-musical festival Sun Spirit is&nbsp;broadened and expanded
        educational and
        entertaining programs for visitors together with wider variety of&nbsp;musical trends and styles.
      </p>
      <p>
        There are <strong>four main directions</strong> of&nbsp;the festival, each of&nbsp;which is&nbsp;represented in&nbsp;a&nbsp;unique way:
      </p>
      <p>
        <Link to={'/music/atmosphere'}>&laquo;Atmosphere&raquo;</Link> is&nbsp;an&nbsp;electronic music stage. The artists will easily immerse
        you into dynamic and atmospheric
        sound vibrations of&nbsp;styles varying from electronic and breaks to&nbsp;IDM and downtempo.
      </p>
      <p>
        <Link to={'/music/biosphere'}>&laquo;Biosphere&raquo;</Link> is&nbsp;a&nbsp;life music stage. Combination of&nbsp;pure improvisation and
        live process of&nbsp;music playing.
        Vibrations of&nbsp;mixed genre combination from ethno-electronic/nujazz to&nbsp;folk music.
      </p>
      <p>
        <Link to={'/noosphere'}>&laquo;Noosphere&raquo;</Link> is&nbsp;an&nbsp;educational and healing direction of&nbsp;the Festival. Within
        its framework visitors can learn
        about modern achievements of&nbsp;exact sciences, meet representatives of&nbsp;different areas of&nbsp;knowledge, attend unique
        creative workshops and master classes, take part in&nbsp;healing practices and go&nbsp;deeper into the history of&nbsp;Crimean
        peninsula.
      </p>
      <p>
        &laquo;Silence&raquo; is&nbsp;a&nbsp;location of&nbsp;visual and aсoustic, fusion of&nbsp;visible and invisible.
        It&nbsp;incorporates &laquo;Cinema&raquo; direction, the space with film shows, video performances
        and <Link to={'/music/biosphere'}>&laquo;Ambient&raquo;</Link>, a&nbsp;small sound
        stage of&nbsp;non-beat music. In&nbsp;the framework of&nbsp;the location visitors can enjoy the open air cinema, discuss the
        represented films with the directors, take part in&nbsp;tea ceremonies in&nbsp;a&nbsp;Japanese style bar listening to
        incredible pieces of&nbsp;music.
      </p>
      <p>
        We&nbsp;invite you to&nbsp;become the part of&nbsp;it, discover together with&nbsp;us new vision of&nbsp;cognition and lose yourself in
        the endless music space. You won&rsquo;t definitely be&nbsp;able to&nbsp;forget this small but bright and eventful journey.
      </p>
    </div>
  },
}
