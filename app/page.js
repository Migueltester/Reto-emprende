import Image from "next/image";
import Banner2 from "./components/Banner2";
import Productos from "./components/Productos_categoria";
export default function Home() {
  return (
    <><Banner2 />
    
    <h1 className="flex
    "> PRODUCTOS</h1>
    <Productos /></>
  );
}
