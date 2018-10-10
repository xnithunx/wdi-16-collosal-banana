const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'xnithunx',
  host: '127.0.0.1',
  database: 'givingapp',
  port: 5432,
};

if (config.user === 'ck') {
    throw new Error("====== UPDATE YOUR DATABASE CONFIGURATION =======");
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('Idle client error', err.message, err.stack);
});



/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**



/**
 * ===================================
 * Controllers

 * ===================================
 */

//<<----- Homepage that shows all the orgz from the DB ----->>//

const getOrgz = (request, response) => {

const queryString = 'SELECT * from orgz;';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      response.render( 'home' , {orgz: result.rows} );
    }
  });
}


//<<----- Sub-page that shows each orgz from the DB----->>//


const getEachOrgz = (request, response) => {

let id = request.params['id'];
  const queryString = 'SELECT * FROM orgz WHERE id = ' + id + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);


      response.render( 'orgz/orgzList', {orgz: result.rows[0]} );
    }
  });
}


//<<----- Get the login page----->>//

const donorsLogin = (request, response) => {

      response.render( 'donors/login');
    }



// const donorsCreate = (request, response) => {

//   const queryString = 'INSERT INTO donors (donor_name) VALUES ($1)';

//   const values = [request.body.name];

//   console.log(queryString);

//   pool.query(queryString, values, (err, result) => {

//     if (err) {

//       console.error('Query error:', err.stack);
//       response.send('dang it.');
//     } else {

//       console.log('Query result:', result);

//       // redirect to home page
//       response.redirect('/');
//     }
//   });
// }


//<<----- For users to create their account----->>//

const donorsCreateLogin = (request, response) => {

      response.render( 'donors/new');
    }



const donorsCreate = (request, response) => {

  let params = request.body;

  console.log('This is ', request.body);

  const queryString = 'INSERT INTO donors (donor_name, donor_email, donor_location, donor_password) VALUES ($1, $2, $3, $4)';

    const values = [params.name, params.email, params.location, params.password]

  console.log(queryString);

  pool.query(queryString, values, (err, result) => {

    if (err) {

      console.error('Query error:', err.stack);
      response.send('dang it.');
    } else {

      console.log('Query result:', result);

      // redirect to home page
      response.redirect('/');
    }
  });
}








/**
 * ===================================
 * Routes
 * ===================================
 */

// Route to get homepage i.e. list of the orgz, the route right after is to show individuals orgz
app.get('/', getOrgz);
app.get('/orgz/:id', getEachOrgz);



// Route to go to login page
app.get('/donors/login', donorsLogin);


// Route to go to page where users can sign up and POST sends the data to the DB
app.get('/donors/new', donorsCreateLogin);
app.post('/donors', donorsCreate);










































/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));









