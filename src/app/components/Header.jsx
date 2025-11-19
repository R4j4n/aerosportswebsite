"use client";
import "../styles/home.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = ({ location_slug, configdata }) => {

  const estoreConfig = Array.isArray(configdata)
    ? configdata.find((item) => item.key === "estorebase")
    : null;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        {/* Logo Group */}
        <div style={styles.logoGroup}>
          <Link href={`/${location_slug}`} style={styles.logoLink} prefetch>
            <Image
              src="https://storage.googleapis.com/aerosports/logo_white.png"
              width={50}
              height={50}
              alt="AeroSports Logo"
              unoptimized
              style={styles.logoImage}
            />
          </Link>
          <span style={styles.logoText}>AeroSports</span>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.nav}>
          <Link href={`#attractions`} style={styles.navLink}>
            Attractions
          </Link>
          <Link href={`#pricing`} style={styles.navLink}>
            Pricing
          </Link>
          <Link href={`#parties`} style={styles.navLink}>
            Parties
          </Link>
          <Link href={`/${location_slug}/contactus`} style={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div style={styles.headerActions}>
          <Link href={`/${location_slug}/contactus`} prefetch>
            <button style={styles.btnHeader}>
              Inquiry
            </button>
          </Link>
          {estoreConfig?.value && (
            <Link href={estoreConfig.value} target="_blank" prefetch>
              <button style={{ ...styles.btnHeader, ...styles.btnBook }}>
                Book Now
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          style={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span style={styles.hamburgerIcon}>☰</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div style={styles.mobileNav}>
          <Link href={`#attractions`} style={styles.mobileNavLink}>
            Attractions
          </Link>
          <Link href={`#pricing`} style={styles.mobileNavLink}>
            Pricing
          </Link>
          <Link href={`#parties`} style={styles.mobileNavLink}>
            Parties
          </Link>
          <Link href={`/${location_slug}/contactus`} style={styles.mobileNavLink}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#000000',
    borderBottom: '3px solid #caff1a',
    padding: '1.2rem 2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
  },
  headerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    flexShrink: 0,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    width: '50px',
    height: 'auto',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '1.3rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#caff1a',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  navLink: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '0.5rem 0',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s ease',
    position: 'relative',
    cursor: 'pointer',
  },
  headerActions: {
    display: 'flex',
    gap: '1rem',
    flexShrink: 0,
  },
  btnHeader: {
    padding: '0.7rem 1.5rem',
    border: '2px solid #caff1a',
    background: 'transparent',
    color: '#caff1a',
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  btnBook: {
    background: '#ff1152',
    borderColor: '#ff1152',
    color: 'white',
    boxShadow: '0 6px 20px rgba(255, 17, 82, 0.4)',
  },
  mobileMenuToggle: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: '#caff1a',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  hamburgerIcon: {
    fontSize: '1.5rem',
  },
  mobileNav: {
    display: 'none',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem 2rem',
    backgroundColor: '#0a0a0a',
    borderTop: '1px solid rgba(202, 255, 26, 0.2)',
  },
  mobileNavLink: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
    display: 'block',
  },
};

export default Header;
