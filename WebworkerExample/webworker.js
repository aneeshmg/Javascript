// Recieve message from calling thread (index.html)
onmessage = (e) => {
    switch(e.data.operation) {
        case "add" : 
            let result = 0;
            for(let val of e.data.numbers)
                result += val;
            this.postMessage({
                result : result,
                operation: "add"
            })
            break;
    }
}