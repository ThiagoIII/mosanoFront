const getTextFromSpans = e => {
    let spans = e.currentTarget.children

    let texts = []
    for (let span of spans) {
        texts.push(span.innerText)
    }
    let dataForLegend = texts.splice(0, 1)[0].split(' ')
    let texts2 = [...dataForLegend, ...texts]
    let country = texts2[2]
    let birth = texts2[3]
    return {
        firstName: dataForLegend[0],
        surname: dataForLegend[1],
        country: country,
        birthday: birth
    }
}
export default getTextFromSpans
