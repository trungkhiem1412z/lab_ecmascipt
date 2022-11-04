const getApi = async () => {
	let res = await axios.get('https://reqres.in/api/users?page=1&per_page=10');
	return res;
};
getApi().then((res) => {
	const show_res = document.querySelector('.content-api');
	let arr = res;
	// console.log(arr['data'].data);

	Array.from(arr['data'].data).forEach((i) => {
		console.log(i);
		const res_card = `
		<div class='card'>
			<div class='avt'>
				<img src='${i.avatar}' alt='avatar'>
			</div>
			<div class='name'>
				${i.first_name} ${i.last_name}
			</div>
			<div>
				${i.email}
			</div>
		</div>
		`;
		show_res.innerHTML += res_card;
	});
});
