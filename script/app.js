// const passwordOptions = ['password', 'text'];

const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const passwordToggle = document.querySelector('.js-password-toggle-checkbox');

    passwordToggle.addEventListener('change', function () {
        const passwordInput = document.querySelector('.js-password-input');
        const checkbox = document.querySelector('.js-password-toggle-checkbox').checked;
        if(checkbox == true){
            passwordInput.type = 'text';
        }
        else{
            passwordInput.type = 'password';
        }
        // passwordInput.type = passwordOptions[+this.checked];
    });
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();