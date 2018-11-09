document.addEventListener('DOMContentLoaded',function () {
	const vm = new Vue({
		el: '#app',
		data: {
			post: {type:Object},
		},
		methods: {
			send:function(){
				axios.post('/api/make-contract/',this.post)
					.then((val)=>{console.log(val.data);alert('SUCCESS')})
					.catch((error)=>{console.log(error);});
			}
		},
	});
});