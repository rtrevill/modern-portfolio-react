function List(array){
    const newList = array.skills.map((item)=> (
        <li>{item}</li>
    ))

    return (
        <ul id={array.idName}>
            {newList}
        </ul>
    )
}

export default List