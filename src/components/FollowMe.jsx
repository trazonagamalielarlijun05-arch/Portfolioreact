import { followIcons, profile } from '../data/portfolio';

export default function FollowMe() {
  return (
    <div className="follow">
      <h4>Follow Me</h4>
      <div className="follow-icons">
        {followIcons.map((icon) => (
          <span key={icon}>{icon}</span>
        ))}
      </div>
      <div className="follow-info">
        <a href={`mailto:${profile.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {profile.email}
        </a>
        <br />
        {profile.location}
      </div>
    </div>
  );
}
