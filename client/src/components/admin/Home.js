// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import Dashboard from './Dashboard';
import ReserveBook from './ReserveBook';
import BookStatus from './BookStatus';
import FineStatus from './FineStatus';
import DonateBook from './DonateBook';
 
/**
 *
 */ 
class Home extends Component {
  render() {
    return (
      <div>
    		<Header userLoggedIn="true" />
    		<div class="wrapper">
    			<div class="container">
            <div class="row">
    						<SideBar />
    						<BookStatus />  
          	</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;