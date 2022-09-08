import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Rectangle,
  Tooltip,
  Line,
} from "recharts";

/**
 * Display graph of average sessions's time
 * @param {object} data sessions 
 * @returns LineChart
 */
export default function Sessions({ sessions }) {
  console.log(sessions)
  /**
   * Custom the tooltip
   * @param {boolean} active
   * @param {string} payload
   * @returns html
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-session">
          <h4>{payload[0].value} min</h4>
        </div>
      );
    }

    return null;
  };

  /**
   * Custop the cursor
   * @param {string} coordinate x 
   * @returns Grey rectangle displayed who move on click with the cursor
   */
  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[0].x}
        width={1000}
        height={300}
      />
    );
  };

  return (
    <div className="graph-sessions">
      <h4 className="graph-sessions-title">Durée moyenne des sesssions</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessions} margin={{ top: 100, bottom: 15 }}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            padding={{left: 8, right: 8}}
            stroke="#ffffff"
            opacity={0.5}
            tick={{fontSize:12}}
          />
          {/* <YAxis axisLine={false} tickLine={false} tick={false} domain={['dataMin - 5', 'dataMax + 5']}/> */}
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          {/* dot: enleve les points sur la ligne*/}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            strokeWidth={2}
            opacity={0.8}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Sessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    sessionLength: PropTypes.number,
  }))
}