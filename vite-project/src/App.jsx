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
import item1 from './photos/item1.png';
import item2 from './photos/item2.png';
import item3 from './photos/item3.png';
import item4 from './photos/item4.png';
import item5 from './photos/item5.png';
import item6 from './photos/item6.png';
import item7 from './photos/item7.png';
import borderCamp1 from './photos/borderCamp1.png';
import borderCamp2 from './photos/borderCamp2.jpg';

function App() {
  return (
    <>
      <Parallax pages={19}>
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
                <h4>An archive for those who cannot tell their stories</h4>
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
                <h2>BOX I: The Lost</h2>
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
                  textAlign: 'center',
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
          <ParallaxLayer 
              speed={0.85}
              offset={9.5} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;What did she think when she collapsed to the ground, and rolled on her back in surrender?</h2>
                <h2>Who will take care of my family now?</h2>
                <h2>Will someone find me before the animals do?</h2>
                <h2>Where is this Houston a few miles away?&apos;</h2>
                <h2>- Stephanie Elizondo Griest, All the Agents and Saints</h2>
              </blockquote>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.75}
              offset={9.9} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>BOX II: Items</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.95}
              offset={10.4} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>An empty wallet.</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.85}
              offset={10.5} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>A pink hairbrush.</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.75}
              offset={10.6} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>A line of Scripture.</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.65}
              offset={10.7} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Birth certificates.</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.55}
              offset={10.8} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Phone numbers of loved ones.</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.45}
              offset={10.9} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <h2>Prized belongings.</h2>
          </ParallaxLayer>
          <div className='noMobile'>
          <ParallaxLayer 
              speed={0.85}
              offset={14} 
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
                <img src={item1} alt="Item 1" style={{ width: '50%' }}></img>
                <img src={item2} alt="Item 2" style={{ width: '50%' }}></img>
                <img src={item3} alt="Item 3" style={{ width: '50%' }}></img>
                <img src={item4} alt="Item 4" style={{ width: '50%' }}></img>
                <img src={item5} alt="Item 5" style={{ width: '50%' }}></img>
                <img src={item6} alt="Item 6" style={{ width: '50%' }}></img>
                <img src={item7} alt="Item 7" style={{ width: '50%' }}></img>
                <ParallaxLayer 
              speed={0.95}
              offset={3}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;Why is it that looking through someone&apos;s</h2>
                <h2>things is always somehow so sad and also endearing,</h2>
                <h2>as if the deep fragility of their person becomes</h2>
                <h2>exposed in their absence, through their belongings?&apos;</h2>
                <h2>- Valeria Luiselli, Lost Children Archive</h2>
              </blockquote>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.95}
              offset={4}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;When large groups moved in, things</h2>
                <h2>would be littered the size of football fields&apos;</h2>
                <h2>- Border Trilogy Part 1: Hole in the Fence</h2>
              </blockquote>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.95}
              offset={5}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;...and then they (vultures) pull of the shirt.</h2>
                <h2>They eventually rip the jeans off.&apos;</h2>
                <h2>- Border Trilogy Part 2: Hold the Line</h2>
              </blockquote>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.95}
              offset={6}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;You know she was wearing camouflage clothes,</h2>
                <h2>stretch pants, women&apos;s running shoes on,</h2>
                <h2>and a scruncie around her wrist.&apos;</h2>
                <h2>- Border Trilogy Part 3: What Remains</h2>
              </blockquote>
          </ParallaxLayer>
          <p>Source: <a href="https://www.hcn.org/articles/photos-what-they-left-behind-no-more-deaths-found-in-the-borderlands">hcn</a></p>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.75}
              offset={14.9}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'center'
              }}>
              <h2>BOX III: The Stranded</h2>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={0.95}
              offset={15}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;Under the Remain in Mexico Policy,</h2>
                <h2>people are sent back to Mexico...</h2>
                <h2>As a result, the size of this camp grows</h2>
                <h2>every day.&apos;</h2>
                <h2>- This American Life: The Out Crowd</h2>
              </blockquote>
          </ParallaxLayer>
          </div>
          <ParallaxLayer
              offset={16} 
              speed={1}
              style={{
                backgroundImage: `url(${borderCamp1})`,
                backgroundSize: 'cover',
                /* Photo from https://www.aljazeera.com/news/2020/2/12/a-refugee-camp-grows-on-the-us-mexico-border */
              }}>
                <ParallaxLayer 
                  speed={0.95}
                  offset={7.4} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    color: '#3e2723',
                    textAlign: 'center',
                }}>
                <h2>Seeking Asylum</h2>
                <br></br>
                <p>In Mexico&apos;s Matamoros, thousands of asylum seekers wait in an encampment for their asylum cases to be heard in the US.</p>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={1.1}
              offset={17}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;There is no regular water supply here,</h2>
                <h2>volunteer groups from over the border in</h2>
                <h2>Brownsville haul in over 3000 bottles of water</h2>
                <h2>every day.&apos;</h2>
                <h2>- This American Life: The Out Crowd</h2>
              </blockquote>
          </ParallaxLayer>
          <ParallaxLayer
              offset={18} 
              speed={1}
              style={{
                backgroundImage: `url(${borderCamp2})`,
                backgroundSize: 'cover',
                /* Photo from https://www.nytimes.com/2018/12/21/opinion/the-mexican-border-as-refugee-camp.html */
              }}>
                <ParallaxLayer 
                  speed={0.95}
                  offset={8.4} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    color: '#3e2723',
                    textAlign: 'center',
                }}>
                <h2>Seeking Asylum</h2>
                <br></br>
                <p>Another tent camp along the United States/Mexico border.</p>
              </ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer 
              speed={1.1}
              offset={19}
              style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  color: '#3e2723',
                  textAlign: 'left'
              }}>
              <blockquote className="quote-container">
                <h2>&apos;There is no proper sanitation.</h2>
                <h2>Just five toilets for over 2500 people.&apos;</h2>
                <h2>- This American Life: The Out Crowd</h2>
              </blockquote>
          </ParallaxLayer>
      </Parallax>
    </>
  );
}

/* Citations (from Class):
  Lost Children Archive
  All the Agents and Saints 
  Radio Lab Border Trilogy
    (Part 1, Part 2, Part 3)
*/
export default App;