const {server} = require ("../src/app"); // esto seria el app q pide
const session = require ("supertest");
const agent = session(server); // esto es la request
const {users} = require("../src/utils/users");

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id',()=>{
        it("Responde con status: 200", async ()=>{
           await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const data = await agent.get('/rickandmorty/character/1'); // Aca podria hacer también .body
            // expect(data.body).toHaveProperty("id")
            // expect(data.body).toHaveProperty("name")
            // expect(data.body).toHaveProperty("species")
            // expect(data.body).toHaveProperty("gender")
            // expect(data.body).toHaveProperty("status")
            // expect(data.body).toHaveProperty("origin")
            // expect(data.body).toHaveProperty("image")
            const keyProps= ["id", "name", "species", "gender", "status", "origin" ,"image"]
            keyProps.forEach((key)=> expect(data.body).toHaveProperty(key))
        });
        it('Si hay un error responde con status: 500', async()=>{
            const data = await agent.get('/rickandmorty/character/900');
            expect(data.statusCode).toBe(500)
        })
    });
    describe("GET /rickandmorty/login", ()=>{
        it("Responde un objeto con access en true si el email y la password son correctas", async()=>{
            const data= (await agent.get('/rickandmorty/login?email=hallo@gmail.com&password=123987')).body
             expect(data.access).toEqual( true);
        })
        it("Responde un objeto con access en false si el email y la password no son correctas", async()=>{
            const data= await agent.get(`/rickandmorty/login?${!users}`);
            expect(data.body).toEqual({access: false});
        });
    });
    describe("POST /rickandmorty/fav",()=>{
        it("Responde con un array de objetos con el personaje enviado por body", async()=>{
            const newChar= {
                id: 901,
                name: "Anastasio",
                species: "Human",
                gender: "unknown",
                status: "Alive",
                origin: "Earth",
                image: "Anastasio.jpg"
            };
            const data= await agent.post("/rickandmorty/fav").send(newChar);
            expect(Array.isArray(data.body)).toBeTruthy();
            expect (data.body).toContainEqual(newChar);
        });
        it("Responde con un array de los objetos enviados previamente y los nuevos",async()=>{
            const newChar= {
                id: 4000,
                name: "Anastasio",
                species: "Human",
                gender: "unknown",
                status: "Alive",
                origin: "Earth",
                image: "Anastasio.jpg"
            };
            const data= await agent.post("/rickandmorty/fav").send(newChar);
            expect(data.body.length).toBe(2);
        });
    });
    describe("DELETE /rickandmorty/fav/:id",()=>{
        it("Responde con un array con los elementos ya enviados sin modificar si el ID no existe",async()=>{
            const data=(await agent.delete("/rickandmorty/fav/387239487")).body;
            expect(data.length).toBe(2);
        });
        it("Responde con un array de objetos sin aquel cuyo ID fue solicitado eliminar",async()=>{
            const data= (await agent.delete("/rickandmorty/fav/4000")).body;
            expect(data.length).toBe(1);
        });
    });
});
