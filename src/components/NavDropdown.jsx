import { useEffect, useRef, useState } from 'react';

// The "Projects" menu. Opens on click; closes on outside click, Escape,
// or after choosing a link.
export default function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className={`dropdown${open ? ' open' : ''}`} ref={ref}>
      <button
        type="button"
        className="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label} <span className="caret">▼</span>
      </button>
      <ul className={`dropdown-menu${open ? ' show' : ''}`}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
