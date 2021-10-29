import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cat from "./Cat";
import { setCats } from "./catsSlice";
const CatList = () => {
	const dispatch = useDispatch();
	const catState = useSelector((state) => state.cats);
	const sortedState = [...catState].sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
	// const sortedCats = catState.sort((a, b) => (a.itemM > b.itemM ? 1 : -1));
	useEffect(() => {
		console.log("lifecycle started ");
		(async () => {
			const catData = await fetch("https://cataas.com/api/cats").then((respone) => respone.json());
			dispatch(
				setCats(
					catData.map((cat: any) => ({
						id: cat.id,
						upvotes: 0,
					}))
				)
			);
		})();
		return () => {
			console.log("Lifecycle ended");
		};
	}, [dispatch]);

	return (
		<div>
			{catState && (
				<ul>
					{sortedState
						// .sort((a, b) => (a.upvotes > b.upvotes ? 1 : -1))
						.map((catItem) => (
							<li key={catItem.id}>
								<Cat catItem={catItem} />
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default CatList;
