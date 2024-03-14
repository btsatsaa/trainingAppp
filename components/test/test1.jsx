import Form from 'react-bootstrap/Form';

function Test1() {
 
  return (
   
    <Form.Select className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left text-primary-dark dark:text-primary-light" aria-label="Default select example" >
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default Test1;