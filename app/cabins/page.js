import Counter from "../_components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(res);
  const data = await res.json();
  //   console.log(data);
  return (
    <ul>
      {data.map((user) => (
        <>
          <li key={user.id}>
            {user.name}: Lives at {user.address.suite}, {user.address.street}{" "}
            {user.address.city}
          </li>
        </>
      ))}
      <Counter users={data} />
    </ul>
  );
}
