import { Category } from "@/components/Category";
import { Search } from "@/components/Search";
import Products from "@/components/products";
import { fetchData } from "@/lib/util";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const limit = parseInt(searchParams.limit || "10");
  const { category = "", q: query = "" } = searchParams;

  const data = await fetchData({ searchParams });

  return (
    <div className="max-w-7xl w-full grid place-items-center gap-4">
      <div className="flex items-center justify-between [&_>_div]:flex-1 even:flex-grow">
        <Category currentCategory={category} />
        <Search />
      </div>
      {data.total > 0 ? (
        <>
          <Products products={data.products} />
          {limit <= data.total ? (
            <Link
              href={`?${
                category.length > 0 ? `category=${category}` : `q=${query}`
              }&limit=${limit + 10}`}
              scroll={false}
              className="bg-slate-300 rounded-md p-1 px-3"
            >
              Load More
            </Link>
          ) : (
            <span className="bg-slate-300 rounded-md p-1 px-3">
              No More Data
            </span>
          )}
        </>
      ) : (
        <div className="size-[90dvh] grid place-items-center">
          <span className="text-center text-4xl">
            No Data.
            <br />
            Try Differnet Query
          </span>
        </div>
      )}
    </div>
  );
}
