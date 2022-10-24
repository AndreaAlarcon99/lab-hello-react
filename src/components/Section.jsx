function Section({noticia}) {
    const {imatgeUrl, titol, contingut} = noticia;
    return(
        <div className="seccionIndividual">
            <img src={imatgeUrl} alt="" />
            <h2>{titol}</h2>
            <p>{contingut}</p>
        </div>
    )
 }
export default Section;
