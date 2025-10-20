"use client";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/contexts/theme-context";
import { ThemeToggle } from "@/components/theme-toggle";
export function ThemeWrapper({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname === "/admin";
    return (<ThemeProvider>
      {!isAdminPage && <ThemeToggle />}
      {children}
    </ThemeProvider>);
}
