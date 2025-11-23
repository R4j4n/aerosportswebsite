'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExploreAttractionsSection({ attractions, location_slug }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(attractions?.length / itemsPerPage) || 1;

  const startIndex = currentPage * itemsPerPage;
  const visibleAttractions = attractions?.slice(startIndex, startIndex + itemsPerPage) || [];

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section ref={sectionRef} style={{...styles.exploreSection, opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>
        <div style={styles.exploreDiagonalBg}></div>

      <div style={styles.exploreContainer}>
        <div style={styles.exploreWrapper}>
          {/* Left Side - Title and Controls */}
          <div style={styles.exploreLeft}>
            <div style={styles.exploreBadge}>
              <span>Discover</span>
            </div>
            <h2 style={styles.exploreTitle}>
              Explore <br></br> <span style={styles.exploreTitleAccent}>Our</span> Attractions
            </h2>

            {/* Navigation Controls - Only show if more than 6 attractions */}
            {totalPages > 1 && (
              <div style={styles.navigationControls}>
                <button
                  onClick={handlePrevious}
                  style={styles.navButton}
                  aria-label="Previous attractions"
                >
                  ←
                </button>
                <span style={styles.pageIndicator}>
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  style={styles.navButton}
                  aria-label="Next attractions"
                >
                  →
                </button>
              </div>
            )}

            {/* View All Button */}
            <Link href={`/${location_slug}/attractions`} prefetch>
              <button style={styles.btnViewAll}>
                All Attractions →
              </button>
            </Link>
          </div>

          {/* Right Side - Attractions Grid */}
          <div style={styles.exploreRight}>
            <div style={styles.attractionsGrid}>
              {visibleAttractions?.map((attraction, index) => {
                const cardIndex = startIndex + index;
                const isHovered = hoveredIndex === cardIndex;
                return (
                  <div
                    key={cardIndex}
                    style={{
                      ...styles.attractionCard,
                      background: isHovered ? '#39FF14' : '#fff',
                      animation: isVisible ? `slideUp 0.6s ease-out ${index * 0.1}s backwards` : 'none',
                    }}
                    onMouseEnter={() => setHoveredIndex(cardIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div style={styles.attractionImageContainer}>
                      {attraction?.smallimage && (
                        <Image
                          src={attraction.smallimage}
                          width={180}
                          height={180}
                          alt={attraction.iconalttextforhomepage || `Attraction ${cardIndex + 1}`}
                          unoptimized
                          style={styles.attractionImage}
                        />
                      )}
                    </div>
                    <h3 style={{
                      ...styles.attractionName,
                      background: isHovered ? '#39FF14' : '#fff',
                      color: '#000',
                    }}>
                      {(attraction?.name || attraction?.title || 'Attraction').split(' - ').pop()}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

const styles = {
  exploreSection: {
    background: '#000000',
    padding: '7.5rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  exploreDiagonalBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%',
    background: 'linear-gradient(135deg, #ff1152 100%, #ff4d7d 10%)',
    clipPath: 'polygon(100% 0, 100% 100%, 80% 100%, 0 0)',
    zIndex: 0,
  },
  exploreContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 3.75rem',
    position: 'relative',
    zIndex: 1,
  },
  exploreWrapper: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.5fr',
    gap: '4rem',
    alignItems: 'flex-start',
  },
  exploreLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    justifyContent: 'center',
  },
  exploreBadge: {
    display: 'inline-block',
    background: '#39FF14',
    color: '#000',
    padding: '0.625rem 1.5625rem',
    borderRadius: '1.25rem',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.125rem',
    width: 'fit-content',
  },
  exploreTitle: {
    fontSize: '3.5rem',
    color: '#fff',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    fontWeight: '900',
  },
  exploreTitleAccent: {
    color: '#ff1152',
  },
  navigationControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navButton: {
    background: '#ff1152',
    color: '#fff',
    border: 'none',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  pageIndicator: {
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    minWidth: '60px',
    textAlign: 'center',
  },
  btnViewAll: {
    background: '#39FF14',
    color: '#000',
    padding: '1.25rem 2.5rem',
    border: 'none',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: '0.0625rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 0.625rem 1.875rem rgba(57, 255, 20, 0.3)',
    width: '100%',
  },
  exploreRight: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  attractionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    width: '100%',
  },
  attractionCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    background: '#fff',
  },
  attractionImageContainer: {
    width: '250px',
    height: '250px',
    borderRadius: '0',
    overflow: 'hidden',
    marginBottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  attractionImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  attractionName: {
    fontSize: '0.9rem',
    color: '#000',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: '0',
    padding: '1rem 1rem',
    lineHeight: '1.3',
    background: '#fff',
    borderRadius: '0',
    width: '100%',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};
