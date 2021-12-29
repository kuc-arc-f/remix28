//import { useEffect, useRef } from "react";
import React, {useState, useEffect, useRef} from 'react';
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import { Form, json, useActionData, redirect } from "remix";
import { gql } from "@apollo/client";
import client from '../../../apollo-client'
import Config from '../../../config'
import LibCookie from '../../lib/LibCookie'
import LibFlash from '../../lib/LibFlash';

export let meta: MetaFunction = () => {
  return {
    title: "Tasks",
    description: "Welcome to remix!"
  };
};

export let loader: LoaderFunction = async () => {
  return json([]);
}

export default function Page() {
  // state
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const initTask = async function(){
    const data = await client.query({
      query: gql`
      query {
        books {
          id
          title
          created_at
        }
      }      
      `,
      fetchPolicy: "network-only"
    });
    console.log(data.data.books);
    setData(data.data.books);
  }
  initTask();
  const keyUid = Config.COOKIE_KEY_USER_ID;
  useEffect(() => {
    const uid = LibCookie.get_cookie(keyUid);
    console.log("uid=", uid);
    if(uid === null){
      console.log("uid nothing");
      location.href = '/login';
    }
    const msg: any = LibFlash.getMessageObject();
    setMessage(msg.success);
    console.log(msg);     
  },[])
//console.log(data);
  return (
    <div className="remix__page">
      { message ? 
      <div className="alert alert-success" role="alert">{message}</div> 
      : <div /> 
      }       
      <main>
        <h3>Books - Index</h3>
        <hr />
        <Link to="/books/create" className="btn btn-primary">Create</Link>
        <hr />
        <ul>
        {data.map(item => (
          <li key={item.id} className="remix__page__resource">
            <h3>{item.title}</h3>
            <Link to={item.id} className="btn btn-sm btn-outline-primary mx-2">Show</Link>
            <Link to={`edit/${item.id}`} 
            className="btn btn-sm btn-outline-primary">edit
            </Link>
            <hr className="my-2" />
          </li>
        ))}
        </ul>
      </main>
    </div>
  );
}
