import { Button } from "@/components/ui/button";
import Link from "next/link";

const CelebrateSection = ({ locationSlug }) => {
	return (
		<section style={styles.celebrateSection}>
			<div style={styles.celebrateContainer}>
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
								Promote collaboration and problem-solving with our engaging
								team-based attractions.
							</p>
							<Link
								href={`/${locationSlug}/groups-events/corporate-parties-events-groups`}
								passHref
							>
								<Button variant="textAccent" size="sm" asChild>
									<span>More Info →</span>
								</Button>
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
								All-inclusive packages with private room, host, pizza, and
								open-jump access.
							</p>
							<Link
								href={`/${locationSlug}/kids-birthday-parties`}
								passHref
							>
								<Button variant="textAccent" size="sm" asChild>
									<span>More Info →</span>
								</Button>
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
								Special group rates for schools and educational
								organizations.
							</p>
							<Link
								href={`/${locationSlug}/groups-events/school-groups`}
								passHref
							>
								<Button variant="textAccent" size="sm" asChild>
									<span>More Info →</span>
								</Button>
							</Link>
						</div>
					</article>
				</div>
			</div>
		</section>
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
	},
	celebrateTitleAccent: {
		color: "#ff1152",
	},
	celebrateSubtitle: {
		fontSize: "1.1rem",
		color: "rgba(255, 255, 255, 0.8)",
		lineHeight: "1.7",
	},
	celebrateGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "2.5rem",
		animation: "fadeInUp 0.8s ease-out",
	},
	eventCard: {
		background: "#ffffff",
		borderRadius: "1rem",
		overflow: "hidden",
		boxShadow: "0 15px 50px rgba(0, 0, 0, 0.4)",
		transition: "all 0.3s ease",
		display: "flex",
		flexDirection: "column",
		border: "1px solid rgba(57, 255, 20, 0.1)",
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
		color: "#ffffff",
		textAlign: "center",
		padding: "2rem",
		background:
			"linear-gradient(135deg, rgba(255, 17, 82, 0.85), rgba(255, 77, 125, 0.85))",
		backgroundBlendMode: "multiply",
	},
	eventCardTitle: {
		fontSize: "1.3rem",
		fontWeight: "800",
		textTransform: "uppercase",
		letterSpacing: "1.2px",
		color: "#ffffff",
		lineHeight: "1.2",
		textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
	},
	eventCardBody: {
		padding: "2rem",
		flex: 1,
		display: "flex",
		flexDirection: "column",
	},
	eventCardText: {
		fontSize: "0.95rem",
		lineHeight: "1.7",
		color: "#444444",
		marginBottom: "1.5rem",
		flex: 1,
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
