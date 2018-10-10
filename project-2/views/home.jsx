var React = require("react");
var DefaulLayout = require('./layout/default')

class home extends React.Component {
  render() {

   let nameOfOrg = this.props.orgz.map(orgz => (

        //REMEMBER THIS METHOD

          <li key={orgz.id}><a href={'/orgz/' +  orgz.id}> {orgz.orgz_name}</a></li>
     ));

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

