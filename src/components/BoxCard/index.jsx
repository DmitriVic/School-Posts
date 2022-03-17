import React from "react";
import "antd/dist/antd.css";

import cn from "classnames";
import s from "./styles.module.css";

import { Card,Tag, Avatar, Image, } from "antd";



export const BoxCard = ({title, text,tags}) => {
  return (
    <Card   title={title} style={{ width: 320}}>
      <Avatar
        size={80}
        src={
          <Image
            //src={item.author.avatar}
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 50 }}
          />
        }
      />
      <p>{text}</p>
      <Tag color="green">{tags}</Tag>
    </Card>
  );
};
