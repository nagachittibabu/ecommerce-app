
export default async function ProductFetch (props: any){
    let products: any;
    await fetch(`https://fakestoreapi.com/products/category/${props.path}`)
       .then(res => (res.json()))
       .then(json => {
         products = json;   
       })
       console.log( 'hello', products)
return(
    <div>
     {/* {products} */}
    </div>
)
}
