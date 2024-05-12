import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import SidebarProvider from "@/provider/sidebar-provider";
import AuthProvider from "@/provider/auth-provider";
import ModalProvider from "@/provider/modal-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "200", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Internee.pk",

  description:
    "Internee.pk kickstart student`s tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-favicon.png",
  },
  twitter: {
    title: "Internee.pk",
    description:
      "Internee.pk is a platform for interns and employers to connect.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>
          <AuthProvider>{children}</AuthProvider>
          <SidebarProvider />
          <ModalProvider />
          <Toaster position="top-center" />
        </body>
      </html>
    </ViewTransitions>
  );
}
