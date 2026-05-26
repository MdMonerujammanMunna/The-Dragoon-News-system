import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "The  NewsFeeds",
  description: "A new way to stay informed. The NewsFeeds is a news aggregator that uses AI to summarize news articles and provide personalized news feeds.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
