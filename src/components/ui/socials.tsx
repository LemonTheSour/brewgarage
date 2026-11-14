import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, MailIcon } from "./icons";

const links = [
  {
    label: "Instagram",
    href: site.socials.instagram,
    Icon: InstagramIcon,
    hover: "hover:text-[#E1306C]",
  },
  {
    label: "Facebook",
    href: site.socials.facebook,
    Icon: FacebookIcon,
    hover: "hover:text-[#1877F2]",
  },
  {
    label: "Email",
    href: site.socials.email ? `mailto:${site.socials.email}` : "",
    Icon: MailIcon,
    hover: "hover:text-brand",
  },
];

// Hover colours apply whether or not a link is set yet, so the icons
// stay interactive-looking in the demo before real URLs are added.
export default function Socials({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ label, href, Icon, hover }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className={`block transition-colors ${hover}`}
            >
              <Icon size={size} />
            </a>
          ) : (
            <span title={label} className={`block transition-colors ${hover}`}>
              <Icon size={size} />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
