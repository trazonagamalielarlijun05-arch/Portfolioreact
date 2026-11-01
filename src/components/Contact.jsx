import SectionHeading from './SectionHeading';
import Button from './Button';
import QuoteCard from './QuoteCard';
import FollowMe from './FollowMe';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section className="section-alt" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <SectionHeading eyebrow="Let's Work Together" title="Have a project in mind?" />
          <p>
            I'm open to collaborating on projects, freelance work, or just talking tech. Feel free
            to reach out.
          </p>
          <Button href={`mailto:${profile.email}`} variant="primary">Get In Touch →</Button>
        </div>
        <QuoteCard />
        <FollowMe />
      </div>
    </section>
  );
}
