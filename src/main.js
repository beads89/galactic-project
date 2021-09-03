import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalaxyAge } from './galaxy';

$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    let year = $("#yearInput").val();
    let age = new GalaxyAge(year);
    age.lifeCalc();

    $("#earthAge").text(age.year);
    $("#mercAge").text(age.mercuryAge);
    $("#mercLeft").text(age.mercuryLeft);
    $("#mercOver").text(age.mercuryOver);
  })
})
