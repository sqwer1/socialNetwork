import React from 'react';
import MessagesPageReducer, {addMessageActionCreator, deleteMessageActionCreator} from "./messagesPage-reducer";

let state = {
    posts: [
        {id: 0, message: 'hi'},
        {id: 1, message: 'privet'},
        {id: 2, message: 'sukka'},
        {id: 3, message: 'olle'}
    ]
};

    it('lenght of posts should be incremented', () => {
        let action = addMessageActionCreator("something");
        let newState = MessagesPageReducer(state, action);
        expect (newState.posts.length).toBe(5);
     });

    it('message of new post should be correct', () => {
        let action = addMessageActionCreator("something");
        let newState = MessagesPageReducer(state, action);
        expect (newState.posts[4].message).toBe("something");
    });

    it('after deleting length of messages should be decrement', () => {
        let action = deleteMessageActionCreator(0);
        let newState = MessagesPageReducer(state, action);
        expect (newState.posts.length).toBe(3);
    });