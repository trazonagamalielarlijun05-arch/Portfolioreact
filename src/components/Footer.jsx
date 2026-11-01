import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
