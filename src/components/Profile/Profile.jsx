import PropTypes from 'prop-types';
import deafultImg from '../../logo192.png';
import css from './Profile.module.css';

export default function Profile({
  avatar = deafultImg,
  username,
  tag = 'there is no tag',
  location = 'unaloccated',
  stats,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={avatar} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <p>
            <span className={css.label}>Followers</span>
          </p>
          <p>
            <span className={css.quantity}> {stats.followers}</span>
          </p>
        </li>
        <li className={css.stats_item}>
          <p>
            <span className={css.label}>Views</span>
          </p>
          <p>
            <span className="quantity"> {stats.views}</span>
          </p>
        </li>
        <li className={css.stats_item}>
          <p>
            <span className={css.label}>Likes</span>
          </p>
          <p>
            <span className={css.quantity}> {stats.likes}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
