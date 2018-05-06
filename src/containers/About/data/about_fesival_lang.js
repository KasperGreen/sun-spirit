import { LANG_EN, LANG_RU } from 'constants/LANG'
import React from 'react'
import { Link } from 'react-router-dom'

export default {
  title: {
    [LANG_RU]: 'О фестивале Sun Spirit',
    [LANG_EN]: 'About Festival Sun Spirit',
  },
  about_festival: {
    [LANG_RU]: <div className="text">
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
      <Link to={'/music/noosphere'}><b>«НООСФЕРА»</b></Link> - это познавательное и оздоровительное направление Фестиваля. В его рамках гости смогут
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
      Английский текст о фестивале нужно написать тому, кто хорошо пишет по английски. Каспер не очень хорошо говорит по
      английски
    </div>
  },
}
