This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## React Dynamic Form

```
<DynamicForm className="form"
  title="Dynamic From"
  defaultValues={this.state.defaultValues}
  schema={this.state.schema}
  onSubmit={(model) => { this.onSubmit(model) }}>
</DynamicForm>
```
Pass form schema (json structure) as below.
```
{
    {
  "formTitle": "User Registration",
  "formDescription": "Please fill in the details below to create an account.",
  "fields": [
    {
      "id": "username",
      "label": "Username",
      "type": "text",
      "placeholder": "Enter your username",
      "required": true,
      "validation": {
        "minLength": 3,
        "maxLength": 20,
        "pattern": "^[a-zA-Z0-9_]+$",
        "errorMessage": "Username must be alphanumeric and between 3 to 20 characters."
      }
    },
    {
      "id": "email",
      "label": "Email Address",
      "type": "email",
      "placeholder": "Enter your email",
      "required": true,
      "validation": {
        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "errorMessage": "Please enter a valid email address."
      }
    },
    {
      "id": "password",
      "label": "Password",
      "type": "password",
      "placeholder": "Enter your password",
      "required": true,
      "validation": {
        "minLength": 8,
        "errorMessage": "Password must be at least 8 characters long."
      }
    },
    {
      "id": "dob",
      "label": "Date of Birth",
      "type": "date",
      "required": true
    },
    {
      "id": "newsletter",
      "label": "Subscribe to Newsletter",
      "type": "checkbox",
      "required": false
    },
    {
      "id": "country",
      "label": "Country",
      "type": "select",
      "options": [
        { "value": "us", "label": "United States" },
        { "value": "ca", "label": "Canada" },
        { "value": "uk", "label": "United Kingdom" }
      ],
      "required": true
    },
    {
      "id": "gender",
      "label": "Gender",
      "type": "radio",
      "options": [
        { "value": "male", "label": "Male" },
        { "value": "female", "label": "Female" },
        { "value": "other", "label": "Other" }
      ],
      "required": true
    }
  ],
  "submitButton": {
    "label": "Register",
    "action": "submitForm"
  }
}

          
}
```
