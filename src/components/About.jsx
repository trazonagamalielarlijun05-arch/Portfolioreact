import SectionHeading from './SectionHeading';
import Button from './Button';
import StatCard from './StatCard';
import { stats } from '../data/portfolio';

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="About Me"
            title="I'm passionate about building useful, well-made software."
          />
          <p>
            Currently studying Computer Science at Tangub City Global College, I focus on writing
            clean code and designing systems that actually solve a problem — whether that's a
            capstone project, a class assignment, or something I build for fun.
          </p>
          <Button href="#" variant="outline">Learn More About Me →</Button>
        </div>

        <div className="stat-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
