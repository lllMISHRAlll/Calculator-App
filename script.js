let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let lastChar = "";

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML.trim();

        if (buttonText === '=') {
            
            string = string.replace(/\s+/g, '').replace(/x/g, '*');
            try {
                
                let result = eval(string);
                result = parseFloat(result.toFixed(3)); // Round to 3 decimal places and parse to remove unnecessary zeros
                input.value = result;
                string = result.toString(); 
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'RESET') {
            string = "";
            input.value = string;
            lastChar = "";  
        } else if (buttonText === 'DEL') {
            string = string.trim().slice(0, -1);
            input.value = string;
            lastChar = string.slice(-1); // Update last character
        } else {
            
            if (['+', '-', '/', 'x'].includes(buttonText)) {
                if (buttonText === '-' && (string === "" || ['+', '-', '/', 'x'].includes(lastChar))) {
                    string += buttonText;
                } 
                else if (string && !['+', '-', '/', 'x'].includes(lastChar)) {
                    string += ` ${buttonText} `;
                }
            } else {
                string += buttonText;
            }

            input.value = string;
            lastChar = buttonText;
        }
    });
});
