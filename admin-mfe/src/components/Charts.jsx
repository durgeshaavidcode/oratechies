// Lightweight inline SVG charts (no chart lib in allowed deps)
import { Box } from "@mui/material";

export function LineChart({ data, height = 240, colors = ["#3B82F6", "#22C55E"] }) {
  // data: { labels:[], series:[{name,values:[]}], }
  const w = 600;
  const h = height;
  const padL = 36, padR = 16, padT = 16, padB = 28;
  const all = data.series.flatMap((s) => s.values);
  const max = Math.max(...all) * 1.1;
  const x = (i) => padL + (i * (w - padL - padR)) / (data.labels.length - 1);
  const y = (v) => padT + (h - padT - padB) * (1 - v / max);
  const path = (vals) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const ticks = [0, max / 4, max / 2, (3 * max) / 4, max];
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} x2={w - padR} y1={y(t)} y2={y(t)} stroke="#E2E8F0" strokeDasharray="3 3" />
            <text x={padL - 8} y={y(t) + 4} fontSize="10" fill="#94A3B8" textAnchor="end">
              {t >= 1000 ? `${Math.round(t / 1000)}K` : Math.round(t)}
            </text>
          </g>
        ))}
        {data.series.map((s, idx) => (
          <g key={s.name}>
            <path d={path(s.values)} fill="none" stroke={colors[idx]} strokeWidth="2.5" />
            {s.values.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r="4" fill={colors[idx]} />
            ))}
          </g>
        ))}
        {data.labels.map((l, i) => (
          <text key={l} x={x(i)} y={h - 8} fontSize="11" fill="#64748B" textAnchor="middle">
            {l}
          </text>
        ))}
      </svg>
    </Box>
  );
}

export function Donut({ items, total, size = 180, thickness = 26 }) {
  const r = size / 2 - thickness / 2;
  const c = 2 * Math.PI * r;
  const sum = items.reduce((a, b) => a + b.value, 0);
  let acc = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F1F5F9" strokeWidth={thickness} />
      {items.map((it) => {
        const frac = it.value / sum;
        const dash = `${frac * c} ${c}`;
        const off = -acc * c;
        acc += frac;
        return (
          <circle
            key={it.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={it.color}
            strokeWidth={thickness}
            strokeDasharray={dash}
            strokeDashoffset={off}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeLinecap="butt"
          />
        );
      })}
      <text x="50%" y="48%" textAnchor="middle" fontSize="22" fontWeight="700" fill="#0F172A">
        {total.toLocaleString()}
      </text>
      <text x="50%" y="60%" textAnchor="middle" fontSize="11" fill="#64748B">
        Total
      </text>
    </svg>
  );
}

export function BarChart({ labels, values, height = 220, color = "#3B82F6" }) {
  const w = 600;
  const h = height;
  const padL = 36, padR = 12, padT = 12, padB = 28;
  const max = Math.max(...values) * 1.1;
  const bw = (w - padL - padR) / values.length;
  const y = (v) => padT + (h - padT - padB) * (1 - v / max);
  const ticks = [0, max / 4, max / 2, (3 * max) / 4, max];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" preserveAspectRatio="xMidYMid meet">
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={padL} x2={w - padR} y1={y(t)} y2={y(t)} stroke="#E2E8F0" strokeDasharray="3 3" />
          <text x={padL - 8} y={y(t) + 4} fontSize="10" fill="#94A3B8" textAnchor="end">
            {t >= 1000 ? `${Math.round(t / 1000)}K` : Math.round(t)}
          </text>
        </g>
      ))}
      {values.map((v, i) => (
        <rect
          key={i}
          x={padL + i * bw + 8}
          y={y(v)}
          width={bw - 16}
          height={h - padB - y(v)}
          rx="4"
          fill={color}
        />
      ))}
      {labels.map((l, i) => (
        <text key={l} x={padL + i * bw + bw / 2} y={h - 8} fontSize="11" fill="#64748B" textAnchor="middle">
          {l}
        </text>
      ))}
    </svg>
  );
}
