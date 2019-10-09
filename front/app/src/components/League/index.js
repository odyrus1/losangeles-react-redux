// Import
import React from 'react';

// Local import

// Code
function League(props){

      const leagueStats =  props.league ?
        props.league.map((team, index) => (
          <tr key={index}>
            <td>{team.team_name}</td>
            <td>{team.team_v}</td>
            <td>{team.team_d}</td>
            <td>{team.team_i}</td>
            <td>{team.team_pts}</td>
          </tr>
        ))
      :
        <tr>
          <td>no data</td>
          <td>no data</td>
          <td>no data</td>
          <td>no data</td>
          <td>no data</td>
        </tr>

      return (
        <div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Victories</th>
                  <th>Lost</th>
                  <th>Draws</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {leagueStats}
              </tbody>
            </table>
          </div>
        </div>
      )
}

// Export
export default League;
