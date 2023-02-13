const Twice =(props)=>{
   const {
    count,
    setCount
   }=props
    const handleClick=()=>{
        setCount(count+2)
    }
    return(
        <>
        <button onClick={handleClick} >{`Increamented ${count} Times `}</button>
        </>
    )
}

export default Twice