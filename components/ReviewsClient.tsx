"use client";

import { useInView } from "@/hooks/useInView";
import { Review } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill={s <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--text)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const TRUNCATE_AT = 190;

export default function ReviewsClient({ reviews, rating, mapsUrl }: { reviews: Review[]; rating?: number | null; mapsUrl?: string }) {
  const [sectionRef, sectionInView] = useInView<HTMLDivElement>();
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  return (
    <>
      <div ref={sectionRef}>
        <p
          className={`text-[10px] font-medium tracking-[0.4em] uppercase mb-16 anim-fade-in${sectionInView ? " is-visible" : ""}`}
          style={{ color: "var(--text-faint)" }}
        >
          04 - Opinie
        </p>
      </div>

      <div
        ref={headingRef}
        className="flex flex-col md:flex-row gap-4 md:items-end mb-12"
      >
        <div className={`anim-fade-up${headingInView ? " is-visible" : ""}`}>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ color: "var(--text)" }}
          >
            Co mówią podopieczni
          </h2>
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[11px] tracking-wider transition-opacity hover:opacity-70"
              style={{ color: "var(--text-faint)" }}
            >
              ★ Opinie z Google Maps →
            </a>
          )}
        </div>
        <div
          className={`md:ml-auto flex items-center gap-2 mb-1 anim-fade-in${headingInView ? " is-visible" : ""}`}
          style={headingInView ? { animationDelay: "150ms" } : undefined}
        >
          <Stars rating={Math.round(rating ?? 5)} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {(rating ?? 5.0).toFixed(1)} · Google
          </span>
        </div>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`flex flex-col gap-6 p-8 anim-fade-up${gridInView ? " is-visible" : ""}`}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              ...(gridInView ? { animationDelay: `${i * 100}ms` } : {}),
            }}
          >
            <Stars rating={review.rating} />
            {review.text && (
              <p
                className="text-base leading-relaxed flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {review.text.length > TRUNCATE_AT
                  ? <>{review.text.slice(0, TRUNCATE_AT).trimEnd()}…{" "}
                      {mapsUrl && (
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-70"
                          style={{ color: "var(--text)", fontWeight: 500 }}
                        >
                          czytaj dalej →
                        </a>
                      )}
                    </>
                  : review.text}
              </p>
            )}
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "var(--text)" }}
              >
                {review.author_name}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-faint)" }}
              >
                {review.relative_time_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
