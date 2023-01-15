import React, { useEffect } from "react";
import CdsService from "../services/CdsService";

function ListCds() {
    const [cds, setCds] = React.useState<any>([]);

    const fetchData = () => {
        CdsService.getAllCd()
            .then((res: any) => {
                setCds(res?.data);
            }
            ).catch((err: any) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(cds)

    return (
        <div>
            <h1>List of Cds</h1>
            {cds.map((cd: any) => (
                <div key={cd.id}>
                    <p>{cd?.nazov} {cd?.autor} {cd.zaner?.nazov}</p>
                </div>
            ))}
        </div>
    )
}

export default ListCds