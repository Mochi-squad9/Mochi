const elems = document.querySelector('.autocomplete');
const searchBtn = document.getElementById("search-button");
const options = {};
const listCities = [];


window.onload = () => {

    axios.get(`/cities`)
        .then(response => {
            const cities = response.data.citiesData;
            listCities.push(cities);
            // handle success
            cities.map(element => {
                const city_state = element.name;
                options[city_state] = null;
            });
        })
        .catch(error => {
            // handle error
            console.log(error);
        })
}

document.addEventListener('input', () => {
    const instances = M.Autocomplete.init(elems, { data: options, minLength: 2, limit: 5 });
});

searchBtn.addEventListener('click', () => {

    if (elems.value.length == 0) {
        const toastHTML = '<span>Digite algo</span>';
        M.toast({ html: toastHTML })

    } else {
        const response = listCities[0].filter(item => {

            const city = item.city.toUpperCase();
            const value = elems.value.toUpperCase();

            if (item.name == elems.value || city == value) {
                return item;
            }
        });
        console.log(response);
        if (response.length !== 0) {
            window.location.href = `/escolas?id=${response[0].id}&city=${response[0].name}`
        } else {
            const toastHTML = '<span>Está cidade não existe</span>';
            M.toast({ html: toastHTML })
        }
    }

})
