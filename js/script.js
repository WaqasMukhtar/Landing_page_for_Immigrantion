
$(document).ready(function () {

    function validate(input, type){
        let input_val = document.querySelector(input).value
        
        switch(type) {

            case 'text':

                var letters_regex = /^[A-Za-z\s]+$/;

                // check for input null value
                if(input_val == ''){

                    console.log('wrong');
                    return false;

                // check for input first word is space    
                }else if(input_val.charAt(0) == ' '){

                    console.log('wrong');
                    return false;

                // check for only letters    
                }else if(!(input_val.match(letters_regex))){

                    console.log('wrong');
                    return false;

                // check for input last word is space
                }else if(input_val.charAt(input_val.length - 1) == ' '){

                    console.log('wrong');
                    return false;

                }

            break;

            case 'number':

                var number_regex = /^[0-9]+$/;
                
                // check for input null value
                if(input_val == ''){

                    console.log('wrong');
                    return false;

                // check for input first word is space    
                }else if(input_val.charAt(0) == ' '){

                    console.log('wrong');
                    return false;

                // check for only letters    
                }else if(!(input_val.match(number_regex))){

                    console.log('wrong');
                    return false;

                // check for input last word is space
                }else if(input_val.charAt(input_val.length - 1) == ' '){

                    console.log('wrong');
                    return false;

                }

            break;

            case 'email':

                var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                // check for input null value
                if(input_val == ''){

                    console.log('wrong');
                    return false;

                // check for input first word is space    
                }else if(input_val.charAt(0) == ' '){

                    console.log('wrong');
                    return false;

                // check for only email    
                }else if(!(input_val.match(email_regex))){

                    console.log('wrong');
                    return false;

                // check for input last word is space
                }else if(input_val.charAt(input_val.length - 1) == ' '){

                    console.log('wrong');
                    return false;

                }

            break;

            case 'comment':
            case 'address':
                
                // check for input null value
                if(input_val == ''){

                    console.log('wrong');
                    return false;

                // check for input first word is space    
                }else if(input_val.charAt(0) == ' '){

                    console.log('wrong');
                    return false;

                // check for only letters and number    
                }else if(input_val.charAt(input_val.length - 1) == ' '){

                    console.log('wrong');
                    return false;

                }

            break;

            default:

            console.log('sorry not valid type')
            return false;

        }

        return true;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5z7q-2an7jN7SAxp4YGiTEPJiUN7kxms5yg2UlYLW3wDmfao99En_BTnYJolm8Dn4/exec';
    const form = document.forms['roots-consultants-form']

    form.addEventListener('submit', e => {

        e.preventDefault();

        let isValidVisaType = $('#form-visa-type').val();
        let isValidEmail = validate('#form-email', 'email');
        let isValidName = validate('#form-name', 'text');
        let isValidOccupation = validate('#form-occupation', 'text');
        let isValidNumber = validate('#form-number', 'number');
        let isValidDob = validate('#form-dob', 'comment');
        let isValidComment = validate('#form-comments', 'comment');

        if(!isValidVisaType){
            
            alert('Visa type is invalid');
            return;

        }

        if(!isValidEmail){

            alert('Email is invalid');
            return;

        }

        if(!isValidName){

            alert('Name is invalid');
            return;

        }

        if(!isValidOccupation){

            alert('Occupation is invalid');
            return;

        }

        if(!isValidNumber){

            alert('Number is invalid');
            return;

        }

        if(!isValidDob){

            alert('Date Of Birth is invalid');
            return;

        }

        if(!isValidComment){

            alert('Comment is invalid');
            return;

        }

        $('#form-submit').attr('disabled', true);

        $('#form-submit').append(`

        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        `)
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            
            alert('Form submit successfully');

            location.reload();           

        })
        .catch(error => {
            
            alert('Something is wrong please try again!');

            $('#form-submit').attr('disabled', false);

            $('#form-submit').empty();

            $('#form-submit').text('Submit');  

        })
    
    });

});
