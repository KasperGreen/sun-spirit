import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import { Link } from 'react-router-dom'

export default {
  title: {
    [LANG_RU]: 'О фестивале Sun Spirit',
    [LANG_EN]: 'About Festival Sun Spirit',
  },
  about_festival: {
    [LANG_RU]: <div>
      <p><b>Sun Spirit Festival 2018</b> - это единое творческое пространство, наполненное гармонией и
        спокойствием, создающее уникальные возможности для самовыражения каждого гостя и каждого участника
        феерического действа. </p><p>
      <b>Основа нашего Фестиваля это люди:</b> музыканты, художники, перформеры, актеры, мастера йоги, научные
      преподаватели, ремесленники и инженеры. Люди, которые посвятили годы любимому делу, оттачивая свое
      мастерство для того чтобы стать одними из самых лучших в выбранных ими направлениях.</p><p>
      <b>Концепция</b> второго интеллектуально-музыкального Фестиваля Sun Spirit - это расширение и углубление
      образовательных и развлекательных программ для гостей, повышение разнообразия музыкальных направлений и
      стилей.</p><p>
      Фестиваль включает в себя <b>четыре основных направления</b>, каждое из которых имеет свое уникальное
      наполнение:</p><p>
      <Link to={'/music/atmosphere'}><b>«АТМОСФЕРА»</b> - это сцена электронной музыки.</Link> Артисты сцены легко и
      непринужденно погрузят гостей в
      вибрации динамичного и атмосферного звучания от Electronic и Breaks до IDM и Downtempo;</p><p>
      <Link to={'/music/biosphere'}><b>«БИОСФЕРА»</b> - это сцена живой музыки.</Link> Пересечение чистой импровизации и
      живого процесса
      музицирования.
      Вибрации разножанровой смеси от Ethno-Electronic / Nujazz до народной World музыки.</p><p>
      <Link to={'/music/noosphere'}><b>«НООСФЕРА»</b></Link> - это познавательное и оздоровительное направление
      Фестиваля. В его рамках гости смогут
      познакомиться с современными достижениями точных наук, встретиться с представителями различных областей
      знаний, посетить уникальные творческие мастерские и мастер – классы, принять участие в оздоровительных
      практиках и глубже погрузиться в историю Крымского полуострова.</p><p>
      <b>«ТИШИНА»</b> - локация визуального и слухового, слияние зримого и незримого. Включает в себя
      направления
      Cinema - площадка кинопоказов, видео перфомансов и <Link to={'/music/silent'}>Ambient - малая звуковая сцена
      безбитовой музыки</Link>. В
      рамках локации гости смогут насладиться кинотеатром под открытым небом, совместно с режиссерами обсудить
      представленные картины, насладится чаепитиями в чайном баре, выполненном в японском стиле под невероятные
      музыкальные произведения.</p><p>
      Мы приглашаем Вас стать нашим единомышленником, вместе с нами открыть новые грани познания и раствориться
      в
      бесконечном музыкальном космосе. Поверьте, это небольшое, но очень яркое и насыщенное путешествие Вы не
      сможете забыть никогда. </p>
    </div>,
    [LANG_EN]: <div>
      <p>
        <strong>Sun Spirit Festival 2018</strong> is a united artistic space filled with harmony and peace, creating
        unique opportunities
        for self realization of every single visitor and participant of this fairy festival.
      </p>
      <p>
        <strong>The backbone of our festival is people</strong>. That is musicians, artists, performers, actors, yoga
        teachers, science
        teachers, craftsmen and engineers. People who devoted years to their labour of love, mastering their skills to
        become one of the best in their business.
      </p>
      <p>
        <strong>The concept</strong> of the second intellectualy-musical festival Sun Spirit is broadened and expanded
        educational and
        entertaining programs for visitors together with wider variety of musical trends and styles.
      </p>
      <p>
        There are <strong>four main directions</strong> of the festival, each of which is represented in a unique way:
      </p>
      <p>
        <Link to={'/music/atmosphere'}>"Atmosphere”</Link> is an electronic music stage. The artists will easily immerse
        you into dynamic and atmospheric
        sound vibrations of styles varying from electronic and breaks to IDM and downtempo.
      </p>
      <p>
        <Link to={'/music/biosphere'}>“Biosphere”</Link> is a life music stage. Combination of pure improvisation and
        live process of music playing.
        Vibrations of mixed genre combination from ethno-electronic/nujazz to folk music.
      </p>
      <p>
        <Link to={'/music/noosphere'}>“Noosphere”</Link> is an educational and healing direction of the Festival. Within
        its framework visitors can learn
        about modern achievements of exact sciences, meet representatives of different areas of knowledge, attend unique
        creative workshops and master classes, take part in healing practices and go deeper into the history of Crimean
        peninsula.
      </p>
      <p>
        «Silence» is a location of visual and aсoustic, fusion of visible and invisible.
        It incorporates “Cinema” direction, the space with film shows, video performances
        and <Link to={'/music/biosphere'}>“Ambient”</Link>, a small sound
        stage of non-beat music. In the framework of the location visitors can enjoy the open air cinema, discuss the
        represented films with the directors, take part in tea ceremonies in a Japanese style bar listening to
        incredible pieces of music.
      </p>
      <p>
        We invite you to become the part of it, discover together with us new vision of cognition and lose yourself in
        the endless music space. You won’t definitely be able to forget this small but bright and eventful journey.
      </p>
    </div>
  },
}
