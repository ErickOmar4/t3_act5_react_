function TodoApp({notasApp}){//el nombre de ser igual al del atributo que se pasa
    // (props) | propsComponentes
    // {notasApp}
    // const { notas} = props

    //console.log(notasApp);
    return (
        <>
            <h1>App de Notas </h1>
            <h2>{2+2}</h2>
            <ul>
                <li>{notasApp[0].text}</li>
                <li>{notasApp[1].text}</li>
            </ul>
        </>
    );
    
}

export default TodoApp;

//props propiedades