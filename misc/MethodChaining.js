// This code is to demonstrate how to write objects whose methods can be chained

function Tea(type = null) {
    console.log(`Start preparing ${type ? type : ""} tea...`)

    function getLeaves() {
        console.log('fetching leaves...')
        return this
    }

    function boilWater() {
        console.log('boiling water...')
        return this
    }

    function makeTea() {
        console.log('making tea...')
        return this
    }

    function serveTea() {
        console.log(`enjoy your ${type ? type : ""} tea`)
    }
    
    return {
        getLeaves: getLeaves,
        boilWater: boilWater,
        makeTea: makeTea,
        serveTea: serveTea
    }
}

const t = new Tea("herbal")
t.getLeaves().boilWater().makeTea().serveTea()