import Button from './Button';
import { techStack, profile } from '../data/portfolio';
import { asset } from '../utils/asset';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">I'm a Web Developer</span>
          <h1 className="hero-title">
            Hi, I'm <span className="accent">{profile.firstName}</span>
            <br />
            I build things for the web.
          </h1>
          <p className="hero-sub">
            A developer from the Philippines who enjoys turning coursework, capstone projects, and
            side ideas into working software — from campus systems to small web apps.
          </p>
          <div className="hero-ctas">
            <Button href="#projects" variant="primary">View My Work</Button>
            <Button href="#" variant="outline">Download CV ⭳</Button>
          </div>
          <div className="stack-label">Technologies I Work With</div>
          <div className="stack-icons">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="hero-art">
          <div className="art-blob" />
          <div className="art-card">
            <div className="avatar-ring">
              <img src={asset('assets/avatar.jpg')} alt={profile.name} />
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{profile.name}</div>
            <div style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{profile.tagline}</div>
          </div>
          <CodeChip />
        </div>
      </div>
    </section>
  );
}

// The little floating "const dev = {...}" card.
function CodeChip() {
  return (
    <div className="code-chip">
      <div><span className="dot" />Code</div>
      <div>const <span className="k">dev</span> = {'{'}</div>
      <div>&nbsp;&nbsp;name: <span className="s">'Arli'</span>,</div>
      <div>&nbsp;&nbsp;stack: [<span className="s">'HTML'</span>,<span className="s">'JS'</span>],</div>
      <div>&nbsp;&nbsp;focus: <span className="s">'clean UI'</span></div>
      <div>{'};'}</div>
    </div>
  );
}
