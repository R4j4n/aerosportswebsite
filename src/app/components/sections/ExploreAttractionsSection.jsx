'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function ExploreAttractionsSection({ attractions, location_slug }) {
	const [currentPage, setCurrentPage] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, { threshold: 0.1 });

		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	const itemsPerPage = 6;
	const totalPages = Math.ceil(attractions?.length / itemsPerPage) || 1;
	const startIndex = currentPage * itemsPerPage;
	const visibleAttractions = attractions?.slice(startIndex, startIndex + itemsPerPage) || [];

	const handlePrevious = () => setCurrentPage(prev => prev === 0 ? totalPages - 1 : prev - 1);
	const handleNext = () => setCurrentPage(prev => prev === totalPages - 1 ? 0 : prev + 1);

	return (
		<section
			ref={sectionRef}
			className={`relative overflow-hidden bg-black py-32 transition-opacity duration-700
      ${isVisible ? "opacity-100" : "opacity-0"}`}
		>
			{/* Animated BG */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#ff1152] via-[#ff1152] to-[#ff4d7d] [clip-path:polygon(100%_0,100%_100%,80%_100%,0_0)]" />

			<div className="z-10 relative mx-auto px-10 lg:px-16 max-w-[1400px]">
				<div className="items-start gap-16 grid grid-cols-[0.8fr_1.5fr]">

					{/* LEFT */}
					<div className="flex flex-col justify-center gap-8">
						<div className="bg-[#39FF14] px-6 py-2 rounded-full w-fit font-semibold text-black text-xs uppercase tracking-wider">
							Discover
						</div>

						<h2 className="font-black text-white text-5xl lg:text-6xl uppercase leading-tight">
							Explore <br />
							<span className="text-[#ff1152]">Our</span> Attractions
						</h2>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="flex items-center gap-6">
								<button onClick={handlePrevious}
									className="flex justify-center items-center bg-[#ff1152] hover:bg-[#ff3e6d] rounded-full w-12 h-12 font-bold text-white text-xl transition">
									←
								</button>

								<span className="font-semibold text-white text-lg">
									{currentPage + 1} / {totalPages}
								</span>

								<button onClick={handleNext}
									className="flex justify-center items-center bg-[#ff1152] hover:bg-[#ff3e6d] rounded-full w-12 h-12 font-bold text-white text-xl transition">
									→
								</button>
							</div>
						)}

						<Button variant="neonGreen" size="full" rounded="md" asChild>
							<Link href={`/${location_slug}/attractions`}>
								All Attractions →
							</Link>
						</Button>

					</div>

					{/* RIGHT GRID */}
					<div className="flex">
						<div className="gap-8 grid grid-cols-3 w-full">

							{visibleAttractions.map((attraction, index) => {
								const cardIndex = startIndex + index;
								const isHovered = hoveredIndex === cardIndex;

								return (
									<div key={cardIndex}
										onMouseEnter={() => setHoveredIndex(cardIndex)}
										onMouseLeave={() => setHoveredIndex(null)}
										className={`
                        flex flex-col items-center text-center overflow-hidden transition-all
                        bg-white ${isHovered && "bg-[#39FF14]"}
                        ${isVisible ? `animate-[slideUp_.6s_ease-out_${index * 0.1}s_backwards]` : ""}
                      `}
									>
										<div className="flex justify-center items-center bg-white/5 w-[250px] h-[250px] overflow-hidden">
											{attraction?.smallimage && (
												<Image
													src={attraction.smallimage}
													width={250} height={250}
													alt={attraction?.iconalttextforhomepage ?? `Attraction ${cardIndex + 1}`}
													className="w-full h-full object-cover"
													unoptimized
												/>
											)}
										</div>

										<h3 className={`w-full text-black font-semibold text-sm uppercase tracking-wide p-4 transition ${isHovered && "bg-[#39FF14]"}`}>
											{(attraction?.name || attraction?.title || "Attraction").split(" - ").pop()}
										</h3>
									</div>
								);
							})}

						</div>
					</div>

				</div>
			</div>

			{/* Keep keyframes OR move to tailwind.config.js */}
			{/* <style>{`
         @keyframes slideUp {
           from { opacity: 0; transform: translateY(30px); }
           to { opacity: 1; transform: translateY(0); }
         }
      `}</style> */}
		</section>
	);
}
;
