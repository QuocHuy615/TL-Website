import { useLoaderData } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "@/components/common/Banner";
import ServicePolicy from "@/pages/home/ServicePolicy";
import BottomCategory from "@/pages/home/BottomCategory";
import ProductListCarousel from "@/components/product/carousel/ProductListCarousel";
import MobileProductSlide from "@/components/product/carousel/MobileSlide";
import type { IHomeSection } from "./home.loader";
import promoteBanner1 from '@/assets/Banners/promote-banner-1.webp';
import promoteBanner2 from '@/assets/Banners/promote-banner-2.webp';
import promoteBanner3 from '@/assets/Banners/promote-banner-3.webp';
import SideBanner from "@/components/common/SideBanner";
import bannerSide1 from "@/assets/banners/banner-side1.webp";
import bannerSide2 from "@/assets/banners/banner-side2.webp";

const PromotionBannerItem = ({ src }: { src: string }) => (
  <div className="group min-w-[85%] md:min-w-0 snap-center overflow-hidden rounded-lg border border-zinc-800 shadow-md">
    <img
      src={src}
      alt="Promotion"
      className="w-full h-[120px] object-cover cursor-pointer"
    />
  </div>
);

const PromotionBannerRow = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="my-4 flex gap-2 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
      {images.map((src, index) => (
        <PromotionBannerItem key={index} src={src} />
      ))}
    </div>
  );
};

const HomePage = () => {
  useDocumentTitle("Trang Chủ");

  const { laptop, pc, keyboard, mouse, monitor } = useLoaderData() as {
    laptop: IHomeSection | null;
    pc: IHomeSection | null;
    keyboard: IHomeSection | null;
    mouse: IHomeSection | null;
    monitor: IHomeSection | null;
  };

  const RenderSection = ({ data }: { data: IHomeSection | null }) => {
    if (!data || data.products.length === 0) return null;

    return (
      <section className="p-0 mt-4">
        <div className="md:hidden">
          <MobileProductSlide
            title={data.title}
            products={data.products}
            brands={data.brands}
            viewAllLink={`/category/${data.categoryId}`}
          />
        </div>
        <div className="hidden md:block">
          <ProductListCarousel
            title={data.title}
            products={data.products}
            viewAllLink={`/category/${data.categoryId}`}
            autoplay
            brands={data.brands}
          />
        </div>
      </section>
    );
  };

  return (
    <div className="mx-auto px-2 sm:px-4 lg:px-8 space-y-1 py-3 bg-transparent">
      <Banner />
      <ServicePolicy />

      <SideBanner position="left" imgSrc={bannerSide1} />
      <SideBanner position="right" imgSrc={bannerSide2} />

      <RenderSection data={pc} />

      <PromotionBannerRow
        images={[
          "https://tanthanhdanh.vn/wp-content/uploads/2025/10/TIEN-PHONG-CONG-NGHE-UU-DAI-CUC-PHE-T102025-800x440-2-1.png",
          "https://edgeup.asus.com/wp-content/uploads/2024/09/campaign-banner.jpg",
          "https://tanthanhdanh.vn/wp-content/uploads/2023/09/BannerWeb_BuildMayCPUGiaSieuTot_800x440.jpg",
        ]}
      />

      <RenderSection data={keyboard} />
      <RenderSection data={mouse} />

      <PromotionBannerRow
        images={[
          promoteBanner1,
          promoteBanner2,
          promoteBanner3,
        ]}
      />

      <RenderSection data={laptop} />
      <RenderSection data={monitor} />

      <BottomCategory />
    </div>
  );
};

export default HomePage;
