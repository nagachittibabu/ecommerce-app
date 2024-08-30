import Dashboard from "../components/DashboardComponent";

export default async function Page() {
  let categories: any;

 await fetch('https://fakestoreapi.com/products/categories')
    .then(res => (res.json()))
    .then(json => {
      categories = json;

    })
  return (
    <Dashboard  categories={categories}/>
  )
}
