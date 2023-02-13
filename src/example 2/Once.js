const Once =(props)=>{
    const{
        count,
        setCount
    }=props
    const handleClick=()=>{
        setCount(count+1)
    }
    return(
        <>
        <button onClick={handleClick} >{`Increamented ${count} Times `}</button>
        </>
    )
}

export default Once