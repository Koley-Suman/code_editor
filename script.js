const js_js = document.querySelector("#js_js");
const css_ss = document.querySelector("#css_ss");
const html_lll = document.querySelector("#html_lll");
const container_rr = document.querySelector(".container_rr");
const cs = document.querySelector("#cs")




function result(){
    container_rr.innerHTML =html_lll.value;
    cs.textContent =`.container_rr ${css_ss.value}`;
    eval(js_js.value)
}