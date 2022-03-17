import React from "react";
import cn from "classnames";
import s from "./styles.module.css";
import "antd/dist/antd.css";
import { Button , Breadcrumb} from "antd";

export const Title = () => {
	return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item><a href="./">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="./">All posts</a></Breadcrumb.Item>
      </Breadcrumb>
      <div className="box">
        <h2>Welcome to Our Image Board!</h2>
        <p style={{ marginBottom: "30px" }}>
          We're stoked that you're here. 🥳
        </p>
        <Button size="large" className="btn"onClick={e=>{
			  console.log('Есть контакт');
		  }} >
          Create post
        </Button>
      </div>
    </>
  );
};

