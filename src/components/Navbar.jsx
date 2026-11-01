import NavDropdown from './NavDropdown';
import Button from './Button';
import { navItems, profile } from '../data/portfolio';

export default function Navbar({ activeId }) {
  return (
    <header>
      <div className="wrap">
        <nav>
          <div className="logo">
            <span className="logo-mark">{profile.initials}</span> {profile.name}
          </div>

          <div className="nav-links">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.id} label={item.label} items={item.children} />
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'active' : undefined}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <Button href="#contact" variant="primary">Hire Me →</Button>
        </nav>
      </div>
    </header>
  );
}
