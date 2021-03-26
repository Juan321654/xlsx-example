let xlsx = require("xlsx");
let path = require("path");

function readBook(){
    let wb = xlsx.readFile(path.join(__dirname, 'file-example.xlsx'));
    let sheet = wb.Sheets['Sheet1'];


    let jsonSheet =  xlsx.utils.sheet_to_json(sheet);
    console.log(jsonSheet);

    return jsonSheet;
}
readBook();
module.exports = {
    readBook
}