module.exports = {
  data: [
    {
      _id: 'SQUAD',
      name: 'FI-SQUAD',
      owner_id:{
       _id: 'absett',
       first_name: 'Abhishek',
       last_name: 'Sett'
      },
     manager:{
       _id: 'pakamath',
       first_name: 'Pavan',
       last_name: 'Kamath'
     },
     lead:[{
       _id: 'sgutam',
       first_name: 'Suresh',
       last_name: 'Gutam'
     }],
     members:[{
       _id: 'santnagaraj',
       first_name: 'Santhosh',
       last_name: 'Nagaraj',
       joining_date: '',
       deactivatedDate: ''
     }],
     type:{
       _id: 'SQUAD-FI',
       name: 'SQUAD'
     },
     brief: 'Test brief',
     description: 'Test description',
     skills: ['React', 'Node', 'GraphQl'],
     startDate: "2017-08-03T16:56:51.797Z",
     creationDate: "2017-08-03T16:56:51.797Z",
     deadlineDate: "2017-08-03T16:56:51.797Z"
    }
  ]
}
