import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import RootSidebar from "@/components/RootSidebar";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <RootSidebar />
        <div className="flex flex-col flex-grow">
          <main className="flex-grow p-6">
            <Outlet />
            <Toaster
              toastOptions={{
                style: {
                  color: "#4893f4",
                },
              }}
              position="top-center"
            />
          </main>
          <footer className="z-10">{/* Footer content */}</footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default RootLayout;
