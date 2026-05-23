import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apartment Falowiec | Gdańsk Przymorze",
  description:
    "Nowoczesny apartament w kultowym falowcu na Przymorzu. Blisko plaży, komunikacji miejskiej oraz atrakcji Trójmiasta.",

  keywords: [
    "apartament Gdańsk",
    "nocleg Przymorze",
    "falowiec Gdańsk",
    "apartament nad morzem",
    "apartament Trójmiasto",
    "nocleg Gdańsk",
    "Gdańsk apartment",
    "AIRBNB Gdańsk apartment",
    "AIRBNB Gdańsk",
  ],

  authors: [
    {
      name: "Kacper Kaczmarek",
    },
  ],

  creator: "Kacper Kaczmarek",

  openGraph: {
    title: "Apartment Falowiec | Gdańsk Przymorze",
    description:
      "Apartament w kultowym falowcu na Przymorzu. Idealna lokalizacja blisko plaży oraz centrum Gdańska.",
    url: "https://www.airbnb.pl/rooms/43408942?check_in=2026-06-01&check_out=2026-06-03&guests=1&adults=1&s=67&unique_share_id=edb312f5-5eb2-42a8-b5df-4913fcf34c24",
    siteName: "Apartament falowiec",
    locale: "pl_PL",
    type: "website",

    images: [
      {
        url: "https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg",
        width: 1200,
        height: 630,
        alt: "Apartment Falowiec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Apartment Falowiec",
    description:
      "Nowoczesny apartament w Gdańsku blisko plaży.",
    images: [
      "https://images.pexels.com/photos/36635158/pexels-photo-36635158.jpeg",
    ],
  },

  metadataBase: new URL("https://nena-apartment.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pl">

      <body>
        {children}
      </body>

    </html>

  );
}