import './home.css';
import DataComponent from '../.././composants/datajson/datajson';

function Home() {
  return (

    <>
      <div className="banner">
        <div className='filtrebanner'></div>
        <p className="slogan">Chez vous, partout et ailleurs</p>

      </div>


      <DataComponent />


    </>
  );
}

export default Home;

