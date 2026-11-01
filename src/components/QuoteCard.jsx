import { quote } from '../data/portfolio';

export default function QuoteCard() {
  return (
    <div className="quote-card">
      <div className="quote-mark">"</div>
      <p>{quote.text}</p>
      <div className="quote-person">
        <div className="quote-avatar">{quote.initials}</div>
        <div>
          <div className="name">{quote.name}</div>
          <div className="role">{quote.role}</div>
        </div>
      </div>
    </div>
  );
}
