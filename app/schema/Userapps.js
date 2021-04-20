cube(`Userapps`, {
  sql: `SELECT * FROM demo.userapps`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [username]
    }
  },
  
  dimensions: {
    username: {
      sql: `username`,
      type: `string`
    },
    
    userage: {
      sql: `userage`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
