//Database connection code
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// console.log(`Connecting to the database`);

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));


// pool.query(`
// SELECT students.id, students.name as student_name, cohorts.name as cohort_name
// FROM students JOIN cohorts
// ON cohorts.id = students.cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.student_name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
//   })
// });


// pool.query(`
// SELECT students.id, students.name as student_name, cohorts.name as cohort_name
// FROM students JOIN cohorts
// ON cohorts.id = students.cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));


// const [ , , cohort, limit]= process.argv

// const values = [`%${cohort}%`, `${limit}`];

// pool.query(`
// SELECT students.id, students.name, cohorts.name as cohort_name
// FROM students
// JOIN cohorts
// ON students.cohort_id = cohorts.id
// WHERE cohorts.name Like $1
// LIMIT $2;
// `, values) 
// .then(res => {
//   res.rows.forEach(user => {

//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
//   })
// }).catch(err => console.error('query error', err.stack));



pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));