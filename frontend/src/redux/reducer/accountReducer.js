const reducer = (state = null, action) =>{
    switch(action.type){
        case "is":
            return null;
        case "not":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;