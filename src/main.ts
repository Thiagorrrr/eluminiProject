import * as ko from 'knockout';
import { cards } from './components/cards';

export default class ViewModel {
  private cards: void;
  private selectedOptionValue = ko.observable("");
  private apiData = ko.observableArray([]);
  private readyToShow = ko.observable(false);
  private valueOfState = ko.observable("");

  constructor() {
    this.cards = cards();
    this.fetchData();
    this.selectedOptionValue();
  
  }

  fillState(data, event) {
    this.valueOfState(event.target.value);
    this.fetchData();
  }
  fetchData() {
    var that = this;
    var url = "https://desafio-oi.herokuapp.com/"+ this.valueOfState();
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      that.apiData(JSON.parse(xhttp.responseText));
      console.log(xhttp.responseText)
      that.readyToShow(true);
    }
  };
    xhttp.open("GET", url, true);
    xhttp.withCredentials = false;
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
  } 
}

ko.applyBindings(new ViewModel());
