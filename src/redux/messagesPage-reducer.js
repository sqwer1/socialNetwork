const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MESSAGE = 'DELETE-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Леша'},
        {id: 4, name: 'Гена'}
    ],
    posts: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'privet'},
        {id: 3, message: 'blabla'},
        {id: 4, message: 'olle'}
    ],
};

const MessagesPageReducer = (state = initialState, action) => {

    let addMessage = () => {

    }

    let changeNewMessageText = (newText) => {

    }

    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.newMessageText;
            let messageId = action.messageId;
            return {
                ...state,
                posts: [...state.posts, {id: messageId, message: newMessage}]
            };
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.messageId)
            };
        }
        default: return state;
    }
}

export const addMessageActionCreator = (newMessageText, messageId) => ({
    type: ADD_MESSAGE,
    newMessageText,
    messageId
})
export const deleteMessageActionCreator = (messageId) => ({
    type: DELETE_MESSAGE,
    messageId
})


export default MessagesPageReducer;