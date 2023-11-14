import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

import MissingMigrants from './missingMigrants.jsx';
import AlanSalazar from './alanSalazar.jsx';

import BorderPic from './photos/US_Mexico_Border.jpg';
import fire from './photos/detention_center_fire.png';
import laBestia from './photos/La_Bestia.jpg';
import bus from './photos/bus.jpg';
import rioGrande from './photos/rio_grande_cross.png';
import truck from './photos/truck_smuggling.jpg';
import crash from './photos/truck_crash.png';
import waterJug from './photos/water_jug.jpg';
import trainDerail from './photos/train_derail.jpg';

function App() {


  return (
    <>
      <Parallax pages={10}>
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
              <ParallaxLayer style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Here are some of their stories</h2>
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
          <ParallaxLayer
              offset={6} 
              speed={1}
              style={{
                backgroundImage: `url(${truck})`,
                backgroundSize: 'cover',
                /* Photo from https://nbc-2.com/news/national-world/2022/06/30/4-people-have-been-charged-in-the-texas-semitruck-smuggling-operation-that-left-53-migrants-dead/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={2.99} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Truck smuggling incident in Texas, June 2022</h2>
                <br></br>
                <p>Fifty-three migrants from Mexico, Guatemala, Honduras and El Salvador died in a sweltering tractor trailer in Texas in the deadliest migrant-trafficking incident on record in the U.S.</p>
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
          <ParallaxLayer
              offset={7} 
              speed={1}
              style={{
                backgroundImage: `url(${crash})`,
                backgroundSize: 'cover',
                /* Photo from https://www.dailynews.com/2021/03/02/hospital-suv-carrying-27-crashes-with-semitruck-killing-15/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={3.1} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Truck crash in southern Mexico, December 2021</h2>
                <br></br>
                <p>Fifty-five people, nearly all Guatemalans, were killed after a truck carrying an estimated 166 migrants crashed in Mexico&apos;s southern Chiapas state, in one of the deadliest migrant tragedies in Mexico of the last decade.</p>
                <br></br>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={8} 
              speed={1}
              style={{
                backgroundImage: `url(${waterJug})`,
                backgroundSize: 'cover',
                /* Photo from https://www.dailysignal.com/2015/02/02/border-patrol-union-leader-blasts-washington-middle-political-football/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={3.6} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Dehydration deaths on Texas border, June 2019</h2>
                <br></br>
                <p>Seven migrants, including a woman, two babies and a toddler, died from extreme summer heat and dehydration after crossing the Mexican border into Texas.</p>
                <br></br>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
              offset={9} 
              speed={1}
              style={{
                backgroundImage: `url(${trainDerail})`,
                backgroundSize: 'cover',
                /* Photo from https://www.documentingreality.com/forum/f10/train-derailment-tabasco-mexico-132612/ */
              }}>
              <ParallaxLayer 
                speed={0.95}
                offset={4} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Tabasco train derailment, August 2013</h2>
                <br></br>
                <p>At least six people were killed when a cargo train nicknamed &apos;La Bestia&apos; (The Beast) derailed in the state of Tabasco. Many migrants have fallen to their deaths or suffered injuries on the train while hitching a ride to the U.S. border.</p>
                <br></br>
                <p>Source <a href='https://www.usnews.com/news/world/articles/2023-03-28/factbox-deadly-tragedies-involving-migrants-crossing-mexico'>U.S. News</a></p>
              </ParallaxLayer>
          </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;