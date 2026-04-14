import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h3 className="text-red-600">Home page</h3>
    <button className="btn btn-primary">click me </button>
    </div>
  );
}
