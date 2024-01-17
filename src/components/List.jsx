function List(array){
    const newList = array.skills.map((item)=> (
        <li key={item}>{item}</li>
    ))

    return (
        <ul id={array.idName}>
            {newList}
        </ul>
    )
}

export default List