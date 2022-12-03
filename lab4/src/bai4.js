// làm lại kết nối firebase trên
import db from "./connect";
import { ref, onValue, once } from "firebase/database";

// (async () => {
//     const categories = ref(db, "categories");
//     const snapshot = await categories.onValue();
//     const value = snapshot.val();
//     console.log(value);
// })();

(async () => {
    const categories = await ref(db, "categories");
    onValue(categories, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
})();
