import Image from "next/image";
import Link from "next/link";
import logo_white from "@public/assets/images/city/logo_white.png";
import { Button } from "./components/ui/button";
import { fetchsheetdata } from "./lib/sheets";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const FetchLocation = await fetchsheetdata("locations");

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-[#1a1a1a] to-black before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(240,12,116,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(202,255,26,0.1)_0%,transparent_50%)]">
      <section className="relative z-10 px-4 py-4 pb-12 md:px-8 md:py-8">
        <div className="mb-5 lg:mb-12">
          <Image src={logo_white} alt="logo" className="h-[100px] w-auto" />
          <h1 className="text-center text-4xl font-black uppercase tracking-wide bg-linear-to-r from-[#ff1152] to-[#caff1a] bg-clip-text text-transparent">
            ONE PASS MORE FUN
          </h1>
        </div>

        <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-6 px-2 py-4 md:grid-cols-3 md:gap-6 md:px-4 md:py-8 lg:grid-cols-5 lg:gap-5 lg:px-6 lg:py-10 xl:gap-8 xl:px-8 xl:py-12 2xl:gap-8 2xl:px-8 2xl:py-12">
          {FetchLocation.map((card, i) => {
            return (
              <Link
                href={`/${card.locations}`}
                prefetch
                key={i}
                className="group flex h-full animate-[cardFadeIn_0.6s_ease_forwards] opacity-0"
                style={{ animationDelay: `${(i % 6) * 0.1}s` }}
              >
                <article className="relative flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-linear-to-br from-black/80 to-[#1a1a1a]/60 shadow-[0_10px_30px_rgba(240,12,116,0.3),0_0_0_2px_rgba(240,12,116,0.2)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(240,12,116,0.5),0_0_60px_rgba(202,255,26,0.4)]">
                  <div className="relative h-[220px] w-full shrink-0 overflow-hidden md:h-60 lg:h-[260px] xl:h-[280px] 2xl:h-80">
                    <img
                      src={card.smallimage}
                      alt={card.desc}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.15]"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-10 h-1/2 bg-linear-to-t from-black/90 to-transparent"></div>
                  </div>

                  <div className="relative z-20 flex flex-1 flex-col px-5 py-5 md:px-4 md:py-5 lg:px-5 lg:py-6">
                    <h2 className="mb-3 flex min-h-[2.6em] items-center bg-gradient-to-br from-[#f00c74] to-[#ff1152] bg-clip-text text-xl font-extrabold uppercase leading-tight tracking-[0.5px] text-transparent md:text-lg lg:text-lg xl:text-xl 2xl:text-[1.3rem]">
                      {card.desc}
                    </h2>

                    <div className="mb-5 flex grow flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#ff1152] md:h-3.5 md:w-3.5 2xl:h-[18px] 2xl:w-[18px]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="text-sm leading-relaxed text-[#e0e0e0] md:text-[0.8rem] 2xl:text-[0.9rem]">
                          {card.address}
                        </span>
                      </div>

                      {card.phone && (
                        <div className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#ff1152] md:h-3.5 md:w-3.5 2xl:h-[18px] 2xl:w-[18px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span className="text-sm leading-relaxed text-[#e0e0e0] md:text-[0.8rem] 2xl:text-[0.9rem]">
                            {card.phone}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      className="mt-auto w-full"
                    >
                      SELECT THIS PARK
                    </Button>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
