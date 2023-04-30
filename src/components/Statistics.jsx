import PropTypes from 'prop-types';

export default function Statistics({ title, stats, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li
            class="item"
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">.{stat.label}</span>
            <span class="percentage"> {stat.percentage}%</span>
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
