import Link from "next/link";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { GmailIcon } from "@/components/icons/gmail-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { MailIcon } from "@/components/icons/mail-icon";
import { routes } from "@/lib/routes";
import styles from "./site-footer.module.css";

const footerLinks = [
  { href: routes.contact, label: "CONTACT" },
  { href: routes.products, label: "ALL STORES" },
  { href: "#", label: "PRIVACY AND DATA PROTECTION POLICY" },
] as const;

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram", icon: <InstagramIcon className={styles.socialIcon} /> },
  { href: "https://www.facebook.com", label: "Facebook", icon: <FacebookIcon className={styles.socialIcon} /> },
  { href: "mailto:owlhome@gmail.com", label: "Gmail", icon: <GmailIcon className={styles.socialIcon} /> },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <nav className={styles.links} aria-label="Footer navigation">
            {footerLinks.map((item, index) => (
              <span key={item.label} className={styles.linkItem}>
                {index > 0 ? <span className={styles.divider} aria-hidden="true" /> : null}
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>

          <a href="mailto:owlhome@gmail.com" className={styles.email}>
            <MailIcon className={styles.mailIcon} />
            <span>owlhome@gmail.com</span>
          </a>
        </div>

        <div className={styles.social}>
          <span>Follow us on:</span>
          <div className={styles.socialList}>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={styles.socialLink}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
