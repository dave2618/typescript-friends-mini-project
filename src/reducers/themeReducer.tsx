export const initialThemeState = {
    theme: 'white',
}

export const themeReducer = (state: { theme: string}, action: { type: string}) => {
    switch(action.type) {
        case 'white':
            return { ...state, theme: 'grey' }
        case 'grey':
            return { ...state, theme: 'white' }
        default: 
            return state;
    }
}