import Link from "next/link";

import ProductCard from "@/components/cards/ProductCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { productsData } from "@/constants/productData";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  
  const filteredProducts = Object.values(productsData).flatMap(category => 
    category.products.filter((product) => {
      const matchesQuery = product.ProductName
        .toLowerCase()
        .includes(query.toLowerCase()) || product.Composition
        .toLowerCase()
        .includes(query.toLowerCase())
      
      const matchesFilter = filter
        ? product.Category.toLowerCase() === filter.toLowerCase()
        : true;

      return matchesQuery && matchesFilter;
    })
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Products</h1>

        <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUERY}>Have a Query?</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search products..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          return(
            <ProductCard key={product._id} product={product} />
          )
        })}
      </div>
    </>
  );
};

export default Home;
