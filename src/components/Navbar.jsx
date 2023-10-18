import "../css/components/Navbar.css";
export function Sidebar() {
	return (
		<div className="navbar">
			<div className="navbar__menu">
				<ul>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Skills</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
