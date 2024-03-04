import "./App.css";
import { useEffect, useState } from "react";

// const app = initializeApp({
//   apiKey: "AIzaSyC417he1Upt3FECNHrixMtNS-ayP2MPJcU",
//   authDomain: "shoutouts-275a9.firebaseapp.com",
//   projectId: "shoutouts-275a9",
//   storageBucket: "shoutouts-275a9.appspot.com",
//   messagingSenderId: "102354003349",
//   appId: "1:102354003349:web:17822cf3f68052d019829c",
// });

type Shoutout = {
  _id: string;
  name: string;
};

const useShoutouts = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  useEffect(() => {
    const getShoutouts = async () => {
      const response = await fetch(
        "http://localhost:5001/shoutouts-275a9/us-central1/getShoutouts"
      );

      return (await response.json()) as Shoutout[];
    };

    getShoutouts()
      .then(setShoutouts)
      .catch((error) => console.error(error));
  }, []);

  return shoutouts;
};

const useCreateShoutout = () => {
  return (shoutout: Omit<Shoutout, "_id">) =>
    fetch("http://localhost:5001/shoutouts-275a9/us-central1/createShoutout", {
      method: "POST",
      body: JSON.stringify(shoutout),
    });
};

function App() {
  const shoutouts = useShoutouts();
  const createShoutout = useCreateShoutout();

  const handleCreateShoutout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Create an object to hold the form data
    const data: { [key: string]: FormDataEntryValue } = {};

    // Use the FormData.entries() function to get all field names and values
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    createShoutout(data as Shoutout);

    // Refresh
    window.location.reload();
  };

  return (
    <main>
      {shoutouts.map(({ _id, name }) => (
        <div key={_id}>{name}</div>
      ))}

      <form onSubmit={handleCreateShoutout}>
        <input name="name" placeholder="Shoutout Text" />
        <button type="submit">Create Shoutout</button>
      </form>
    </main>
  );
}

export default App;
