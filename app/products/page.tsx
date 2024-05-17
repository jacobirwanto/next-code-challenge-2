import {
  Footer,
  Navbar,
  ProductHero,
  ProductList,
  Testimonials,
} from "@/components";

function page() {
  return (
    <div>
      <Navbar />
      <ProductHero />
      <ProductList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default page;
