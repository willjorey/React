import { firebase } from './firebase';


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
export const getOrgs = (that) => {
    db.ref('/v1/Organizations').on("value", function(snapshot) {
        let obj = snapshot.val();
        let temp = [];

        for (let key in obj){
            temp.push(obj[key])
        }
        that.setState({
            orgs: temp
        });
        console.log(temp)
    });
};