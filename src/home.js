import React from 'react';
import './App.css';

function Home() {
  return (
    <div>
      <img className="homeimg" src="img/254381.jpg"
         alt="" />
      <form className="tra_form" action="process_tra.php" method="post">
        <div style={{display: 'flex'}}>
          <h2 style={{marginRight: '100px'}}>Create Travel</h2>
          <div>
            <label htmlFor="start_date">Start Date:</label><br />
            <input type="date" id="start_date" name="start_date" style={{margin: '0 50px'}} /><br />
          </div>
          <div>
            <label htmlFor="end_date">End Date:</label><br />
            <input type="date" id="end_date" name="end_date" style={{margin: '0 50px'}} /><br />
          </div>
          <div>
            <label htmlFor="travel_name">Travel Name:</label><br />
            <input type="text" id="travel_name" name="travel_name" style={{width: '500px', margin: '0 50px'}} /><br />
          </div>
        </div>
        <div align="center">
          <input type="submit" id="add-journey" className="button" style={{marginTop: '30px', width: '500px'}} value="創建旅程" />
        </div>
      </form>
    </div>

    
  );
}

export default Home;