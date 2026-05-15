import Hero from '@/components/common/hero/Hero'
import style from './Page.module.css'
import TrustedBrands from "@/components/common/trusted-brands/TrustedBrands";
export default function Home() {
  return (
      <section className={style.wrapper}>
          <Hero/>
          <TrustedBrands/>
      </section>
  );
}
