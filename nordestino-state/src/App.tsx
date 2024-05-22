import "@/app/globals.css"
import Navbar from "./PageComponents/navbar";
import { Separator } from "./components/ui/separator";

export default function App() {

  return (
    <div className="body">
      <Navbar />
      <Separator className="separator" />
    </div>
  );
} 