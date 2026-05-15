import Hero from '@/components/common/hero/Hero'
import style from './Page.module.css'
import TrustedBrands from "@/components/common/trusted-brands/TrustedBrands";
import HowItWorks from "@/components/common/how-it-works/HowItWorks";
import PeopleLoveUs from "@/components/common/people-love-us/PeopleLoveUs";
import LatestContactsPost from "@/components/common/latest-contacts-post/LatestContactsPost";
import AnimatedSection from "@/components/ui/animated-section/AnimatedSection";
export default function Home() {
  return (
      <section className={style.wrapper}>
          <Hero/>
          <AnimatedSection>
              <TrustedBrands/>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
              <LatestContactsPost/>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
              <HowItWorks/>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
              <PeopleLoveUs/>
          </AnimatedSection>
      </section>
  );
}
