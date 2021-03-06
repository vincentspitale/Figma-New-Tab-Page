import React, {useState} from 'react';

import tw from 'twin.macro'

const AddButton = ({friendsList, setFriendsList, ...props}) => {

    const addFriend = () => {
        console.log(Array.isArray(friendsList));
        let newFriendsList = [...friendsList];
        newFriendsList.push({name: "", url: "", isNew: true});
        setFriendsList(newFriendsList);

        window.localStorage.setItem("friendsList", JSON.stringify(newFriendsList));
    };

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {addFriend()}} tw="cursor-pointer">
            <path d="M12.3477 23.3516C18.5586 23.3516 23.7031 18.207 23.7031 11.9961C23.7031 5.78516 18.5469 0.640625 12.3359 0.640625C6.125 0.640625 0.980469 5.78516 0.980469 11.9961C0.980469 18.207 6.13672 23.3516 12.3477 23.3516ZM12.3477 21.3359C7.16797 21.3359 3.01953 17.1758 3.01953 11.9961C3.01953 6.81641 7.15625 2.65625 12.3359 2.65625C17.5156 2.65625 21.6758 6.81641 21.6875 11.9961C21.6992 17.1758 17.5273 21.3359 12.3477 21.3359ZM12.3125 16.9648C12.9219 16.9648 13.2969 16.5547 13.2969 15.8984V12.9688H16.4141C17.0469 12.9688 17.4922 12.6172 17.4922 12.0195C17.4922 11.3984 17.0703 11.0352 16.4141 11.0352H13.2969V7.91797C13.2969 7.26172 12.9219 6.83984 12.3125 6.83984C11.7148 6.83984 11.3633 7.28516 11.3633 7.91797V11.0352H8.25781C7.60156 11.0352 7.16797 11.3984 7.16797 12.0195C7.16797 12.6172 7.625 12.9688 8.25781 12.9688H11.3633V15.8984C11.3633 16.5312 11.7148 16.9648 12.3125 16.9648Z" fill="black"/>
        </svg>
    );
    
};

export default AddButton;