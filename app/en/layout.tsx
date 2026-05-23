import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartament Falowiec | Gdańsk Przymorze",

  description:
    "Modern apartment in the iconic Falowiec building in Gdańsk Przymorze. Close to the beach, public transport and attractions.",

  keywords: [
    "Gdansk apartment",
    "apartment near beach",
    "Falowiec apartment",
    "Gdansk accommodation",
    "apartment Poland",
    "Sopot apartment",
    "Tricity accommodation",
  ],

  openGraph: {
    title: "Apartament Falowiec | Gdańsk Przymorze",

    description:
      "Modern apartment near the beach and attractions of the Tricity area.",

    url: "https://apartament-falowiec.vercel.app/en",

    siteName: "Apartament Falowiec",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg",

        width: 1200,

        height: 630,

        alt: "Apartament Falowiec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Apartament Falowiec",

    description:
      "Modern apartment in Gdańsk near the beach.",

    images: [
      "https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg",
    ],
  },
};

export default function ENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}