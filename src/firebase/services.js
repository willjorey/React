import { firebase } from './firebase';

const TOURNAMENTS_URL = '/v1/Tournaments/';
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

export const fetchOrgs = () =>{
    let str = '/v1/Organizations.json';
    return fetch(URL + str).then((res) => res.json());
};

export const fetchOrg_Key = (that, key) =>{
    let str = '/v1/Organizations/' + key + '.json';
    fetch(URL + str).then((res) => res.json()).then((snapshot) => {
        console.log(snapshot);
    });
};


export const postOrg = (org) => {
    console.log(org);
    db.ref('/v1/Organizations').push(org);
};

export const postTourn = (tourn) => {
    console.log(tourn);
    let post = db.ref(TOURNAMENTS_URL).push(tourn);
    return post.key;
};

export const updateOrg = (key, key2,tourn) =>{
    console.log(tourn);
    let ref = db.ref('/v1/Organizations/'+ key +'/Tournaments');
    ref.child(key2).set(tourn);
}

export const fetchTournaments_Keys = async (that, tourn) =>{
    let list = [];
    for (let key in tourn){
        let str = TOURNAMENTS_URL;
        str += key + '.json';
        fetch(URL + str).then((res) => res.json()).then((snapshot) => {
                list.push(snapshot);
                that.props.setTournaments(list);
                that.setState({
                    tournaments: list,
                });
        });

    }
};

export const fetchTournament_Key = async (key) =>{
    let str = TOURNAMENTS_URL;
    str += key + '.json';
    return fetch(URL + str).then((res) => res.json());
};