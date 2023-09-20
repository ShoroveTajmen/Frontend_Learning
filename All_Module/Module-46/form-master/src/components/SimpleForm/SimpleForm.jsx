const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }


    return (
        <div>
        </div>
    );
};

export default SimpleForm;
