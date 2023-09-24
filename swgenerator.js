$(document).ready(function() {

    // Código jQuery

    $('button').on('click', () => {

        // Random num generator

    const num = Math.ceil(Math.random() * 88)

    // Properties to iterate through .each() loop

    const properties = ['height', 'mass', 'gender', 'homeworld', 'species', 'hairColor', 'eyeColor', 'skinColor', 'cybernetics', 'affiliations', 'masters', 'apprentices'];
    $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${num}.json`, function(data) {
        $('.name').text(data['name'])
        $('img').attr('src', data['image'])
        $('.height').text(`Height: ${data['height']} m`)
        $('.mass').text(`Mass: ${data['mass']} kg`)
        $('.gender').text(`Gender: ${data['gender']}`)
        $('.homeworld').text(`Homeworld: ${data['homeworld']}`)
        $('.species').text(`Species: ${data['species']}`)
        $('.hairColor').text(`Hair color: ${data['hairColor']}`)
        $('.eyeColor').text(`Eye color: ${data['eyeColor']}`)
        $('.skinColor').text(`Skin color: ${data['skinColor']}`)
        $('.cybernetics').text(`Cybernetics: ${data['cybernetics']}`)
        $('.affiliations').text(`Affiliations: ${data['affiliations']}`)
        $('.masters').text(`Masters: ${data['masters']}`)
        $('.apprentices').text(`Apprentices: ${data['apprentices']}`)

        // Loop to hide undefined values

        $.each(properties, function(index, value) {
            if (data[value] === undefined) {
                $(`.${value}`).addClass('hide')
            } else {
                $(`.${value}`).removeClass('hide') 
            }
        })

        // Class remover to show .info div

        $('.info').removeClass('hide')
    })
    }) 
})

// A intenção desse projeto foi solidificar meus conhecimentos de jQuery e também me familiarizar um pouquinho com o ato de trabalhar com APIs :).