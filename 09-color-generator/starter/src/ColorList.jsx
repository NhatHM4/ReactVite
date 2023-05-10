import SingleColor from "./SingleColor"

const ColorList = ({colors})=>{
    return (
        <div className="color-form">
            {
                colors.map((color, index) =>{
                    return (
                        <SingleColor key={index} color={color}/>
                    )
                })
            }
        </div>
    )
}

export default ColorList