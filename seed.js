const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
 const lunnar = await Campus.create({
   name: 'lunnar',
   imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
   address: '1 main street',
   description: 'cool'
 });

 const mars = await Campus.create({
  name: 'mars',
  imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
  address: '2 main street',
  description: 'good'
});

const smith = await Campus.create({
  name: 'smaith',
  imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
  address: '3 main street',
  description: 'nice'
});

const wenyiZheng = await Student.create({
  firstName: 'Wenyi',
  lastName: 'Zheng',
  email: 'wenyi@email.com',
  imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
  gpa:'3',
  campusId: mars.id
});
  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
