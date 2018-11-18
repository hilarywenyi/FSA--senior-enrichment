const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')

const campuses = [
  {
    name: 'Mars',
    imageUrl: '/images/mars.png',
    address: 'around 141.6 million mi from Sun',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury'
  },
  {
    name: 'Moon',
    imageUrl: '/images/luna.png',
    address: 'around 238,900 mile from Earth',
    description: "The Moon is a astornomical body that orbits planet Earth and is Earth's only permanent natural satelite."
  },
  {
    name: 'Earth',
    imageUrl: '/images/earth.png',
    address: 'around 92.96 million mi from Sun',
    description: 'The students here are very down-to-earth.'
  },
  {
    name: 'Venus',
    imageUrl: '/images/venus.png',
    address: 'around 67.24 million mi from Sun',
    description: 'Venus is the second planet from the Sun. It has the longest rotation period of any planet of any planet in the Solar System and rotates in the opposite direction to most other planets.'
  },
  {
    name: 'Mercury',
    imageUrl: '/images/mercury.png',
    address: 'around 35.98 million mi from Sun',
    description: 'Mercury is the smallest and innermost planet in the Solar Sytem.'
  }
];

const students = [{
  "firstName": "Elon",
  "lastName": "Musk",
  "email": "emusk@spacex.com",
  "imageUrl": "https://amp.businessinsider.com/images/57ea82c9077dcc3d018b85f6-750-375.jpg",
  "gpa": 3.9,
  "campusId": 1
}, {
  "firstName": "Matt",
  "lastName": "Damon",
  "email": "mdamon@gmail.com",
  "imageUrl": "https://imgix.bustle.com/rehost/2016/9/13/90ba4cdc-8858-487c-8872-ff6120d4cca4.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
  "gpa": 3.4,
  "campusId": 1
},
{
  "firstName": "Neil",
  "lastName": "Armstrong",
  "email": "earmstrong@moonlanding.com",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/260px-Aldrin_Apollo_11_original.jpg",
  "gpa": 4.0,
  "campusId": 2
},
{
  "firstName": "Edwin",
  "lastName": "Aldrin",
  "email": "ealdrin@moonlanding.com",
  "imageUrl": "https://www.universetoday.com/wp-content/uploads/2010/01/Buzz_aldrin-e1434056051334.jpg",
  "gpa": 3.6,
  "campusId": 2
},
{
  "firstName": "Alan",
  "lastName": "Bean",
  "email": "abean@moonlanding.com",
  "imageUrl": "https://cbssanfran.files.wordpress.com/2018/05/alan-bean.jpg",
  "gpa": 3.9,
  "campusId": 2
},
{
  "firstName": "Matthew",
  "lastName": "McConaughey",
  "email": "mmcconaughey@gmail.com",
  "imageUrl": "https://www.thewrap.com/wp-content/uploads/2014/10/Matthew-McConaughey-Interstellar-Trailer-3.jpg",
  "gpa": 3.6,
  "campusId": 3
},
{
  "firstName": "Taraji",
  "lastName": "Henson",
  "email": "thenson@nasa.com",
  "imageUrl": "https://peopledotcom.files.wordpress.com/2016/08/taraji-p-henson-800.jpg?w=800&h=600&crop=1",
  "gpa": 3.6,
  "campusId": 3
},
];

const seed = async () => {
  await db.sync({force: true})
  .then(()=>{
    return Promise.all(campuses.map(campus => {
      return Campus.create(campus)
    }))
  })
  .then(()=>{
    return Promise.all(students.map(student => {
      return Student.create(student)
    }))
  })
  .then(()=>{
    console.log(green('Seeding success!'))
  })
  // seed your database here!
//  const lunnar = await Campus.create({
//    name: 'lunnar',
//    imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
//    address: '1 main street',
//    description: 'cool'
//  });

//  const mars = await Campus.create({
//   name: 'mars',
//   imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
//   address: '2 main street',
//   description: 'good'
// });

// const smith = await Campus.create({
//   name: 'smaith',
//   imageUrl: 'https://www.smith.edu/sites/default/files/styles/img-explore-fpo/public/media/Callouts/college-hall-offices-696.jpg?itok=J-O8tr2U',
//   address: '3 main street',
//   description: 'nice'
// });
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
