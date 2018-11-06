import { firebase } from './firebase';
const URL = 'https://basketball-9e231.firebaseio.com';
// Database structure:
// Organizations obj:
                // {banner: 'url to picture',
                // name: 'Name of organization',
                // subscriptions: 'Number of subs',
                // Tournaments:{ 
                //     Tournament key: {
                //         date: 'starting date of tournament',
                //         name: 'Name of tournament'
                //     }}
                // }
// Tournaments obj:
            // {Tournament key: {
            //     (Date of Game) Key:{
            //         Game Key:{
            //             aName: 'away team name',
            //             hName: 'home team name',
            //             aScore: 'away team score',
            //             hScore: 'home team score',
            //             time : 'Time of the game',
            //         }
            //     }
            // }}
const db = firebase.database();

export const fetchOrgs = (that) =>{
    let str = '/v1/Organizations.json';
    fetch(URL + str).then((res) => res.json()).then((snapshot) => {
        let list = [];
        for (let key in snapshot){
            let temp = snapshot[key];
            list.push(temp);
        }
        that.setState({
            orgs:list
        });
    });
};


export const postOrg = (org) => {
    console.log(org);
    db.ref('/v1/Organizations').push(org);
};