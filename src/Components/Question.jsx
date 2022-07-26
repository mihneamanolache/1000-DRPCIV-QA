import React from 'react'

function Question(props) {
    return (
        <div class="container bg-light mt-2 p-3">
            <h5># {props.post_id}: {props.post_name}</h5>      
            <img src={props.post_img} class="float-end" height="170" alt={props.post_id} onError={(event) => event.target.src="/buzz.png"}/>
            <br/>
            <h6 class={props.post_clasa_1}>{props.post_ans_1}</h6>
            <h6 class={props.post_clasa_2}>{props.post_ans_2}</h6>
            <h6 class={props.post_clasa_3}>{props.post_ans_3}</h6>
            <br/>
            <p class="fst-italic fw-light">Categoria: {props.post_categoria}</p>
        </div>    )
}

export default Question