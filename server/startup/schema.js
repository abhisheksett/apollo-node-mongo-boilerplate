import mongoose, { Schema } from 'mongoose';
//import XLSX from 'xlsx';
import User from './modules/user/user.model';
import UserData from './data/user';

//Schema definitations
var projectSchema = new Schema({
  project_name: String,
  project_id: {
    type: String,
    unique: true
  },
});

module.exports = {

  insertData() {
    User.collection.insert(UserData.data, (data) => {
      console.log('User data inserted successfully');
    }).catch((err) => {
      console.log('User data insertion error!!', err);
    })
  }
  /*insertData() {
    var workbook = XLSX.readFile('./data/Workbook1.xlsx');
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach((y) => {
        var worksheet = workbook.Sheets[y];
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[y])
        console.log(xlData)
        // var headers = {};
        // var data = [];
        // for(let z in worksheet) {
        //     if(z[0] === '!') continue;
        //     //parse out the column, row, and value
        //     var col = z.substring(0,1);
        //     var row = parseInt(z.substring(1));
        //     var value = worksheet[z].v;
        //
        //     //store header names
        //     if(row == 1) {
        //         headers[col] = value;
        //         continue;
        //     }
        //
        //     if(!data[row]) data[row]={};
        //     data[row][headers[col]] = value;
        // }
        // //drop those first two rows which are empty
        // data.shift();
        // data.shift();
        // console.log(data);
    });

  }*/

};
