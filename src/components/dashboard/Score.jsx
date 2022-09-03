import PropTypes from 'prop-types'
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

/**
 * Display the score graph
 * @param {number} score 
 * @returns RadialBarChart
 */
export default function Score({score}) {
  const data = {uv: score}

  return (
    <div className="graph-score">
       <h4 className="graph-score-title">Score</h4>
      <ResponsiveContainer width="100%" height="100%" >
        {/* innerRadius: epaisseur cercle  endAngle: 450 = un cercle entier */}
        <RadialBarChart innerRadius={85} data={score} startAngle={90} endAngle={450} >
          {/* domain: plage du rond */}
          <PolarAngleAxis type='number'  fill="#E60000" domain={[0, 100]} angleAxisId={1} tick={false}/>
          {/* cornerRadius: border-radius */}
          <RadialBar background dataKey="uv" angleAxisId={1} fill="#E60000" cornerRadius="10" data={[data]} />
          <text fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{score}%</text>
          {/* x,y,textAnchor: centrage du texte dans le cercle */}
          <text fontWeight="500"  fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>
          <text fontWeight="500"  fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired
}