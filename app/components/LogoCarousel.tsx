const LOGOS = [
  { src: "/carrosselLogo/MouraLogo.svg", alt: "Moura", width: 810, height: 1012 },
  { src: "/carrosselLogo/Heliar.svg", alt: "Heliar", width: 600, height: 600 },
  { src: "/carrosselLogo/zetta.svg", alt: "Zetta", width: 600, height: 600 },
  { src: "/carrosselLogo/DelcarLogo.svg", alt: "Delcar", width: 240, height: 240 },
  { src: "/carrosselLogo/KondorLogo.svg", alt: "Kondor", width: 240, height: 240 },
];

export default function LogoCarousel() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="overflow-hidden bg-zinc-50 py-8 lg:py-14">
      <div className="flex w-max animate-marquee items-center gap-12 lg:gap-20">
        {track.map((logo, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-24 w-auto shrink-0 object-contain lg:h-28"
          />
        ))}
      </div>
    </section>
  );
}
