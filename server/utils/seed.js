import mongoose, { Schema } from 'mongoose';

import db from '../config/db';
import logger from './logger';

import User from '../modules/user/user.model';
import UserData from '../data/user';

import Initiative from '../modules/initiative/initiative.model';
import InitiativeData from '../data/initiative';



  async function insertData() {
    try {
      await db.open();

      //Insert user data
      await User.collection.drop();
      await User.collection.insert(UserData.data);

      //Insert initiative data
      await Initiative.collection.drop();
      await Initiative.create(InitiativeData.data);

    } catch(err) {
      logger.log(err);
    } finally {
      //Close db and exit process
      db.close();
      process.exit(0);
    }
  };

  insertData();

//Commented following code for future reference to read data from xlsx file and feed to mongodb

  /*insertData() {
    //install npm xlsx
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
