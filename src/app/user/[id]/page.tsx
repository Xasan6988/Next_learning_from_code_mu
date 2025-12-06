import { notFound } from 'next/navigation';

const users = {
	1: 'user1',
	2: 'user2',
	3: 'user3',
	4: 'user4',
	5: 'user5',
};
export default async function Page({params}: {params: Promise<{id: keyof typeof users}>}) {
  const {id} = await params;

  const user = users?.[id];

  if (!user) return notFound();

  return <div>Hello, {user}</div>
}
