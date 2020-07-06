formContact.onsubmit = async(e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
        method: 'POST',
        body: new FormData(formContact)
    });

    let result = await response.json();

    alert(result.message);
};