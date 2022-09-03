import PropTypes from "prop-types";

/**
 * Display info card 
 * @param {string} icon
 * @param {number} calories
 * @returns Cards
 */
export default function Calories({ icon, calories, protein, carbs, fat }) {
  return (
    <div className="calories">
      <div>
        <img src={icon[0]} alt="icon-calories" height="60px" width="60px" />
        <div>
          <h2>{calories}kcal</h2>
          <h4 className="type">Calories</h4>
        </div>
      </div>
      <div>
        <img src={icon[1]} alt="icon-protein" height="60px" width="60px" />
        <div>
          <h2>{protein}g</h2>
          <h4 className="type">Proteines</h4>
        </div>
      </div>
      <div>
        <img src={icon[2]} alt="icon-carbs" height="60px" width="60px" />
        <div>
          <h2>{carbs}g</h2>
          <h4 className="type">Glucides</h4>
        </div>
      </div>
      <div>
        <img src={icon[3]} alt="icon-fat" height="60px" width="60px" />
        <div>
          <h2>{fat}g</h2>
          <h4 className="type">Lipides</h4>
        </div>
      </div>
    </div>
  );
}

Calories.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  calories: PropTypes.number,
  protein: PropTypes.number,
  carbs: PropTypes.number,
  fat: PropTypes.number,
};
