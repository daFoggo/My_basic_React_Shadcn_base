import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { FaReact } from "react-icons/fa";

const AuthNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex justify-between items-center w-full border-b shadow-sm">
      <div className="">
        <Button
          variant="ghost"
          className="text-2xl font-semibold font-clash hover:scale-105 transition-transform"
          icon={<FaReact size={24} className="h-6 w-6" />}
          onClick={() => navigate("/")}
        >
          React Shadcn base
        </Button>
      </div>

      <div className="font-semibold">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default AuthNavBar;
