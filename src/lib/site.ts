import type { Metadata } from "next";
export const site = {
  name: "Burmese Shave Club",
  url: "https://burmeseshaveclub.com",
  email: "info@burmeseshaveclub.com",
  phone: "+959979292992",
};
export const pages = {
  home: {
    path: "/",
    title: "Burmese Shave Club",
    description:
      "Burmese Shave Club supplies authentic international men's grooming products to wholesale partners and retail customers across Myanmar.",
    image: "/assets/newlogo.jpg",
  },
  about: {
    path: "/about",
    title: "About Us",
    description:
      "Learn about Burmese Shave Club, Myanmar's trusted source for authentic international shaving and men's grooming products for wholesale and retail customers.",
    image: "/assets/brand-portfolio-hero.png",
  },
  privacy: {
    path: "/privacy.html",
    title: "Privacy Policy",
    description:
      "Read the Burmese Shave Club Privacy Policy to understand how we collect, use, store and protect information when you use our website, mobile app and related services.",
    image: "/assets/newlogo.jpg",
  },
  terms: {
    path: "/terms.html",
    title: "Terms & Conditions",
    description:
      "Read the Burmese Shave Club Terms & Conditions governing use of our website, mobile app, accounts, purchases, payments, delivery and related services.",
    image: "/assets/newlogo.jpg",
  },
  "cancel-account": {
    path: "/cancel-account",
    title: "Delete Account",
    description:
      "Learn how to delete your Burmese Shave Club account in the app or request deletion by email, and understand what happens to your data.",
    image: "/assets/newlogo.jpg",
  },
} as const;
export function pageMetadata(key: keyof typeof pages): Metadata {
  const page = pages[key];
  const title = key === "home" ? site.name : `${page.title} | ${site.name}`;
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: new URL(page.path, site.url).href },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title,
      description: page.description,
      url: page.path,
      images: [{ url: page.image, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [page.image],
    },
  };
}
