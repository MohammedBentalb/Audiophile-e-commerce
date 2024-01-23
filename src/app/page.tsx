import Categories from '@/components/category/Categories';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import Magazine from '@/components/home/Magazine';
import StoreInfo from '@/components/home/StoreInfo';


export default function Home() {
  return (
    <>
      <Hero />
      <div className=" px-10 pt-6">
        <Categories />
      </div>
      <Magazine />
      <StoreInfo />
      <Footer />
    </>
  );
}
