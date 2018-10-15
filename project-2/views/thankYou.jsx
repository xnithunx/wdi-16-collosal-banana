var React = require("react");

class thankYou extends React.Component {
  render() {
    return (
      <html>
        <head>
        <title>iGive</title>
        <link rel="stylesheet" href="../style.css" />
        </head>

        <body>
        <div className ="navBar">
         <div className="navBox"><a href="http://localhost:3000" className="navBarText">Home</a></div>
        <div className="navBox"><a href="http://localhost:3000/donors/createDonors" className="navBarText">Sign Up</a></div>
         <div className="navBox"><a href="http://localhost:3000/donors/login" className="navBarText">Login</a></div>
         <div className="navBox"><a href="http://localhost:3000/allOrgz" className="navBarText">Organisation List</a></div>
        </div>

          <h1 className="profileTitle">You're awesome!</h1>


          <div className="thankYou">

          <p>  Thank you {this.props.name} </p>

          <p>for your pledge of {this.props.amount} dollars</p>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = thankYou;