const UNFOLLOW = 'UNFOLLOW'; 
const FOLLOW = 'FOLLOW'; 
const SET_USER = 'SET_USER'; 

let initialState = {
    users: [
        {id: 1, fullName: 'Andrey', status: "I'm so happy", isFollow: false, 
        location: {city: 'Moscow', cowntry: 'Russia'},
        userPhotoUrl: 'https://www.vokrug.tv/pic/person/4/a/7/f/4a7fd07d417b495349ae560ff5c0ff5b.jpg'},
        {id: 2, fullName: 'Andrey', status: "I'm so happy", isFollow: true, 
        location: {city: 'Moscow', cowntry: 'Russia'}, 
        userPhotoUrl: 'https://www.vokrug.tv/pic/person/4/a/7/f/4a7fd07d417b495349ae560ff5c0ff5b.jpg'},
        {id: 3, fullName: 'Andrey', status: "I'm so happy", isFollow: false,
         location: {city: 'Moscow', cowntry: 'Russia'},
        userPhotoUrl: 'https://www.vokrug.tv/pic/person/4/a/7/f/4a7fd07d417b495349ae560ff5c0ff5b.jpg'}
    ]
};

let usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    debugger;
                    if(u.id === action.id) {
                        return {
                            ...u,
                            isFollow: true
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            console.log('unfollow')
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {

                        return {
                            ...u,
                            isFollow: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USER: {
            return {...state, 
                users: [...state.users, action.users]}
            }
        default:
            return state;

    }
}

export const followAC = (userid) => ({ type: FOLLOW, id: userid });
export const unFollowAC = (userid) =>
    ({ type: UNFOLLOW, id: userid})
export const setUser = (users) => ({ type: SET_USER, users: users})

export default usersReducer;