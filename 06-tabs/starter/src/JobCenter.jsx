const JobCenter = ({company})=>{
    
    return(
        <div>
            <h3>{company.title}</h3>
            <button className="btn">{company.company}</button>
            <br/>
            <span>{company.dates}</span>
            <ul>
                {
                    company.duties.length !== 0 &&
                    company.duties.map((duti,index)=>{
                        return (
                            <li key={index}>{duti}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default JobCenter