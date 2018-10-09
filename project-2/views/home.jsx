var React = require("react");
var DefaulLayout = require('./layout/default')

class home extends React.Component {
  render() {

    let url = 'http://localhost:3000/orgz/1'
    let nameOfOrg =  this.props.orgz.map(orgz => (
              <li key={orgz.id}>
                <a href={url}>{orgz.orgz_name}</a>
              </li>
            ))

    console.log(this);
    return (

      <DefaulLayout>
          <h1>Welcome to iGive</h1>
          <ul>
           {nameOfOrg}
          </ul>
      </DefaulLayout>
    );
  }
}

module.exports = home;



// var React = require('react');

// class Home extends React.Component {

//   render() {

//     const people = this.props.people.map( person => {
//       return <li>{person}</li>
//     });

//     return (
//       <div>
//         <ul>
//         {people}
//         </ul>
//       </div>
//     );
//   }
// }