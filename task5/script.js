let a = document.querySelector('.enterTXT')
a.addEventListener('keyup', function(e) {
  let p = document.querySelector('#duplicateField')
  p.textContent = e.target.value
})
document.querySelector('button').addEventListener("click", event => {
    console.log(a .value);
    event.preventDefault()
    document.querySelector("input").value = "";
    document.querySelector("#duplicateField").innerHTML = "";
    
})         