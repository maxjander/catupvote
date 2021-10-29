import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cat from "./Cat";
import { setCats } from "./catsSlice";
const CatList = () => {
	const dispatch = useDispatch();
	const catState = useSelector((state) => state.cats);
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
					{catState.map((catItem) => (
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
