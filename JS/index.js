document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const recipeName = document.querySelector('input[name="recipeName"]').value;
        const emailAddress = document.querySelector('input[name="emailAddress"]').value;
        const todaysDate = document.querySelector('input[name="todaysDate"]').value;
        const recipeType = document.querySelector('select[name="recipeType"]').value;

        const ingredients = [];
        const ingredientCheckboxes = document.querySelectorAll('input[name="ingredients"]:checked');
        ingredientCheckboxes.forEach(checkbox => {
            ingredients.push(checkbox.value);
        });

        sessionStorage.setItem('recipeName', recipeName);
        sessionStorage.setItem('emailAddress', emailAddress);
        sessionStorage.setItem('todaysDate', todaysDate);
        sessionStorage.setItem('recipeType', recipeType);
        sessionStorage.setItem('ingredients', JSON.stringify(ingredients));

        alert("Your recipe has been submitted successfully!");
    });
});
