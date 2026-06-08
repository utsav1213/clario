import NavItem from "../components/NavItem";
import UnderlineNavItem from "../components/UnderlineNavItem";
import AnimatedButton from "../components/AnimatedButton";

export default function Navbar() {
  return (
<nav className="h-24 bg-black">
  <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">Clario</div>

      {/* Nav Links */}
      <div className="flex items-center gap-12">
        <NavItem>How it works</NavItem>
        <NavItem>Features</NavItem>

        <UnderlineNavItem>Pricing</UnderlineNavItem>
        <UnderlineNavItem>Blog</UnderlineNavItem>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-5">
        <AnimatedButton>Waitlist</AnimatedButton>
        <AnimatedButton>Contact</AnimatedButton>
        </div>
        </div>
    </nav>
  );
}
