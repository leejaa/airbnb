import React, { useState, useEffect, useMemo } from "react";
import * as firebase from 'firebase';

export default () => {
    const db = useMemo(() => firebase.firestore(), []);
    const [list, setList] = useState<firebase.firestore.DocumentData[]>([]);
    const onSet = async () => {
        await db.collection("chat").add({
            first: "Lee",
            last: "jahun",
            born: "suwon"
        });
        const querySnapshot = await db.collection("chat").get();
        const newList: firebase.firestore.DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            newList.push(doc.data());
        });
        setList(newList);
    };
    return (
        <div>
            {
                list?.map(item => {
                    return JSON.stringify(item, null, 2)
                })
            }
            <button onClick={onSet}>set</button>
        </div>

    );
};