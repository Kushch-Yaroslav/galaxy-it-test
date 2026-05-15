import Hero from '@/components/common/hero/Hero'
import style from './Page.module.css'
import TrustedBrands from "@/components/common/trusted-brands/TrustedBrands";
import HowItWorks from "@/components/common/how-it-works/HowItWorks";
import PeopleLoveUs from "@/components/common/people-love-us/PeopleLoveUs";
import LatestContactsPost from "@/components/common/latest-contacts-post/LatestContactsPost";
export default function Home() {
  return (
      <section className={style.wrapper}>
          <Hero/>
          <TrustedBrands/>
          <LatestContactsPost/>
          <HowItWorks/>
          <PeopleLoveUs/>
      </section>
  );
}
