import SectionHeading from './SectionHeading';
import SkillRow from './SkillRow';
import { skillColumns } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="section-alt" id="skills">
      <div className="wrap">
        <SectionHeading eyebrow="My Skills" title="Technologies I Work With" centered />
        <div className="skills-grid">
          {skillColumns.map((column, i) => (
            <div key={i}>
              {column.map((skill) => (
                <SkillRow key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
