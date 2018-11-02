export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SET_AUTH = 'SET_AUTH';

//Import the sample data
// import Data from '../instructions.json';
 
// export function getData(){
//     return (dispatch) => {
 
//         //Make API Call
//         //For this example, I will be using the sample data in the json file
//         //delay the retrieval [Sample reasons only]
//         setTimeout(() => {
//             const data  = Data.instructions;
//             dispatch({type: DATA_AVAILABLE, data:data});
//         }, 2000);
 
//     };
// };

// export function authenticate(pro){
//     return (dispatch) => {
//         dispatch({type: SET_AUTH, profile: pro});
//     };
// };

export function authenticate(){
    return {type: SET_AUTH};
};