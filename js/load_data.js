const load = document.querySelector('#load_data');
const nav = document.querySelector('#nav_left_side');

let classes = {
    "-0": "훈련병",
    "-1": "이등병",
    "-2": "일등병",
    "-3": "상병",
    "-4": "병장",
    "v1": "하사",
    "v2": "중사",
    "v3": "상사",
    "v4": "원사",
    "d0": "준위",
}

let data = [];
let odata;

function upload(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);

    let raw;
    reader.onload = function () {
        raw = reader.result;

        let lines = raw.split(/[\r\n]+/g);
        for (let i = 0; i < lines.length - 1; i++) {
            let line = lines[i].split(/[,]+/g);
            let append_data = [];
            if (i == 0) {
                append_data.push(line[0] + "-year");
                append_data.push(line[0] + "-number");
                append_data.push(line[1]);
                append_data.push(line[2]);
                append_data.push(line[3]);
                append_data.push(line[4]);
            }
            else {
                let temp = line[0].split(/[-]+/g);
                if (temp[0] >= 70) {
                    append_data.push(parseInt('19' + temp[0]));
                }
                else {
                    append_data.push(parseInt('20' + temp[0]));
                }
                append_data.push(temp[1]);
                append_data.push(line[1]);
                append_data.push(line[2]);
                append_data.push(parseInt(line[3]));
                append_data.push(parseFloat(line[4]));
            }
            data.push(append_data);
        }
        left_table_print();
    };
}

function left_table_print() {
    odata = data.slice(1);
    odata.sort();


}

load.addEventListener("change", upload);
