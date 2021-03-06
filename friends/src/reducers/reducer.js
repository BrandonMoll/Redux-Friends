import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVING_FRIENDS, FRIENDS_SAVED, ERROR, FRIEND_DELETED, DELETING_FRIEND } from '../actions/actions';

const initialState = {
    fetchingFriends: false,
    fetchedFriends: false,
    savingFriends: false,
    friendSaved: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const reducer = (state = initialState, action) => {
   switch(action.type) {
    case FETCHING_FRIENDS:
        return Object.assign({}, state, {fetchingFriends: true, fetchedFriends: false, error: ''});
    case FETCHED_FRIENDS:
        return Object.assign({}, state, {
            fetchingFriends: false,
            fetchedFriends: true,
            error: '',
            friends: action.payload
        });


    case SAVING_FRIENDS:
        return Object.assign({}, state, { savingFriends: true, friendSaved: false, error: '' });
    case FRIENDS_SAVED:
        return Object.assign({}, state, { 
            savingFriends: false, 
            friendSaved: true, 
            error: '', 
            friends: action.payload 
        })
    
    
    case DELETING_FRIEND:
        return Object.assign({}, state, { deletingFriend: true, friendDeleted: false, error: '' });
    case FRIEND_DELETED:
        return Object.assign({}, state, {
            deletingFriend: false, 
            friendDeleted: true, 
            error: '', 
            friends: action.payload 
        })
    
    case ERROR:
        return Object.assign({}, state, { error: action.payload })
    default:
        return state;
   }
}

