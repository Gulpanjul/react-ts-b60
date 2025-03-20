interface User {
	id: number;
	name: string;
}

interface UserListProps {
	users: User[];
}

export default function UserList({ users }: UserListProps) {
	return (
		<ul>
			{users.map((user) => (
				<li>{user.name}</li>
			))}
		</ul>
	);
}
