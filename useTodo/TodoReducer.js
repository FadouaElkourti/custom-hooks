//{type: [todo remove] ,payload: id}
export const TodoReducer = (initialState = [],action)=>{
    switch (action.type) {
        //Añadir
        case '[TODO] Add Todo':
           return [...initialState,action.payload ]
           //Borrar
           case '[TODO] Remove Todo':
            return initialState.filter (todo => todo.id !== action.payload );
            case '[TODO] Toggle Todo':
                return initialState.map(todo =>{
                    if (todo.id === action.payload){//id
                        return{
                            ...todo,
                            done: !todo.done
                        }
                        
                    }

                    return todo;
                });
        default:
            return initialState;
    }
}