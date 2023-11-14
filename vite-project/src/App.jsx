import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

import MissingMigrants from './missingMigrants.jsx';
import AlanSalazar from './alanSalazar.jsx';

import BorderPic from './photos/US_Mexico_Border.jpg';
import fire from './photos/detention_center_fire.png';
import laBestia from './photos/La_Bestia.jpg';
import bus from './photos/bus.jpg';
import rioGrande from './photos/rio_grande_cross.png';

function App() {


  return (
    <>
      <Parallax pages={6}>
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
                  textAlign: 'center',
                }}>
                <h1>Echoes of the Border</h1>
                <h4>An archive for those who cannot tell their stories by Preston Dickerson</h4>
              </ParallaxLayer>
            </ParallaxLayer>
            <ParallaxLayer 
              offset={0.99} 
              speed={1}>
                <ParallaxLayer 
                speed={0.95}
                offset={0.17} 
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
          <ParallaxLayer
              offset={1.9} 
              speed={1}>
              <ParallaxLayer 
                speed={0.95}
                offset={0.6} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <AlanSalazar></AlanSalazar>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={2} 
              speed={1}
              style={{
                backgroundImage: `url(${fire})`,
                backgroundSize: 'cover',
                /* Photo from https://www.rappler.com/world/latin-america/mexico-prosecutors-investigating-murder-migrant-center-fire/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={0.75} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Deadly Fire, March 2023</h2>
                <br></br>
                <p>38 migrants died in the Mexican northern border city of Ciudad Juarez after a fire broke at a migrant detention center</p>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={3} 
              speed={1}
              style={{
                backgroundImage: `url(${laBestia})`,
                backgroundSize: 'cover',
                /* Photo from https://www.reuters.com */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={1.2} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Migrants suffocate on train in Texas, March 2023</h2>
                <br></br>
                <p>Two migrants suffocated to death aboard a freight train in Texas, with at least 15 others needing medical care.</p>
                <br></br>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={4} 
              speed={1}
              style={{
                backgroundImage: `url(${bus})`,
                backgroundSize: 'cover',
                /* Photo from https://www.reuters.com */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={1.5} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Bus crash in central Mexico, February 2023</h2>
                <br></br>
                <p>Seventeen people died when a bus carrying migrants from Venezuela, Colombia and Central America crashed in Mexico&apos;s central Puebla state.</p>
                <br></br>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={5} 
              speed={1}
              style={{
                backgroundImage: `url(${rioGrande})`,
                backgroundSize: 'cover',
                /* Photo from https://nypost.com/2021/05/10/video-shows-illegal-immigrants-streaming-across-rio-grande/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={2.2} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Rio Grande drowning, September 2022</h2>
                <br></br>
                <p>Nine migrants died and 37 were rescued as they tried to cross the Rio Grande River into the United States.</p>
                <br></br>
              </ParallaxLayer>
          </ParallaxLayer>
          <p>Source <a href='https://www.usnews.com/news/world/articles/2023-03-28/factbox-deadly-tragedies-involving-migrants-crossing-mexico'>U.S. News</a></p>
      </Parallax>
    </>
  );
}

export default App;