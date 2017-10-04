import React , {PropTypes} from 'react';
import { reduxForm } from 'redux-form';

//Define our form names for redux-form
export const fields = ['firstName', 'lastName', 'email', 'sex'];

/**
 * Our basic validation. Its abit noddy but just for demo purpose.s
 */
const validate = values => {

    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'First name is required'
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required'
    }

    if (!values.email) {
        errors.email = 'Email is required'
    }

    if (!values.sex) {
        errors.sex = 'Sex is required'
    }

    return errors


};

class Form extends React.Component {
    render() {

        /* define our fields to bind to our form, from redux-form */
        const { fields: { firstName, lastName, email, sex }, handleSubmit } = this.props;

        return (<form onSubmit={handleSubmit(() => alert('success!'))}>

            <div>
                <label>First name:</label>
                <input
                    type="text"
                    placeholder="First name"
                    {...firstName} />

                {firstName.touched
                    && firstName.error
                    && <div>{firstName.error}</div>}

            </div>

            <div>
                <label>Last name:</label>
                <input
                    type="text"
                    placeholder="Last name"
                    {...lastName} />

                {lastName.touched
                    && lastName.error
                    && <div>{lastName.error}</div>}

            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    {...email} />

                {email.touched
                    && email.error
                    && <div>{email.error}</div>}

            </div>

            <div>

                <label>Sex</label>

                <div>
                    <label>
                        <input
                            type="radio"
                            {...sex}
                            value="male"
                            checked={sex.value === 'male'}/> Male
                    </label>
                    <label>
                        <input
                            type="radio" {...sex}
                            value="female"
                            checked={sex.value === 'female'}/> Female
                    </label>
                </div>

                {sex.touched
                    && sex.error
                    && <div>{sex.error}</div>}

            </div>

            <button type="submit" >
                Submit
            </button>

        </form>);
    }
}

Form.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

/**
 * Map our form to redux-form
 *
 * form -  The redux store will now have a section called userDetails which will store our form data
 *
 * fields - Tells redux-form the fields of our form and will spread its API across the objects (ready to be used in our form)
 *
 * validate - Sync function to call when we need to validate.
 */
export default reduxForm({
    form: 'userDetails',
    fields,
    validate
})(Form);
