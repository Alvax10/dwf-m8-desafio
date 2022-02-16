import React from "react";
import css from "./EditCard.css";
import { _geoloc } from "../../hooks";
import { useNavigate } from "react-router-dom";
import lapizEdit from "../../assets/lapiz-edit.png";

export function EditCard(props) {
    const navigate = useNavigate();

    return <div className={css.card}>
            <img className={css.img} src={props.src} alt="Imagen de la mascota" />
            <h3 className={css.petname}> {props.petName} </h3>
            <p className={css.info}> {props.locName} </p>
            <img alt="Lápiz" onClick={() => navigate("/editar-mascota")} src={lapizEdit} className={css.edit} />
    </div>
}