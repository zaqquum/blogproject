const quotes = [
    {
        quote: "At 20 years of age the will reigns, at 30 the wit, at 40 the judgment.",
        author: "Benjamin Franklin"
    },{
        quote: "The first step to getting the things you want out of life is this: Decide what you want.",
        author: "Ben Stein"
    },{
        quote: "Do not do to others what angers you if done to you by others.",
        author: "Socrates"
    },{
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupery"
    },{
        quote: "A minute's success pays the failure of years.",
        author: "Robert Browning"
    },{
        quote: "Never explain--your friends do not need it and your enemies will not believe you anyway.",
        author: "Elbert Hubbard"
    },{
        quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy",
        author: "Norman Vincent Peale"
    },{
        quote: "Lord, grant that I may always desire more than I accomplish",
        author: "Michelangelo"
    },{
        quote: "Risk comes from not knowing what you're doing.",
        author: "Warren Buffett"
    },{
        quote: "Rather be dead than cool.",
        author: "Kurt Cobain"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 0~9.9까지 이지만 내림을 이용해 0~9 정수(array size만큼) 출력

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
