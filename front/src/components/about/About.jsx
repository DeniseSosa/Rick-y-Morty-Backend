const About= ()=> {
    return (
        <div className="flex-column max-h-fit p-2 m-3.5 backdrop-blur-sm bg-black/50 rounded">
        <h1 className="font-bold text-5xl text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-400 to-pink-400 max-h-fit p-2 m-3.5">Welcome to my first project:</h1>
        <div className="font-semibold text-2xl text-left m-3.5 p-2 max-h-fit bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-300 to-pink-300">
        <p>
           Hello everybody! My name is Denise Sosa. I'm 29 years old and I am from a little town called Plaza Huincul
           in the province of Neuquén, Argentina.
        </p>
        <p>
          I've always loved learning languages but never thought about programming until 2023.
          All started when I said goodbye to my position as a hotel receptionist,
          and bravely embarking on the journey to embrace the challenge of becoming a full-stack developer.
        </p>
        <p>
           The path was tough, but one of my strengths is dedication and curiosity, which helped me a lot to develop my knowledge.
           A key aspect of my success lies in my ability to truly listen,
           empathizing with clients and understanding their unique needs.            
        </p>
        <p>
           During my leisure time, I enjoy hiking and walking through breathtaking landscapes. I usually visit little towns in southern Patagonia to camp there.
           There's nothing like fresh air to clear one's mind!!!
        </p>
        </div>
        <div className="flex justify-center">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2pqbWN1aThqaGt3YjM3NXVoaHZidXVydHNyNDAwbmZmcjAweWM2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LrZdHVvhqEnECYi7mS/giphy.gif" className="shadow-xl shadow-violet-500 rounded"/>
        </div>
        </div>
    )
}
export default About;