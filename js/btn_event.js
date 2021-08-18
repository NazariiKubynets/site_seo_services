
var result = Number(document.getElementById("result").value.replace('%',''))
document.getElementById("btnminus").onclick = function(){
  if (result>0.1) {
    result-=0.1;
  }
  document.getElementById("result").innerHTML = result.toFixed(1) + '%';
}

document.getElementById("btnplus").onclick = function(){
  if (result<99.9) {
    result+=0.1;
  }
  document.getElementById("result").innerHTML = result.toFixed(1) + '%';
}
