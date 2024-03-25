// your code here
 const form = document.getElementById('myForm');
        const urlElement = document.getElementById('url');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            const nameValue = document.getElementById('name').value;
            const yearValue = document.getElementById('year').value;

            // Construct the query string
            const queryString = `?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;

            // Update the h3 element with the new URL
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });