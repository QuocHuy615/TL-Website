import CarouselTemplate from "@/components/product/carousel/carousel";
import mainBanner1 from "@/assets/banners/main-banner-1.webp";
import mainBanner2 from "@/assets/banners/main-banner-2.webp";
import mainBanner3 from "@/assets/banners/main-banner-3.webp";
import mainBanner4 from "@/assets/banners/main-banner-4.webp";
import mainBanner5 from "@/assets/banners/main-banner-5.webp";

const mainBanners = [
  {
    id: 1,
    image: mainBanner1,
  },
  {
    id: 2,
    image: mainBanner2,
  },
  {
    id: 3,
    image: mainBanner3,
  },
  {
    id: 4,
    image: mainBanner4,
  },
  {
    id: 5,
    image: mainBanner5,
  },
];


const HeroBannerImage = ({ image }: { image: string }) => (
  <img
    src={image}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    alt="Hero Banner"
    fetchPriority="high"
    decoding="async"
  />
);

const LazyBannerImage = ({ image, alt }: { image: string; alt: string }) => (
  <img
    src={image}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    alt={alt}
    loading="lazy"
    decoding="async"
  />
);

function Banner() {
  return (
    <section className="w-full max-w-7xl mx-auto p-2 space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 overflow-hidden rounded-lg shadow-sm">
          <CarouselTemplate
            data={mainBanners}
            autoplay
            autoplayDelay={4000}
            itemClassName="basis-full"
            showDots
            className="h-full"
            renderItem={(item) => (
              <div className="h-[200px] sm:h-[300px] md:h-[400px] w-full">
                <HeroBannerImage image={item.image} />
              </div>
            )}
          />
        </div>

        <div className="flex flex-row md:flex-col gap-3 overflow-x-auto snap-x snap-mandatory md:overflow-visible no-scrollbar pb-2 md:pb-0">
          {mainBanners.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="relative min-w-[85%] md:min-w-0 flex-1 overflow-hidden rounded-lg shadow-sm snap-center"
            >
              <LazyBannerImage image={item.image} alt="Sub Banner" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto snap-x snap-mandatory sm:overflow-visible no-scrollbar pb-2 sm:pb-0">
        {mainBanners.slice(3, 6).map((item) => (
          <div
            key={item.id}
            className="h-[120px] sm:h-40 md:h-[180px] min-w-[70%] sm:min-w-0 overflow-hidden rounded-lg shadow-sm snap-center"
          >
              <LazyBannerImage image={item.image} alt="Bottom Banner" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;
