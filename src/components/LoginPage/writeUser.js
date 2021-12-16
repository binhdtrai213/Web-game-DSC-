import { getDatabase, ref, child, get } from "firebase/database";



export default async function WriteUser() {

    const dbRef = ref(getDatabase());
    let status = await get(child(dbRef, `authentication`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot);
            return snapshot.val();
        } else {
            return false;
        }
    }).catch((error) => {
        console.error(error);
    })

    return status;
}