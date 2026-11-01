export default function SkillRow({ name, level, badge, color, textColor }) {
  return (
    <div className="skill-row">
      <div className="skill-top">
        <span className="name">
          <span
            className="skill-badge"
            style={{ background: color, ...(textColor ? { color: textColor } : {}) }}
          >
            {badge}
          </span>
          {name}
        </span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
