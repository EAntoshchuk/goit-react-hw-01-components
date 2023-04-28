import deafultImg from '../logo192.png';
export default function Profile({
  avatar = deafultImg,
  username,
  tag = 'there is no tag',
  location = 'unaloccated',
  stats,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={avatar} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity"> {stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
