function TodoApp({notasApp}){//el nombre de ser igual al del atributo que se pasa
    // (props) | propsComponentes
    // {notasApp}
    // const { notas} = props

    //console.log(notasApp);


    const mostrarNotas = (event) =>{
        console.log(event.target);
    };

    console.log(notasApp);
    return (
        <>
            <h1>App de Notas </h1>
            <ul>
                <li>{notasApp[0].text}</li>
                <li>{notasApp[1].text}</li>
                <button onClick={mostrarNotas}>
                    Mostrar notas por consola</button>
            </ul>
        </>
    );
    
}

export default TodoApp;

//props propiedades