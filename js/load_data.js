const btn_load = document.querySelector('#load_data');
const table = document.querySelector('#left_side');

btn_load.addEventListener("load", (event)=>{
    const fileList = event.target.files;
    alert(fileList);
}); 