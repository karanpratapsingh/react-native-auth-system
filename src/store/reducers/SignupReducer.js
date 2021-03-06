import * as formValidation from '../../util/FormValidation';

const initialState = {

    userNameField: {

        value: '',
        isValid: true,
        errorMessage: 'username is not valid'
    },
    emailField: {

        value: '',
        isValid: true,
        errorMessage: 'email is not valid'
    },
    passwordField: {

        value: '',
        isValid: true,
        errorMessage: 'password is too short'
    },
    confirmPasswordField: {

        value: '',
        isValid: true,
        errorMessage: 'passwords do not match'
    },
    buttonLabel: 'Signup',
    buttonDisabled: true,
    isLoading: false
};

const signupDetailsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'USERNAME_TEXTINPUT::CHANGED':

            return {

                ...state,
                 userNameField: {

                    ...state.userNameField,
                    value: action.usernameValue,
                    isValid: formValidation.isUsernameValid(action.usernameValue)
                 },
                buttonDisabled: formValidation.isFormValid({

                    ...state,
                    userNameField: {

                        ...state.userNameField,
                        value: action.usernameValue,
                        isValid: formValidation.isUsernameValid(action.usernameValue)
                    }
                })      
            };

        case 'EMAIL_TEXTINPUT::CHANGED':

            return {

                ...state,
                emailField: {

                    ...state.emailField,
                    value: action.emailValue,
                    isValid: formValidation.isEmailValid(action.emailValue)
                },
                buttonDisabled: formValidation.isFormValid({

                    ...state,
                    emailField: {

                        ...state.emailField,
                        value: action.emailValue,
                        isValid: formValidation.isEmailValid(action.emailValue)
                    }
                })                      
            };

        case 'PASSWORD_TEXTINPUT::CHANGED':

            return {

                ...state,
                passwordField: {

                    ...state.passwordField,
                    value: action.passwordValue,
                    isValid: formValidation.isPasswordValid(action.passwordValue)
                },
                buttonDisabled: formValidation.isFormValid({
                    
                    ...state,
                    passwordField: {

                        ...state.passwordField,
                        value: action.passwordValue,
                        isValid: formValidation.isPasswordValid(action.passwordValue)
                    }
                })                      
            };

        case 'CONFIRMPASSWORD_TEXTINPUT::CHANGED':

            return {

                ...state,
                confirmPasswordField: {

                    ...state.confirmPasswordField,
                    value: action.confirmPasswordValue,
                    isValid: formValidation.doPasswordMatch(state.passwordField.value, action.confirmPasswordValue)
                },
                buttonDisabled: formValidation.isFormValid({
                    
                    ...state,
                    confirmPasswordField: {

                        ...state.confirmPasswordField,
                        value: action.confirmPasswordValue,
                        isValid: formValidation.doPasswordMatch(state.passwordField.value, action.confirmPasswordValue)
                    }
                }) ,              
            };


        case 'SIGNUP_BUTTON::STATE_LOADING_START': 

            return {

                ...state,
                isLoading: true,
                buttonLabel: 'Signing Up'
            };

        case 'SIGNUP_BUTTON::PRESSED': 

            // Handle signup action here.

            return {

                ...state,
                isLoading: false,
                buttonLabel: 'Sign Up' 
            };

        case 'RESET::APPLICATION_DATA':

            // Reset signup form data.
            return {

                ...initialState
            };

        default:
            return state;
    }
};

export default signupDetailsReducer;