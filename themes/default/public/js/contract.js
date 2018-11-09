document.addEventListener('DOMContentLoaded',function () {
	const vm = new Vue({
		el: '#app',
		data: {
			post: {type:Object},
		},
		methods: {
			send:function(){
				axios.post('/api/make-contract/',this.post)
					.then((val)=>{console.log(val);this.answer = val.data;alert('SUCCESS')})
					.catch((error)=>{this.error.push(error);});
			}
		},
	});
});