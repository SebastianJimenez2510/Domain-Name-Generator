/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = [".com", ".net", ".io"];
  var textoh1 = document.querySelector("#dgen");
  //write your code here
  let aox = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let index = 0; index < adj.length; index++) {
      for (let ext = 0; ext < noun.length; ext++) {
        console.log(pronoun[i] + " " + noun[ext]);
        aox += "<p>" + pronoun[i] + adj[index] + noun[ext] + "</p>";
      }
    }
    textoh1.innerHTML = aox;
  }
};
