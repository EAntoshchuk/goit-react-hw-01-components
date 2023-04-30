import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>.{stat.label}</span>
            <span className={css.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ),
  children: PropTypes.node,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
