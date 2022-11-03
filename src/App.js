import './index.css';

import MobileBG from './assets/images/bg-main-mobile.png'
import Card_Back from './assets/images/bg-card-back.png'
import Card_Front from './assets/images/bg-card-front.png'
 

function App() {
  return (
    <div className="App">
      <div className="card h-72 w-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${MobileBG})`}}>
        <div className="card-img-1 relaltive p-2">
          <img src={Card_Back} alt=""  className='w-64 absolute left-24 top-14'/>
          <span className='card-info absolute top-28 right-10 text-white text-sm'>000</span>
        </div>
      

      </div>
  
    </div>
  );
}

export default App;
