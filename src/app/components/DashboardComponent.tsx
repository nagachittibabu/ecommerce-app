'use client'
import { useRouter } from "../../../node_modules/next/navigation";
import Card from "../components/CardComponent";
interface ICategory {
    "electronics": any
    "men's clothing": any
    "women's clothing": any
    "jewelery": any
}

export default function Dashboard(props: any) {
    const categoryObj = {
        "electronics": {
            description: 'electronics desc',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DSTZ9QthF5hfx1PYivNRmck03rH5wElfrtQBXmv-cc0nYYUwhI892SXDvrVBnyrxPrw&usqp=CAU'
        },
        "men's clothing": {
            description: `men's clothing Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nam? Delectus cupiditate consectetur, quod voluptates, tempore corrupti aperiam qui mollitia, ex nemo cum aliquam quam ipsam soluta eos id nihil! `,
            url: ''
        },
        "jewelery": {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nam? Delectus cupiditate consectetur, quod voluptates, tempore corrupti aperiam qui mollitia, ex nemo cum aliquam quam ipsam soluta eos id nihil!',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgzqemvQvr2pl3YQeN0jkVMwr42XH799RYg&s'
        },
        "women's clothing": {
            description: `men's clothing desc`,
            url: ''
        }
    }
    const router = useRouter();
    function categoryClickFn (category: any){
        console.log("category", category);
        router.push(`/products/${category}`)
    }
    return (
        <div >
            <div className="container mx-auto  grid grid-cols-4  gap-6 content-center py-20 " >{props.categories.map((category: string, index:any) => {
            return (
                <div key={index} onClick={() => categoryClickFn(category)} >
                <Card    text={category} img={categoryObj[category as keyof ICategory].url} description={categoryObj[category as keyof ICategory].description} />
                </div>
            )
        })}</div></div>
    )
}