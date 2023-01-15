import React, { useState } from "react";
import CdsService from "../services/CdsService";
import ZanerService from "../services/ZanerService";

const CdsForm = () => {
    const [autor, setAutor] = useState("");
    const [nazov, setNazov] = useState("");
    const [nazovZanra, setZaner] = useState("");

    const createCd = (e: any) => {
        e.preventDefault();

        // const zanerCreate = {
        //     nazovZanra
        // }

        // ZanerService.postZaner(zanerCreate)
        //     .then((res: any) => {
        //         console.log(zanerCreate)
        //         console.log(res.data)
        //     })
        //     .catch((err: any) => {
        //         console.log(err)
        //     })

        const cds = {
            autor: autor,
            nazov: nazov,
            zaner: nazovZanra 
        };

        CdsService.postCd(cds)
            .then((res: any) => {
                console.log(cds)
                console.log(res.data)
            })
            .catch((err: any) => {
                console.log("Error")
                console.log(err)
            }
        );
    };

    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center mt-4'>Post CD</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label>Autor</label>
                                <input
                                    type="text"
                                    placeholder='Enter first name'
                                    className='form-control'
                                    name='firstName'
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Nazov</label>
                                <input
                                    type="text"
                                    placeholder='Enter last name'
                                    className='form-control'
                                    name='lastName'
                                    value={nazov}
                                    onChange={(e) => setNazov(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Zaner</label>
                                <input
                                    type="text"
                                    placeholder='Enter last name'
                                    className='form-control'
                                    name='lastName'
                                    value={nazovZanra}
                                    onChange={(e) => setZaner(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => createCd(e)}>Add Cd</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CdsForm