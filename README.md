## Tips
- you can start at a specific row by adding options to the import, in this case, were using "sheet_to_json", so we can add that it starts to read from the 3rd row (starting from 0)
```
let wb = xlsx.readFile(path.join(__dirname, 'Book1.xlsx'));
    let sheet = wb.Sheets['Sheet1'];


    let jsonSheet =  xlsx.utils.sheet_to_json(sheet, {range: 2});
```