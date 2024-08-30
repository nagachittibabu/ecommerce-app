'use client'
// @ts-ignore
const Card = ({text, description ,img }) => {


    return(
        <div className=" bg-teal-600 text-white h-30 ">
            <div className="p-5 ">
            <img src={img} />
           <p className="font-bold"> {text}</p>
            <div className=" text-xs font-thin text-wrap">
                {description}
            </div>
            </div>
        </div>
    )
}
export default Card
