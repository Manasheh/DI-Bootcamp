import React from "react";
import PhotoContainer from "./components/PhotoContainer";
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

// const API_KEY = 'IF9pNvauDWUmYpUsbPw9NHAY3XZdwhqPNg63BGVSlSb9OB6j4U5AKTbA'

return (
    <div className="title">
      <h1>SnapShot</h1>
      <form action="" className="searc-form">
        <input type="text" />
        <button type="submit" />
      </form>
      <Routes>
        <Route path="/" element={< App />} />
        <Route path="/:search" element={<App />} />
        {/* <Route path="/" element={<App />} />
        <Route path="/" element={<App />} /> */}
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to='mountain'>Mountain</Link>
         </li>
          <li>
            <Link to='beach'>Beach</Link>
         </li>
          <li>
            <Link to='birds'>Birds</Link>
         </li>
          <li>
            <Link to='foods'>Foods</Link>
         </li>
        </ul>
    
      </nav>
      <PhotoContainer />
    </div>
  );
}
// return (
//   <>
//       <h2>Pictures</h2>
//     <div className="photo-container">
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//       <div>
//         <img src="https://farm66.staticflickr.com/65535/53708047577_d26bc0da84_m.jpg" />
//       </div>
//     </div>
//   </>
// )
// }

export default App;
