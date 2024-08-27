import Imglogo from '../Img/Imglogo';
import img from '../../img/search.jpg';

const Search = () => {
  return (
    <div className="flex-search imglogo-box">
      <Imglogo imglogo={img} /> <input /> <button>Поиск</button>
    </div>
  );
};

export default Search;
