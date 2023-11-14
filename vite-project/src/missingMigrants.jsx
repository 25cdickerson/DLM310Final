import harshEnvironment from './photos/harshenvironment.png'
import vehicleAccident from './photos/vehicleaccident.png'
import violence from './photos/violence.png'
import accident from './photos/accident.png'
import sickness from './photos/sickness.png'
import unknown from './photos/unknown.png'
import drowning from './photos/drowning.png'

import './missingMigrants.css';

function MissingMigrants() {
  return (
    <>
      <div>
        <h2>A Look at the Numbers</h2>
        <h1>4,825</h1>
        <h4>Migrants Missing En Route To The US-Mexico Border</h4>
        <p>(From 2014-2023)</p>
      </div>
      <div>
        <h2>Cause of Death</h2>
        <table>
            <thead>
                <th>Harsh Environment</th>
                <th>Vehicle Accident</th>
                <th>Violence</th>
                <th>Accident</th>
                <th>Sickness</th>
                <th>Unknown</th>
                <th>Drowning</th>
            </thead>
            <tbody>
                <tr>
                    <td><img src={harshEnvironment} alt="Harsh Environment" /></td>
                    <td><img src={vehicleAccident} alt="Vehicle Accident" /></td>
                    <td><img src={violence} alt="Violence" /></td>
                    <td><img src={accident} alt="Accident" /></td>
                    <td><img src={sickness} alt="Sickness" /></td>
                    <td><img src={unknown} alt="Unknown" /></td>
                    <td><img src={drowning} alt="Drowning" /></td>
                </tr>
                <tr>
                    <td><h2>779</h2></td>
                    <td><h2>382</h2></td>
                    <td><h2>155</h2></td>
                    <td><h2>113</h2></td>
                    <td><h2>67</h2></td>
                    <td><h2>2279</h2></td>
                    <td><h2>1050</h2></td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default MissingMigrants;