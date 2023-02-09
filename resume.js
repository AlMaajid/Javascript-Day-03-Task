let myResume = {
  website: 'www.majithalrasheeth.in',
  qualification: {
    department: 'B.E Computer Science And Engineering',
    college: 'Aalim Muhammed Salegh College Of Engineering',
    university: 'Anna University',
    yearOfPassing: '2021',
    cGPA: 7.2,
  },
  technicalSkills: [
    'HTML5',
    'CSS',
    'JavaScript',
    'BootStrap',
  ],
  finalYearProject: [
    'Kalvi Web Application For Students/Tutors',
  ],
  languages: ['Tamil', 'English', 'Malayalam'],
  interests: ['workout', 'reading', 'talking to myself'],
  personalInfo: {
    name: 'Majith Al Rasheeth A',
    dob: '24-02-2000',
    address: {
      street: 'Al-Ameen Street',
      Village: 'Pudumadam',
      Town: 'Ramanathapuram',
      State: 'TamilNadu',
    },
    phone_number: +919677983163,
    education: ['B.E Computer Science and Engineering'],
    email_address: 'majithalrasheeth@outlook.com',
  },
};
let jsonResume = JSON.stringify(myResume);
console.log(jsonResume);

let normalResume = JSON.parse(jsonResume);
console.log(normalResume);