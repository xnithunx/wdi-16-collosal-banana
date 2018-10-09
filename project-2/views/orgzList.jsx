var React = require("react");

class orgzList extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>

          <h1>iGive: Organisation Profile</h1>
          <div>


            <ul className="pokemon-list">

            <h2>

            {this.props.orgz.orgz_name}

            </h2>


              <li className="pokemon-attribute">
                Location: {this.props.orgz.orgz_location}
              </li>
              <li className="pokemon-attribute">
                About: {this.props.orgz.orgz_about}
              </li>

               <li className="pokemon-attribute">
                Impact Score: {this.props.orgz.orgz_impact_score}
              </li>

            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = orgzList;