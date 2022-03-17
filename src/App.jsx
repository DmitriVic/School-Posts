import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu,  Row, Col, Pagination, } from "antd";
//import { Card } from "antd";
import { postData } from "../posts";
import { useState } from "react";
import { BoxCard } from "./components/BoxCard/index.jsx";
import {Title} from "./components/Title/index";

const { Header, Content, Footer } = Layout;

// import { Header } from "./components/Header";
// import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";

export const App = () => {
	
	//const [arr, setArr] = useState([])
	const [rows, setRows] = useState([0, 9]);
	//console.log(rows)

	let res = [];
	postData.map((elem, indx) => {
		if (indx < rows[1] && indx >= rows[0]) {
			res.push(elem);
		}
	});
	
	function func () {
		
		
	}
	
	//console.log(postData);

	return (
		<div className="container">
			<Layout style={{ width: "100%" }}>
				<Header
					className="header"
					style={{ position: "sticky", top: 0, zIndex: 1, maxWidth: 1440 }}
				>	<div className="logo"></div>
					<Menu className="header__menu" theme="dark" mode="horizontal">
						<Menu.Item key="1">
							<a href="#">Home</a>
						</Menu.Item>
						<Menu.Item key="2">
							<a href="https://remix.run/docs/en/v1">Remix Docs</a>
						</Menu.Item>
						<Menu.Item key="3">
							<a href="https://github.com/">GitHub</a>
						</Menu.Item>
					</Menu>
				</Header>
				<Content className="site-layout" style={{ padding: "0 50px", marginTop: 15 }} >
					<Title/>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }} >
						<Row gutter={[16, 24]} >
							{res.map((item) => {
								//console.log(item);
								return (
									<Col  key={item._id} className="gutter-row card" xs={24} md={12} lg={12} xl={8}>
										<BoxCard {...item} />
									</Col>
								);
							})}
						</Row>
						<Pagination
							defaultCurrent={1}
							onChange={function (page) {
								setRows((state) => {
									return [page * 9 - 9, page * 9];
								});
							}}
							defaultPageSize={1}
							total={Math.ceil(postData.length / 9)}
						/>
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</div>
	);
};

//extra={<a href="#">More</a>}
