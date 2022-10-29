import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='form-container'>
        <form action="http://localhost:5000/post" method='POST'>
          <div className='label-container'>
            <label>Enter your name:
              <input type="text" name='username' />
            </label>
          </div>
          <div className='label-container'>
            <label>Email:
              <input type="text" name='email' />
            </label>
          </div>
          <div className='label-container'>
            <label>Phone:
              <input type="text" name='phoneNumber' />
            </label>
          </div>
          <div className='label-container'>
            <label>Number of rooms
              <input type="text" name='noOfRooms' />
            </label>
          </div>
          <div className='label-container'>
            <label>Check In date:
              <input type="text" placeholder='YYYY-MM-DD' name='checkIn' />
            </label>
            <label style={{ padding: "1rem" }}>Check Out date:
              <input type="text" placeholder='YYYY-MM-DD' name='checkOut' />
            </label>
          </div>
          <button type='submit'>Book Room</button>
        </form>
      </div >
    </div >
  );
}

export default App;
