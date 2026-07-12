/**
 * Commerce boundary.
 *
 * This site is the marketing + ecosystem front door. Cart, checkout and vendor
 * dashboards live on the existing WooCommerce backend. "Shop" / "Marketplace"
 * CTAs deep-link to that store (see `site.storeUrl`).
 *
 * When the storefront is made headless, implement these against the
 * WooCommerce Store API (https://developer.woocommerce.com/docs/apis/store-api/).
 */
import { site } from "@/content/site";

export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  href: string;
};

export function storeUrl(path = ""): string {
  return `${site.storeUrl}${path}`;
}

// TODO(headless): fetch from WooCommerce Store API `/wc/store/v1/products`.
export async function getFeaturedProducts(): Promise<Product[]> {
  return [];
}

// TODO(headless): map category slug → Store API `?category=` collection.
export async function getCategoryProducts(_slug: string): Promise<Product[]> {
  return [];
}
