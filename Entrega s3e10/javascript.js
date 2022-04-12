function positions(firstPlace, secondPlace, lastPlace) {

    let nomeDoCompetidor = [firstPlace, secondPlace, lastPlace]

    if (nomeDoCompetidor[0] == "Daniel") {
        console.log(`${nomeDoCompetidor[0]} está em 1o lugar, ${nomeDoCompetidor[1]} está em 2o lugar e ${nomeDoCompetidor[2]} está em 3o lugar. `)

    } else if (nomeDoCompetidor[1] == "Daniel") {
        console.log(`${nomeDoCompetidor[1]} está em 1o lugar, ${nomeDoCompetidor[0]} está em 2o lugar e ${nomeDoCompetidor[2]} está em 3o lugar.`)

    } else if (nomeDoCompetidor[2] == "Daniel") {
        console.log(`${nomeDoCompetidor[0]} está em 1o lugar, ${nomeDoCompetidor[2]} está em 2o lugar e ${nomeDoCompetidor[1]} está em 3o lugar.`)
    }
}


positions("Manoel", "Rafael", "Daniel")