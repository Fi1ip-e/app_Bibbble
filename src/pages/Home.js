import { useEffect, useState } from "react";
import React from "react";
import api from "../config/api";
import "./list.css";

let ajustDate;
let date;
function Home(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const Books = async () => {
            await api.get('').then((res) => {
                setData(res.data.data)
                console.log("res" + res.data.data)
            }).catch((err) => {
                console.log(err)
            });
        }
        Books();
    }, [setData])

    return (
        <div className="container">
            <div className="row">
                {data.map((book) => (
                    <div key={book.id} className="card col-sm-6 col-lg-2 col-xl-3 mb-3 card-bg">
                        <img src={book.image} className="card-image" alt={book.title} />
                        <div className="card-body">
                            <h5 className="card-title title">{book.title}</h5>
                            <p className="card-text text-author">{book.author}</p>
                            <p className="card-text textdesc">{book.description}</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className="b-genero">{book.genre}</button>
                                        </td>
                                        <td className="textdata">
                                           {ajustDate = book.published,  date = new Date(ajustDate), date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
                                        </td>
                                    </tr>
                                </tbody>


                            </table>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Home;