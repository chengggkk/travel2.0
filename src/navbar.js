import React, { useEffect, useState } from 'react';
import $ from 'jquery';

// Navbar.js


function Navbar() {
  const [name, setName] = useState(''); // Replace this with the actual name from your session or state
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    $('.search').on('input', function() {
      var searchQuery = $(this).val();
      if (searchQuery) {
        $.ajax({
          url: 'search.php', // Replace this with the actual URL of your search API
          type: 'POST',
          data: { query: searchQuery },
          success: function(data) {
            $('#search-results').html('<a href="add-location.php" class="search-item" style="display:block; height:40px; margin-top:10px;">新增景點</a>' + data);
          }
        });
      } else {
        $('#search-results').html('');
      }
    });

    $('#search').on('click', 'a', function(e) {
      if ($(this).attr('href') !== 'add-location.php') {
        e.preventDefault();
        var selectedLocationName = $(this).text().trim();
        var selectedLocationAddress = $(this).find('span').text();
        $('.search').val(selectedLocationName + " - " + selectedLocationAddress);
        $('#search').hide();
      }
    });

    // Added this
    $('.dropdown-content').hide();

  }, []);

  useEffect(() => {
    if (dropdownVisible) {
      $('.dropdown-content').slideDown();
    } else {
      $('.dropdown-content').slideUp();
    }
  }, [dropdownVisible]);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src="img/logo.png" alt="Logo" style={{ height: '50px' }} />
      <div className="search-space">
        <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#ffffff' }}></i>
        <input type="text" style={{ width: '1000px', height: '35px', color: 'white' }} className="search" placeholder="搜尋景點"></input>
        <div id="search-results" style={{ marginLeft: '25px', position: 'absolute', width: '1000px', background: 'white', borderRadius: '10px' }}></div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={handleDropdownClick}>{name}</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">log out</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;