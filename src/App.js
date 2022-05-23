import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFond from "./components/PageNotFond";
import Posts from "./components/Posts";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="posts" element={<Posts />} />
				<Route path="contactez-nous" element={<Contact />} />
				<Route path="*" element={<PageNotFond />} />
			</Routes>
		</>
	);
}

export default App;
