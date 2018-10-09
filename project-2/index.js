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


      response.render( 'orgzList', {orgz: result.rows[0]} );
    }
  });
}













/**
 * ===================================
 * Routes
 * ===================================
 */


app.get('/', getOrgz);
app.get('/orgz/:id', getEachOrgz);











































/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));









