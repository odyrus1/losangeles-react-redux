// Import
import React from 'react';

// Local import

// Code
class League extends React.Component {
  render() {
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

                { this.props.league ? this.props.league.map((team, index) => (
                  <tr key={index}>
                    <td>{team.team_name}</td>
                    <td>{team.team_v}</td>
                    <td>{team.team_d}</td>
                    <td>{team.team_i}</td>
                    <td>{team.team_pts}</td>
                  </tr>
                )) : null }

              </tbody>
            </table>
          </div>

        </div>
      )
  }
}

// Export
export default League;
