import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Hello bienvenue, sur mon site</h1>
			<button
				className="btn btn-primary"
				onClick={() => navigate("contactez-nous")}
			>
				Contactez-nous
			</button>
			{/* <Link to="contactez-nous" className="btn btn-primary">
				Contactez-nous
			</Link> */}
			<div className="p-2 mt-3">
				<button
					className="btn-danger btn"
					onClick={() => navigate(-1)}
				>
					Retour
				</button>
			</div>
		</div>
	);
};

export default Home;
