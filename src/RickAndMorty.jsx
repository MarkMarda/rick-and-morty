import Location from './components/Location';
import Residents from './components/Residents';
import useFetch from './hooks/useFetch';
import './RickAndMorty.css';

function RickAndMorty() {
  const aleatoryId = Math.ceil(Math.random() * 126);
  const getLocation = useFetch(`https://rickandmortyapi.com/api/location/${aleatoryId}`);

  //console.log(getLocation)

  return (
    <>
      <header>
        <div className='background'></div>
        <img src="./img/rick_and_morty.jpg" alt="" />
        <Location getLocation={getLocation} />
      </header>
      <main className='main'>
        <div>
          <h1>Residents</h1>
          {
            getLocation?.residents.map((url) => (
              <Residents key={url} url={url} />
            ))
          }
        </div> 
      </main>
      <footer></footer>
    </>
  )
}

export default RickAndMorty