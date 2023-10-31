const dataPocemon = $(`.dataPocemon`)

const makeRequest = async (url) => {
    const pokemon = await fetch(url);
    return await pokemon.json()
}

const run = async () => {
    const response = await makeRequest(`https://pokeapi.co/api/v2/pokemon/`)
    console.log((response.results));

    response.results.forEach((result) => {

        const names = $(`<li>`).addClass(`names`).text(result.name);
        names.appendTo(dataPocemon)

        names.on('click', () => {

            let name = async () => {
                const infoData = await makeRequest(`${result.url}`)
                swal({
                    icon: `${infoData.sprites.front_default}`,
                    text: `Имя: ${infoData.name} \nТип: ${infoData.types[0].type.name} \nРост: ${infoData.height} \nВес: ${infoData.weight}`,
                });

            }

            name()
        })

    })
}

run()