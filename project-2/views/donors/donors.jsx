var React = require("react");

class donors extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>

          <h1>iGive</h1>
          <div class="DonorIntro">

            <h2>Welcome to iGive. </h2>
            <h2>Discover and donate to charities and NGOs changing millions of lives</h2>
            <h3>Join the iGive community, where we focus on impact-driven donations</h3>
            <h3>Create and iGive account today</h3>
        </div>

        <form method="POST" action="/donors">
             <div>
               name:<input name="name" type="text" />
             </div>
             <div>
               email:<input name="name" type="text" />
             </div>
             <div>
               location:<input name="name" type="text" />
             </div>
             <div>
               email:<input name="name" type="text" />
             </div>
             <div>
               password:<input name="password" type="text" />
             </div>
             <input type="submit" value="Submit" />
           </form>

        <div>
        <a href = "http://localhost:3000/donors/login">Sign In</a> if you're already a member.
        </div>




        </body>
      </html>
    );
  }
}

module.exports = donors;