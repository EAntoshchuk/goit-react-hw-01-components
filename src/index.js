import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

// function Profile({ avatar, username, tag, location }) {
//   <div class="profile">
//     <div class="description">
//       <img src={props.avatar} alt={props.avatar} class="avatar" />
//       <p class="name">{props.username}</p>
//       <p class="tag">{props.tag}</p>
//       <p class="location">{props.location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">Followers</span>
//         <span class="quantity">{props.stats.followers}</span>
//       </li>
//       <li>
//         <span class="label">Views</span>
//         <span class="quantity">{props.stats.views}</span>
//       </li>
//       <li>
//         <span class="label">Likes</span>
//         <span class="quantity">{props.stats.likes}</span>
//       </li>
//     </ul>
//   </div>;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
