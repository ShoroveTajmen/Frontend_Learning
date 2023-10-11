const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const storagevalue = document.getElementById('storage-value');
    const value = storagevalue.value;

    //
    if(id && value){

        localStorage.setItem(id, value);
    }
    idInput.value = '';
    storagevalue.value = '';

}