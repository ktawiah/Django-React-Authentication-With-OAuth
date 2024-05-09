import { cn } from "@/lib/utils";
import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return <ImSpinner2 className={cn("animate-spin")} />;
};

export default Spinner;
