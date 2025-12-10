import { notFound } from 'next/navigation';

const users = {
	1: 'user1',
	2: 'user2',
	3: 'user3',
	4: 'user4',
	5: 'user5',
};

interface IUserParams {
	params: Promise<{id: keyof typeof users}>
}


export const generateMetadata = async ({params}: IUserParams) => {
	const {id} = await params;

	return {
		title: `User ${id}`,
		description: `User ${id} description`,
	}
}

export default async function Page({params}: IUserParams) {
  const {id} = await params;

  const user = users?.[id];

  if (!user) return notFound();

  return <div>Hello, {user}</div>
}
