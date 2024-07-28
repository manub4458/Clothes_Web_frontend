import { signOut } from '@/auth'; // Ensure the correct path to your auth module

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await signOut();
    res.redirect('/auth/login'); // Redirect to the login page after sign-out
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
