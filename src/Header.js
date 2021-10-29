import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetAllCats } from "./features/catsSlice";

const Header = () => {
	const dispatch = useDispatch();
	const catState = useSelector((state) => state.cats);
	const starsTotal = catState.reduce((acc, catItem) => acc + catItem.upvotes, 0);
	return (
		<header>
			<h1>Catzzz</h1>
			<div>
				<div>Total {starsTotal} ⭐️</div>
				<div onClick={() => dispatch(resetAllCats())}>🔄 Reset All</div>
			</div>
		</header>
	);
};

export default Header;
