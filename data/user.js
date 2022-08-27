import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('commerce12@', 10),
    isAdmin: true,
  },
  {
    name: 'Alice',
    email: 'Alice@example.com',
    password: bcrypt.hashSync('Alice12@', 10),
  },
  {
    name: 'Bob',
    email: 'Bob@example.com',
    password: bcrypt.hashSync('Bob12@', 10),
  },
  {
    name: 'Prashant Maurya',
    email: '0166621m@gmail.com',
    password: bcrypt.hashSync('Prashant12@', 10),
  },
];

export default users;
