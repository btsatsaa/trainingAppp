// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default async function handler(req, res) {
  // Your server-side logic here
  res.status(200).json({ message: 'Hello from the API!' });
}