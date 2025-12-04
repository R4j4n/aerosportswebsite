import "../../styles/attractions.css";
import Link from "next/link";

const CelebrateSection = ({ locationSlug }) => {
	return (
		<>
			<style>{`
				.eventCardBody > a {
					align-self: flex-start !important;
					width: auto !important;
				}

				.eventCard .aero_attraction_card_cta {
					display: inline-block !important;
					width: auto !important;
					align-self: flex-start !important;
					transition: all 0.3s ease !important;
				}

				.eventCard .aero_attraction_card_cta:hover {
					border: 3px solid #39FF14 !important;
					box-shadow: 0 6px 20px rgba(255, 17, 82, 0.5), 0 0 30px rgba(202, 255, 26, 0.5), 0 0 20px rgba(57, 255, 20, 0.8) !important;
					transform: translateX(5px) !important;
				}

				.eventCard:hover .aero_attraction_card_cta {
					border: 3px solid #39FF14 !important;
					box-shadow: 0 6px 20px rgba(255, 17, 82, 0.5), 0 0 30px rgba(202, 255, 26, 0.5), 0 0 20px rgba(57, 255, 20, 0.8) !important;
					transform: translateX(5px) !important;
				}

				.eventCard:hover .aero_attraction_card_cta::before {
					left: 100%;
				}

				.eventCard {
					transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
					border: 2px solid #39FF14 !important;
					position: relative;
				}

				.eventCard:hover {
					transform: translateY(-8px) !important;
					border: 2px solid #39FF14 !important;
					box-shadow: 0 20px 50px rgba(255, 17, 82, 0.5), 0 0 60px rgba(202, 255, 26, 0.4), inset 0 0 40px rgba(57, 255, 20, 0.15) !important;
				}
			`}</style>
			<section style={styles.celebrateSection}>
			<div style={styles.celebrateContainer} >
				{/* Section Header */}
				<div style={styles.celebrateHeader}>
					<div style={styles.celebrateBadge}>
						<span>Celebrate</span>
					</div>
					<h2 style={styles.celebrateTitle}>
						Elevate Your{" "}
						<span style={styles.celebrateTitleAccent}>Event</span>
					</h2>
					<p style={styles.celebrateSubtitle}>
						Turn any occasion into an unforgettable adventure at AeroSports
					</p>
				</div>

				{/* Events Grid */}
				<div
				style={styles.celebrateGrid}
				className="gap-6 sm:gap-8 md:gap-10 lg:gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
			>
					{/* Team Building */}
					<article style={styles.eventCard} className="h-full">
						<div
							style={{
								...styles.eventCardImage,
								backgroundImage:
									"url('https://storage.googleapis.com/aerosports/team-building-aerosports-trampoline-park.png')",
								height: "150px",
							}}
							className="sm:h-56 md:h-[200px] event-card-image"
							role="img"
							aria-label="Team Building Events"
						>
							<h3 style={styles.eventCardTitle} className="text-sm sm:text-base md:text-xl">Team Building</h3>
						</div>
						<div style={styles.eventCardBody} className="p-4 sm:p-5 md:p-8">
							<p style={styles.eventCardText}>
								Promote collaboration and problem-solving with our engaging
								team-based attractions.
							</p>
							<Link
								href={`/${locationSlug}/groups-events/corporate-parties-events-groups`}
								className="aero_attraction_card_cta"
								style={{ width: "fit-content" }}
							>
								More Info
							</Link>
						</div>
					</article>

					{/* Birthday Parties */}
					<article style={styles.eventCard} className="h-full">
						<div
							style={{
								...styles.eventCardImage,
								backgroundImage:
									"url('https://storage.googleapis.com/aerosports/celeberate-your-birthday-parties-at-aerosports.png')",
								height: "150px",
							}}
							className="sm:h-56 md:h-[200px] event-card-image"
							role="img"
							aria-label="Birthday Parties"
						>
							<h3 style={styles.eventCardTitle} className="text-sm sm:text-base md:text-xl">Birthday Parties</h3>
						</div>
						<div style={styles.eventCardBody} className="p-4 sm:p-5 md:p-8">
							<p style={styles.eventCardText}>
								All-inclusive packages with private room, host, pizza, and
								open-jump access.
							</p>
							<Link
								href={`/${locationSlug}/kids-birthday-parties`}
								className="aero_attraction_card_cta"
								style={{ width: "fit-content" }}
							>
								More Info
							</Link>
						</div>
					</article>

					{/* Field Trips */}
					<article style={styles.eventCard} className="h-full">
						<div
							style={{
								...styles.eventCardImage,
								backgroundImage:
									"url('https://storage.googleapis.com/aerosports/schools-field-trips-at-aerosports.png')",
								height: "150px",
							}}
							className="sm:h-56 md:h-[200px] event-card-image"
							role="img"
							aria-label="Field Trips"
						>
							<h3 style={styles.eventCardTitle} className="text-sm sm:text-base md:text-xl">Field Trips</h3>
						</div>
						<div style={styles.eventCardBody} className="p-4 sm:p-5 md:p-8">
							<p style={styles.eventCardText}>
								Special group rates for schools and educational
								organizations.
							</p>
							<Link
								href={`/${locationSlug}/groups-events/school-groups`}
								className="aero_attraction_card_cta"
								style={{ width: "fit-content" }}
							>
								More Info
							</Link>
						</div>
					</article>
				</div>
			</div>
		</section>
		</>
	);
};

const styles = {
	celebrateSection: {
		background: "#000000",
		padding: "3rem 0",
		position: "relative",
		overflow: "hidden",
	},
	celebrateContainer: {
		maxWidth: "1400px",
		margin: "0 auto",
		padding: "0 2rem",
		position: "relative",
		zIndex: 1,
	},
	celebrateHeader: {
		textAlign: "center",
		marginBottom: "4rem",
		maxWidth: "800px",
		margin: "0 auto 4rem",
	},
	celebrateBadge: {
		display: "inline-block",
		background: "#39FF14",
		color: "#000000",
		padding: "0.6rem 1.5rem",
		borderRadius: "50px",
		fontSize: "0.75rem",
		fontWeight: "700",
		textTransform: "uppercase",
		letterSpacing: "1.25px",
		marginBottom: "1.5rem",
	},
	celebrateTitle: {
		fontSize: "clamp(2.5rem, 8vw, 4rem)",
		fontWeight: "900",
		textTransform: "uppercase",
		lineHeight: "0.95",
		marginBottom: "1.5rem",
		color: "#ffffff",
		textRendering: "geometricPrecision",
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
	},
	celebrateTitleAccent: {
		color: "#ff1152",
	},
	celebrateSubtitle: {
		fontSize: "1.1rem",
		color: "rgba(255, 255, 255, 0.8)",
		lineHeight: "1.7",
		fontWeight: "700",
		textRendering: "geometricPrecision",
		WebkitFontSmoothing: "antialiased",
	},
	celebrateGrid: {
		animation: "fadeInUp 0.8s ease-out",
	},
	eventCard: {
		// background: "#ffffff",
		borderRadius: "1rem",
		overflow: "hidden",
		boxShadow: "0 15px 50px rgba(0, 0, 0, 0.4)",
		transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
		display: "flex",
		flexDirection: "column",
		border: "2px solid #39FF14",
	},
	eventCardImage: {
		width: "100%",
		height: "200px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		// color: "#ffffff",
		textAlign: "center",
		padding: "2rem",
		// backgroundBlendMode: "multiply",
	},
	eventCardTitle: {
		fontSize: "1.3rem",
		fontWeight: "900",
		textTransform: "uppercase",
		letterSpacing: "1.2px",
		color: "#ffffff",
		lineHeight: "1.2",
		textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
		textRendering: "geometricPrecision",
		WebkitFontSmoothing: "antialiased",
	},
	eventCardBody: {
		padding: "2rem",
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	},
	eventCardText: {
		fontSize: "0.95rem",
		lineHeight: "1.7",
		color: "#ffffff",
		marginBottom: "1.5rem",
		flex: 1,
		fontWeight: "600",
		textRendering: "geometricPrecision",
		WebkitFontSmoothing: "antialiased",
	},
	eventCardLink: {
		fontSize: "0.85rem",
		fontWeight: "700",
		textTransform: "uppercase",
		letterSpacing: "1px",
		color: "#ff1152",
		textDecoration: "none",
		transition: "all 0.3s ease",
		display: "inline-block",
		padding: "0.5rem 0",
		position: "relative",
	},
};

export default CelebrateSection;
