import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Your Weather",
  description:
    "The website in question is a platform dedicated to providing meteorological information in a practical and fast way. When accessing the site, you can select the desired city and get a summary description of the current weather. In addition, the website may display details such as temperature, humidity, wind speed and possible adverse weather conditions. It's a useful tool for anyone looking for up-to-date weather information in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
