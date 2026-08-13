const contourPaths = Array.from({ length: 42 }, (_, index) => {
  const lift = index * 7.2;
  const pull = Math.sin(index * 0.43) * 15;
  return `M -90 ${1118 - lift * 0.3}
    C ${18 + pull} ${1055 - lift}, ${132 + index * 2.4} ${907 - lift * 0.3}, ${257 + index * 2.7} ${834 - lift * 0.12}
    C ${374 + index * 1.4} ${764 - lift * 0.07}, ${455 - index * 0.8} ${750 + lift * 0.55}, ${584 + index * 1.5} ${768 + lift * 0.62}
    C ${659 + index * 2.2} ${778 + lift * 0.63}, ${686 + index * 0.7} ${732 + lift * 0.74}, ${719 + index * 0.9} ${683 + lift * 0.77}`;
});

const upperStrands = Array.from({ length: 22 }, (_, index) => {
  const x = 1016 + index * 9.4;
  return `M ${x} -38 C ${x + 36} 75, ${1126 + index * 2.5} 127, ${1110 - index * 1.2} 227`;
});

const manifoldBands = Array.from({ length: 64 }, (_, index) => {
  const offset = index - 31.5;
  const spread = Math.abs(offset) * 1.75;
  return `M ${1088 + offset * 0.55} 128
    C ${1055 - spread * 0.26} 211, ${1018 - offset * 0.8} 244, ${1067 - offset * 1.15} 315
    C ${1114 + offset * 1.35} 372, ${1130 + offset * 0.78} 419, ${1107 + offset * 0.22} 501`;
});

const sliceEllipses = [
  { cx: 1120, cy: 244, rx: 54, ry: 8, count: 14 },
  { cx: 1147, cy: 351, rx: 34, ry: 7, count: 12 },
  { cx: 1160, cy: 458, rx: 42, ry: 9, count: 14 },
];

const networkNodes = [
  [971, 156], [1002, 188], [1038, 132], [1087, 165], [1136, 133], [1176, 188], [1210, 156], [1262, 191],
  [944, 218], [987, 242], [1027, 222], [1065, 255], [1101, 228], [1154, 242], [1195, 225], [1242, 251], [1290, 221],
  [963, 286], [1007, 311], [1054, 290], [1093, 327], [1147, 291], [1187, 326], [1230, 298], [1283, 326],
  [979, 366], [1028, 346], [1070, 381], [1113, 356], [1156, 391], [1209, 358], [1250, 393], [1300, 380],
  [1004, 424], [1044, 457], [1084, 431], [1125, 468], [1168, 444], [1215, 475], [1263, 442], [1305, 478],
  [1031, 497], [1075, 517], [1118, 493], [1159, 523], [1198, 501], [1244, 516], [1286, 492],
  [1016, 103], [1098, 106], [1214, 112], [1330, 262], [1340, 340], [1327, 448],
] as const;

/*
 * Connect each point only to its closest local neighbours. The previous
 * index-based links cut long diagonals through the whole module and made the
 * desktop composition feel noisy. This keeps the graph analytical while
 * allowing the twisted manifold to remain the dominant shape.
 */
const networkEdges = networkNodes.flatMap(([x, y], index) =>
  networkNodes
    .map(([nextX, nextY], nextIndex) => ({
      nextIndex,
      distance: Math.hypot(nextX - x, nextY - y),
    }))
    .filter(({ nextIndex, distance }) => nextIndex > index && distance < 96)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, index % 7 === 0 ? 3 : 2)
    .map(({ nextIndex }) => [index, nextIndex] as const),
);

const oliveNodeIndexes = new Set([0, 2, 4, 5, 8, 9, 10, 12, 14, 15, 16, 17, 19, 21, 23, 25, 26, 28, 30, 31, 33, 35, 37, 38, 40, 42, 44, 46, 48, 49]);
const oxbloodNodeIndexes = new Set([4, 13, 29, 36]);
const hollowNodeIndexes = new Set([24, 32, 39, 52, 53]);

function ArtworkBase({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <svg
      className={`cc-artwork ${className}`}
      viewBox="0 0 1448 1086"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function ArtworkBack() {
  return (
    <ArtworkBase className="cc-artwork-back">
      <g className="cc-contour-field" fill="none" stroke="var(--cc-hairline-deep)" strokeWidth="0.66" vectorEffect="non-scaling-stroke">
        {contourPaths.map((path, index) => (
          <path key={index} d={path} opacity={0.085 + (index % 5) * 0.016} />
        ))}
      </g>
      <g className="cc-upper-strands" fill="none" stroke="var(--cc-hairline-deep)" strokeWidth="0.64" vectorEffect="non-scaling-stroke">
        {upperStrands.map((path, index) => <path key={index} d={path} opacity={0.1 + index * 0.006} />)}
      </g>
      <path d="M 270 470 C 330 410, 348 360, 310 300" fill="none" stroke="var(--cc-hairline)" strokeDasharray="4 5" opacity="0.35" />
      <path d="M 552 1086 C 503 935, 571 850, 684 820 C 793 791, 906 696, 1017 489" fill="none" stroke="var(--cc-hairline-soft)" strokeWidth="1" opacity="0.48" />
      <path d="M 763 1086 C 850 923, 918 774, 1030 608" fill="none" stroke="var(--cc-hairline-soft)" strokeWidth="1" opacity="0.38" />
      <path d="M 912 1086 C 981 934, 1032 759, 1041 609" fill="none" stroke="var(--cc-hairline)" strokeDasharray="5 5" strokeWidth="0.8" opacity="0.38" />
    </ArtworkBase>
  );
}

export function ArtworkStructure() {
  return (
    <ArtworkBase className="cc-artwork-structure">
      <g className="cc-upper-left-plot" fill="none" vectorEffect="non-scaling-stroke">
        <path d="M 151 343 C 218 331, 271 302, 304 216" stroke="var(--cc-hairline)" strokeWidth="0.8" opacity="0.58" />
        <path d="M 204 299 C 254 302, 300 312, 330 294" stroke="var(--cc-hairline)" strokeWidth="0.8" opacity="0.55" />
        <path d="M 260 408 C 264 328, 286 242, 301 174" stroke="var(--cc-hairline-soft)" strokeWidth="0.9" opacity="0.58" />
        <path d="M 167 367 C 229 350, 282 313, 325 230" stroke="var(--cc-hairline)" strokeDasharray="4 4" strokeWidth="0.8" opacity="0.45" />
        <circle cx="203" cy="299" r="2.3" fill="var(--cc-hairline-deep)" />
        <circle cx="305" cy="306" r="3" fill="var(--cc-oxblood)" />
        <circle cx="325" cy="211" r="3.2" fill="var(--cc-olive)" />
        <circle cx="263" cy="408" r="3.6" fill="var(--cc-hairline)" />
      </g>

      <g className="cc-financial-chart" vectorEffect="non-scaling-stroke">
        <path d="M 132 968 H 444 M 132 968 V 676" fill="none" stroke="var(--cc-hairline-deep)" strokeWidth="0.9" opacity="0.62" />
        <path d="M 444 968 l -6 -4 M 444 968 l -6 4 M 132 676 l -4 7 M 132 676 l 4 7" fill="none" stroke="var(--cc-hairline-deep)" strokeWidth="0.9" />
        <path d="M -30 1085 C 70 1005, 117 923, 187 841 C 240 780, 304 740, 381 727 C 402 724, 420 724, 438 725" fill="none" stroke="var(--cc-olive)" strokeWidth="1.1" opacity="0.78" />
        <path d="M 103 940 C 164 818, 252 723, 358 682" fill="none" stroke="var(--cc-hairline-deep)" strokeDasharray="4 5" strokeWidth="0.8" opacity="0.78" />
        {[174, 214, 258, 304, 350, 395].map((x, index) => (
          <circle key={x} cx={x} cy={[864, 812, 774, 745, 730, 726][index]} r="3" fill="var(--cc-olive)" />
        ))}
        <circle cx="319" cy="758" r="8.4" fill="var(--cc-white)" stroke="var(--cc-olive)" strokeWidth="1.2" />
        <circle cx="319" cy="758" r="2.7" fill="var(--cc-olive)" />
        {Array.from({ length: 10 }, (_, index) => {
          const x = 350 + index * 9;
          const y = 690 - index * 12 + (index % 3) * 8;
          const body = 13 + (index % 4) * 5;
          return (
            <g key={index} opacity="0.38" stroke="var(--cc-hairline-deep)" fill="none">
              <line x1={x} x2={x} y1={y - 14} y2={y + body + 13} strokeWidth="0.7" />
              <rect x={x - 3.5} y={y} width="7" height={body} strokeWidth="0.7" />
            </g>
          );
        })}
        {[
          [87, 846], [114, 903], [151, 826], [182, 914], [227, 873], [264, 846], [284, 897], [334, 835], [374, 886], [406, 811],
          [102, 1018], [144, 1046], [194, 1005], [243, 1034], [286, 985], [344, 1021], [393, 998], [442, 1048],
        ].map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index % 5 === 0 ? 2.7 : 1.9} fill="var(--cc-olive)" opacity="0.8" />)}
        <text x="153" y="654" className="cc-svg-label">EFFICIENT FRONTIER</text>
        <text x="93" y="980" className="cc-svg-label">RETURN</text>
        <text x="330" y="1016" className="cc-svg-label">RISK</text>
        <text x="307" y="804" className="cc-svg-label"><tspan x="307">OPTIMAL</tspan><tspan x="307" dy="16">PORTFOLIO</tspan></text>
      </g>

      <g className="cc-manifold" fill="none" vectorEffect="non-scaling-stroke">
        {manifoldBands.map((path, index) => (
          <path key={index} d={path} stroke="var(--cc-hairline-deep)" strokeWidth="0.58" opacity={0.12 + (index % 7) * 0.014} />
        ))}
        {sliceEllipses.flatMap(({ cx, cy, rx, ry, count }, groupIndex) =>
          Array.from({ length: count }, (_, index) => (
            <ellipse
              key={`${groupIndex}-${index}`}
              cx={cx}
              cy={cy}
              rx={rx + index * 10.5}
              ry={ry + index * 2.2}
              stroke="var(--cc-hairline)"
              strokeWidth="0.62"
              opacity={0.34 - index * 0.014}
            />
          )),
        )}
        {networkEdges.map(([startIndex, endIndex], index) => {
          const start = networkNodes[startIndex];
          const end = networkNodes[endIndex];
          return (
            <line
              key={`edge-${startIndex}-${endIndex}`}
              x1={start[0]}
              y1={start[1]}
              x2={end[0]}
              y2={end[1]}
              stroke="var(--cc-hairline-deep)"
              strokeWidth="0.66"
              opacity={0.15 + (index % 4) * 0.017}
            />
          );
        })}
        {networkNodes.map(([x, y], index) => {
          const isOxblood = oxbloodNodeIndexes.has(index);
          const isHollow = hollowNodeIndexes.has(index);
          const fill = isHollow ? "var(--cc-white)" : isOxblood ? "var(--cc-oxblood)" : oliveNodeIndexes.has(index) ? "var(--cc-olive)" : "var(--cc-ink-soft)";
          return <circle key={`node-${index}`} cx={x} cy={y} r={isOxblood ? 4.2 : isHollow ? 3.4 : index % 9 === 0 ? 3.6 : 2.15} fill={fill} stroke={isHollow ? "var(--cc-hairline-deep)" : "none"} strokeWidth={isHollow ? 1.45 : 0} />;
        })}
      </g>
    </ArtworkBase>
  );
}

export function ArtworkFront() {
  return (
    <ArtworkBase className="cc-artwork-front">
      <path d="M 363 350 C 486 173, 624 180, 682 321 C 719 409, 693 481, 595 535" fill="none" stroke="var(--cc-ink-soft)" strokeWidth="0.72" opacity="0.58" vectorEffect="non-scaling-stroke" />
      <path d="M 578 612 C 681 520, 709 370, 825 303 C 929 243, 1057 275, 1136 226" fill="none" stroke="var(--cc-olive)" strokeWidth="0.78" opacity="0.58" vectorEffect="non-scaling-stroke" />
      <path d="M 405 1086 C 350 927, 401 802, 527 747 C 614 709, 635 618, 710 551 C 733 530, 750 539, 750 556" fill="none" stroke="var(--cc-olive)" strokeWidth="0.9" opacity="0.62" vectorEffect="non-scaling-stroke" />
      <g className="cc-crosshair" stroke="var(--cc-oxblood)" vectorEffect="non-scaling-stroke">
        <line x1="723" y1="822" x2="723" y2="878" strokeWidth="0.7" opacity="0.68" />
        <line x1="691" y1="850" x2="754" y2="850" strokeWidth="0.7" opacity="0.68" />
        <circle cx="723" cy="850" r="1.4" fill="var(--cc-oxblood)" stroke="none" />
      </g>
    </ArtworkBase>
  );
}
