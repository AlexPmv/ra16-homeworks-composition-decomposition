import logo from './logo.svg';
import './App.css';
import RegularText from './components/RegularText';
import HeaderH2 from './components/HeaderH2';
import HeaderH3 from './components/HeaderH3';
import UnorderedList from './components/UnorderedList';
import LinkImg from './components/LinkImg';
import LinkText from './components/LinkText';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <div className="last-news">
          <div className="news-header-block">
            <nav className="news-nav">
              <HeaderH2 text={'Главное'} link={'/'}/>
              <HeaderH2 text={'Новости дня'} link={'/'}/>
              <HeaderH2 text={'События недели'} link={'/'}/>
              <RegularText text={'31 января 2023, вторник'} class={'current-date'}/>
            </nav>
            <UnorderedList array={[
              {
                id: 1,
                class: 'news',
                imgSrc: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
                text: 'За последннее время снизился туропоток',
                link: '/'
              },
              {
                id: 2,
                class: 'news',
                imgSrc: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
                text: 'Проверка выявила проблемы с уборкой снега с крыш',
                link: '/'
              },
              {
                id: 3,
                class: 'news',
                imgSrc: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
                text: 'Наблюдается рост курсов валют',
                link: '/'
              },
              {
                id: 4,
                class: 'news',
                imgSrc: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
                text: 'В некоторых странах очевидцы фиксируют НЛО в небе',
                link: '/'
              },
              {
                id: 5,
                class: 'news',
                imgSrc: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
                text: 'Запланированный срок реконструкции моста увеличен',
                link: '/'
              },
            ]}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'currency',
                link: '/',
                name: 'USD',
                value: 75.10,
                dynamic: '+0.50'
              },
              {
                id: 2,
                class: 'currency',
                link: '/',
                name: 'EUR',
                value: 79.70,
                dynamic: '+0.70'
              },
              {
                id: 3,
                class: 'currency',
                link: '/',
                name: 'НЕФТЬ',
                value: 79.50,
                dynamic: '+1.3%'
              },
            ]}>
              <a className='currencies-more__link' href='/' style={{color: 'grey', fontWeight: '700'}}>...</a>
            </UnorderedList>
          </div>
        </div>
        <aside className="header-aside">
          <article className="header-aside-item">
            <LinkImg class={'header-aside'} imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1024px-Earth_Western_Hemisphere_transparent_background.png'} link={'/'}/>
            <HeaderH2 text={'Работа над ошибками'} link={'/'}/>
            <LinkText class={'aside-item'} text={'Текст блока'} link={'/'}/>
          </article>
        </aside>
      </header>


      <main className="main">
        <div className="main__wrapper">
          <div className="logo-block">
            <LinkImg class={'main-logo'} imgSrc={'https://seeklogo.com/images/G/google-search-ads-360-logo-A7DEAFC777-seeklogo.com.png'}/>
          </div>
          <div className="search-block">
            <nav className='service-nav-block'>
              <HeaderH3 text={'Видео'} link={'/'}/>
              <HeaderH3 text={'Картинки'} link={'/'}/>
              <HeaderH3 text={'Новости'} link={'/'}/>
              <HeaderH3 text={'Карты'} link={'/'}/>
              <HeaderH3 text={'Маркет'} link={'/'}/>
              <HeaderH3 text={'Переводчик'} link={'/'}/>
              <HeaderH3 text={'Эфир'} link={'/'}/>
              <HeaderH3 text={'еще'} link={'/'}/>
            </nav>
            <form className="search-form">
              <input className="search-input"></input> 
              <button className='search-button'>Найти</button>
            </form>
            <div className='search-example-block'>
              <RegularText class={'search-hint'} text={'Найдется все. Например,'}/>
              <RegularText class={'search-example'} text={' Фаза луны сегодня'}/>
            </div>
            <div className="ads-block">
            </div>
            <LinkImg class={'main-ad'} imgSrc={'https://visme.co/blog/wp-content/uploads/2017/04/youtube-banner-templates-header-wide.jpg'}/>
          </div>
          
        </div>  
      </main>


      <footer className="page-footer">
        <div className="footer-column">
          <article className='weather__wrapper'>
            <HeaderH3 text={'Погода'} link={'/'}/>
            <div className='current-weather-block'>
              <LinkImg class={'weather-icon'} imgSrc={'https://cdn-icons-png.flaticon.com/512/4804/4804221.png'}/>
              <LinkText class={'weather'} link={'/'} text={'+17'}>
                <sup className='degrees-symbol'>o</sup>
              </LinkText>
            </div>
            <div className='day-part-block'>
              <RegularText class={'morning-weather'} text={'утром + 15'}><sup>o</sup>,</RegularText>
              <RegularText class={'evening-weather'} text={'вечером + 1'}><sup>o</sup></RegularText>
            </div>
          </article>
          <article className='text-ads-block'>
            <HeaderH3 text={'Посещяемое'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'ads-category',
                name: 'Недвижимость',
                link: '/',
                text: 'о сталинках'
              },
              {
                id: 2,
                class: 'ads-category',
                name: 'Маркет',
                link: '/',
                text: 'люстры и светильники'
              },
              {
                id: 3,
                class: 'ads-category',
                name: 'Авто.ру',
                link: '/',
                text: 'привод 4х4'
              }
            ]}/>
          </article>
        </div>
        <div className="footer-column">
        <article className='schedule-block'>
            <HeaderH3 text={'Расписание'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'schedule',
                link: '/',
                text: 'Поезда'
              },
              {
                id: 2,
                class: 'schedule',
                link: '/',
                text: 'Самолеты'
              },
              {
                id: 3,
                class: 'schedule',
                link: '/',
                text: 'Автобусы'
              }
            ]}/>
        </article>
        <article className='tv-program-block'>
            <HeaderH3 text={'Телепрограмма'} link={'/'}>
              <LinkImg link={'/'} class={'tv-live'} imgSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShIX5KsWGWn9_Xv0eiw_VTJ7zoCyedb5Yi6XM3c2gUQR6HQP-6L5AlnmvebnAUTBvXtg&usqp=CAU'}/>
            </HeaderH3>
            <UnorderedList array={[
              {
                id: 1,
                class: 'tv-show',
                link: '/',
                text: 'Comedy club',
                time: '20:00',
                channel: 'ТНТ'
              },
              {
                id: 2,
                class: 'tv-show',
                link: '/',
                text: 'Дикая природа',
                time: '21:00',
                channel: 'Discovery'
              },
              {
                id: 3,
                class: 'tv-show',
                link: '/',
                text: 'Хиты. Non-stop',
                time: '22:00',
                channel: 'MTV'
              }
            ]}/>
        </article>
        </div>
        <div className="footer-column">
        <article className='lives-block'>
            <HeaderH3 text={'Эфир'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'lives',
                link: '/',
                text: 'Разговоры в пустоте',
                imgSrc: 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png',
                channel: 'Подкаст Live'
              },
              {
                id: 2,
                class: 'lives',
                link: '/',
                text: 'Управление как исскуство',
                imgSrc: 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png',
                channel: 'Успех'
              },
              {
                id: 3,
                class: 'lives',
                link: '/',
                text: 'Ночь. Мир в это время',
                imgSrc: 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png',
                channel: 'earthTV'
              }
            ]}/>
        </article>
        </div>
      </footer>
    </div>
  );
}

export default App;
