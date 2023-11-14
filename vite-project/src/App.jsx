import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

import MissingMigrants from './missingMigrants.jsx';

import BorderPic from './photos/US_Mexico_Border.jpg';
//import LaBestiaPic from './photos/La_Bestia.jpg';

function App() {


  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${BorderPic})`,
            backgroundSize: 'cover',
            /* Photo from https://www.nytimes.com/2010/09/16/arts/television/16fence.html */
          }}
        >
          <ParallaxLayer 
            speed={0.95}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            <h1>Echos of the Border</h1>
            <h4>An archive of those who cannot tell their stories by Preston Dickerson</h4>
          </ParallaxLayer>
        </ParallaxLayer>

            <ParallaxLayer 
              offset={0.99} 
              speed={1}
              style={{
                backgroundColor: 'bisque'
              }}>
                <ParallaxLayer 
                speed={0.95}
                offset={0.30} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
            }}>
              <MissingMigrants></MissingMigrants>
            </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;