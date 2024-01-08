import React from 'react';
import Users from './Users';

function App() {

	const users = [
		{ name: 'user1', surn: 'surn1', age: 30},
		{ name: 'user2', surn: 'surn2', age: 31},
		{ name: 'user3', surn: 'surn3', age: 32},
	];

	let result = users.map((user, index) => (
		<div key={index}>
		  <table>
			<thead>
			  <tr>
				<th>Name</th>
				<th>Surname</th>
				<th>Age</th>
			  </tr>
			</thead>
			<tbody>
			  <tr key={index}>
				<td>{user.name}</td>
				<td>{user.surn}</td>
				<td>{user.age}</td>
			  </tr>
			</tbody>
		  </table>
		</div>
	  ));
	  

	return <div>

        <Users />
		<p>{result}</p>
	</div>;
}

export default App;