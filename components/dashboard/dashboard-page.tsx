"use client";

import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardContent } from "./dashboard-content";
import { SidebarProvider } from "@/components/ui/sidebar";

export function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  );
}
