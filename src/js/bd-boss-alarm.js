import * as firebase from '../js/firebase';

export function getBossNames() {
  // const bossArray = ['K', 'N'];
  // const bossesRef = firebase.database.ref('Bosses');
  // const snapshot = await bossesRef.once('value');
  // snapshot.forEach((childSnapshot) => {
  //   bossArray.push(childSnapshot.val().Name.ko);
  // });
  // console.log('push done');
  // return bossArray;
  return firebase.database.ref('Bosses').orderByChild('Order').once('value');
}