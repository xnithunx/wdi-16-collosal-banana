var React = require("react");

class createDonors extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>

          <h1>Welcome to iGive</h1>
          <div class="DonorIntro">

            <h2>Join the iGive Community</h2>
            <h3>Discover and donate to charities and NGOs changing millions of lives</h3>
            <h4>Support organizations that focus on driving impact. Sign up today!</h4>

        </div>

        <form method="POST" action="/donors">
             <div>
               name:<input name="name" type="text" />
             </div>
             <div>
               email:<input name="email" type="text" />
             </div>
             <div>
               location:<input name="location" type="text" />
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

module.exports = createDonors;