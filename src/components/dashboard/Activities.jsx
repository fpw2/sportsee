import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

/**
 * Display the activity graph
 * @param {object} activity {kilogram, calories}
 * @returns BarChart
 */
export default function Activities({ activity }) {
  /**
   * Custop the tooltip
   * @param {boolean} active
   * @param {array} payload
   * @returns html
   */
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-activity">
          <h4>{payload[0].value} g</h4>
          <h4>{payload[1].value} Kcal</h4>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="graph-activities">
      <h4 className="graph-activities-title">Activité quotidienne</h4>
      <ResponsiveContainer width="100%" height={320}>
        {/* barGap: espacement entre les bar */}
        <BarChart
          data={activity}
          margin={{ top: 80, right: 30, left: 30, bottom: 20 }}
          barGap={10}
        >
          {/* radius: border-radius de la bar */}
          <Bar
            dataKey="kilogram"
            fill="var(--black)"
            barSize={8}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="var(--primary)"
            barSize={8}
            radius={[4, 4, 0, 0]}
          />
          {/* strokeDasharray: 2 (petit pointillé de la ligne horizontal)  */}
          <CartesianGrid strokeDasharray="2" vertical={false} />
          {/* tickLine: enleve les "-" pour chaque valeur */}
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: -25, right: -25 }}
            tickMargin={16}
            tick={{fontSize:14}}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={45}
            minTickGap={27}
            tick={{fontSize:14}}
          />
          {/* cursor: quand on passe la souris sur une donnée */}
          <Tooltip content={customTooltip} cursor={{opacity:0.6}} />
          {/* wrapperStyle: postionnement , payload: remplace kilogram(dataKey) par value:"monTexte" */}
          <Legend
            iconType="cirle"
            iconSize="8"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: 35, right: 25 }}
            payload={[
              { value: "Poids (kg)", color: "var(--black)" },
              { value: "Calories brûlées (kCal)", color: "var(--primary)" },
            ]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activities.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    kilogram: PropTypes.number,
    calories: PropTypes.number
  }))
}