const initialState = {
    addedList: [],
    selectedList: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'ADD_TO_ALL'){
        return {
            ...state,
            addedList: state.addedList.concat(action.value)
        }
    }

    if(action.type === 'DEL_ITEM'){
        return {
            ...state,
            addedList: state.addedList.filter((el, key) => key !== action.key )
        }
    }

    if(action.type === 'ADD_TO_SELECTED'){
        return {
            ...state,
            selectedList: state.selectedList.concat(state.addedList[action.key]),
            addedList: state.addedList.filter((el, key) => key !== action.key )
        }
    }
    if(action.type === 'DEL_FROM_SELECTED'){
        return {
            ...state,
            selectedList: state.selectedList.filter((el, key) => key !== action.key )
        }
    }
    if(action.type === 'UNSELECT_SELECTED'){
        return {
            ...state,
            selectedList: state.selectedList.filter((el, key) => key !== action.key ),
            addedList: state.addedList.concat(state.selectedList[action.key]),
        }
    }

    return newState;
};

export default reducer;