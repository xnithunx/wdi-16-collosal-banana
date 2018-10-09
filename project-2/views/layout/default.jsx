var React = require('react');

 class DefaultLayout extends React.Component {
   render() {
     return (
         <html>
                 <head>
                 <title></title>


                 <link rel="stylesheet" href="/style.css"></link>
                 </head>

                 <body>

                 {this.props.children}


                 </body>
             </html>
     );
   }
 }

 module.exports = DefaultLayout;