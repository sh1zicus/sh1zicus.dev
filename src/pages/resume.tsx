import { Layout } from '~/layouts';
import { Icon } from '@iconify/react';
import { differenceInYears } from 'date-fns';

const getAgeString = (years: number): string => {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${years} лет`;
  }

  if (lastDigit === 1) {
    return `${years} год`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${years} года`;
  }

  return `${years} лет`;
};

export default function Resume(): JSX.Element {
  const today = new Date();
  const birthday = new Date('2002-10-14');
  const age = differenceInYears(today, birthday);
  return (
    <Layout.Default showBackround="false" seo={{ title: 'резюме ─ yune' }} className="relative z-10">
      <div className="flex flex-col max-w-4xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8">
          {/* Заголовок */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Иван Данилов
              <span className="ml-2 text-2xl font-normal text-gray-600 dark:text-gray-400">{getAgeString(age)}</span>
            </h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">Frontend Разработчик</p>
            <div className="mt-4 flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Icon icon="mdi:map-marker" className="mr-1" />
                <span>Новосибирск, Россия</span>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:email" className="mr-1" />
                <a href="mailto:sh1zicus@mail.ru" className="hover:text-primary-500">sh1zicus@mail.ru</a>
              </div>
            </div>
          </div>

          {/* О себе */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">О себе</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Frontend-разработчик с опытом создания современных веб-приложений на React и TypeScript.
              Увлечен созданием отзывчивых и интуитивно понятных пользовательских интерфейсов.
              Имею опыт работы с современным стеком технологий и стремлюсь к постоянному профессиональному росту.
            </p>
          </section>

          {/* Навыки */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Навыки</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Next.js',
                'Redux',
                'HTML5 / CSS3',
                'Tailwind CSS',
                'Git',
                'REST API',
                'Linux / Bash',
                'Webpack / Vite / Vercel',
                'Jest / React Testing Library',
                'Figma и подобные',
                'Общение с ИИ на уровне лесного друида'
              ].map((skill) => (
                <div key={skill} className="flex items-center">
                  <Icon icon="mdi:check" className="text-primary-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Опыт работы */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Опыт работы</h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Разработчик</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-600 dark:text-gray-400 mt-1">
                  <span>Подработка везде где только можно</span>
                  <span className="text-sm">Январь 2022 - Настоящее время</span>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Верстка по макетам из Figma</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Разработка и поддержка пользовательских интерфейсов на React и TypeScript</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Оптимизация производительности веб-приложений</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Исправление багов и рефакторинг кода</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Взаимодействие с бэкенд-разработчиками по API</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Разработчик на обучении</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-600 dark:text-gray-400 mt-1">
                  <span>Мини компания без названия</span>
                  <span className="text-sm">Июнь 2020 - Декабрь 2021</span>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Верстка по макетам из Figma</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Разработка компонентов на React</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Исправление багов и рефакторинг кода</span>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <span>Копирование и изменение сайтов</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Образование */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Образование</h2>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Самообразование</h3>
              <p className="text-gray-600 dark:text-gray-300">Онлайн-курсы и самостоятельное обучение</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">2020 - Настоящее время</p>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Изучение современных веб-технологий через документацию и практику</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Прохождение курсов на платформах Stepik, Udemy, и YouTube</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Участие в open-source проектах и создание пет-проектов</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Проекты */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Проекты</h2>
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Посмотрите мои проекты на отдельной странице
              </p>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 relative z-10 pointer-events-auto"
              >
                <span>Смотреть все проекты</span>
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </section>

          {/* Контакты */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">Контакты</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Icon icon="mdi:github" className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                <a href="https://github.com/sh1zicus" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline relative z-10">
                  github.com/sh1zicus
                </a>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:telegram" className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                <a href="https://t.me/sh1zicus" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline relative z-10">
                  @sh1zicus
                </a>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:email" className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                <a href="mailto:sh1zicus@mail.ru" className="text-primary-600 dark:text-primary-400 hover:underline relative z-10">
                  sh1zicus@mail.ru
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout.Default>
  );
}
