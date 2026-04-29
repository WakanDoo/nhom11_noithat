import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "@/components/icons/mail-icon";
import { asset } from "@/lib/asset";
import { routes } from "@/lib/routes";
import styles from "./site-footer.module.css";

const footerLinks = [
  { href: routes.contact, label: "CONTACT" },
  { href: routes.products, label: "ALL STORES" },
  { href: "#", label: "PRIVACY AND DATA PROTECTION POLICY" },
] as const;

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram", src: "/figma/home/footer-ig.png" },
  { href: "https://www.facebook.com", label: "Facebook", src: "/figma/home/footer-facebook.png" },
  { href: "mailto:owlhome@gmail.com", label: "Gmail", src: "/figma/home/footer-gmail.png" },
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
                <Image
                  src={asset(item.src)}
                  alt={item.label}
                  width={40}
                  height={40}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
