import { ContentWrapper } from "./ContentWrapper";

const pressItems = [
  {
    url: "https://www.idnes.cz/auto/zpravodajstvi/homoky-volvo-ex30-elektromobil-software-chyby.A250731_143935_automoto_fdv",
    logo: "/logos/idnes.png",
    alt: "iDNES.cz",
    imageClassName: "h-20 w-auto",
  },
  {
    url: "https://www.aktuality.sk/clanok/IydbXqg/petr-kupil-nove-auto-s-52-vadami-vyrobcovi-spisal-navod-ako-ich-opravit-a-media-ho-podporili-reakcia-automobilky-166-podcast-autobazareu/#google_vignette",
    logo: "/logos/aktualitysk.png",
    alt: "Aktuality.sk",
    imageClassName: "h-12 w-auto",
  },
  {
    url: "https://pressmob.cz/projekt-pleasevolvofixthis-ukazuje-chyby-v-systemech-volvo-ex30-a-nabizi-reseni",
    logo: "/logos/pressmob.png",
    alt: "Pressmob",
    imageClassName: "h-12 w-auto",
  },
  {
    url: "https://www.reddit.com/r/ex30/comments/1lcbqo0/3_weeks_with_ex30_loaner_my_honest_take_and_a/",
    logo: "/logos/reddit.png",
    alt: "Reddit",
    imageClassName: "h-16 w-auto",
  },
];

export const Press = () => {
  return (
    <div className="bg-white -mb-8">
      <ContentWrapper>
        <div>
          <h3 className="text-lg font-medium mb-4">As seen in</h3>
          <div className="grid grid-cols-5 lg:grid-cols-2 gap-4">
            {pressItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-[#1C6EBA] transition-colors border-2 border-gray-200 py-4 px-6 rounded-lg flex items-center justify-center h-24"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className={item.imageClassName}
                />
              </a>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
