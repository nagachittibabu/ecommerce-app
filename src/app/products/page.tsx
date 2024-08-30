'use client'
import { usePathname } from "../../../node_modules/next/navigation";

export default function Products() {
  const pathname = usePathname();
  console.log('Filter:', pathname);

    return <h1>Products</h1>
  }