import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      {isOnline ? (
        <span class="status" style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span class="status" style={{ backgroundColor: 'red' }}></span>
      )}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
