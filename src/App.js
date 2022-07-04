import React from 'react';
import './style.css';
import ImageOne from './Img/firstImg.jpg';
import ImageTwo from './Img/secImg.jpg';
import ImageThree from './Img/thirdImg.jpg';
import Form from './Form';

function App() {
  return (
    <div>

      <section>
        <div className='imgOne'>
          <img src={ImageOne} width={"150px"} />
        </div>
        <div className='imgTwo'>
          <img src={ImageTwo} width={"150px"} />
        </div>
        <div className='imgThree'>
          <img src={ImageThree} width={"150px"} />
        </div>
      </section>
      <br />  <br /> <br /> <br /> <br /> <br />
      <br />  <br /> <br /> <br /> <br /> <br />
      <Form />



    </div>
  );
}

export default App;