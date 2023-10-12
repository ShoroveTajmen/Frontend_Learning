import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
  }
  return (
    <div>
      <h3>Updated information of : {loadedUser.name}</h3>
      <form onClick={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
