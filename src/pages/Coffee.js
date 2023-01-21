import * as React from 'react'

const wineImage = {
    width: '10rem'
}
export default function Wine() {
    /*
    1. Fetch from https://api.sampleapis.com/coffee/hot
    2. Trsnsform into JSX
    */
    let items = []
    let [wineTitles, setwineTitles] = React.useState([])

    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot
        let res = await fetch('https://api.sampleapis.com/wines/reds')
        let Wines = await res.json()
        for (let i = 0; i < Wines.length; i++) {
            console.log(Wines[i].title)
            items.push(<li>
                <div style={{  width:"40rem",overflow: "hidden" }} >
                    <div style={{ width: "11rem", float: "left" }}> <img style={wineImage} src={Wines[i].image} /> </div>
                    <div >  <b>{Wines[i].wine}</b> - {Wines[i].winery} </div>
                </div>
            </li >)
        }

        setwineTitles(items)
    }, [])

    return (
        <>
            <h1>Wine</h1>
            <ul>
                {wineTitles}
            </ul>
        </>
    )
}

