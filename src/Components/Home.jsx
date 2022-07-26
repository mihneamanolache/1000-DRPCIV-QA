import React, { useEffect, useState } from 'react';
import Question from './Question';
import {BrowserRouter as Router} from 'react-router-dom'
import Button from '@restart/ui/esm/Button';
import axios from "axios";

function Home(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("api/v1/intrebari/less?id=" + props.perPage)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.perPage])
  if (error) {
    return (
      <Router>
          <div>EROARE</div>
      </Router>
    )
  } else if (!isLoaded) {
    return (
      <Router>
        <div class="d-flex justify-content-center mt-3">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          {items.map(item => (
          <Question post_id={item.nr} post_name={item.intrebare} post_clasa_1={item.clasa_1} post_ans_1={item.rasp_1} post_clasa_2={item.clasa_2} post_ans_2={item.rasp_2} post_clasa_3={item.clasa_3} post_ans_3={item.rasp_3} post_categoria={item.categorie} post_img={"/IMGs/"+item.nr+".jpg"}/>
          ))}
        </div>
      </Router>
    );
  }
}

export default Home