import { json } from 'body-parser';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { firstname, lastname, password, email} = req.body;

  if (!firstname || !lastname || !password || !email ) {
    res.status(400).json({ message: 'Bad Request' });
    return;
  }


  res.status(200).json({ message: 'Registration successful' });
}
