import as from './photos/Alan_Salazar.jpg';
import './App.css';

function AlanSalazar() {
  return (
    <>
      <h2>Alan Paredes Salazar</h2>
      <br></br>
      <img src={as} alt="Alan Salazar" id='asImg'/>
      <br></br>
      <p className='migrantParagraphs'>Rose Lee recounted the heartbreaking story of her nephew, Alan Paredes Salazar, who embarked on a journey from his native Peru to the U.S.-Mexico border in pursuit of the American dream. Tragically, at the age of 37, Salazar lost his life attempting to cross the Rio Grande in early September, joining nearly a dozen other migrants whose bodies were discovered by U.S. Border Patrol agents. The Medical Examiner&apos;s Office in Webb County, Texas confirmed the processing of Salazar&apos;s remains. Lee, residing in southern California, expressed devastation over her nephew&apos;s untimely death, emphasizing the tragedy of traveling so far only to perish in an unfamiliar place. Despite the passage of almost two months, Lee has been unable to claim Salazar&apos;s body, intending to repatriate him to Peru. She fondly remembered Salazar as a loving family member, treating him as her own son, and lamented that his aspirations to support his parents, wife, and 5-year-old son were tragically cut short.</p>
      <br></br>
      <p>Source <a href='https://www.cbsnews.com/news/migrant-deaths-crossing-us-mexico-border-2022-record-high/'>CBS NEWS</a></p>
    </>
  );
}

export default AlanSalazar;
