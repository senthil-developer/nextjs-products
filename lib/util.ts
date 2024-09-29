import { ProductsType } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const categoryList = [
  "all",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const getFetchURL = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): string => {
  const { category = "", limit = "10", q: query = "" } = searchParams;

  if (category !== "all" && category.length > 0) {
    return `https://dummyjson.com/products/category/${category}?limit=${limit}`;
  } else if (query.length > 0) {
    return `https://dummyjson.com/products/search?q=${query}&limit=${limit}`;
  } else {
    return "https://dummyjson.com/products";
  }
  return "https://dummyjson.com/products";
};

export const fetchData = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<ProductsType> => {
  const url = getFetchURL({ searchParams });

  const response = await fetch(url);

  const data: ProductsType = await response.json();
  return data;
};
