 function add_number() {
               
                var first_number = parseInt(document.form1.TextBox1.value);
                var second_number = parseInt(document.form1.TextBox2.value);
                var result = first_number + second_number;
     
                document.form1.TextBox3.value = result;
            }

 function sub_number() {
               
                var first_number = parseInt(document.form2.TextBox1.value);
                var second_number = parseInt(document.form2.TextBox2.value);
                var result = first_number - second_number;
     
                document.form2.TextBox3.value = result;
            }
			
 function multi_number() {
               
                var first_number = parseInt(document.form3.TextBox1.value);
                var second_number = parseInt(document.form3.TextBox2.value);
                var result = first_number * second_number;
     
                document.form3.TextBox3.value = result;
            }	
 function divide_number() {
               
                var first_number = parseInt(document.form4.TextBox1.value);
                var second_number = parseInt(document.form4.TextBox2.value);
                var result = first_number / second_number;

                document.form4.TextBox3.value = result
                if (isNaN(result)) 
                alert("Something went wrong Please check input");
                return result;
            }
            
