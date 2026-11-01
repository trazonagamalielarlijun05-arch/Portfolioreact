// Reusable link-styled-as-button (used in the hero, about and contact sections).
export default function Button({ href, variant, children }) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
    </a>
  );
}
