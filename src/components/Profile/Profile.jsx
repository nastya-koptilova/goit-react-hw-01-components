import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile(user) {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={user.avatar} alt="User avatar" className={css.avatar} />
          <p className={css.username}>{user.username}</p>
          <p className={css.tag}>{user.tag}</p>
          <p className={css.location}>{user.location}</p>
        </div>

        <ul className={css.list}>
          <li>
            <span className={css.stats}>Followers</span>
            <span className={css.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={css.stats}>Views</span>
            <span className={css.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={css.stats}>Likes</span>
            <span className={css.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
