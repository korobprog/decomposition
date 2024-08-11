/* eslint-disable react/prop-types */

import moment from 'moment';

const MainNews = () => {
  const date = moment().locale('ru').format('dddd, MMMM Do YYYY, h:mm:ss a');
  return (
    <>
      <div className="heder-conteiner">
        <ul className="nav_news heder-conteiner">
          <li>
            <a href="#">Сейчас в СМИ</a>
          </li>
          <li>
            <a href="#">В Германии</a>
          </li>
          <li>
            <a href="#">Рекомендуем</a>
          </li>
          <li>{date}</li>
        </ul>
      </div>
    </>
  );
};

export default MainNews;
