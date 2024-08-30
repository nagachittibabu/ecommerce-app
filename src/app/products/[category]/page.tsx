'use client'
import ProductFetch from "@/app/server-components/productsfetch";
import { usePathname, useRouter, useSearchParams } from "../../../../node_modules/next/navigation";


export default  function Category () {
  debugger
const category =  usePathname().split('/')[2]
  console.log('Filter:', category, );
  
  return (
    <div>
      <h2>Products in {category} </h2>
      <ProductFetch path= {category}/>
    </div>
  );
};
