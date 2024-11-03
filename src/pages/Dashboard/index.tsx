import ReuseBreadcrumb from "@/components/ReuseBreadcrumb";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="space-y-2 py-3 px-4 sm:p-0 sm:py-4">
        <ReuseBreadcrumb
          pageList={[{ name: "Dashboard", link: "/dashboard" }]}
        />
        <h1 className="font-semibold text-lg sm:text-xl">Dashboard</h1>
      </div>
      <Separator className="my-1 sm:my-2" />
    </div>
  );
};

export default Dashboard;
