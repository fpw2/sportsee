import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

/**
 * Display the performance graph
 * @param {object} kind, value
 * @returns RadarChart
 */
export default function Performance({ performance }) {
  return (
    <div className="graph-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={-5}
          data={performance}
          fill="var(--white)"
        >
          {/* radialLines: trait qui vont au centre */}
          <PolarGrid radialLines={false} />
          {/* dy: positionnement par rapport au centre */}
          <PolarAngleAxis dataKey="kind" dy={4} tick={{fontSize:12}} />
          {/* tickCount: nombre octogone */}
          <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} cy={5} />
          <Radar
            dataKey="value"
            fill="var(--primary)"
            fillOpacity={0.6}
            label="value"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}


