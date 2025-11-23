import "../styles/home.css";
import "../styles/promotions.css";
import Image from "next/image";
import Link from "next/link";
import { getDataByParentId } from "@/utils/customFunctions";
import Countup from "@/components/Countup";
import MotionImage from "@/components/MotionImage";
import PromotionModal from "@/components/model/PromotionModal";
import ExploreAttractionsSection from "@/components/ExploreAttractionsSection";
import { fetchsheetdata, fetchMenuData, getWaiverLink,generateMetadataLib,generateSchema } from "@/lib/sheets";

export async function generateMetadata({ params }) {
  const metadata = await generateMetadataLib({
    location: params.location_slug,
    category: '',
    page: ''
  });
  return metadata;
}

const Home = async ({ params }) => {
  const location_slug = params?.location_slug;
  const [data, dataconfig,promotions, locationData,waiverLink] = await Promise.all([
    fetchMenuData(location_slug),
    fetchsheetdata('config', location_slug),
    fetchsheetdata('promotions',location_slug),
    fetchsheetdata('locations',location_slug),
    getWaiverLink(location_slug)
  ]);

  const promotionPopup = Array.isArray(dataconfig)
    ? dataconfig.filter((item) => item.key === "promotion-popup")
    : [];

  const estoreConfig = Array.isArray(dataconfig)
    ? dataconfig.find((item) => item.key === "estorebase")
    : null;

  const header_image = Array.isArray(data) ? data.filter((item) => item.path === "home") : [];
  const seosection = header_image?.[0]?.seosection || "";
  const attractionsData = Array.isArray(data) ? getDataByParentId(data, "attractions") || [] : [];
  const jsonLDschema = await generateSchema( header_image?.[0],locationData,'','');
 
  return (
    <main style={styles.main}>
      {promotionPopup.length > 0 && <PromotionModal promotionPopup={promotionPopup} />}

      {/* Hero Section - Full Width with Clean, Energetic Design */}
      <section style={styles.heroSection}>
        <MotionImage pageData={header_image} waiverLink={waiverLink} locationData={locationData} />

        <div style={styles.heroOverlay}>
          <div style={styles.heroContainer}>
            <div style={styles.heroBadge}>
              Experience Pure Adrenaline
            </div>

            <h1 style={styles.heroTitle}>
              Jump Into The Fun at <span style={styles.heroTitleAccent}>AeroSports {locationData?.[0]?.location || 'Oakville'}</span>
            </h1>

            <p style={styles.heroSubtitle}>
              The ultimate indoor trampoline park with 130+ trampolines, 27,000 sq ft of pure excitement, and 8+ epic attractions waiting for you.
            </p>

            <div className="stats-container">
              <div className="stat-box green">
                <div className="stat-number green">27,000+</div>
                <div className="stat-label">Sq Ft of Fun</div>
              </div>
              <div className="stat-box pink">
                <div className="stat-number pink">8+</div>
                <div className="stat-label">Attractions</div>
              </div>
              <div className="stat-box mixed">
                <div className="stat-number gradient">All Ages</div>
                <div className="stat-label">Welcome</div>
              </div>
            </div>

            <div style={styles.heroCTA}>
              <button style={{ ...styles.btnCTA, ...styles.btnPrimary }}>
                🎪 Start Jumping
              </button>
              <button style={{ ...styles.btnCTA, ...styles.btnSecondary }}>
                📅 Book a Party
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section - Diagonal Split Layout */}
      {attractionsData?.[0]?.children?.length > 0 && seosection && (
        <section style={styles.seoSection}>
          <div style={styles.diagonalBg}></div>

          <section style={styles.seoContainer}>
            {/* Left Side - Content */}
            <div style={styles.seoLeft}>
              <div style={styles.seoContent}>
                <div style={styles.seoBadge}>
                  <span>Ultimate Indoor Entertainment</span>
                </div>
                <h1 style={styles.seoTitle}>Discover <span style={styles.seoTitleAccent}>AeroSports</span> {locationData?.[0]?.location || 'Oakville'}</h1>
                <p style={styles.seoSubtitle}>The Ultimate Indoor Trampoline Park & Family Entertainment Center</p>
              </div>

              <div style={styles.seoCard}>
                <p style={styles.seoText}>
                  Welcome to <strong style={styles.seoHighlight}>AeroSports {locationData?.[0]?.location || 'Oakville'}</strong>, the top choice for <strong style={styles.seoHighlight}>indoor activities</strong>. Our trampoline park spans over 27,000 square feet, providing endless fun for kids, teens, and adults. Perfect for family outings and solo adventurers alike, AeroSports offers an array of activities including <strong style={styles.seoHighlight}>wall-to-wall trampolines</strong>, thrilling <strong style={styles.seoHighlight}>climbing walls</strong>, and an exciting <strong style={styles.seoHighlight}>dodgeball arena</strong>.
                </p>
              </div>

              <div style={styles.seoButtonGroup}>
                <a href={`/${location_slug}/pricing-promos`} style={styles.seoBtn}>
                  View Pricing & Promos
                </a>
                <a href={estoreConfig?.value || '#'} style={{...styles.seoBtn, ...styles.seoBtnSecondary}}>
                  Buy Your Tickets
                </a>
              </div>
            </div>

            {/* Right Side - Map & Location Info */}
            <div style={styles.seoRight}>
              <div style={styles.mapCard}>
                <h2 style={styles.locationTitle}>Where are we located?</h2>
                <div style={styles.mapContainer}>
                  <iframe
                    src={`https://maps.google.com/maps?width=720&height=600&hl=en&q=Aerosports+${locationData?.[0]?.location}&t=&z=13&ie=UTF8&iwloc=B&output=embed`}
                    style={{ width: '100%', height: '400px', border: 'none', borderRadius: '0px' }}
                  />
                </div>
                <div style={styles.locationInfo}>
                  <p style={styles.locationAddress}><strong>{locationData?.[0]?.address || 'Visit our location'}</strong></p>
                  <p style={styles.locationDescription}>We have locations all over the globe. You can find your local park using our park locator on our website.</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}

      {/* Plan Your Visit Section - Comprehensive Layout */}
      {attractionsData?.[0]?.children?.length > 0 && seosection && (
        <section style={styles.planVisitSection}>
          <div style={styles.planVisitDiagonalBg}></div>

          <div style={styles.planContentWrapper}>
            {/* Section Header */}
            <div style={styles.planHeader}>
              <div style={styles.planBadge}>
                <span>Plan Your Visit</span>
              </div>
              <h2 style={styles.planTitle}>
                Ready For<br />
                <span style={styles.planTitleAccent}>AeroSports?</span>
              </h2>
              <p style={styles.planSubtitle}>
                Searching for indoor activities? Look no further! AeroSports is the best place for indoor fun, whether you&apos;re planning an unforgettable kids&apos; birthday party, a family outing, or an exciting group event.
              </p>
            </div>

            
            </div>
        </section>
      )}

      {/* Celebrate Your Event Section - Black Background */}
{attractionsData?.[0]?.children?.length > 0 && (
  <section style={styles.celebrateSection}>
    <div style={styles.celebrateContainer}>
      {/* Section Header */}
      <div style={styles.celebrateHeader}>
        <div style={styles.celebrateBadge}>
          <span>Celebrate</span>
        </div>
        <h2 style={styles.celebrateTitle}>
          Elevate Your <span style={styles.celebrateTitleAccent}>Event</span>
        </h2>
        <p style={styles.celebrateSubtitle}>
          Turn any occasion into an unforgettable adventure at AeroSports
        </p>
      </div>

      {/* Events Grid */}
      <div style={styles.celebrateGrid}>
        {/* Team Building */}
        <article style={styles.eventCard}>
          <div
            style={{
              ...styles.eventCardImage,
              backgroundImage:
                "url('https://storage.googleapis.com/aerosports/team-building-aerosports-trampoline-park.png')",
            }}
            role="img"
            aria-label="Team Building Events"
          >
            <h3 style={styles.eventCardTitle}>Team Building</h3>
          </div>
          <div style={styles.eventCardBody}>
            <p style={styles.eventCardText}>
              Promote collaboration and problem-solving with our engaging team-based attractions.
            </p>
            <Link
              href={`/${location_slug}/groups-events/corporate-parties-events-groups`}
              style={styles.eventCardLink}
            >
              More Info →
            </Link>
          </div>
        </article>

        {/* Birthday Parties */}
        <article style={styles.eventCard}>
          <div
            style={{
              ...styles.eventCardImage,
              backgroundImage:
                "url('https://storage.googleapis.com/aerosports/celeberate-your-birthday-parties-at-aerosports.png')",
            }}
            role="img"
            aria-label="Birthday Parties"
          >
            <h3 style={styles.eventCardTitle}>Birthday Parties</h3>
          </div>
          <div style={styles.eventCardBody}>
            <p style={styles.eventCardText}>
              All-inclusive packages with private room, host, pizza, and open-jump access.
            </p>
            <Link
              href={`/${location_slug}/kids-birthday-parties`}
              style={styles.eventCardLink}
            >
              Compare Packages →
            </Link>
          </div>
        </article>

        {/* Field Trips */}
        <article style={styles.eventCard}>
          <div
            style={{
              ...styles.eventCardImage,
              backgroundImage:
                "url('https://storage.googleapis.com/aerosports/schools-field-trips-at-aerosports.png')",
            }}
            role="img"
            aria-label="Field Trips"
          >
            <h3 style={styles.eventCardTitle}>Field Trips</h3>
          </div>
          <div style={styles.eventCardBody}>
            <p style={styles.eventCardText}>
              Special group rates for schools and educational organizations.
            </p>
            <Link
              href={`/${location_slug}/groups-events/school-groups`}
              style={styles.eventCardLink}
            >
              More Info →
            </Link>
          </div>
        </article>
      </div>
    </div>
  </section>
)}

      {/* Explore Attractions - Black Background with Grid Layout */}
      {attractionsData?.[0]?.children?.length > 0 && (
        <ExploreAttractionsSection
          attractions={attractionsData[0]?.children}
          location_slug={location_slug}
        />
      )}

      {/* Statistics Section - Centered Container
      {attractionsData?.[0]?.children?.length > 0 && (
        <section className="aero_home_feature_section-bg">
          <section className="aero-max-container aero_home_feature_section">
            {[
              { num: 130, label: "Trampolines" },
              { num: 27000, label: "Square Feet" },
              { num: 4, label: "Party Rooms" },
              { num: 6, label: "Fun Attractions" }
            ].map((item, i) => (
              <article key={i} className="aero_home_feature_section-card">
                <Countup num={item.num} />
                <div>{item.label}</div>
              </article>
            ))}
          </section>
        </section>
      )} */}
      <script type="application/ld+json" suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: jsonLDschema }}
      />
    </main>
  );
};

const styles = {
  main: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: '1.6',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  heroSection: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    marginTop: '-200px',
    paddingTop: '200px',
    boxSizing: 'border-box',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(10, 10, 10, 0.6) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    padding: '2rem',
    paddingTop: '200px',
  },
  heroContainer: {
    maxWidth: '1000px',
    textAlign: 'center',
    animation: 'fadeInUp 1s ease-out',
  },
  heroBadge: {
    display: 'inline-block',
    background: 'transparent',
    border: '2px solid #39FF14',
    color: '#39FF14',
    padding: '0.8rem 1.8rem',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '2rem',
    animation: 'scaleIn 0.8s ease-out',
  },
  heroTitle: {
    fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    color: '#ffffff',
    animation: 'fadeInUp 1s ease-out 0.2s backwards',
  },
  heroTitleAccent: {
    color: '#39FF14',
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: '#e0e0e0',
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
    lineHeight: '1.8',
    animation: 'fadeInUp 1s ease-out 0.4s backwards',
  },
  heroCTA: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    animation: 'fadeInUp 1s ease-out 0.8s backwards',
  },
  btnCTA: {
    padding: '1.1rem 2.8rem',
    fontSize: '1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    border: '2px solid',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  btnPrimary: {
    background: '#f00c74',
    borderColor: '#f00c74',
    color: 'white',
    boxShadow: '0 8px 25px rgba(240, 12, 116, 0.5)',
  },
  btnSecondary: {
    background: 'transparent',
    borderColor: '#39FF14',
    color: '#39FF14',
    boxShadow: '0 8px 25px rgba(202, 255, 26, 0.3)',
  },
  // SEO Section - Diagonal Split Layout
  seoSection: {
    position: 'relative',
    width: '100%',
    background: '#000000',
    overflow: 'visible',
    padding: '0',
    margin: '0',
  },
  diagonalBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '55%',
    height: '100%',
    background: 'linear-gradient(135deg, #ff1152 0%, #ff4d7d 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 100%)',
    zIndex: 0,
  },
  seoContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '6rem 2rem',
    alignItems: 'center',
    minHeight: '65vh',
  },
  seoLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  seoContent: {
    animation: 'fadeInUp 1s ease-out',
  },
  seoBadge: {
    display: 'inline-block',
    background: 'transparent',
    border: '2px solid #39FF14',
    color: '#39FF14',
    padding: '0.8rem 1.8rem',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem',
    width: 'fit-content',
  },
  seoTitle: {
    fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  seoTitleAccent: {
    color: '#ff1152',
  },
  seoSubtitle: {
    fontSize: '1.1rem',
    color: '#e0e0e0',
    lineHeight: '1.8',
  },
  seoCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#000000',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    animation: 'fadeInUp 1s ease-out 0.2s backwards',
  },
  seoText: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#000000',
  },
  seoHighlight: {
    color: '#ff1152',
    fontWeight: '700',
  },
  seoButtonGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    animation: 'fadeInUp 1s ease-out 0.4s backwards',
  },
  seoBtn: {
    padding: '1rem 2rem',
    fontSize: '0.95rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: '2px solid #ff1152',
    background: '#ff1152',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    boxShadow: '0 6px 20px rgba(255, 17, 82, 0.4)',
  },
  seoBtnSecondary: {
    background: 'transparent',
    color: '#ff1152',
    border: '2px solid #ff1152',
  },
  seoRight: {
    animation: 'slideInRight 1s ease-out',
  },
  mapCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
  },
  locationTitle: {
    fontSize: '1.8rem',
    fontWeight: '900',
    color: '#000000',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  mapContainer: {
    marginBottom: '1.5rem',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  locationInfo: {
    color: '#000000',
  },
  locationAddress: {
    fontSize: '1.1rem',
    color: '#ff1152',
    marginBottom: '0.5rem',
  },
  locationDescription: {
    fontSize: '0.95rem',
    color: '#666666',
    lineHeight: '1.6',
  },
  // Plan Your Visit Section - Comprehensive Layout
  planVisitSection: {
    position: 'relative',
    background: '#000000',
    padding: '2rem 0 0rem',
    overflow: 'hidden',
  },
  planVisitDiagonalBg: {
    position: 'absolute',
    top: '-5rem',
    left: 0,
    right: 0,
    height: '25rem',
    background: 'linear-gradient(135deg, #ff1152 0%, #ff4d7d 100%)',
    clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)',
    zIndex: 0,
  },
  planContentWrapper: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  planHeader: {
    marginBottom: '3.75rem',
    maxWidth: '50rem',
  },
  planBadge: {
    display: 'inline-block',
    background: '#39FF14',
    color: '#000000',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.25px',
    marginBottom: '1.5rem',
  },
  planTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '900',
    textTransform: 'uppercase',
    lineHeight: '0.95',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  planTitleAccent: {
    color: '#39FF14',
  },
  planSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.7',
  },
  planGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '2.5rem',
    marginBottom: '3.75rem',
  },
  whyChooseCard: {
    background: '#ffffff',
    padding: '3rem',
    borderRadius: '1.5rem',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
  },
  whyTitle: {
    fontSize: '2.25rem',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
    lineHeight: '1.1',
  },
  whyTitleAccent: {
    color: '#ff1152',
  },
  whyDivider: {
    width: '3.75rem',
    height: '0.25rem',
    background: '#ff1152',
    marginBottom: '2.2rem',
  },
  whyFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  whyFeature: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: '3.125rem',
    height: '3.125rem',
    background: 'linear-gradient(135deg, #ff1152, #ff4d7d)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  featureContent: {
    flex: 1,
  },
  featureContentTitle: {
    fontSize: '1.125rem',
    color: '#000000',
    marginBottom: '0.3rem',
    fontWeight: '700',
  },
  featureContentText: {
    fontSize: '0.875rem',
    color: '#666666',
    lineHeight: '1.7',
  },
  quickActionsCard: {
    background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    border: '2px solid #ff1152',
    boxShadow: '0 30px 80px rgba(255, 17, 82, 0.3)',
  },
  quickTitle: {
    fontSize: '1.375rem',
    color: '#39FF14',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  quickButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },
  quickBtn: {
    background: '#ff1152',
    color: '#ffffff',
    padding: '1.25rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.6px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    gap: '0.5rem',
  },
  quickBtnIcon: {
    fontSize: '1.5rem',
  },
  quickBtnSecondary: {
    background: 'transparent',
    border: '2px solid #39FF14',
    color: '#39FF14',
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #ff1152, #ff4d7d)',
    padding: '3.75rem',
    borderRadius: '1.5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 1,
  },
  ctaTitle: {
    fontSize: '2.625rem',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
    lineHeight: '1.15',
  },
  ctaText: {
    fontSize: '1.125rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2.2rem',
    maxWidth: '43.75rem',
    margin: '0 auto 2.2rem',
    lineHeight: '1.7',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1.25rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnWhite: {
    background: '#ffffff',
    color: '#ff1152',
    padding: '1.25rem 2.8rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.6px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
  btnOutlineWhite: {
    background: 'transparent',
    color: '#ffffff',
    padding: '1.25rem 2.8rem',
    border: '3px solid #ffffff',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.6px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
  // Pricing & Packages Section
  pricingSection: {
    background: '#000',
    padding: '7.5rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  pricingSectionBefore: {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-30%',
    width: '80%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(255,17,82,0.15) 0%, transparent 60%)',
  },
  pricingContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 3.75rem',
    position: 'relative',
    zIndex: 1,
  },
  pricingHeader: {
    textAlign: 'center',
    marginBottom: '4.375rem',
  },
  pricingBadge: {
    display: 'inline-block',
    background: '#000',
    color: '#39FF14',
    padding: '0.625rem 1.875rem',
    borderRadius: '1.5625rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.125rem',
    marginBottom: '1.25rem',
  },
  pricingTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '0.9375rem',
    lineHeight: 1,
  },
  pricingTitleAccent: {
    color: '#ff1152',
  },
  pricingSubtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,0.8)',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.1875rem',
  },
  pricingCard: {
    background: '#fff',
    padding: '3.125rem 2.1875rem',
    borderRadius: '1.5625rem',
    textAlign: 'center',
    boxShadow: '0 1.25rem 3.75rem rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    position: 'relative',
  },
  pricingCardFeatured: {
    border: '4px solid #000',
    transform: 'scale(1.05)',
  },
  featuredBadge: {
    position: 'absolute',
    top: '-0.9375rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#39FF14',
    color: '#000',
    padding: '0.5rem 1.25rem',
    borderRadius: '1.25rem',
    fontSize: '0.6875rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.09375rem',
  },
  pricingIcon: {
    fontSize: '4rem',
    marginBottom: '1.5625rem',
  },
  pricingCardTitle: {
    fontSize: '1.75rem',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
  },
  pricingCardDescription: {
    fontSize: '0.9375rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '1.875rem',
  },
  btnPricingCard: {
    background: '#ff1152',
    color: '#fff',
    padding: '1rem 2.5rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.0625rem',
    transition: 'all 0.3s ease',
    width: '100%',
    textDecoration: 'none',
    display: 'inline-block',
  },
  btnPricingCardFeatured: {
    background: '#000',
    color: '#39FF14',
    padding: '1rem 2.5rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.0625rem',
    transition: 'all 0.3s ease',
    width: '100%',
    textDecoration: 'none',
    display: 'inline-block',
  },
  // Ready to Jump Section
  readyJumpSection: {
    background: '#39FF14',
    padding: '7.5rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  readyJumpBefore: {
    content: '""',
    position: 'absolute',
    bottom: '-50%',
    right: '-20%',
    width: '70%',
    height: '120%',
    background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 60%)',
  },
  readyJumpContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 3.75rem',
    position: 'relative',
    zIndex: 1,
  },
  readyJumpGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '5rem',
    alignItems: 'center',
  },
  readyJumpVisual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visualCircle: {
    width: '21.875rem',
    height: '21.875rem',
    background: 'linear-gradient(135deg, #ff1152, #ff006e)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1.875rem 5rem rgba(255,17,82,0.4)',
    animation: 'float 3s ease-in-out infinite',
  },
  visualIcon: {
    fontSize: '7.5rem',
    filter: 'drop-shadow(0 0.625rem 1.25rem rgba(0,0,0,0.2))',
  },
  readyJumpContent: {
    maxWidth: '40.625rem',
  },
  readyJumpBadge: {
    display: 'inline-block',
    background: '#000',
    color: '#39FF14',
    padding: '0.625rem 1.5625rem',
    borderRadius: '1.25rem',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.125rem',
    marginBottom: '1.5625rem',
  },
  readyJumpTitle: {
    fontSize: '3.5rem',
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: '1.875rem',
    lineHeight: '1.1',
  },
  readyJumpTitleAccent: {
    color: '#ff1152',
  },
  readyJumpText: {
    fontSize: '1.0625rem',
    color: '#000',
    lineHeight: '1.8',
    marginBottom: '1.5625rem',
  },
  readyJumpTextStrong: {
    fontWeight: 'bold',
    color: '#ff1152',
  },
  btnReadyJump: {
    background: '#000',
    color: '#39FF14',
    padding: '1.25rem 3.125rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.0625rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 0.625rem 1.875rem rgba(0,0,0,0.3)',
    textDecoration: 'none',
    display: 'inline-block',
  },
  // Celebrate Your Event Section
  celebrateSection: {
    background: '#000000',
    padding: '3rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  celebrateContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 1,
  },
  celebrateHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem',
  },
  celebrateBadge: {
    display: 'inline-block',
    background: '#39FF14',
    color: '#000000',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.25px',
    marginBottom: '1.5rem',
  },
  celebrateTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '900',
    textTransform: 'uppercase',
    lineHeight: '0.95',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  celebrateTitleAccent: {
    color: '#ff1152',
  },
  celebrateSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.7',
  },
  celebrateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    animation: 'fadeInUp 0.8s ease-out',
  },
  eventCard: {
    background: '#ffffff',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgba(57, 255, 20, 0.1)',
  },
  eventCardImage: {
    width: '100%',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(255, 17, 82, 0.85), rgba(255, 77, 125, 0.85))',
    backgroundBlendMode: 'multiply',
  },
  eventCardTitle: {
    fontSize: '1.3rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    color: '#ffffff',
    lineHeight: '1.2',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },
  eventCardBody: {
    padding: '2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  eventCardText: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#444444',
    marginBottom: '1.5rem',
    flex: 1,
  },
  eventCardLink: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#ff1152',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    padding: '0.5rem 0',
    position: 'relative',
  },
};

export default Home;