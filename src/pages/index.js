import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Services from "../components/services"

export default () => (
	<Layout>
		<Header />
		<Services /> 
		<section id="aboutUs"></section>
		<section id="portfolio"></section>
		<section id="contact"></section>
	</Layout>
);