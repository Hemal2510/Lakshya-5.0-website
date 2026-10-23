import FireHexBadge, { type FireHexBadgeProps } from "./FireHexBadge";

export interface TeamInfiniteScrollProps {
  members: Array<FireHexBadgeProps>;
  speed?: number;
  gap?: number;
  cardScale?: number;
}

export default function TeamInfiniteScroll({
  members,
  speed = 45,
  gap = 36,
  cardScale = 0.95,
}: TeamInfiniteScrollProps) {
  // duplicate the list so the loop is seamless (scrolls from 0% to -50%)
  const track = [...members, ...members];

  return (
    <div className="w-full overflow-hidden py-8">
      <style>{`
        @keyframes fbc-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .fbc-track {
          animation: fbc-marquee linear infinite;
        }
        .fbc-track-pause:hover .fbc-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="fbc-track-pause">
        <div
          className="fbc-track flex w-max items-center"
          style={{ gap: `${gap}px`, animationDuration: `${speed}s` }}
        >
          {track.map((member, i) => (
            <div key={`${member.name}-${i}`} className="shrink-0">
              <FireHexBadge
                {...member}
                scale={member.scale ?? cardScale}
                eyebrow="CORE COMMITTEE"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
