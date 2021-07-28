const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#clickBtn');

const generateJokes = async () => {

    try{
        const setHeader = {
            headers : {
                Accept : 'application/json'
            }
        }

        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`)
    }

}

btn.addEventListener('click',generateJokes);
generateJokes()