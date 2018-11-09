// document.addEventListener('DOMContentLoaded',function () {
// 	const vm = new Vue({
// 		el: '#app',
// 		data: {
// 			post: {type:Object},
// 		},
// 		methods: {
// 			send:function(){
// 				axios.post('/api/make-contract/',this.post)
// 					.then((val)=>{console.log(val.data);alert('SUCCESS')})
// 					.catch((error)=>{console.log(error);});
// 			}
// 		},
// 	});
// });
$(document).ready(function(){
	$('#form').submit(function(e){
		e.preventDefault();
		const post = {fio:123};
		axios.post('/api/make-contract',post)
 					.then((val)=>{console.log(val.data);alert('SUCCESS')})
 					.catch((error)=>{console.log(error);});

	})
})