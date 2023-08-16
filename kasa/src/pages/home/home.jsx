import './home.css';
import DataComponent from '../.././composants/datajson/datajson';

function Home() {
  return (

    <>
      <div className='home'>
        <div className="banner">
          <div className='filtrebanner'></div>
          <p className="slogan">Chez vous, {'\n'} partout et ailleurs</p>

        </div>


        <DataComponent />
      </div>


    </>
  );
}

export default Home;

