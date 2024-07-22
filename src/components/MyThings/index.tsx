"use client"

import styles from "./index.module.css";
import { getThingsForUser, storeThingForUser } from "@/actions/things";
import { Thing, User } from "@/lib/types";
import Button from "@/components/Button";
import TextField from "@/components/Form/TextField";
import { useEffect, useRef, useState } from "react";

interface Props {
    user: User
}

export default function MyThings({ user }: Props) {
    const [things, setThings] = useState([]);

    useEffect(() => {
        const loadThings = async () => {
            let result = await getThingsForUser(user);
            
            if (result.success === false) {
                return alert('Error');
            }

            setThings(result.things);
        }
        
        loadThings();
    }, []);

    const handleAddThing = async (data: FormData) => {
        let result = await storeThingForUser(data, user);
    
        if (result.success === false) {
            return alert('Error');
        }

        setThings((current) => {
            let clone = JSON.parse(JSON.stringify(current));
            clone.push(result.thing);
            return clone;
        })
      };

  return (
    <div>
    <div>
        <form className={styles.Form} action={handleAddThing}>
          <TextField label="Name" name="name" />
          <TextField label="Description" name="description" />
          <Button type="submit">Add Thing</Button>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {things.map((thing: Thing) => (
                <tr key={thing._id}>
                    <td>{thing._id}</td>
                    <td>{thing.name}</td>
                    <td>{thing.description}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
