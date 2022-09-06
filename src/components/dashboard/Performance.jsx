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
          seg={2}
          outerRadius={60}
          data={performance}
          fill="var(--white)"
        >
          {/* radialLines: trait qui vont au centre */}
          <PolarGrid radialLines={false} margin={{top:50}}/>
          {/* dy: positionnement par rapport au centre */}
          <PolarAngleAxis dataKey="kind"  dy={5} tick={{fontSize:12, padding:-40}} />
          {/* tickCount: nombre octogone */}
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
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


