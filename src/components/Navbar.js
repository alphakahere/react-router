import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeLinkStyle = ({ isActive }) => {
		return {
			color: isActive && "red",
		};
	};
	return (
		<nav className="navbar navbar-expand-lg bg-light mb-4">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Mon Blog
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/"
								style={activeLinkStyle}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/posts"
								style={activeLinkStyle}
							>
								Blog
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/about"
								style={activeLinkStyle}
							>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
