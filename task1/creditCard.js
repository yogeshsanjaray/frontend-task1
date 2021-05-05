var info = [];
			function movetoNext(current, nextInputId) {  
				if (current.value.length >= current.maxLength) {  
					document.getElementById(nextInputId).focus();  
				}  
			}  
			function movetoPrev(current, prevInputId) {  
				if (current.value.length == current.minLength) {  
					document.getElementById(prevInputId).focus();  
				}  
			}
			document.addEventListener("paste", function(e) {
			if (e.target.type === "text") {
				let data = e.clipboardData.getData('Text');
				data = data.split(' ');
				// console.log(data);
				[].forEach.call(document.querySelectorAll("input[class=input]"), (node, index) => {
						node.value = data[index];
					});
				}
			});

			function delCardNum(index){
				delete info[index]
				info.filter(function(val){
					if (val === " ") {
						return false
					}
					return true
				});
				getDetails()
				console.log(info)
			}
			function getDetails() {
				let htmlCode = '';
				htmlCode += `<h2>Card Details</h2>`
				htmlCode += `<ol>`

				info.forEach(function(val,index){
					htmlCode += ` <li>
								${val.cardnumber[0]} ${val.cardnumber[1]} ${val.cardnumber[2]} ${val.cardnumber[3]}
								<button onclick='delCardNum(${index})'> Delete </button>
								</li>
								`;
				})
				htmlCode += `<ol>`

				document.getElementById('op').innerHTML = htmlCode;
			}
			function add(e){
				e.preventDefault();
				let ob = {
					cardnumber: [ e.target.input1.value, e.target.input2.value,e.target.input3.value,e.target.input4.value],
					
				}
				// console.log(ob)
				info.push(ob);
				// console.log(info);
				getDetails()       
			}